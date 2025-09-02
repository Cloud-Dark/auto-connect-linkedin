# LinkedIn Auto Connect Script

Skrip JavaScript sederhana untuk mengotomatisasi proses mengirim undangan "Connect" di LinkedIn secara massal dengan jeda waktu yang natural.

## 🚀 Fitur

- **Auto Connect**: Secara otomatis mengklik semua tombol "Invite" atau "Connect" yang terdeteksi di halaman
- **Smart Scrolling**: Otomatis scroll ke bawah halaman untuk mencari tombol connect lebih banyak
- **Natural Delays**: Menggunakan jeda waktu yang terlihat natural (3-4 detik) untuk menghindari deteksi bot
- **Auto Loop**: Terus berjalan hingga tidak ada lagi tombol connect yang ditemukan
- **Console Logging**: Memberikan feedback real-time tentang proses yang sedang berjalan

## ⚙️ Konfigurasi

```javascript
const clickDelay = 3000; // Jeda 3 detik antar klik tombol
const scrollDelay = 4000; // Jeda 4 detik setelah klik selesai sebelum scroll
```

Anda dapat menyesuaikan nilai delay sesuai kebutuhan:
- **clickDelay**: Waktu jeda antar klik tombol (disarankan 2000-5000ms)
- **scrollDelay**: Waktu jeda sebelum scroll ke bawah (disarankan 3000-6000ms)

## 📋 Cara Penggunaan

### 1. Buka Halaman LinkedIn
Navigasi ke salah satu halaman berikut:
- **Recommended**: https://www.linkedin.com/mynetwork/grow/
- Atau halaman LinkedIn lainnya yang memiliki tombol "Connect"

### 2. Buka Developer Tools
- **Windows/Linux**: Tekan `F12` atau `Ctrl + Shift + I`
- **Mac**: Tekan `Cmd + Option + I`
- Atau klik kanan → "Inspect Element"

### 3. Buka Tab Console
- Klik tab "Console" di Developer Tools
- Pastikan tidak ada error dan console siap menerima input

### 4. Jalankan Script
- Copy seluruh kode JavaScript
- Paste ke console
- Tekan `Enter` untuk menjalankan

### 5. Monitor Proses
Script akan mulai bekerja dan menampilkan log seperti:
```
Ditemukan 10 tombol "Connect" baru. Mulai mengklik...
Tombol ke-1 berhasil diklik.
Tombol ke-2 berhasil diklik.
...
Semua tombol di layar saat ini sudah diklik. Melakukan scroll ke bawah...
```

## ⚠️ Peringatan Penting

### Gunakan dengan Bijak
- **Jangan Spam**: Jangan mengirim terlalu banyak undangan dalam waktu singkat
- **LinkedIn Limits**: LinkedIn memiliki batas harian untuk invitation (~100-200/hari)
- **Quality over Quantity**: Lebih baik connect dengan orang yang relevan
- **Risk of Restriction**: Penggunaan berlebihan dapat menyebabkan pembatasan akun

### Best Practices
- Gunakan maksimal 50-100 connect requests per hari
- Pastikan target connect relevan dengan industri/profesi Anda
- Tambahkan personal message saat mengirim invitation
- Jeda penggunaan script selama beberapa hari jika sudah mencapai limit

## 🛠️ Cara Kerja Script

1. **Detection**: Mencari semua tombol dengan `aria-label` yang dimulai dengan "Invite"
2. **Sequential Clicking**: Mengklik tombol satu per satu dengan jeda natural
3. **Auto Scroll**: Setelah selesai mengklik, scroll ke bawah untuk memuat konten baru
4. **Loop**: Ulangi proses hingga tidak ada tombol lagi atau mencapai bottom halaman

## 🔧 Troubleshooting

### Script Tidak Berjalan
- Pastikan sudah di halaman LinkedIn yang benar
- Refresh halaman dan coba lagi
- Periksa console untuk error messages

### Tombol Tidak Terdeteksi
- LinkedIn mungkin mengubah struktur HTML
- Coba pada halaman `/mynetwork/grow/` 
- Pastikan sudah login ke LinkedIn

### Proses Terlalu Cepat/Lambat
- Sesuaikan nilai `clickDelay` dan `scrollDelay`
- Untuk lebih aman, gunakan delay yang lebih besar

## 📝 Logs Console

Script memberikan feedback melalui console:
- ✅ Tombol berhasil diklik
- 📊 Jumlah tombol yang ditemukan
- 🔄 Status scrolling
- ✅ Proses selesai

## ⚖️ Disclaimer

Script ini dibuat untuk tujuan edukasi dan otomatisasi personal. Pengguna bertanggung jawab penuh atas penggunaan script ini. Pastikan untuk mematuhi Terms of Service LinkedIn dan gunakan dengan bijak.

## 🤝 Contributing

Silakan buat issue atau pull request di repository ini untuk improvement atau bug fixes.

## 📄 License

Open source - silakan gunakan dan modifikasi sesuai kebutuhan.

---

**Happy Networking! 🚀**
