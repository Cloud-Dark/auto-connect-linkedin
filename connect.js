// Atur jeda waktu antar aksi (dalam milidetik)
// Jeda 2-5 detik akan terlihat lebih natural
const clickDelay = 3000; // Jeda 3 detik
const scrollDelay = 4000; // Jeda 4 detik setelah klik selesai

// Fungsi utama untuk mengklik dan scroll
function autoConnectAndScroll() {
    const connectButtons = document.querySelectorAll('button[aria-label^="Invite"]');
    
    // Periksa apakah masih ada tombol yang ditemukan
    if (connectButtons.length > 0) {
        console.log(`Ditemukan ${connectButtons.length} tombol "Connect" baru. Mulai mengklik...`);
        
        // Iterasi dan klik setiap tombol dengan jeda
        let i = 0;
        const clickInterval = setInterval(() => {
            if (i < connectButtons.length) {
                connectButtons[i].click();
                console.log(`Tombol ke-${i + 1} berhasil diklik.`);
                i++;
            } else {
                // Hentikan interval klik setelah semua tombol diklik
                clearInterval(clickInterval);
                
                // Lakukan scroll setelah jeda
                console.log('Semua tombol di layar saat ini sudah diklik. Melakukan scroll ke bawah...');
                setTimeout(() => {
                    window.scrollTo(0, document.body.scrollHeight);
                    
                    // Panggil fungsi lagi untuk mencari tombol baru
                    console.log('Selesai scroll. Mencari tombol "Connect" berikutnya...');
                    setTimeout(autoConnectAndScroll, 2000); // Jeda 2 detik sebelum perulangan berikutnya
                }, scrollDelay);
            }
        }, clickDelay);

    } else {
        // Jika tidak ada tombol yang ditemukan, periksa apakah sudah di paling bawah
        const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 10;
        
        if (isAtBottom) {
            console.log('Tidak ada lagi tombol "Connect" dan sudah mencapai dasar halaman. Proses selesai.');
        } else {
            console.log('Tidak ada tombol "Connect" di layar. Mencoba scroll untuk mencari yang lain.');
            window.scrollTo(0, document.body.scrollHeight);
            
            // Panggil fungsi lagi setelah jeda
            setTimeout(autoConnectAndScroll, 2000);
        }
    }
}

// Mulai proses
autoConnectAndScroll();
