document.addEventListener('DOMContentLoaded', () => {
    // DATA UTAMA APLIKASI
    const ulosData = {
        UB1: {
            name: "Ulos Ragi Hidup",
            usageCategory: "pernikahan duka-cita",
            mainImage: "images/ulos_ragi_hidup.png",
            galleryImages: ["images/ulos_ragi_hidup.png"],
            description: "Ulos Ragi Hidup melambangkan kehidupan dan kebahagian dalam keturunan dengan umur yang panjang (saur matua).",
            // --- DATA BARU DITAMBAHKAN DI SINI ---
            deskripsiWarna: "Ulos ini berwarna merah kecoklatan di bagian kanan dan kiri, di bagian tengah berwarna biru hitam dengan wanra merah berbentuk persegi diagonal. Dibagian bawah dan atas tengah berwarna putih di penuhi diagonal merah dan hijau yang ter struktur membentuk rantai. di bagian bingkai ulos berwarna coklat dan warna emas sebagai pembatas untuk sisi kanan dan kiri.",
            deskripsiMotif: "Ulos ini memiliki motif persegi geometris yang berwarna emas sebagai pemisah antara kiri, kanan dan tengah dan dibagian tengan berbentuk segitiga yang saling menyambung berwarna biru dan merah kemudian dipisah dengan garis zig-zag merah padan bagian segitiga geometris yang memenuhi latar putih.",
            price: "Rp 300.000 - Rp 2.800.000",
            penggunaanDalamAcara: "Ulos ini digunakan sebagai hadiah atau kenangan pada orang yang menikah , sebagai busana adat pada acara kematian. Ulos ini melambangkan doa untuk kebahagiaan pada suatu acara adat.",
            pengguna: "Laki-laki dan perempuan yang sudah tidak bersuami lagi dapat mengenakannya, tetapi hanya pada upacara-upacara tertentu saja.",
            referensi: "deskripsi_ulos : https://travel.kompas.com/read/2019/12/12/200600027/14-jenis-ulos-kain-kebanggaan-suku-batak?page=2, gambar : https://www.kibrispdr.org/gambar-ulos-ragi-hidup.html, harga : https://id.shp.ee/f5DUg5c"
        },
        UB2: {
            name: "Ulos Ragi Hotang",
            usageCategory: "pernikahan duka-cita",
            mainImage: "images/ulos_ragi_hotang.png",
            galleryImages: ["images/ulos_ragi_hotang.png"],
            description: "Sering juga disebut sebagai Ulos Hela. Pemberian Ulos Hela memiliki makna bahwa orang tua pengantin perempuan telah menyetujui putrinya dipersunting oleh laki-laki yang disebut sebagai 'Hela' (menantu).",
            deskripsiWarna: "Ulos ini memiliki warna hitam sebagai bingkai dan di isi serabut-serabut putih. Pada dasarnya ulos ini berwarna merah dengan garis-garis berwarna emas dan biru yang disusun secara beratusan dan simetris. Pada bagian bawah berwarna hitam, putih dan merah berbentuk diagonal terputus.",
            deskripsiMotif: "Motif ulos ini terbagi 2 pada bagian tengah tersusun dari garis-garis seperti rotan dan pada bagian bawah membentuk fiaginal yang terputus oleh garis lurus.",
            price: "Rp 150.000 - Rp 500.000",
            penggunaanDalamAcara: "Ulos ini digunakan sebagai hadiah atau kenangan pada orang yang menikah , sebagai busana adat pada acara kematian. Ulos ini melambangkan doa untuk kebahagiaan pada suatu acara adat.",
            pengguna: "Menantu mempelai wanita dalam pernikahan dan saudara kandung dari almarhum.",
            referensi: "deskripsi_ulos : https://batikindonesia.com/kain-tenun-ulos/, gambar : https://www.etsy.com/uk/listing/1121541390/ulos-batak-ragi-hotang-batak-ulos-cloth, harga : https://id.shp.ee/es6yf6k"
        },
        UB3: {
            name: "Ulos Sibolang",
            usageCategory: "duka-cita kelahiran",
            mainImage: "images/ulos_sibolang.png",
            galleryImages: ["images/ulos_sibolang.png"],
            description: "Menjadi simbol duka cita terutama di momen kematian orang dewasa yang belum memiliki cucu, dan duda serta janda yang ditinggal mati pasangannya.",
            deskripsiWarna: "Ulos ini memiliki warna hitam pada bagian kanan dan kiri dan bagian tengan berwarna biru gelap serta untuk bagian bawah dan atas berwarna putih merah.",
            deskripsiMotif: "Motif ulos terusun dari garis-garis zig-zag pada bagian tengan dan bagian bawah berbentuk anak panah. Pada bagian bingkai bawah berbentuk persegi diagonal berwarna merah di tutup dengan nrntuk V miring di sisi kanan dan kiri.",
            price: "Rp 420.000 - Rp 2.100.000",
            penggunaanDalamAcara: "Pada acara kematian untuk orang yang belum memiliki cucu dan ditinggal pasanganya dan pada acara kelahiran.",
            pengguna: "Keluarga terdekat terhadap yang berduka dan anak yang baru lahir.",
            referensi: "deskripsi_ulos : https://bobobox.com/blog/fungsi-kain-ulos/, gambar : https://pt.pinterest.com/pin/batak-ulos-sibolang--672725263093361421/, harga : https://id.shp.ee/es6yf6k"
        },
        UB4: {
            name: "Ulos Pinuncaan",
            usageCategory: "pernikahan duka-cita",
            mainImage: "images/ulos_pinuncaan.png",
            galleryImages: ["images/ulos_pinuncaan.png"],
            description: "Merupakan salah satu jenis kain termahal, terdiri dari lima bagian yang ditenun secara terpisah dan disatukan. Ulos ini biasa dipakai oleh raja adat dan tuan rumah.",
            deskripsiWarna: "Ulos ini memiliki warna dasar coklat kemerahan dengan putih dhiasi warna emas dan merah pada bagian tengah dan hitam.",
            deskripsiMotif: "Motif ulos ini sangat penuh berbentuk garis-garis geometris atau seperti gorga. corak segitiga dan bunga yag terpisah-pisah dan dihiasi dengan benang emas atau perak.",
            price: "Rp 250.000 - Rp 1.200.000",
            penggunaanDalamAcara: "Raja adat dalam pernikahan atau kematian dan orang tua mempelai laki-laki dalam acara pernikahan.",
            pengguna: "Raja-raja adat, dipakai oleh orang tua dari pengantin laki-laki dikenakan oleh orang tua pengantin wanita dan dipakai oleh tuan rumah dalam upacara adat.",
            referensi: "deskripsi_ulos : https://batikindonesia.com/kain-tenun-ulos/, gambar : https://sl.bing.net/d6FRohc9nEW, harga : https://id.shp.ee/kHnc7gK"
        },
        UB5: {
            name: "Ulos Mangiring",
            usageCategory: "kelahiran",
            mainImage: "images/ulos_mangiring.png",
            galleryImages: ["images/ulos_mangiring.png"],
            description: "Menunjukkan harapan agar kelahiran anak ini diiringi dengan kelahiran anak seterusnya. Digunakan sebagai selendang (parompa) untuk menggendong bayi.",
            deskripsiWarna: "Ulos ini memiliki warna dasar merah dan cuklat pada bagian tengah. Dan warna emas, putih,putih dan hitam sebagai motif yang memenuhi sebagian bidang.",
            deskripsiMotif: "Motif ulos ini tersusundari garis-garis yang memanjang dari atas kebawah dan pada bingkai baawah berbentuk x berwarna putih dan pada bagian samping berbentuk diagonal yang memisahkan garis tebal berwarna emas. Dan pada bagian tengah yang memisahkan warna merah dan coklat berbentuk X dan diagonal yang memisahkan garis tebal.",
            price: "Rp 170.000 - Rp 350.000",
            penggunaanDalamAcara: "Diberikan kepada anak cucu yang baru lahir.",
            pengguna: "Wanita yang melahirkan dan anak yang baru lahir.",
            referensi: "deskripsi_ulos : https://bobobox.com/blog/fungsi-kain-ulos/, gambar : https://sl.bing.net/kr9utcriWK4, harga : https://id.shp.ee/Z574LjZ"
        },
        UB6: {
            name: "Ulos Bintang Maratur",
            usageCategory: "kelahiran",
            mainImage: "images/ulos_bintang_maratur.png",
            galleryImages: ["images/ulos_bintang_maratur.png"],
            description: "Menjadi simbol ucapan suka cita atau berita gembira. Motifnya melambangkan keteraturan dan restu.",
            deskripsiWarna: "Ulos ini memiliki warna dasar hitam pada bagian tengah dan merah pada bagian samping. Dan sebagai motif berwarna merah muda atau putih pada umumnya, serta pada motif bunga berwarna biru, hijau , kuning, dan merah.",
            deskripsiMotif: "Motif pada ulos ini berbentuk  bintang kecil-kecil atau garis zig-zag yang menurun pada bagian tengah . Dan bagian bawah memiliki motif tumbuhan dan hewan pada umumnya berbentuk bunga dan burung.",
            price: "Rp 150.000 - Rp 370.000",
            penggunaanDalamAcara: "Diberikan pada saat syukuran atau selamatan atas kehamilan ibu di bulan ke tujuh. Berbeda dengan daerah Tapanuli, Ulos Bintang Maratur ini khusus diberikan kepada anak atau keluarga yang melakukan akan memasuki rumah baru.",
            pengguna: "Anak yang punya rumah baru dan ibu hamil.",
            referensi: "deskripsi_ulos : https://bobobox.com/blog/fungsi-kain-ulos/, gambar : https://fitinline.com/article/read/jenis-jenis-kain-ulos-batak-lengkap-dengan-fungsi-dan-makna-filosofi-yang-terkandung-didalamnya/, harga : https://id.shp.ee/48XT1yE"
        },
        UB7: {
            name: "Ulos Antak-Antak",
            usageCategory: "duka-cita",
            mainImage: "images/ulos_antak_antak.png",
            galleryImages: ["images/ulos_antak_antak.png"],
            description: "Dipakai sebagai selendang orang tua untuk melayat orang yang meninggal, selain itu ulos ini juga dipakai sebagai kain yang dililit pada waktu acara manortor (menari).",
            deskripsiWarna: "Ulos ini memiliki warna dasar coklat sebagai warna dasar dan di penuhin dengan warna emas sebagai motif diagonal, hijau sebagai garis-garis lurus dan merah.",
            deskripsiMotif: "Motif pada ulos ini berbentuk diagonal dan X tebal berwarna emas. Pada bagian tengah berbentuk tanda plus(+) dikelilingi seperti bentuk gantungan kunci dan warna hijau dan merah sebagai garis lurus.",
            price: "Rp 130.000 - Rp 390.000",
            penggunaanDalamAcara: "Digunakan orang tua umumnya untuk melayat dan digunakan untuk menortor(menari).",
            pengguna: "Orang tua.",
            referensi: "deskripsi_ulos : https://mediakasasi.com/ragam/82/wow-keren-ternyata-ada-14-makna-kain-ulos-adat-suku-batak.html, gambar : https://fitinline.com/article/read/jenis-jenis-kain-ulos-batak-lengkap-dengan-fungsi-dan-makna-filosofi-yang-terkandung-didalamnya/"
        },
        UB8: {
            name: "Ulos Sadum",
            usageCategory: "pernikahan",
            mainImage: "images/ulos_sadum.png",
            galleryImages: ["images/ulos_sadum.png"],
            description: "Penuh warna-warni ceria yang cocok untuk suasana suka cita, memiliki arti semangat. Sering digunakan sebagai kenang-kenangan.",
            deskripsiWarna: "Warna ulos sadum cukup beragam mulai dari merah sebagai warna dasar dan untuk warna pada motif pada umumnya berwarna kuning, hijau, biru, putih, dan ungu yang melambangkan penuh sukacita pada paduan banyak warna dalam ulos ini.",
            deskripsiMotif: "Motif pada ulos sadum biasanya berbentuk diagonal persegi, segitiga geometris, bunga dan gorga yang sangat padat di seluruh bagian ulos yang disusun secara acak.",
            price: "Rp 70.000 - Rp 150.000",
            penggunaanDalamAcara: "Digunakan dalam acara pernikahan dan acara sukacita lainya serta dapat digunakan sebagai hadiah.",
            pengguna: "Orang tua dan tamu adat.",
            referensi: "deskripsi_ulos : https://fitinline.com/article/read/jenis-jenis-kain-ulos-batak-lengkap-dengan-fungsi-dan-makna-filosofi-yang-terkandung-didalamnya/, gambar : https://fitinline.com/article/read/jenis-jenis-kain-ulos-batak-lengkap-dengan-fungsi-dan-makna-filosofi-yang-terkandung-didalamnya/, harga : https://id.shp.ee/vZeXriA"
        },
        UB9: {
            name: "Ulos Tumtuman",
            usageCategory: "pernikahan",
            mainImage: "images/ulos_tumtuman.png",
            galleryImages: ["images/ulos_tumtuman.png"],
            description: "Dipakai sebagai ikat kepala (tali-tali) oleh seseorang untuk menunjukkan bahwa yang bersangkutan adalah hasuhutan (tuan rumah) atau anak pertama.",
            deskripsiWarna: "Ulos ini memiliki warna dasar biru dan putih dan motif berwarna merah berbentuk garis-garis lurus kecil , hijau garis lurus tebal  , dan emas garis-garis zig-zag.",
            deskripsiMotif: "Motif ulos ini terdiri dari seperti bungkusan permen berwarna merah dan garis-garis lurus kecil-kecil, garis zig-zag kecil-kecil berwarna emas dan garis lurus panjang tebal berwarna hijau.",
            price: "Rp 150.000 - Rp 2.200.000",
            penggunaanDalamAcara: "Digunakan sebagai tali-tali untuk ikat kepala dari pihak perempuan pada acara pernikahan dan sebagai sarung dari mempelai wanita.",
            pengguna: "Keluarga mempelai wanita dan wanita yang menikah.",
            referensi: "deskripsi_ulos : https://mediakasasi.com/ragam/82/wow-keren-ternyata-ada-14-makna-kain-ulos-adat-suku-batak.html, gambar : https://fitinline.com/article/read/jenis-jenis-kain-ulos-batak-lengkap-dengan-fungsi-dan-makna-filosofi-yang-terkandung-didalamnya/, harga : https://id.shp.ee/qd93xzN"
        },
        UB10: {
            name: "Ulos Suri-Suri Ganjang",
            usageCategory: "pernikahan",
            mainImage: "images/ulos_suri_suri_ganjang.png",
            galleryImages: ["images/ulos_suri_suri_ganjang.png"],
            description: "Memiliki motif yang lembut dan elegan, melambangkan kecantikan dan keanggunan. Dipakai sebagai selendang (ampe-ampe) oleh pihak orang tua perempuan.",
            deskripsiWarna: "Ulos ini memiliki warna dasar hitam dan di penuhi garis-garis zig-zag yang membentang lurus berwarna biru dan bingkai bawah berwarna merah dengan dasar warna putih dan biru atau hijau sebagai garis yang memotong pada bagian tengah.",
            deskripsiMotif: "Motif pada ulos ini berbentuk sisir yang memanjang dan pada bingkai bawah berbentuk diagonal merah yang di bagian tengah terdapat titik merah dan garis -garis lurus yang memotong pada bagian tengan.",
            price: "Rp 300.000 - Rp 600.000",
            penggunaanDalamAcara: "Digunakan untuk mengulosi pengantin dari pihak wanita kepada anaknya dan digunakan sebagai pakaian busana oleh pemusik adat.",
            pengguna: "Pengantin wanita dan pemain musik.",
            referensi: "deskripsi_ulos : https://fotodeka.com/id/blog/article/10-jenis-ulos-dan-maknanya-dalam-budaya-batak/, gambar : https://sl.bing.net/blnuwRvwCpU, harga : https://id.shp.ee/DRcPtCu"
        },
        UB11: {
            name: "Ulos Simpar",
            usageCategory: "pernikahan",
            mainImage: "images/ulos_simpar.png",
            galleryImages: ["images/ulos_simpar.png"],
            description: "Umumnya digunakan sebagai selendang saat dalam upacara adat yang khususnya hanya sebagai meramaikan (panoropi) atau tamu biasa.",
            deskripsiWarna: "Ulos ini terbuat dari banyak macam-macam warna, pada umumnya ulos ini memiliki warna biru, merah, emas, hijau, merah muda, dan hitam. Ulos ini dapat terbuat dari banyak warna karna fungsi dan tujuan ulos ini hanya sebagai yang meramaikan saja dalam upacara adat.",
            deskripsiMotif: "Motif pada ulos ini sangat ramai umumnya berbentuk diagonal persegi seperti ketupat dan bunga serta burung yang memenuhi seluruh bagian ulos tersebut dan disusun secara lurus miring, Dan berbentuk garis-garis berwarna emas kecil-kecil pada seluruh bagian ulos tersebut.",
            price: "Rp 30.000 - Rp 400.000",
            penggunaanDalamAcara: "Digunakan oleh wanita saat menghadiri upacara adat sebagai selendang saat menortor.",
            pengguna: "Wanita.",
            referensi: "deskripsi_ulos : https://www.obatak.id/2015/02/jenis-jenis-ulos-batak.html, gambar : https://sl.bing.net/rke6QVjJw4, harga : https://id.shp.ee/KEoNjN2"
        },
        UB12: {
            name: "Ulos Ragi Hunting",
            usageCategory: "pernikahan",
            mainImage: "images/ulos_ragi_hunting.png",
            galleryImages: ["images/ulos_ragi_hunting.png"],
            description: "Pada jaman dulu, gadis-gadis memakai Ulos Ragi Huting ini sebagai pakaian sehari-hari yang dililitkan di dada (Hobahoba) yang menunjukkan bahwa ia seorang putri batak.",
            deskripsiWarna: "Ulos ini memiliki warna dsar hitam pada bagian tengah dan pada bagiab samping kiri berwarna merah. Untuk motif berwarna merah muda sebagai gairs-garis kecil dan hijau, kuning, putih dan merah mudah sebagai bunga dan burung.",
            deskripsiMotif: "Ulos ini memiliki motif bunga dan burung pada bagian atas dan bawah ulos tersebut. Pada bagian tengah di penuhi anak panah kecil-kecil yang berdempetan membentuk sisir dengan mengapit bentuk segitiga-segitiga kecil yang diapit dan tersusun lurus membentang.",
            price: "Rp 150.000 - Rp 250.000",
            penggunaanDalamAcara: "Digunakan oleh anak perempuan dari keluarga bersangkutan dengan dilipat di dada.",
            pengguna: "Wanita yang belum menikah.",
            referensi: "deskripsi_ulos : https://travel.kompas.com/read/2019/12/12/200600027/14-jenis-ulos-kain-kebanggaan-suku-batak, gambar : https://sl.bing.net/ey4fkgzqqES"
        },
        UB13: {
            name: "Ulos Harungguan",
            usageCategory: "pernikahan",
            mainImage: "images/ulos_harungguan.png",
            galleryImages: ["images/ulos_harungguan.png"],
            description: "Digunakan sebagai selimut bagi keluarga dari golongan kaya. Jika meninggal, akan diselimutkan kepada jasadnya.",
            deskripsiWarna: "Ulos ini memiliki warna dasar coklat dan garis lurus tebal berwarna biru dan motif-motif grometris berwarna emas,putih dan merah yang memenuhi bagian tengah pada ulos serta merah mudah sebagai garis lurus pada bingkai bawah dan garis lurus pada bagiab tegah.",
            deskripsiMotif: "Motif pada ulos ini berbentuk diagonal persegi yang terdapat pada bawah ulos tersebut dan garis lurus pada bingkai samping serta pada bagian tengah dipenuhi garis lurus berwarna biru,puti dan hijau. Untuk motif yang mengisi cela kosong garis tersebut berbentuk corak corak bunga dan anak panah yang tersusun lurus keatas.",
            price: "Rp 400.000 - Rp 2.500.000",
            penggunaanDalamAcara: "Digunakan sebagai hadiah dari orang tua mempelai wanita kepada pasangan anaknya dan digunakan oleh para raja adat sebagai selendang.",
            pengguna: "Pengantin pria dan para raja adat.",
            referensi: "deskripsi_ulos : https://www.obatak.id/2015/02/jenis-jenis-ulos-batak.html, gambar : https://sl.bing.net/k5Bn1vwY8Ye, harga : https://id.shp.ee/WCLMhQz"
        },
        UB14: {
            name: "Ulos Bolean",
            usageCategory: "duka-cita",
            mainImage: "images/ulos_bolean.png",
            galleryImages: ["images/ulos_bolean.png"],
            description: "Berfungsi sebagai pelengkap baju adat dalam berbagai upacara tradisional, khususnya sebagai selendang saat acara duka cita.",
            deskripsiWarna: "Ulos ini memiliki warna dasar hitam dan motif pada umumnya berwarna merah muda, orange, putih dan hijau. Warna garis tebal umumnya ada putih, merah muda, dan orange, lalu biru sebagai garis kecil-kecil serta garis yang menghubungkan antara motif.",
            deskripsiMotif: "Ulos ini memiliki motif diagonal yang tersusun lurus pada bagian tengan yang diapit garis tebal dan 2 segitiga yang berhadapan dan terhubung kemudian paada bagian atas dan bawah segitiga tersebug di satukan melalui garis berwarna hijau lalu ditambah garis-garis biru pada bagian tengan moti tresebut.",
            price: "Rp 300.000 - Rp 5.000.000",
            penggunaanDalamAcara: "Digunakan oleh tamu undangan dalam acara dukacita sebagai selendang.",
            pengguna: "Wanita.",
            referensi: "deskripsi_ulos : https://medanaktual.com/mengenal-ulos-batak-makna-fungsi-dan-jenisnya/, gambar : https://sl.bing.net/fly7YasNePA"
        }
    };
    
    // ... (Sisa kode dari sini ke bawah tetap sama, kecuali fungsi showDetail)

    const btnHome = document.getElementById('btn-home');
    const btnGallery = document.getElementById('btn-gallery');
    const homeSection = document.getElementById('home-section');
    const gallerySection = document.getElementById('gallery-section');
    const detailSection = document.getElementById('detail-section');
    const ulosGallery = document.getElementById('ulos-gallery');
    const searchBar = document.getElementById('search-bar');
    const filterButtonsContainer = document.getElementById('filter-buttons');

    function renderGallery() {
        ulosGallery.innerHTML = '';
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

    // <<< FUNGSI INI YANG DIUBAH TATA LETAKNYA >>>
    function showDetail(ulosId) {
        const data = ulosData[ulosId];
        let galleryHTML = '';
        let referensiHTML = '';

        if (data.galleryImages && data.galleryImages.length > 1) {
            let thumbnailsHTML = '';
            data.galleryImages.forEach((imgSrc, index) => {
                thumbnailsHTML += `<img src="${imgSrc}" alt="Thumbnail ${data.name} ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}">`;
            });
            galleryHTML = `
                <div class="detail-gallery">
                    <div class="main-image-container"><img src="${data.mainImage}" alt="${data.name}" id="main-detail-image"></div>
                    <div class="thumbnail-container">${thumbnailsHTML}</div>
                </div>`;
        } else {
            galleryHTML = `
                <div class="detail-gallery">
                    <div class="main-image-container"><img src="${data.mainImage}" alt="${data.name}" id="main-detail-image"></div>
                </div>`;
        }
        
        if (data.referensi) {
            referensiHTML = '<h3>Referensi</h3><ul class="referensi-list">';
            const refs = data.referensi.split(',');
            refs.forEach(ref => {
                const parts = ref.split(':');
                const type = parts[0].trim().replace(/_/g, ' ');
                const url = parts.slice(1).join(':').trim();
                const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
                referensiHTML += `<li><a href="${url}" target="_blank">Sumber ${capitalizedType}</a></li>`;
            });
            referensiHTML += '</ul>';
        }

        // --- TATA LETAK BARU DITERAPKAN DI SINI ---
        detailSection.innerHTML = `
            <div class="ulos-detail">
                <button class="back-button">&larr; Kembali ke Galeri</button>
                <h2>${data.name}</h2>
                ${galleryHTML}
                <h3>Deskripsi</h3>
                <p>${data.description}</p>
                
                <h3>Deskripsi Warna</h3>
                <p>${data.deskripsiWarna}</p>

                <h3>Deskripsi Motif</h3>
                <p>${data.deskripsiMotif}</p>
                
                <h3>Penggunaan dalam Acara</h3>
                <p>${data.penggunaanDalamAcara}</p>
                
                <h3>Pengguna</h3>
                <p>${data.pengguna}</p>
                
                <h3>Perkiraan Harga</h3>
                <p>${data.price}</p>
                
                ${referensiHTML}
            </div>`;
        // --- AKHIR BAGIAN YANG DIUBAH ---

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

    function addCardEventListeners() {
        document.querySelectorAll('.ulos-card').forEach(card => {
            card.addEventListener('click', () => {
                const ulosId = card.getAttribute('data-id');
                showDetail(ulosId);
            });
        });
    }

    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.ulos-card').forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            card.style.display = name.includes(searchTerm) ? 'block' : 'none';
        });
    });

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
    
    renderGallery();
    showSection('home');
});

 // ... (Semua kode fungsi lainnya dari renderGallery hingga filterButtonsContainer tetap sama)

    const btnHome = document.getElementById('btn-home');
    const btnGallery = document.getElementById('btn-gallery');
    // ... dan semua elemen DOM lainnya

    // [PASTIKAN SEMUA FUNGSI LAMA ANDA ADA DI SINI]
    function renderGallery() { /* ... kode ... */ }
    function showSection(sectionId) { /* ... kode ... */ }
    btnHome.addEventListener('click', () => showSection('home'));
    btnGallery.addEventListener('click', () => showSection('gallery'));
    function showDetail(ulosId) { /* ... kode ... */ }
    function addCardEventListeners() { /* ... kode ... */ }
    searchBar.addEventListener('keyup', e => renderGallery(e.target.value));
    filterButtonsContainer.addEventListener('click', e => { /* ... kode ... */ });
    
    renderGallery();
    showSection('home');
    
    // --- KODE CHATBOT DIPERBARUI DENGAN LOGIKA TOGGLE ---
    const btnChatbot = document.getElementById('btn-chatbot');
    btnChatbot.addEventListener('click', () => {
      // Periksa apakah API Chatbase sudah siap
      if (window.chatbase && typeof window.chatbase.isOpen === 'function') {
        // Cek apakah chatbot sedang terbuka
        if (window.chatbase.isOpen()) {
          // Jika sedang terbuka, panggil fungsi untuk menutup
          window.chatbase.close();
        } else {
          // Jika sedang tertutup, panggil fungsi untuk membuka
          window.chatbase.open();
        }
      } else {
        console.error("Chatbase API tidak ditemukan atau belum dimuat.");
        alert("Fitur chatbot sedang tidak tersedia saat ini.");
      }
    });

    // --- KODE BARU: MENAMBAHKAN FUNGSI TOMBOL ESCAPE UNTUK MENUTUP CHAT ---
    document.addEventListener('keydown', (event) => {
        // Cek apakah tombol yang ditekan adalah 'Escape'
        if (event.key === 'Escape') {
            // Cek apakah chatbot sedang terbuka
            if (window.chatbase && typeof window.chatbase.isOpen === 'function' && window.chatbase.isOpen()) {
                // Jika ya, tutup chatbot
                window.chatbase.close();
            }
        }
    });
});
