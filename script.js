document.addEventListener('DOMContentLoaded', () => {
    // DATA UTAMA APLIKASI
    // Semua informasi, termasuk link gambar, sekarang ada di sini.
    const ulosData = {
        UB1: {
            name: "Ulos Ragi Hidup",
            usageCategory: "pernikahan duka-cita",
            mainImage: "https://drive.google.com/uc?id=1zUrjPlUVvS_EnnVJ125wUPxigOte7pAE",
            galleryImages: [
                "https://drive.google.com/uc?id=1zUrjPlUVvS_EnnVJ125wUPxigOte7pAE",
                // "images/ragi-hidup-2.jpg", // <-- Ganti dengan link gambar Anda
                // "images/ragi-hidup-3.jpg"  // <-- Ganti dengan link gambar Anda
            ],
            description: "Ulos Ragi Hidup melambangkan kehidupan dan kebahagian dalam keturunan dengan umur yang panjang (saur matua).",
            price: "Rp 300.000 - Rp 2.800.000",
            usageDetail: "Digunakan sebagai hadiah atau kenangan pada orang yang menikah, sebagai busana adat pada acara kematian. Ulos ini melambangkan doa untuk kebahagiaan pada suatu acara adat."
        },
        UB2: {
            name: "Ulos Ragi Hotang",
            usageCategory: "pernikahan duka-cita",
            mainImage: "https://drive.google.com/uc?id=18YMPrU5mR46UIMcbMpcOxh4Teld70WQL",
            galleryImages: [
                "https://drive.google.com/uc?id=18YMPrU5mR46UIMcbMpcOxh4Teld70WQL",
            ],
            description: "Sering juga disebut sebagai Ulos Hela. Pemberian Ulos Hela memiliki makna bahwa orang tua pengantin perempuan telah menyetujui putrinya dipersunting oleh laki-laki yang disebut sebagai 'Hela' (menantu).",
            price: "Rp 150.000 - Rp 500.000",
            usageDetail: "Digunakan sebagai hadiah pada orang yang menikah (khususnya untuk menantu laki-laki) dan pada acara kematian oleh saudara kandung almarhum."
        },
        UB3: {
            name: "Ulos Sibolang",
            usageCategory: "duka-cita kelahiran",
            mainImage: "https://drive.google.com/uc?id=191ipSaHkNdV_TLUQiZ9tynCETywcta2y",
            galleryImages: [
                "https://drive.google.com/uc?id=191ipSaHkNdV_TLUQiZ9tynCETywcta2y",
            ],
            description: "Menjadi simbol duka cita terutama di momen kematian orang dewasa yang belum memiliki cucu, dan duda serta janda yang ditinggal mati pasangannya.",
            price: "Rp 420.000 - Rp 2.100.000",
            usageDetail: "Pada acara kematian untuk orang yang belum memiliki cucu dan pada acara kelahiran sebagai simbol harapan."
        },
        // ... Tambahkan data untuk Ulos lainnya dengan format yang sama ...
        UB14: {
            name: "Ulos Bolean",
            usageCategory: "duka-cita",
            mainImage: "https://drive.google.com/uc?id=1L5OuFLAtyyoOC_2TriCayXpPTtVg99eS",
            galleryImages: [
                "https://drive.google.com/uc?id=1L5OuFLAtyyoOC_2TriCayXpPTtVg99eS",
            ],
            description: "Berfungsi sebagai pelengkap baju adat dalam berbagai upacara tradisional, khususnya sebagai selendang saat acara duka cita.",
            price: "Rp 300.000 - Rp 5.000.000",
            usageDetail: "Digunakan oleh tamu undangan dalam acara dukacita sebagai selendang."
        }
    };
    
    // Elemen DOM
    const btnHome = document.getElementById('btn-home');
    const btnGallery = document.getElementById('btn-gallery');
    const homeSection = document.getElementById('home-section');
    const gallerySection = document.getElementById('gallery-section');
    const detailSection = document.getElementById('detail-section');
    const ulosGallery = document.getElementById('ulos-gallery');
    const searchBar = document.getElementById('search-bar');
    const filterButtonsContainer = document.getElementById('filter-buttons');

    // FUNGSI UNTUK MEMBUAT KARTU GALERI SECARA OTOMATIS
    function renderGallery() {
        ulosGallery.innerHTML = ''; // Kosongkan galeri sebelum mengisi
        for (const id in ulosData) {
            const data = ulosData[id];
            const card = `
                <div class="ulos-card" data-id="${id}" data-name="${data.name}" data-usage="${data.usageCategory}">
                    <img src="${data.mainImage}" alt="${data.name}">
                    <h3>${data.name}</h3>
                </div>
            `;
            ulosGallery.innerHTML += card;
        }
        // Tambahkan event listener setelah semua kartu dibuat
        addCardEventListeners();
    }

    // Fungsi Navigasi Utama
    function showSection(sectionId) {
        homeSection.classList.remove('active');
        gallerySection.classList.remove('active');
        detailSection.classList.remove('active');

        const activeSection = document.getElementById(`${sectionId}-section`);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        btnHome.classList.toggle('nav-active', sectionId === 'home');
        btnGallery.classList.toggle('nav-active', sectionId === 'gallery');
    }

    // Event Listener untuk Navigasi Header
    btnHome.addEventListener('click', () => showSection('home'));
    btnGallery.addEventListener('click', () => showSection('gallery'));

    // FUNGSI UNTUK MENAMPILKAN DETAIL ULOS DENGAN GALERI
    function showDetail(ulosId) {
        const data = ulosData[ulosId];

        // Membuat HTML untuk thumbnail galeri
        let thumbnailsHTML = '';
        data.galleryImages.forEach((imgSrc, index) => {
            thumbnailsHTML += `
                <img src="${imgSrc}" alt="Thumbnail ${data.name} ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}">
            `;
        });
        
        detailSection.innerHTML = `
            <div class="ulos-detail">
                <button class="back-button">&larr; Kembali ke Galeri</button>
                <h2>${data.name}</h2>
                <div class="detail-gallery">
                    <div class="main-image-container">
                        <img src="${data.mainImage}" alt="${data.name}" id="main-detail-image">
                    </div>
                    <div class="thumbnail-container">
                        ${thumbnailsHTML}
                    </div>
                </div>
                <h3>Deskripsi</h3>
                <p>${data.description}</p>
                <h3>Penggunaan</h3>
                <p>${data.usageDetail}</p>
                <table class="price-table">
                    <tr>
                        <td>Perkiraan Harga</td>
                        <td>${data.price}</td>
                    </tr>
                </table>
            </div>
        `;

        // Event listener untuk tombol kembali
        detailSection.querySelector('.back-button').addEventListener('click', () => {
             showSection('gallery');
        });
        
        // Event listener untuk thumbnail
        detailSection.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Ganti gambar utama
                document.getElementById('main-detail-image').src = thumb.src;
                // Update class 'active' pada thumbnail
                detailSection.querySelector('.thumbnail.active').classList.remove('active');
                thumb.classList.add('active');
            });
        });
        
        showSection('detail');
    }

    // Fungsi untuk menambahkan event listener ke kartu
    function addCardEventListeners() {
        document.querySelectorAll('.ulos-card').forEach(card => {
            card.addEventListener('click', () => {
                const ulosId = card.getAttribute('data-id');
                showDetail(ulosId);
            });
        });
    }

    // Fungsi Pencarian
    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.ulos-card').forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            card.style.display = name.includes(searchTerm) ? 'block' : 'none';
        });
    });

    // Fungsi Filter
    filterButtonsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            filterButtonsContainer.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            const filter = e.target.getAttribute('data-filter');
            
            document.querySelectorAll('.ulos-card').forEach(card => {
                const usage = card.getAttribute('data-usage');
                card.style.display = (filter === 'all' || usage.includes(filter)) ? 'block' : 'none';
            });
        }
    });
    
    // Inisialisasi Aplikasi
    renderGallery(); // Buat kartu galeri saat halaman dimuat
    showSection('home'); // Tampilkan halaman home secara default
});
