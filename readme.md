# 🍛 Gudeg Bu Tin — Landing Page v4

Website landing page **Gudeg Bu Tin**, kuliner legendaris Cianjur sejak 1998.

---

## 🚀 Deploy ke Vercel

### Cara 1 — Drag & Drop (Paling Mudah)
1. Buka [vercel.com](https://vercel.com) → login
2. Klik **Add New Project** → **Upload**
3. Drag folder `gudeg-v4` ke sana
4. Klik **Deploy** — selesai

### Cara 2 — via GitHub
1. Buat repo baru di GitHub, upload semua isi folder ini
2. Di Vercel → **New Project** → pilih repo
3. Framework: **Other**, Root Directory: `/`
4. Klik **Deploy**

### Cara 3 — Vercel CLI
```bash
npm i -g vercel
cd gudeg-v4
vercel
```

---

## 📁 Struktur File

```
gudeg-v4/
├── index.html                        # Halaman utama
├── README.md                         # File ini
└── assets/
    ├── css/
    │   └── style.css                 # Semua styling
    ├── js/
    │   └── main.js                   # Logika + data menu
    └── images/
        ├── logo.png                  # Logo navbar (opsional)
        ├── warung.jpg                # Foto warung di section Tentang
        ├── icons/
        │   ├── whatsapp.png          # Icon WhatsApp
        │   ├── grabfood.png          # Icon GrabFood
        │   ├── shopeefood.png        # Icon ShopeeFood
        │   ├── instagram.png         # Icon Instagram
        │   ├── maps.png              # Icon Google Maps
        │   ├── clock.png             # Icon jam buka
        │   └── location.png          # Icon lokasi
        └── menu/
            ├── gudeg-spesial-opor.jpg
            ├── gudeg-spesial-bakar.jpg
            ├── gudeg-spesial-goreng.jpg
            ├── gudeg-biasa.jpg
            ├── gudeg-telur-dadar.jpg
            ├── gudeg-telur-bacem.jpg
            ├── nasi-pecel.jpg
            ├── nasi-tempe-penyet.jpg
            ├── nasi-ayam-kampung.jpg
            ├── tongseng-kambing.jpg
            ├── tongseng-sapi.jpg
            ├── tongseng-ayam.jpg
            ├── soto-campur.jpg
            ├── soto-pisah.jpg
            ├── ayam-kampung.jpg
            ├── telor-bacem.jpg
            ├── tahu-tempe-bacem.jpg
            ├── telor-dadar.jpg
            ├── wedhang-uwuh.jpg
            ├── susu-jahe.jpg
            ├── wedhang-jahe.jpg
            ├── es-jeruk.jpg
            └── es-teh.jpg
```

---

## 🖼️ Cara Pasang Gambar

### Logo
Buka `index.html`, cari komentar:
```html
<!-- LOGO: ganti komentar ini dengan: -->
```
Uncomment tag `<img>` di bawahnya, hapus emoji fallback-nya.

### Foto Warung
Cari komentar `<!-- FOTO WARUNG -->` di section Tentang, uncomment tag `<img>`-nya.

### Icon (WA, GrabFood, dll)
Taruh file di `assets/images/icons/`, lalu di `index.html` cari komentar tiap icon dan uncomment tag `<img>`-nya.

### Foto Menu
Taruh foto di `assets/images/menu/` sesuai nama file di tabel atas.
Jika foto belum ada, card otomatis tampil placeholder warna coklat hangat.

---

## ➕ Cara Tambah Menu Baru

Buka `assets/js/main.js`, cari `const MENU = {`, lalu tambah item baru di array `items` kategori yang sesuai:

```js
{
  img: 'assets/images/menu/nama-file.jpg', // kosongkan ('') jika belum ada foto
  emoji: '🍛',                              // tampil jika foto tidak ada
  cat: 'Nama Kategori',
  name: 'Nama Menu',
  desc: 'Deskripsi singkat menu',
  price: 'Rp 00.000',
  badge: 'Terlaris',                        // opsional, hapus jika tidak perlu
  tag: 'Label Kecil',                       // opsional
  featured: true,                           // opsional, border emas
},
```

---

## 📞 Info Kontak

| | |
|---|---|
| **Alamat** | Jl. Siliwangi, Gang Laksana 2, RT.01/RW.16 No.27, Sayang, Cianjur 43213 |
| **WhatsApp** | 0896 3996 4825 |
| **Instagram** | @lesehan_gudeg_bu_tin |
| **Jam Buka** | Setiap hari, 10.00 – 00.00 WIB |
| **Google Maps** | [Buka Maps](https://maps.app.goo.gl/K3eSfEWExVquPssC9) |

---

© 2025 Gudeg Bu Tin · Cianjur, Jawa Barat