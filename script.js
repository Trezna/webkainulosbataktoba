document.addEventListener('DOMContentLoaded', () => {
    // Objek untuk menyimpan detail Ulos (bisa juga diambil dari API/JSON di masa depan)
    const ulosData = {
        UB1: {
            name: "Ulos Ragi Hidup",
            description: "Ulos Ragi Hidup melambangkan kehidupan dan kebahagian dalam keturunan dengan umur yang panjang (saur matua).",
            price: "Rp 300.000 - Rp 2.800.000",
            usage: "Digunakan sebagai hadiah atau kenangan pada orang yang menikah, sebagai busana adat pada acara kematian. Ulos ini melambangkan doa untuk kebahagiaan pada suatu acara adat."
        },
        UB2: {
            name: "Ulos Ragi Hotang",
            description: "Sering juga disebut sebagai Ulos Hela. Pemberian Ulos Hela memiliki makna bahwa orang tua pengantin perempuan telah menyetujui putrinya dipersunting oleh laki-laki yang disebut sebagai 'Hela' (menantu).",
            price: "Rp 150.000 - Rp 500.000",
            usage: "Digunakan sebagai hadiah pada orang yang menikah (khususnya untuk menantu laki-laki) dan pada acara kematian oleh saudara kandung almarhum."
        },
        UB3: {
            name: "Ulos Sibolang",
            description: "Menjadi simbol duka cita terutama di momen kematian orang dewasa yang belum memiliki cucu, dan duda serta janda yang ditinggal mati pasangannya.",
            price: "Rp 420.000 - Rp 2.100.000",
            usage: "Pada acara kematian untuk orang yang belum memiliki cucu dan pada acara kelahiran sebagai simbol harapan."
        },
        UB4: {
            name: "Ulos Pinuncaan",
            description: "Merupakan salah satu jenis kain termahal, terdiri dari lima bagian yang ditenun secara terpisah dan disatukan. Ulos ini biasa dipakai oleh raja adat dan tuan rumah.",
            price: "Rp 250.000 - Rp 1.200.000",
            usage: "Dipakai oleh raja adat, orang tua mempelai, dan tuan rumah dalam upacara adat besar (pernikahan atau kematian)."
        },
        UB5: {
            name: "Ulos Mangiring",
            description: "Menunjukkan harapan agar kelahiran anak ini diiringi dengan kelahiran anak seterusnya. Digunakan sebagai selendang (parompa) untuk menggendong bayi.",
            price: "Rp 170.000 - Rp 350.000",
            usage: "Diberikan kepada bayi yang baru lahir, utamanya anak pertama, sebagai perlambang penerus generasi."
        },
        UB6: {
            name: "Ulos Bintang Maratur",
            description: "Menjadi simbol ucapan suka cita atau berita gembira. Motifnya melambangkan keteraturan dan restu.",
            price: "Rp 150.000 - Rp 370.000",
            usage: "Diberikan saat syukuran kehamilan tujuh bulanan atau saat memasuki rumah baru."
        },
         UB7: {
            name: "Ulos Antak-Antak",
            description: "Dipakai sebagai selendang orang tua untuk melayat orang yang meninggal, selain itu ulos ini juga dipakai sebagai kain yang dililit pada waktu acara manortor (menari).",
            price: "Rp 130.000 - Rp 390.000",
            usage: "Digunakan oleh orang tua untuk melayat dan menari saat upacara adat."
        },
        UB8: {
            name: "Ulos Sadum",
            description: "Penuh warna-warni ceria yang cocok untuk suasana suka cita, memiliki arti semangat. Sering digunakan sebagai kenang-kenangan.",
            price: "Rp 70.000 - Rp 150.000",
            usage: "Digunakan dalam acara pernikahan, acara sukacita lainnya, serta dapat digunakan sebagai hadiah atau dekorasi."
        },
        UB9: {
            name: "Ulos Tumtuman",
            description: "Dipakai sebagai ikat kepala (tali-tali) oleh seseorang untuk menunjukkan bahwa yang bersangkutan adalah hasuhutan (tuan rumah) atau anak pertama.",
            price: "Rp 150.000 - Rp 2.200.000",
            usage: "Digunakan sebagai ikat kepala oleh pihak perempuan pada acara pernikahan dan sebagai sarung dari mempelai wanita."
        },
        UB10: {
            name: "Ulos Suri-Suri Ganjang",
            description: "Memiliki motif yang lembut dan elegan, melambangkan kecantikan dan keanggunan. Dipakai sebagai selendang (ampe-ampe) oleh pihak orang tua perempuan.",
            price: "Rp 300.000 - Rp 600.000",
            usage: "Digunakan untuk mengulosi pengantin dari pihak wanita (hula-hula) dan sebagai busana pemusik adat."
        },
        UB11: {
            name: "Ulos Simpar",
            description: "Umumnya digunakan sebagai selendang saat dalam upacara adat yang khususnya hanya sebagai meramaikan (panoropi) atau tamu biasa.",
            price: "Rp 30.000 - Rp 400.000",
            usage: "Digunakan oleh wanita saat menghadiri upacara adat sebagai selendang saat manortor."
        },
        UB12: {
            name: "Ulos Ragi Hunting",
            description: "Pada jaman dulu, gadis-gadis memakai Ulos Ragi Huting ini sebagai pakaian sehari-hari yang dililitkan di dada (Hobahoba) yang menunjukkan bahwa ia seorang putri batak.",
            price: "Rp 150.000 - Rp 250.000",
            usage: "Digunakan oleh anak perempuan (gadis) dari keluarga yang mengadakan acara, dililitkan di dada."
        },
        UB13: {
            name: "Ulos Harungguan",
            description: "Digunakan sebagai selimut bagi keluarga dari golongan kaya. Jika meninggal, akan diselimutkan kepada jasadnya.",
            price: "Rp 400.000 - Rp 2.500.000",
            usage: "Sebagai hadiah dari orang tua mempelai wanita kepada pasangan anaknya dan digunakan oleh para raja adat sebagai selendang."
        },
        UB14: {
            name: "Ulos Bolean",
            description: "Berfungsi sebagai pelengkap baju adat dalam berbagai upacara tradisional, khususnya sebagai selendang saat acara duka cita.",
            price: "Rp 300.000 - Rp 5.000.000",
            usage: "Digunakan oleh tamu undangan dalam acara dukacita sebagai selendang."
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

    // Fungsi Navigasi Utama
    function showSection(sectionId) {
        homeSection.classList.remove('active');
        gallerySection.classList.remove('active');
        detailSection.classList.remove('active');

        if (sectionId === 'home') {
            homeSection.classList.add('active');
            btnHome.classList.add('nav-active');
            btnGallery.classList.remove('nav-active');
        } else if (sectionId === 'gallery') {
            gallerySection.classList.add('active');
            btnGallery.classList.add('nav-active');
            btnHome.classList.remove('nav-active');
        } else if (sectionId === 'detail') {
            detailSection.classList.add('active');
        }
    }

    // Event Listener untuk Navigasi Header
    btnHome.addEventListener('click', () => showSection('home'));
    btnGallery.addEventListener('click', () => showSection('gallery'));

    // Fungsi untuk menampilkan detail Ulos
    function showDetail(ulosId) {
        const data = ulosData[ulosId];
        const card = document.querySelector(`.ulos-card[data-id="${ulosId}"]`);
        const imgSrc = card.querySelector('img').src;

        detailSection.innerHTML = `
            <div class="ulos-detail">
                <button class="back-button">&larr; Kembali ke Galeri</button>
                <h2>${data.name}</h2>
                <img src="${imgSrc}" alt="${data.name}">
                <h3>Deskripsi</h3>
                <p>${data.description}</p>
                <h3>Penggunaan</h3>
                <p>${data.usage}</p>
                <table class="price-table">
                    <tr>
                        <td>Perkiraan Harga</td>
                        <td>${data.price}</td>
                    </tr>
                </table>
            </div>
        `;
        // Add event listener for the new back button
        detailSection.querySelector('.back-button').addEventListener('click', () => {
             showSection('gallery');
        });
        
        showSection('detail');
    }

    // Tambahkan Event Listener ke setiap kartu Ulos
    document.querySelectorAll('.ulos-card').forEach(card => {
        card.addEventListener('click', () => {
            const ulosId = card.getAttribute('data-id');
            showDetail(ulosId);
        });
    });

    // Fungsi Pencarian
    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.ulos-card').forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            if (name.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });

    // Fungsi Filter
    filterButtonsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Update active button
            filterButtonsContainer.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');

            const filter = e.target.getAttribute('data-filter');
            
            document.querySelectorAll('.ulos-card').forEach(card => {
                const usage = card.getAttribute('data-usage');
                if (filter === 'all' || usage.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }
    });
    
    // Inisialisasi: Tampilkan halaman home secara default
    showSection('home');
});