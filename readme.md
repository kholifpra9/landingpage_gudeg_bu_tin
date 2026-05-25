# 🍛 Gudeg Bu Tin — Landing Page v4

Website landing page **Gudeg Bu Tin**, kuliner legendaris Cianjur sejak 1998.

---

## Vercel CLI
```bash
npm i -g vercel
cd gudeg-v4
vercel
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