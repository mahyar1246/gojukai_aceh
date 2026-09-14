(function () {
  "use strict";

  // ─── CONFIG ───────────────────────────────────────────────────────────────
  var MODEL_URL = "public/dogi_draco.glb";

  // ─── STATE ────────────────────────────────────────────────────────────────
  var stageReady   = false; // Three.js renderer initialized
  var modelLoaded  = false; // GLB fully parsed & added to scene
  var isLoading    = false; // download/parse in progress

  // Three.js objects (null until activated)
  var scene, camera, renderer, controls;
  var ambLight, dirLight, backLight, fillLight;
  var beltMaterials = [];
  var animFrameId = null;

  // ─── DOM REFS (resolved at init time) ─────────────────────────────────────
  var canvas, posterEl, loadingEl, hudYaw, hudBeltLabel, stageViewportEl;

  // ─────────────────────────────────────────────────────────────────────────
  // POSTER / ON-DEMAND TRIGGER
  // Called once when the #dojo3d section is first built.
  // ─────────────────────────────────────────────────────────────────────────
  function initPoster() {
    posterEl = document.getElementById("dogi3dPoster");
    if (!posterEl) return;

    var btn = document.getElementById("btn3DActivate");
    if (btn) {
      btn.addEventListener("click", function () {
        activateStage();
      });
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // ACTIVATE — called only on button click
  // ─────────────────────────────────────────────────────────────────────────
  function activateStage() {
    if (stageReady || isLoading) return;
    isLoading = true;

    // Hide poster, reveal canvas + loading indicator
    if (posterEl) {
      posterEl.style.transition = "opacity 0.35s ease";
      posterEl.style.opacity    = "0";
      setTimeout(function () { posterEl.style.display = "none"; }, 360);
    }

    canvas         = document.getElementById("dogi3dCanvas");
    loadingEl      = document.getElementById("loading3D");
    hudYaw         = document.getElementById("hudYawDegree");
    hudBeltLabel   = document.getElementById("hudBeltLabel");
    stageViewportEl = document.getElementById("stageComponentViewport");

    if (!canvas) { isLoading = false; return; }

    // Ensure loading overlay is visible
    if (loadingEl) {
      loadingEl.classList.remove("hidden");
      setLoadingText("Mempersiapkan Three.js...");
    }

    // Defer heavy init to next frame so the poster fade-out renders first
    requestAnimationFrame(function () {
      setTimeout(function () {
        try {
          buildScene();
          load3DModel();
        } catch (err) {
          console.error("[3D Stage] Activation error:", err);
          showLoadingError("Gagal menginisialisasi viewer 3D.");
          isLoading = false;
        }
      }, 50);
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // BUILD SCENE — Three.js setup (runs once on first click)
  // ─────────────────────────────────────────────────────────────────────────
  function buildScene() {
    var THREE = window.THREE;
    if (!THREE) throw new Error("Three.js not found on window.THREE");

    var isMobile = window.matchMedia("(max-width: 1024px), (pointer: coarse)").matches;
    var isLowEnd = isMobile && (navigator.hardwareConcurrency || 4) <= 2;

    // Scene & Camera
    scene  = new THREE.Scene();
    var aspect = (canvas.clientWidth && canvas.clientHeight)
      ? (canvas.clientWidth / canvas.clientHeight) : (16 / 9);
    camera = new THREE.PerspectiveCamera(34, aspect, 0.1, 100);
    camera.position.set(0, 1.25, 3.6);

    // Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: !isMobile,
      alpha: true,
      powerPreference: isMobile ? "default" : "high-performance",
    });
    var dpr = isLowEnd ? 1 : (isMobile ? Math.min(window.devicePixelRatio || 1, 1.5) : Math.min(window.devicePixelRatio || 1, 2));
    renderer.setPixelRatio(dpr);
    if (canvas.clientWidth && canvas.clientHeight) {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    }

    // Lighting
    ambLight  = new THREE.AmbientLight(0xffffff, 1.4);
    dirLight  = new THREE.DirectionalLight(0xffffff, 1.7);
    backLight = new THREE.DirectionalLight(0xd4af37, 0.7);
    fillLight = new THREE.DirectionalLight(0xd32f2f, 0.35);
    dirLight.position.set(3, 5, 4);
    backLight.position.set(-3, 3, -3);
    fillLight.position.set(0, -2, 2);
    scene.add(ambLight, dirLight, backLight, fillLight);

    // Pedestal
    var pedestalGeo = new THREE.CylinderGeometry(1.2, 1.26, 0.06, 64);
    var pedestal = new THREE.Mesh(pedestalGeo, new THREE.MeshStandardMaterial({
      color: 0x141418, roughness: 0.7, metalness: 0.25,
    }));
    pedestal.position.set(0, 0.03, 0);
    scene.add(pedestal);

    // Gold accent ring
    var ring = new THREE.Mesh(
      new THREE.RingGeometry(1.16, 1.22, 64),
      new THREE.MeshBasicMaterial({ color: 0xd4af37, side: THREE.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(0, 0.062, 0);
    scene.add(ring);

    // Mouse-reactive lighting (desktop only)
    if (stageViewportEl && !isMobile) {
      stageViewportEl.addEventListener("mousemove", function (e) {
        var rect = stageViewportEl.getBoundingClientRect();
        var nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        var ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        if (typeof gsap !== "undefined") {
          gsap.to(dirLight.position, { x: nx * 5, y: 5 + ny * 2.5, duration: 0.7, ease: "power2.out" });
        }
      });
    }

    // OrbitControls
    var OrbitControls = THREE.OrbitControls;
    if (OrbitControls) {
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping  = true;
      controls.dampingFactor  = 0.06;
      controls.enablePan      = false;
      controls.minDistance    = 2.0;
      controls.maxDistance    = 5.5;
      controls.target.set(0, 1.05, 0);
      controls.autoRotate      = true;
      controls.autoRotateSpeed = 1.0;
      if (isMobile) { controls.enableZoom = false; controls.rotateSpeed = 0.6; }
    }

    // Start render loop
    var targetFPS = isMobile ? 30 : 60;
    var frameInterval = 1000 / targetFPS;
    var lastTime = 0;

    function animate(ts) {
      animFrameId = requestAnimationFrame(animate);
      if (isMobile) {
        var delta = ts - lastTime;
        if (delta < frameInterval) return;
        lastTime = ts - (delta % frameInterval);
      }
      checkResize();
      if (controls) {
        controls.update();
        if (hudYaw) {
          hudYaw.textContent = Math.round(
            ((controls.getAzimuthalAngle() * 180) / Math.PI + 360) % 360
          ) + "°";
        }
      }
      renderer.render(scene, camera);
    }
    animate(0);

    // Belt color API
    window.update3DBeltColor = function (hex, beltName) {
      window.__current3DBeltHex = hex;
      beltMaterials.forEach(function (m) { if (m && m.color) m.color.set(hex); });
      if (hudBeltLabel && beltName) hudBeltLabel.textContent = beltName.toUpperCase();
    };

    // Lighting preset buttons
    document.querySelectorAll(".preset-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".preset-btn").forEach(function (b) { b.classList.remove("is-active"); });
        this.classList.add("is-active");
        var p = this.getAttribute("data-preset");
        if      (p === "studio")   { ambLight.intensity = 1.4; dirLight.color.setHex(0xffffff); dirLight.intensity = 1.7; backLight.color.setHex(0xd4af37); }
        else if (p === "sunset")   { ambLight.intensity = 0.9; dirLight.color.setHex(0xffaa55); dirLight.intensity = 2.0; backLight.color.setHex(0xff4422); }
        else if (p === "dramatic") { ambLight.intensity = 0.4; dirLight.color.setHex(0xffffff); dirLight.intensity = 2.6; backLight.color.setHex(0xd4af37); }
      });
    });

    // Camera reset & auto-rotate buttons
    var resetBtn = document.getElementById("resetCamBtn");
    if (resetBtn && controls) {
      resetBtn.addEventListener("click", function () {
        camera.position.set(0, 1.25, 3.6);
        controls.target.set(0, 1.05, 0);
      });
    }
    var rotateBtn = document.getElementById("toggleRotateBtn");
    if (rotateBtn && controls) {
      rotateBtn.addEventListener("click", function () {
        controls.autoRotate = !controls.autoRotate;
        this.classList.toggle("is-on", controls.autoRotate);
      });
    }

    stageReady = true;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RESIZE HANDLER
  // ─────────────────────────────────────────────────────────────────────────
  function checkResize() {
    if (!canvas || !renderer || !camera) return;
    var w = canvas.clientWidth, h = canvas.clientHeight;
    if (w > 0 && h > 0) {
      var tw = Math.floor(w * renderer.getPixelRatio());
      var th = Math.floor(h * renderer.getPixelRatio());
      if (canvas.width !== tw || canvas.height !== th) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      }
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // MODEL LOADING
  // ─────────────────────────────────────────────────────────────────────────
  function buildLoader() {
    var THREE  = window.THREE;
    var loader = new THREE.GLTFLoader();
    if (THREE.DRACOLoader) {
      try {
        var draco = new THREE.DRACOLoader();
        draco.setDecoderPath("assets/js/libs/draco/");
        draco.setDecoderConfig({ type: "js" });
        loader.setDRACOLoader(draco);
      } catch (e) { console.warn("DRACOLoader init warning:", e); }
    }
    return loader;
  }

  function setLoadingText(text) {
    if (!loadingEl) return;
    var el = loadingEl.querySelector(".eyebrow");
    if (el) el.textContent = text;
  }

  function showLoadingError(msg) {
    if (!loadingEl) return;
    loadingEl.classList.remove("hidden");
    loadingEl.innerHTML =
      '<div style="text-align:center;padding:22px 18px;background:rgba(18,18,24,0.94);border-radius:14px;border:1px solid rgba(212,175,55,0.35);max-width:320px;margin:0 auto;box-shadow:0 12px 36px rgba(0,0,0,0.6);">' +
      '<div style="color:var(--gold);font-size:26px;margin-bottom:6px;">⛩️</div>' +
      '<p style="color:var(--gold);font-family:\'IBM Plex Mono\',monospace;font-size:12px;font-weight:600;margin-bottom:6px;letter-spacing:0.05em;">3D MODEL DOJO</p>' +
      '<p style="color:var(--fg-dim);font-size:11px;margin-bottom:14px;line-height:1.4;">' + (msg || "Gagal memuat model. Silakan coba lagi.") + '</p>' +
      '<button class="cta cta-gold" id="btnRetry3DLoad" style="font-size:11px;padding:8px 18px;cursor:pointer;">Muat Ulang</button>' +
      '</div>';
    var retryBtn = document.getElementById("btnRetry3DLoad");
    if (retryBtn) retryBtn.addEventListener("click", retryLoad);
  }

  function setupModel(gltf) {
    var THREE = window.THREE;
    var model = gltf.scene;
    var box   = new THREE.Box3().setFromObject(model);
    var size  = box.getSize(new THREE.Vector3());
    var center = box.getCenter(new THREE.Vector3());
    var scale = 2.0 / (Math.max(size.x, size.y, size.z) || 1);
    model.scale.setScalar(scale);
    box.setFromObject(model);
    box.getCenter(center);
    model.position.x -= center.x;
    model.position.z -= center.z;
    model.position.y -= (center.y - 1.05);
    scene.add(model);

    model.traverse(function (child) {
      if (child.isMesh && child.material) {
        var mn = (child.material.name || "").toLowerCase();
        var nn = (child.name || "").toLowerCase();
        if (mn.includes("belt") || mn.includes("sabuk") || nn.includes("belt") || mn.includes("biru")) {
          child.material = child.material.clone();
          child.material.roughness = 0.5;
          beltMaterials.push(child.material);
        }
      }
    });

    window.update3DBeltColor(window.__current3DBeltHex || "#FFFFFF");
    if (loadingEl) loadingEl.classList.add("hidden");
    modelLoaded = true;
    isLoading   = false;
  }

  function load3DModel() {
    if (modelLoaded) return;
    var THREE = window.THREE;
    if (!THREE || !THREE.GLTFLoader) {
      showLoadingError("Three.js atau GLTFLoader belum tersedia.");
      isLoading = false;
      return;
    }
    setLoadingText("Memuat 3D Dogi Model (0%)...");

    var loader = buildLoader();
    loader.load(
      MODEL_URL,
      function (gltf) {
        setLoadingText("Menyiapkan Tampilan 3D (100%)...");
        setupModel(gltf);
      },
      function (xhr) {
        if (xhr.total > 0) {
          var pct = Math.min(100, Math.max(0, Math.round((xhr.loaded / xhr.total) * 100)));
          setLoadingText(pct >= 100 ? "Menyiapkan & Merender 3D (100%)..." : "Memuat 3D Dogi (" + pct + "%)...");
        } else if (xhr.loaded > 0) {
          var mb = (xhr.loaded / (1024 * 1024)).toFixed(1);
          setLoadingText("Memuat 3D Dogi (" + mb + " MB)...");
        }
      },
      function (err) {
        console.error("[3D Stage] Load error:", err);
        showLoadingError("Gagal memuat file 3D. Silakan periksa koneksi internet.");
        isLoading = false;
      }
    );
  }

  function retryLoad() {
    modelLoaded = false;
    isLoading   = false;
    if (loadingEl) {
      loadingEl.classList.remove("hidden");
      loadingEl.innerHTML = '<div class="spinner-3d"></div><span class="eyebrow">Memuat 3D Dogi Model (0%)...</span>';
    }
    load3DModel();
  }
  window.retryLoad3DModel = retryLoad;

  // ─────────────────────────────────────────────────────────────────────────
  // BOOTSTRAP — wire up poster button on DOMContentLoaded
  // ─────────────────────────────────────────────────────────────────────────
  function bootstrap() {
    initPoster();
    // Expose for external callers (e.g. nav "3D Dogi" link direct scroll)
    window.activate3DStage = activateStage;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }

})();
