# Panduan Download Ikon untuk Folder public/icons/

Berikut adalah daftar ikon yang perlu diunduh dan dimasukkan ke folder `public/icons/`:

## Ikon yang Diperlukan (Format SVG disarankan)

### Navigasi & UI
1. **cursor.svg** - Ikon kursor kustom untuk tombol toggle custom cursor
2. **moon.svg** - Ikon bulan untuk mode gelap (theme toggle)
3. **sun.svg** - Ikon matahari untuk mode terang (theme toggle)
4. **volume-high.svg** - Ikon volume aktif (audio toggle)
5. **volume-xmark.svg** - Ikon volume nonaktif (audio toggle)

### Media & Sosial
6. **whatsapp.svg** - Ikon WhatsApp (brand resmi)
7. **instagram.svg** - Ikon Instagram (brand resmi)
8. **youtube.svg** - Ikon YouTube (brand resmi)
9. **facebook.svg** - Ikon Facebook (brand resmi)
10. **google.svg** - Ikon Google (untuk Google Calendar)

### Karate & Dojo
11. **hand-fist.svg** - Ikon tangan mengepal (untuk sumpah/karate)
12. **ticket.svg** - Ikon tiket (untuk pass gratis)
13. **ticket-simple.svg** - Ikon tiket sederhana (untuk voucher)
14. **certificate.svg** - Ikon sertifikat (untuk voucher)
15. **award.svg** - Ikon penghargaan (untuk hasil kuis)
16. **shield-halved.svg** - Ikon perisai (untuk bela diri)
17. **trophy.svg** - Ikon piala (untuk prestasi)
18. **heart-pulse.svg** - Ikon jantung (untuk karakter)
19. **child.svg** - Ikon anak (untuk kuis usia dini)
20. **user-graduate.svg** - Ikon lulusan (untuk kuis remaja)
21. **user-shield.svg** - Ikon pengguna dengan perisai (untuk kuis dewasa)
22. **seedling.svg** - Ikon tanaman (untuk pemula)
23. **person-falling-burst.svg** - Ikon orang jatuh (untuk beladiri lain)

### Navigasi & Time
24. **clock-rotate-left.svg** - Ikon jam berputar (untuk sejarah)
25. **calendar-plus.svg** - Ikon kalender tambah (untuk reminder)
26. **calendar-days.svg** - Ikon kalender hari (untuk ICS)
27. **cube.svg** - Ikon kubus (untuk 3D Dogi)
28. **pen-to-square.svg** - Ikon pena ke kotak (untuk daftar)
29. **location-dot.svg** - Ikon lokasi (untuk lokasi dojo)
30. **clock.svg** - Ikon jam (untuk countdown)
31. **arrow-up.svg** - Ikon panah ke atas (untuk back to top)

### Controls & Actions
32. **check.svg** - Ikon centang (untuk status klaim)
33. **check-circle.svg** - Ikon centang dalam lingkaran (untuk voucher aktif)
34. **check-double.svg** - Ikon centang ganda (untuk WhatsApp check)
35. **xmark.svg** - Ikon silang (untuk close lightbox)
36. **chevron-down.svg** - Ikon panah ke bawah (untuk FAQ)
37. **chevron-left.svg** - Ikon panah ke kiri (untuk lightbox prev)
38. **chevron-right.svg** - Ikon panah ke kanan (untuk lightbox next)
39. **arrows-rotate.svg** - Ikon panah berputar (untuk reset kamera)
40. **sync.svg** - Ikon sinkronisasi (untuk auto rotate)
41. **rotate-left.svg** - Ikon putar kiri (untuk ulangi kuis)
42. **bolt.svg** - Ikon petir (untuk klaim sekarang)
43. **hand-pointer.svg** - Ikon tangan penunjuk (untuk instruksi 3D)
44. **eye.svg** - Ikon mata (untuk pratinjau)

### Files & Documents
45. **file-pdf.svg** - Ikon file PDF (untuk download brosur)

## Cara Download Ikon

### Opsi 1: FontAwesome (Recommended)
Kunjungi [FontAwesome Free](https://fontawesome.com/search) dan download ikon dalam format SVG:
- Cari nama ikon di atas
- Download sebagai SVG
- Simpan ke folder `public/icons/` dengan nama sesuai daftar

### Opsi 2: Heroicons
Kunjungi [Heroicons](https://heroicons.com/) untuk ikon SVG gratis:
- Pilih ikon yang sesuai dengan fungsi
- Download sebagai SVG
- Rename sesuai daftar di atas

### Opsi 3: Ikon Kustom
Jika ingin menggunakan ikon kustom:
- Buat ikon SVG dengan desain yang sesuai
- Pastikan ukuran sekitar 16x16 atau 24x24 pixel
- Simpan dengan nama sesuai daftar di atas

## Catatan Penting

1. **Format**: Gunakan format SVG untuk kualitas terbaik di semua ukuran
2. **Ukuran**: Idealnya 16x16 atau 24x24 pixel untuk UI
3. **Warna**: Ikon SVG harus dalam format monokrom (hitam/putih) agar warna bisa diatur via CSS
4. **Naming**: Pastikan nama file sesuai persis dengan daftar di atas
5. **Path**: Semua ikon harus disimpan di `public/icons/`

## Contoh Implementasi

Setelah ikon diunduh, mereka akan dipanggil di HTML seperti ini:

```html
<img src="public/icons/whatsapp.svg" alt="WhatsApp" style="width:14px;height:14px">
```

## Timeline Implementasi

1. Download semua ikon dari daftar di atas
2. Simpan ke folder `public/icons/`
3. Verifikasi bahwa semua ikon dapat diakses
4. Test website untuk memastikan ikon tampil dengan benar