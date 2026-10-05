# PSJ — Public Speaking & Journalism Website

Prototype website modern, modular, dan responsif untuk organisasi **Public Speaking & Journalism (PSJ)** yang dibangun menggunakan **React.js** dan **Vite** dengan pure CSS.

---

## 🚀 Fitur Utama

- **Hero Section**: Tampilan pembuka editorial dengan entrance animation, tipografi seimbang, dan badge statistik organisasi.
- **Announcement Bar**: Notifikasi pembukaan pendaftaran terkini.
- **Programs Section (Tab Switcher)**: Panel program interaktif (The Orator & The Reporter) yang dibangun dengan arsitektur **CSS Grid Stack** untuk transisi mulus tanpa *layout shift*.
- **Features (Split Panel)**: 6 pilar keahlian komunikasi dengan interaksi visual *sticky*.
- **Showcase Section**: Banner storytelling premium dengan visual minimalis.
- **Community Grid**: Galeri alumni dan anggota terstruktur dengan efek hover interaktif.
- **CTA & Navigation Cards**: Kartu aksi cepat menuju Workshop, Mentorship, Events, dan Resources.
- **Footer**: Navigasi lengkap, form newsletter, dan tautan sosial media.
- **Responsif Penuh**: Mendukung perangkat Desktop, Laptop, Tablet, hingga Smartphone.

---

## 📂 Struktur Proyek

```text
├── public/
│   └── favicon.svg           # Favicon logo PSJ
├── src/
│   ├── components/
│   │   ├── 1.JPG             # Aset visual hero
│   │   ├── AnnouncementBar.jsx
│   │   ├── Community.jsx
│   │   ├── CTA.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Programs.jsx
│   │   └── Showcase.jsx
│   ├── App.css               # Desain sistem & styling lengkap (CSS Variables)
│   ├── App.jsx               # Komponen utama
│   └── main.jsx              # Entry point React
├── index.html                # Dokumen HTML utama
├── package.json              # Konfigurasi dependensi
├── vite.config.js            # Konfigurasi Vite
├── .gitignore                # File filter Git
└── README.md                 # Dokumentasi proyek
```

---

## 🛠️ Panduan Menjalankan Proyek

### 1. Prasyarat
Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas) dan **npm**.

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka browser pada alamat yang ditampilkan di terminal (biasanya `http://localhost:5173/`).

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build akan tersimpan di folder `dist/`.

### 5. Preview Hasil Build
```bash
npm run preview
```

---

## 📦 Panduan Commit ke Git Repository

Jika Anda ingin mengunggah ke GitHub / GitLab:

```bash
# 1. Inisialisasi git (jika belum)
git init

# 2. Tambahkan semua file yang diperlukan
git add .

# 3. Buat commit pertama
git commit -m "feat: initial commit for PSJ website prototype"

# 4. Hubungkan ke remote repo Anda (ganti URL dengan repo Anda)
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 5. Push ke GitHub
git push -u origin main
```
