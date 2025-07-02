document.addEventListener('DOMContentLoaded', () => {
    // DATA UTAMA APLIKASI
    const ulosData = {
        UB1: {
            name: "Ulos Ragi Hidup",
            usageCategory: "pernikahan duka-cita",
            mainImage: "images/ulos-ragi-hidup.png",
            galleryImages: ["images/ulos-ragi-hidup.png"],
            description: "Ulos Ragi Hidup melambangkan kehidupan dan kebahagian dalam keturunan dengan umur yang panjang (saur matua).",
            price: "Rp 300.000 - Rp 2.800.000",
            usageDetail: "Digunakan sebagai hadiah atau kenangan pada orang yang menikah, sebagai busana adat pada acara kematian. Ulos ini melambangkan doa untuk kebahagiaan pada suatu acara adat."
        },
        UB2: {
            name: "Ulos Ragi Hotang",
            usageCategory: "pernikahan duka-cita",
            mainImage: "images/ulos-ragi-hotang.png",
            galleryImages: ["images/ulos-ragi-hotang.png"],
            description: "Sering juga disebut sebagai Ulos Hela. Pemberian Ulos Hela memiliki makna bahwa orang tua pengantin perempuan telah menyetujui putrinya dipersunting oleh laki-laki yang disebut sebagai 'Hela' (menantu).",
            price: "Rp 150.000 - Rp 500.000",
            usageDetail: "Digunakan sebagai hadiah pada orang yang menikah (khususnya untuk menantu laki-laki) dan pada acara kematian oleh saudara kandung almarhum."
        },
        UB3: {
            name: "Ulos Sibolang",
            usageCategory: "duka-cita kelahiran",
            mainImage: "images/ulos-sibolang.png",
            galleryImages: ["images/ulos-sibolang.png"],
            description: "Menjadi simbol duka cita terutama di momen kematian orang dewasa yang belum memiliki cucu, dan duda serta janda yang ditinggal mati pasangannya.",
            price: "Rp 420.000 - Rp 2.100.000",
            usageDetail: "Pada acara kematian untuk orang yang belum memiliki cucu dan pada acara kelahiran sebagai simbol harapan."
        },
        UB4: {
            name: "Ulos Pinuncaan",
            usageCategory: "pernikahan duka-cita",
            mainImage: "images/ulos-pinuncaan.png",
            galleryImages: ["images/ulos-pinuncaan.png"],
            description: "Merupakan salah satu jenis kain termahal, terdiri dari lima bagian yang ditenun secara terpisah dan disatukan. Ulos ini biasa dipakai oleh raja adat dan tuan rumah.",
            price: "Rp 250.000 - Rp 1.200.000",
            usageDetail: "Dipakai oleh raja adat, orang tua mempelai, dan tuan rumah dalam upacara adat besar (pernikahan atau kematian)."
        },
        UB5: {
            name: "Ulos Mangiring",
            usageCategory: "kelahiran",
            mainImage: "images/ulos-mangiring.png",
            galleryImages: ["images/ulos-mangiring.png"],
            description: "Menunjukkan harapan agar kelahiran anak ini diiringi dengan kelahiran anak seterusnya. Digunakan sebagai selendang (parompa) untuk menggendong bayi.",
            price: "Rp 170.000 - Rp 350.000",
            usageDetail: "Diberikan kepada bayi yang baru lahir, utamanya anak pertama, sebagai perlambang penerus generasi."
        },
        UB6: {
            name: "Ulos Bintang Maratur",
            usageCategory: "kelahiran",
            mainImage: "images/ulos-bintang-maratur.png",
            galleryImages: ["images/ulos-bintang-maratur.png"],
            description: "Menjadi simbol ucapan suka cita atau berita gembira. Motifnya melambangkan keteraturan dan restu.",
            price: "Rp 150.000 - Rp 370.000",
            usageDetail: "Diberikan saat syukuran kehamilan tujuh bulanan atau saat memasuki rumah baru."
        },
        UB7: {
            name: "Ulos Antak-Antak",
            usageCategory: "duka-cita",
            mainImage: "images/ulos-antak-antak.png",
            galleryImages: ["images/ulos-antak-antak.png"],
            description: "Dipakai sebagai selendang orang tua untuk melayat orang yang meninggal, selain itu ulos ini juga dipakai sebagai kain yang dililit pada waktu acara manortor (menari).",
            price: "Rp 130.000 - Rp 390.000",
            usageDetail: "Digunakan oleh orang tua untuk melayat dan menari saat upacara adat."
        },
        UB8: {
            name: "Ulos Sadum",
            usageCategory: "pernikahan",
            mainImage: "images/ulos-sadum.png",
            galleryImages: ["images/ulos-sadum.png"],
            description: "Penuh warna-warni ceria yang cocok untuk suasana suka cita, memiliki arti semangat. Sering digunakan sebagai kenang-kenangan.",
            price: "Rp 70.000 - Rp 150.000",
            usageDetail: "Digunakan dalam acara pernikahan, acara sukacita lainnya, serta dapat digunakan sebagai hadiah atau dekorasi."
        },
        UB9: {
            name: "Ulos Tumtuman",
            usageCategory: "pernikahan",
            mainImage: "images/ulos-tumtuman.png",
            galleryImages: ["images/ulos-tumtuman.png"],
            description: "Dipakai sebagai ikat kepala (tali-tali) oleh seseorang untuk menunjukkan bahwa yang bersangkutan adalah hasuhutan (tuan rumah) atau anak pertama.",
            price: "Rp 150.000 - Rp 2.200.000",
            usageDetail: "Digunakan sebagai ikat kepala oleh pihak perempuan pada acara pernikahan dan sebagai sarung dari mempelai wanita."
        },
        UB10: {
            name: "Ulos Suri-Suri Ganjang",
            usageCategory: "pernikahan",
            mainImage: "images/ulos-suri-suri-ganjang.png",
            galleryImages: ["images/ulos-suri-suri-ganjang.png"],
            description: "Memiliki motif yang lembut dan elegan, melambangkan kecantikan dan keanggunan. Dipakai sebagai selendang (ampe-ampe) oleh pihak orang tua perempuan.",
            price: "Rp 300.000 - Rp 600.000",
            usageDetail: "Digunakan untuk mengulosi pengantin dari pihak wanita (hula-hula) dan sebagai busana pemusik adat."
        },
        UB11: {
            name: "Ulos Simpar",
            usageCategory: "pernikahan",
            mainImage: "images/ulos-simpar.png",
            galleryImages: ["images/ulos-simpar.png"],
            description: "Umumnya digunakan sebagai selendang saat dalam upacara adat yang khususnya hanya sebagai meramaikan (panoropi) atau tamu biasa.",
            price: "Rp 30.000 - Rp 400.000",
            usageDetail: "Digunakan oleh wanita saat menghadiri upacara adat sebagai selendang saat menortor."
        },
        UB12: {
            name: "Ulos Ragi Hunting",
            usageCategory: "pernikahan",
            mainImage: "images/ulos-ragi-hunting.png",
            galleryImages: ["images/ulos-ragi-hunting.png"],
            description: "Pada jaman dulu, gadis-gadis memakai Ulos Ragi Huting ini sebagai pakaian sehari-hari yang dililitkan di dada (Hobahoba) yang menunjukkan bahwa ia seorang putri batak.",
            price: "Rp 150.000 - Rp 250.000",
            usageDetail: "Digunakan oleh anak perempuan (gadis) dari keluarga yang mengadakan acara, dililitkan di dada."
        },
        UB13: {
            name: "Ulos Harungguan",
            usageCategory: "pernikahan",
            mainImage: "images/ulos-harungguan.png",
            galleryImages: ["images/ulos-harungguan.png"],
            description: "Digunakan sebagai selimut bagi keluarga dari golongan kaya. Jika meninggal, akan diselimutkan kepada jasadnya.",
            price: "Rp 400.000 - Rp 2.500.000",
            usageDetail: "Sebagai hadiah dari orang tua mempelai wanita kepada pasangan anaknya dan digunakan oleh para raja adat sebagai selendang."
        },
        UB14: {
            name: "Ulos Bolean",
            usageCategory: "duka-cita",
            mainImage: "images/ulos-bolean.png",
            galleryImages: ["images/ulos-bolean.png"],
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

    btnHome.addEventListener('click', () => showSection('home'));
    btnGallery.addEventListener('click', () => showSection('gallery'));

    // FUNGSI UNTUK MENAMPILKAN DETAIL ULOS DENGAN GALERI (VERSI PERBAIKAN)
    function showDetail(ulosId) {
        const data = ulosData[ulosId];
        let galleryHTML = '';

        if (data.galleryImages && data.galleryImages.length > 1) {
            let thumbnailsHTML = '';
            data.galleryImages.forEach((imgSrc, index) => {
                thumbnailsHTML += `
                    <img src="${imgSrc}" alt="Thumbnail ${data.name} ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}">
                `;
            });
            galleryHTML = `
                <div class="detail-gallery">
                    <div class="main-image-container">
                        <img src="${data.mainImage}" alt="${data.name}" id="main-detail-image">
                    </div>
                    <div class="thumbnail-container">
                        ${thumbnailsHTML}
                    </div>
                </div>
            `;
        } else {
            galleryHTML = `
                <div class="detail-gallery">
                    <div class="main-image-container">
                        <img src="${data.mainImage}" alt="${data.name}" id="main-detail-image">
                    </div>
                </div>
            `;
        }

        detailSection.innerHTML = `
            <div class="ulos-detail">
                <button class="back-button">&larr; Kembali ke Galeri</button>
                <h2>${data.name}</h2>
                ${galleryHTML}
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

        detailSection.querySelector('.back-button').addEventListener('click', () => {
             showSection('gallery');
        });
        
        if (data.galleryImages && data.galleryImages.length > 1) {
            detailSection.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.addEventListener('click', () => {
                    document.getElementById('main-detail-image').src = thumb.src;
                    detailSection.querySelector('.thumbnail.active').classList.remove('active');
                    thumb.classList.add('active');
                });
            });
        }
        
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
    renderGallery();
    showSection('home');
});
