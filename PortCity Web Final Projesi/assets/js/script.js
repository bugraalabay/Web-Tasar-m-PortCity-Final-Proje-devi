document.addEventListener('DOMContentLoaded', () => {

    // Sayfa Yüklenme Olayı (Sadece Ana Sayfada)
    const alarm = window.location.pathname;
    if (alarm.endsWith("index.html")) {
        alert("PortCity Tanıtım Sitesine Hoş Geldiniz");
    }




    // Menü ve Aktif Link

    const menuLinkleri = document.querySelectorAll('#icerik ul li a');
    const suAnkiSayfaYolu = window.location.pathname; // Örn: /about.html

    menuLinkleri.forEach(tekilLink => {
        const linkHedefi = tekilLink.getAttribute('href');

        if (linkHedefi && linkHedefi !== "" && linkHedefi !== "#" && suAnkiSayfaYolu.includes(linkHedefi)) {
            tekilLink.classList.add('active-link');
        }
        tekilLink.addEventListener('mouseover', () => {
            tekilLink.style.color = "#73a8c5";
        });
        tekilLink.addEventListener('mouseout', () => {
            if (!tekilLink.classList.contains('active-link')) {
                tekilLink.style.color = "white";
            }
        });
        tekilLink.addEventListener('click', function () {
            menuLinkleri.forEach(oge => oge.classList.remove('active-link'));
            this.classList.add('active-link');
        });
    });




    //Tema Değiştirme
    const temaButonu = document.getElementById('theme-toggle');
    if (temaButonu) {
        temaButonu.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                temaButonu.innerText = "AYDINLIK MOD";
            }
            else {
                temaButonu.innerText = "KOYU MOD";
            }
        });
    }



    ""

    // 5️⃣ GÖREV: Mouseover Bilgi Kutusu 
    const bilgiKutusu = document.createElement('div');
    bilgiKutusu.id = 'ozel-bilgi-kutusu';
    bilgiKutusu.style.position = 'absolute';
    bilgiKutusu.style.display = 'none';
    bilgiKutusu.style.padding = '10px';
    bilgiKutusu.style.backgroundColor = '#003366';
    bilgiKutusu.style.color = 'white';
    bilgiKutusu.style.borderRadius = '5px';
    bilgiKutusu.style.fontSize = '14px';
    bilgiKutusu.style.zIndex = '1000';
    document.body.appendChild(bilgiKutusu);
    const hizmetOgeleri = document.querySelectorAll('.logo span');

    hizmetOgeleri.forEach(oge => {

        oge.addEventListener('mouseover', (olay) => {
            const hizmetAdi = oge.innerText.trim();
            bilgiKutusu.innerText = `${hizmetAdi} -> PortCity Tuzla güvencesiyle sunulmaktadır.`;
            bilgiKutusu.style.display = 'block';
            bilgiKutusu.style.left = olay.pageX + 10 + 'px';
            bilgiKutusu.style.top = olay.pageY + 10 + 'px';
        });
        oge.addEventListener('mousemove', (olay) => {

            bilgiKutusu.style.left = olay.pageX + 10 + 'px';
            bilgiKutusu.style.top = olay.pageY + 10 + 'px';
        });
        oge.addEventListener('mouseout', () => {
            bilgiKutusu.style.display = 'none';
            oge.style.backgroundColor = "transparent";
        });
    });



    //Dinamik Aktivite Listesi
    const etkinlikler = [
        "Tekne Turu",
        "Dalış Deneyimi",
        "Marina Restoranları",
        "Gün Batımı Yürüyüşü",
        "Konser Etkinlikleri"
    ];
    const listeKapsayici = document.getElementById('aktivite');
    if (listeKapsayici) {
        etkinlikler.forEach(tekilEtkinlik => {
            const listeOgesi = document.createElement('li');
            listeOgesi.innerText = tekilEtkinlik;
            listeOgesi.style.padding = "15px 25px";
            listeOgesi.style.backgroundColor = "#376797"; // Tema mavisi
            listeOgesi.style.color = "white";
            listeOgesi.style.borderRadius = "25px";
            listeOgesi.style.fontWeight = "bold";
            listeOgesi.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            listeKapsayici.appendChild(listeOgesi);
        });
    }



    // Beğeni Sayacı 
    let begeniSayisi = 0;
    const begeniButonu = document.getElementById('like-btn');
    const begeniGostergesi = document.getElementById('like-count');
    if (begeniButonu && begeniGostergesi) {
        begeniButonu.addEventListener('click', () => {
            begeniSayisi++;
            begeniGostergesi.innerText = begeniSayisi;
            begeniButonu.style.transform = "scale(1.1)";
            setTimeout(() => {
                begeniButonu.style.transform = "scale(1)";
            }, 100);
            console.log("Yeni beğeni sayısı: " + begeniSayisi);
        });
    }



    //İletişim Formu Kontrol
    const iletisimFormu = document.getElementById('contact-form');

    if (iletisimFormu) {
        iletisimFormu.addEventListener('submit', function (olay) {
            olay.preventDefault();
            const isim = document.getElementById('name').value.trim();
            const eposta = document.getElementById('email').value.trim();
            const mesaj = document.getElementById('message').value.trim();
            if (isim === "" || eposta === "" || mesaj === "") {
                // Eğer alanlardan biri bile boşsa uyarı ver
                alert("Lütfen tüm alanları (Ad, E-posta, Mesaj) doldurunuz!");
            } else {
                // Her şey doğruysa başarı mesajı göster
                alert("Mesajınız başarıyla gönderildi, teşekkürler " + isim);

                // 7. ADIM: Kutuları temizle (reset), böylece yeni mesaj yazılabilir
                iletisimFormu.reset();
            }
        });
    }


    //Galeri Görsel Etkileşimi
    const galleryImages = document.querySelectorAll('.zoom-atma');

    galleryImages.forEach(img => {
        img.addEventListener('click', function () {
            // Eğer tıklanan resim zaten büyükse, sadece onu küçült
            if (this.classList.contains('zoomed')) {
                this.classList.remove('zoomed');
            } else {
                // Önce diğer tüm büyümüş resimleri küçült (Aynı anda sadece biri büyük kalsın)
                galleryImages.forEach(otherImg => otherImg.classList.remove('zoomed'));
                // Sonra tıklananı büyüt
                this.classList.add('zoomed');
            }
        });
    });
});