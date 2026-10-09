# Panduan Deployment POS Kedai di VPS (aaPanel)

Dokumentasi resmi tata cara deployment aplikasi POS Kedai (Next.js 13.5) di Server/VPS berbasis aaPanel.

---

## Syarat & Prasyarat (Prerequisites)

Sebelum memulai proses deployment, pastikan VPS dan aaPanel Anda telah memenuhi persyaratan berikut:

1. Server / VPS:
   - Sistem Operasi: Ubuntu 20.04/22.04 LTS, Debian 11/12, atau CentOS 7/8/9.
   - Akses Root / Sudo.
   - RAM minimal 1 GB (Direkomendasikan 2 GB+ untuk proses npm run build Next.js).
2. Software Terinstall di aaPanel:
   - Nginx (Versi 1.20+ via aaPanel App Store).
   - Node.js Manager / Node.js (Versi 18.x atau 20.x LTS).
   - PM2 Manager (Opsional jika menggunakan Deployment CLI PM2).
   - Git (Dapat diinstall via terminal VPS: apt install git / yum install git).
3. Domain & Network:
   - Domain atau Subdomain yang sudah di-pointing A Record ke IP Public VPS.
   - Port Firewall aaPanel & Cloud Provider sudah dibuka (misal: Port 80, 443, dan 3001).

---

## Persiapan Project di VPS

1. Masuk ke Terminal VPS (via SSH atau Terminal aaPanel).
2. Masuk ke Direktori Web:
   ```bash
   cd /www/wwwroot
   ```
3. Clone Repository Project:
   ```bash
   git clone <URL_REPOSITORY_ANDA>.git pos-kedai
   cd pos-kedai
   ```
4. Install Dependensi & Build Project:
   ```bash
   # Install dependensi
   npm install

   # Test Build Next.js
   npm run build
   ```

---

## Metode Deployment 1: Menggunakan Node project Manager (GUI aaPanel)

Metode ini disukai jika Anda ingin mengelola proses Node.js langsung dari tampilan grafik (GUI) aaPanel.

### Langkah-Langkah:
1. Buka aaPanel Dashboard -> Masuk ke menu Website -> Klik tab Node project.
2. Klik tombol Add Node project.
3. Isi form konfigurasi sebagai berikut:
   - Path: `/www/wwwroot/pos-kedai`
   - Project Name: `pos-kedai`
   - Run Version: Pilih Node.js versi 18 atau 20 (sesuai Node Version Manager di aaPanel).
   - Run User: `www` (atau `root`).
   - Run Opt: Select script -> pilih `start` (atau ketik command: `start`).
   - Code Port: `3001` (sesuai port default di package.json).
   - Domain name: Isi dengan domain/subdomain Anda (contoh: `pos.domainanda.com`).
4. Klik Submit.
5. aaPanel akan otomatis mengkonfigurasi Reverse Proxy Nginx, menginstall PM2 internal, dan menjalankan service pada port 3001.

---

## Metode Deployment 2: Menggunakan PM2 (CLI) + Nginx Reverse Proxy (aaPanel)

Metode ini sangat fleksibel dan direkomendasikan jika Anda lebih familiar dengan Command Line / PM2 secara langsung.

### Langkah 1: Jalankan App dengan PM2 via Terminal
1. Buka Terminal VPS dan masuk ke folder project:
   ```bash
   cd /www/wwwroot/pos-kedai
   ```
2. Install PM2 secara global (jika belum terinstall):
   ```bash
   npm install -g pm2
   ```
3. Jalankan aplikasi menggunakan PM2:
   ```bash
   pm2 start npm --name "pos-kedai" -- start
   ```
4. Simpan status PM2 agar otomatis jalan saat VPS restart:
   ```bash
   pm2 save
   pm2 startup
   ```
5. Verifikasi bahwa aplikasi sudah berjalan di port 3001:
   ```bash
   pm2 status
   curl http://localhost:3001
   ```

### Langkah 2: Tambah Site & Setup Reverse Proxy di aaPanel
1. Buka aaPanel Dashboard -> Menu Website -> HTML/PHP project -> Klik Add site.
2. Masukkan Domain name (contoh: `pos.domainanda.com`).
3. Pada opsi PHP version, pilih Pure Static (karena request PHP tidak dibutuhkan).
4. Klik Submit.
5. Setelah site berhasil dibuat, klik nama domain tersebut di daftar website untuk membuka Site Settings.
6. Masuk ke tab Reverse Proxy -> Klik Add reverse proxy.
7. Isi konfigurasi Reverse Proxy:
   - Proxy Name: `pos-kedai-proxy`
   - Target URL: `http://127.0.0.1:3001`
   - Sent Domain: `$host`
8. Klik Save.

---

## Konfigurasi SSL (HTTPS) Let's Encrypt

1. Buka Site Settings untuk domain Anda di menu Website aaPanel.
2. Masuk ke tab SSL.
3. Pilih tab Let's Encrypt.
4. Centang nama domain / subdomain Anda.
5. Klik Apply.
6. Setelah SSL berhasil terpasang, aktifkan toggle Force HTTPS di pojok kanan atas menu SSL tersebut.

---

## Maintenance & Troubleshooting

### 1. Update / Deploy Ulang Aplikasi
Setiap ada perubahan kode pada repository, jalankan perintah berikut di terminal VPS:
```bash
cd /www/wwwroot/pos-kedai
git pull origin main
npm install
npm run build
pm2 restart pos-kedai   # Jika menggunakan PM2
```
*(Jika menggunakan Node project Manager GUI aaPanel, cukup klik tombol Restart pada baris project pos-kedai).*

### 2. Port Sudah Digunakan (EADDRINUSE: 3001)
Jika terjadi konflik port 3001, cek proses yang berjalan:
```bash
lsof -i :3001
# atau
netstat -tulpn | grep 3001
```
Anda bisa mengubah port default pada package.json di bagian script start:
```json
"start": "next start -p 3002"
```
Jangan lupa untuk menyesuaikan Code Port / Target URL Reverse Proxy ke port baru tersebut (`http://127.0.0.1:3002`).

### 3. Kendala Out of Memory saat npm run build
Jika VPS Anda memiliki RAM 1 GB, npm run build Next.js mungkin gagal karena terbentur limit memori. Anda dapat membuat Swap File di VPS via aaPanel:
1. Buka aaPanel -> App Store.
2. Cari dan buka Linux Tool.
3. Masuk ke tab Swap / virtual memory, tambahkan Swap sebesar 2048 MB (2 GB).
