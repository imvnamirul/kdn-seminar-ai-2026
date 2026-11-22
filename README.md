# SEMINAR AI KDN 2026 — FULL WEBSITE PACKAGE

Portal seminar statik, responsif (desktop / iPad / tablet / telefon), tanpa server,
akaun, framework atau CDN. Sesuai untuk GitHub Pages.

## Start pantas

1. Buka `index.html` dalam browser untuk semak reka bentuk dan kandungan.
2. Buka `data.js` (Notepad, VS Code atau editor teks) untuk tukar butiran seminar.
3. Upload **semua** kandungan folder ini ke root repository GitHub Pages.
4. GitHub > Settings > Pages > Deploy from branch > `main` / `(root)`.
5. Selepas laman diterbitkan, baru buat QR untuk URL laman tersebut.

## PERINGATAN — tarikh seminar

Permintaan terkini menyebut Isnin, **23 November 2026**. Namun draf surat jemputan
sebelumnya bertarikh Khamis, **26 November 2026**. Website ini menggunakan tarikh
23 November menurut arahan terkini; atur cara 8:00 pagi–1:00 petang diambil daripada
**draf 26 November** hanya sebagai asas template, BUKAN pengesahan agenda 23 Nov.
**Semak tarikh, susunan atur cara, tempat, dan nama perasmi sebelum menerbitkan.**

## Edit semua perkara di `data.js`

- `date`: tarikh `YYYY-MM-DD`, contoh `2026-11-23`
- `startTime`, `endTime`: masa `HH:MM` format 24 jam
- `venue`, `room`, `address`, `mapUrl`: isi bila tempat disahkan
- `objectives`: empat objektif; tambah/buang sesuka hati
- `agenda`: masa, tajuk, jenis, keterangan dan penceramah
- `sessions`: tiga kad sesi (nama, profil, foto, topik dan tag)
- `resources`: PDF, bahan atau link
- `contacts`: nama dan emel urus setia
- `registration.enabled`: `false` sehingga link pendaftaran disahkan untuk acara ini

### Contoh menambah PDF

Letakkan dokumen di `bahan/slaid-sesi-1.pdf` dan tukar `resources: []` menjadi:

```javascript
resources: [
  { type:'pdf', title:'Slaid Sesi 1', note:'Bahan perkongsian', url:'bahan/slaid-sesi-1.pdf' }
],
```

### Contoh menambah foto penceramah

Letakkan `assets/penceramah-1.jpg` dan pada sesi 1 isi
`photo:'assets/penceramah-1.jpg'`, `speaker:'Nama Penceramah'`, serta `bio:'...'`.
Butang anak panah pada kad akan membuka popup. Popup boleh ditutup dengan `×`,
klik latar gelap atau kekunci Escape. Tiada top bar yang menghalang popup.

### Tempat seminar dan kemudahan

Lokasi seminar: **Silk Hall, Level 1, Zenith Hotel Putrajaya**. Kad lokasi turut memaparkan **The Dining Room (Level LG)** dan **Surau (Level 1)**, menggunakan gambar rujukan. Tiada kad Masjid Putra. Semua gambar boleh dibuka dalam paparan penuh.

### Pendaftaran

Link daripada surat jemputan lama telah disimpan dalam `data.js` tetapi
`enabled:false`, kerana tarikh tutup 16 Nov 2026 sudah lepas dan kesesuaian link
untuk acara 23 Nov belum disahkan. Tukar ke pautan baharu dan `enabled:true`.

## Struktur fail

```
index.html                Halaman utama
styles.css                Reka bentuk (carbon / chalk / citrus)
app.js                    Fungsi interaktif
 data.js                   EDIT MAKLUMAT PROGRAM DI SINI
assets/jata-negara.webp   Jata Negara daripada aset portal kursus terdahulu
assets/favicon.svg        Ikon tab
assets/kad-perkongsian.png Kad preview media sosial
bahan/README.txt          Panduan memasukkan PDF
README.md                 Manual ini
```

## Fungsi yang disertakan

- Mobile / iPad / tablet menu hamburger on demand (bukan permanent sidebar)
- Menu drawer berasingan, butang `×` sentiasa boleh ditekan
- Sticky desktop header, scroll progress, back-to-top
- Jadual acara dengan dua filter dan cetakan atur cara
- Tiga kad sesi dengan modal profil yang scroll sendiri
- Senarai bahan dengan tapisan, carian, pembuka PDF / link
- Kad lokasi bergambar, jadual Waktu Solat (23 November 2026, JAKIM WLY01), emel urus setia, link telefon dan peta
- Responsive + support reduced motion + keyboard navigation
- Tanpa font/script CDN, jadi boleh berjalan daripada fail tempatan

## SEBELUM BAGI PESERTA

1. Semak tarikh sebenar (23 atau 26 Nov).
2. Sahkan venue, susunan jadual, penceramah/perasmi dan pautan daftar.
3. Muat naik bahan yang dibenarkan sahaja (jangan upload fail terperingkat).
4. Preview pada telefon/iPad dan uji kesemua link.
5. Publish, kemudian hasilkan QR untuk URL sebenar.

Direka sebagai portal seminar baharu, bukan salinan skin kursus AI sebelum ini.
