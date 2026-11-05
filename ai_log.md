bu dosyaya web projesi dersi boyunca hafta hafta yapay zekaya yazdığımız promtları ve bize verdiği cevapları,
ve bu cevaplardan nasıl yararlandığımızı not edeceğiz.
16 Ekim görevi 
ai a sorduğum soru:
verdiği cevap:
ve bu cevabı nasııl kullandım:
16 Ekim görevi: 
ai a sorduğum soru: Selam dostum, önlisans öğrencisiyim  temel HTLM ve C# biliyorum. 14 haftalık web projemde bir problem ve çözüm belirlemem gerekiyor. Belirlediğim problem; Arkadaş ortamında "sen hangi kitapları okudun" diye sorulduğunda bunu tam olarak hatırlayamıyoruz ve sohbeti tam olarak derin bir hale getiremiyoruz. Kitaplar hakkında tartışamıyor ve bilgi aktarımı sağlayamıyoruz. Bu sorunu ortadan kaldırmak için, bir web sitesi oluşturmak istiyorum. Oluşturduğum web sitesine kitap okudukça eklemek istiyorum. Bakımı kolay olmalı ve site çalışıyor olmalı. Fikrimi eleştir ve eksiklerimi bana belirt.
verdiği cevap: Fikir iyi: problem gerçek, küçük ve 14 haftaya sığar. Ama birkaç eksik ve çelişki var.
Güçlü yanları
Problem net ve herkesin yaşadığı bir şey.
Kapsamı küçük, bitirilebilir.
Kullanım senaryosu belli: arkadaş ortamında telefonu açıp gösteriyorsun.
Eksikler ve eleştiriler
1. Problemin yarısını çözmüyorsun.
Problemin iki parçası var: “hatırlayamıyoruz” ve “sohbeti derinleştiremiyoruz”. Sadece kitap adı, puan ve özet listesi birincisini çözer, ikincisini çözmez. Sohbeti derinleştiren şey kitabın özeti değil, senin o kitap hakkında ne düşündüğündür. Bu yüzden her karta şunları eklemeni öneririm:
“Beni en çok etkileyen şey” (1-2 cümle)
Sevdiğin bir alıntı
Okuma tarihi
“Kime önerirsin?” notu
Özeti internetten kopyalama, kendi cümlelerinle yaz. Hem telif açısından daha güvenli, hem de proje ödevinde “kendi emeğim” demen daha kolay olur.
2. “Her cihazdan çalışsın” ile LocalStorage çelişir.
LocalStorage veriyi sadece o tarayıcıda, o cihazda tutar. Bilgisayarda kitap eklersen telefonda görünmez, tarayıcı verisini temizlersen her şey gider. Arkadaşına gösterirken telefonunda kitaplar yoksa proje çalışmıyor demektir.
3. Önerdiğim çözüm: kitapları bir veri dosyasında tut ve siteyi yayınla.
Kitapları kitaplar.js gibi bir dosyada liste olarak sakla. Yeni kitap eklemek = dosyaya bir blok eklemek.
Siteyi GitHub Pages veya Netlify’a yükle (ikisi de ücretsiz). Böylece her cihazdan aynı linkle açılır.
Kartları JavaScript ile bu listeden otomatik oluştur. Temel JS çok kolay ve C# bildiğin için mantığı çabuk oturur.
Bu yöntem bakımı da kolaylaştırır: HTML’e dokunmadan sadece veri dosyasını güncellersin. Daha da basiti, JavaScript hiç kullanmadan her kitap için kopyala-yapıştır bir HTML kartı yazmak. O da çalışır ama kitap sayısı arttıkça dağılır.
4. Kullanılabilirlik eksikleri.
Arama kutusu ve tür filtresi. 40 kitap olunca “şu fantastik olanı bir bulayım” diyeceksin.
Mobil uyum (responsive tasarım). Siteyi çoğunlukla telefondan göstereceksin, bu yüzden önce mobili tasarla.
Sıralama: en yeni okuduğun en üstte olsun.
5. Kapak görselleri.
Başka sitelerden link vermek bir gün kırılır ve resim kaybolur. Görselleri proje klasörüne indirip küçült (yaklaşık 300 px genişlik yeter), yoksa site yavaşlar.
6. Ödev açısından eksik: başarıyı nasıl ölçeceksin?
Proje raporunda “problem çözüldü mü?” sorusuna cevap vermen gerekecek. Basit bir ölçüt yeterli: “Arkadaş ortamında 3 kitabı siteden gösterip tartıştım” ya da arkadaşlarından 2-3 kişiye siteyi gösterip geri bildirim al.
Önerilen 14 haftalık akış
Hafta 1-2: Fikir kesinleşir, kart tasarımı kâğıtta çizilir.
Hafta 3-6: HTML/CSS iskelet, mobil uyumlu kart tasarımı, 5 kitapla test.
Hafta 7-9: Veri dosyası + JS ile otomatik kart üretme.
Hafta 10-11: Arama/filtre, siteyi yayına alma.
Hafta 12-14: Arkadaşlarla deneme, düzeltme, rapor.
Bir şey eklemeden önce kendine “bu olmadan site çalışır mı?” diye sor. Cevap evetse o özellik geri kalan zamana kalır. Kodun her zaman çalışır halde kalması, özellik sayısından daha önemli.
İstersen bir sonraki adımda kart tasarımını (hangi alan nerede olacak) birlikte netleştirebiliriz.
ai sorduğum soru:2.Madde de belirttiğin "her cihazda çalışsın" durumunu istemiyorum, sadece sitenin benim tarafından çalışıyor olması ve bakımlarının kolay yapılıyor olması benim için yeterli.
verdiği cevap: Tamam, o zaman gereksinim değişiyor ve işin kolaylaşıyor. Hosting (yayına alma) kısmı zorunluluktan çıkar, istersen sonraya bırakırsın.
Burada iki yol var:
A) Veri dosyası (kitaplar.js)
Kitapları bir dosyada liste olarak tutarsın, site kartları oradan üretir. Yeni kitap eklemek için dosyayı açıp bir blok eklersin, kaydedip sayfayı yenilersin. Veri proje klasöründe durduğu için tarayıcı verisini temizlesen bile kaybolmaz, klasörü yedeklemen yeterli. Bakım açısından en sağlam seçenek bu.
B) LocalStorage + ekleme formu
Sitenin içine “Kitap ekle” formu koyarsın, veri tarayıcıda saklanır. Kod yazmadan site üzerinden ekleme yapmak güzel, ama iki riski var:
Tarayıcı verisini temizlersen veya tarayıcıyı değiştirirsen kitapların gider.
Veri sadece o cihazdaki o tarayıcıda durur. Kitabı bilgisayardan ekleyip telefondan gösterirsen telefonda görünmez.
LocalStorage’ı seçersen en az bir “Dışa aktar / İçe aktar” düğmesi (verileri JSON dosyası olarak indirme ve geri yükleme) ekle. Bu, yedek sorununu çözer.
“Bakım kolay olsun ve site çalışsın” önceliğine göre A’yı öneririm. Daha basit, daha az hata çıkarır ve veri kaybı riski yok. B daha gösterişli ama ödevde “kodun her zaman çalışması” daha önemliyse gereksiz risk.
Hangisini seçeceğin için bir şeyi bilmem lazım: kitabı eklediğin cihaz ile arkadaşlara gösterdiğin cihaz aynı mı (mesela hepsi telefonunda mı)?
ai sorduğum soru: A seçeneğini seçiyorum lakin ben bu projeyi bilgisayarda yazacağım lakin telefondan açtığım zaman hangi sorunlarla karşılacağım,  bir sorun ile karşılacaksam da bunun çözümü nedir,belirtir misin ?
verdiği cevap:Çoğu sorun tek bir yerden çıkıyor: dosyalar bilgisayarında, telefon onlara doğrudan ulaşamıyor. Sorunları iki gruba ayırayım.
1. Telefonda siteyi açabilmek
Telefon, bilgisayardaki klasörü göremez. Üç yol var:
Siteyi yayınlamak (en kolayı): GitHub Pages veya Netlify’a klasörü yüklersin, sana bir link verir. Telefonda o linki açarsın. Güncelleme yaparken dosyayı tekrar yüklemen yeterli. Bu, “sadece benim kullanımım için” kararınla çelişmez. Linki kimseye vermezsen kimse bilmez, istersen sonradan kapatırsın.
Aynı Wi-Fi üzerinden: VS Code’da “Live Server” eklentisiyle siteyi başlatıp telefonda bilgisayarınızınIP:port yazarsın. Sadece bilgisayar açıkken ve aynı ağdayken çalışır, arkadaş ortamında işe yaramaz.
Klasörü telefona kopyalamak: Çalışır ama her güncellemede tekrar kopyalaman gerekir, bakımı zorlaştırır.
Arkadaş ortamında göstereceğin için ilk yolu öneririm.
2. Telefonda karşılaşabileceğin sorunlar
Sorun	Neden	Çözüm
Site telefonda minik, masaüstü görünümü gibi açılır	Viewport etiketi eksik	<head> içine <meta name="viewport" content="width=device-width, initial-scale=1.0"> ekle
Sayfa yana kayar	Sabit px genişlikler	max-width: 100%, % ve rem kullan, kartlar için flex-wrap veya CSS Grid
Türkçe karakterler bozuk görünür	Kodlama sorunu	<meta charset="UTF-8"> ekle ve dosyaları UTF-8 kaydet
Kapak görselleri çıkmaz	Dosya adında büyük/küçük harf farkı, boşluk veya Türkçe karakter (Kapak.JPG ≠ kapak.jpg). Yayınlayınca sunucu bunlara duyarlıdır, bilgisayarda fark etmez	Dosya adlarını küçük harf, boşluksuz ve Türkçe karaktersiz yaz: simyaci.jpg
Site yavaş açılır	Kapaklar telefon kamerası boyutunda büyük	Görselleri yaklaşık 300-400 px genişliğe küçült
Hover efektleri çalışmaz	Telefonda fare yok	Önemli bilgiyi hover’a bağlama, kartta her zaman görünsün
Butonlara basması zor	Küçük tıklama alanı	Buton ve linkleri en az yaklaşık 44 px yükseklikte yap
Güncellediğim kitap telefonda görünmüyor	Tarayıcı eski sürümü önbellekte tutuyor	Sayfayı yenile veya sekmeyi kapatıp aç
Kitap listesi hiç gelmez	kitaplar.js yanlış yazıldı (virgül, tırnak eksik)	Eklemeden önce kopyala-yapıştır yap, son kitaptan sonraki virgüle dikkat et
Önemli bir ipucu: veri dosyasını .js olarak tut
kitaplar.json yapıp fetch ile okumayı denersen, siteyi çift tıklayıp açtığında bilgisayarda çalışmaz (tarayıcı yerel dosya okumayı engeller). kitaplar.js içinde bir liste tanımlayıp index.html’de <script src="kitaplar.js"> ile çağırırsan hem çift tıklamayla hem yayınlanınca sorunsuz çalışır.
Test etmek için
Telefona bakmadan önce bilgisayarda Chrome’da F12 → Ctrl+Shift+M ile telefon görünümünü aç. Çoğu sorunu orada yakalarsın. Sonra gerçek telefonda son kontrolü yaparsın.
İstersen bir sonraki adımda kitaplar.js dosyasının nasıl görünmesi gerektiğini ve kartların HTML iskeletini birlikte yazalım.
ai sorduğum soru: O zaman bir sorunumuz kaldı mı ? Projeyi yürürlülüğe geçireyim mi ?
verdiği cevap:Büyük bir sorun kalmadı, tasarım ve yapı olarak hazırsın. Ama ben kodu bir tarayıcıda çalıştırıp denemedim, o yüzden “yürürlüğe geç” demeden önce şu kısa kontrolü yap.
Yayından önce kontrol listesi
Bilgisayarda aç ve dene. index.html’e çift tıkla, örnek kitapların kart olarak göründüğünü gör. Görünmezse F12 → Console’daki kırmızı hataya bak.
Kendi gerçek kitaplarını ekle. En az 5 tane, kapak görselleriyle. Örnek kitaplarla yayınlama.
Tırnak işaretine dikkat et. Metinlerin içinde çift tırnak (") kullanırsan liste bozulur. Alıntı yazarken \" yaz ya da tek tırnak kullan: ozet: "Kitapta 'özgürlük' kavramı işlenir."
Eksik görseli kontrol et. Kapak dosyası yoksa kartta bozuk resim simgesi çıkar. Kapağı olmayan kitap için gorseller/yok.jpg adında düz renkli bir yedek görsel koyabilir ve kapak alanına onu yazabilirsin.
Telefon görünümünü test et. Chrome’da F12 → Ctrl+Shift+M ile bak: yana kayma yok, yazılar okunuyor, kartlar tek sütun.
Yayınlama kararı
Telefondan açman gerektiği için siteyi GitHub Pages veya Netlify’a yüklemen gerekecek. Şunu bil: yayınlanan site internette herkese açık olur. Linki paylaşmazsan kimse bulmaz ama gizli de değildir. Bu seni rahatsız etmiyorsa sorun yok. Rahatsız ediyorsa sitede kişisel bilgi (tam ad, telefon vb.) bulundurma, zaten kitap listesi için buna gerek yok. Kapak görsellerini de kendin çekmediysen, ödev dışında paylaşmayacağın için bu küçük bir konu.
Ödev açısından bir not
Proje 14 haftalık ve belirli aralıklarla güncelleme istiyor. Temel sürümü erken bitirmen sorun değil, hatta iyi. Sonraki haftalara arama kutusu, tür filtresi ve tasarım iyileştirmesini bırakabilirsin. Önemli olan, her güncellemede sitenin çalışır halde kalması.
Kontrolleri geçtiysen yayına alabilirsin. İstersen GitHub Pages ile yayınlama adımlarını tek tek birlikte yapalım.
ai sorduğum soru: site ve tasarım kısmı sonra yapılacak kısımlar. Problem ve çözümü hakkında hemfikirsek github üzerinden projemi anlatacağım
verdiği cevap:Evet, problem ve çözüm konusunda hemfikiriz. İkisi de net, küçük ve bitirilebilir. Siteyi sonraya bırakman da mantıklı, önce fikrin sağlam anlatılması gerekiyor.
Problem ve çözüm özeti
Problem: Arkadaş ortamında “sen hangi kitapları okudun?” diye sorulduğunda okuduğumuz kitapları tam hatırlayamıyoruz. Kitaplar hakkında konuşmak, tartışmak ve bilgi aktarmak zorlaşıyor, sohbet yüzeyde kalıyor.
Çözüm: Okuduğum her kitabı kısa bilgileriyle (ad, yazar, puan, kapak, tür, özet ve kendi notum) kaydettiğim, telefondan açıp arkadaşlarıma gösterebileceğim kişisel bir kitap sitesi. Kitaplar tek bir veri dosyasında tutulacak, böylece yeni kitap eklemek ve bakım yapmak kolay olacak.
30 Ekim 2026 İskelet Ödevi
ai sorduğum soru: # 14-Haftal-k-Web-Projem-
# Okuduğum Kitaplar
Okuduğum kitapları kaydedip arkadaşlarıma gösterebildiğim, kişisel bir kitap sitesi projesi.
## Problem
Arkadaş ortamında "sen hangi kitapları okudun?" diye sorulduğunda okuduğumuz kitapları tam olarak hatırlayamıyoruz. Bu yüzden kitaplar hakkında konuşmak, tartışmak ve bilgi aktarmak zorlaşıyor; sohbet derinleşemiyor, yüzeyde kalıyor.
## Çözüm
Okuduğum her kitabı kısa bilgileriyle kaydettiğim bir web sitesi yapmak. Soru geldiğinde siteyi telefondan açıp kitaplarımı gösterebileceğim ve onlar üzerinden sohbet edebileceğim. Kitap okudukça siteye yeni kitap ekleyeceğim.
## Hedef Kitle
Gençler ve yetişkinler.
## Planlanan Özellikler
- Kitap kartları: kitap adı, yazar, puan, kapak görseli, tür etiketi, kısa özet ve kendi notum
- Kitapların en yeni okunandan eskiye doğru sıralanması
- Telefonda ve bilgisayarda düzgün görünen (mobil uyumlu) tasarım
## Kullanılacak Teknolojiler
- HTML
- CSS
verdiği cevap: Gerçekleştirilen Adımlar ve Güncellemeler

A. Tasarım ve Sayfa Yapısı Güncellemeleri

Başlık Alanı Düzenlemesi:

Sayfa başlığının (<h1>) sol tarafında yer alan kitap emojisi (📚) kaldırıldı.

Temiz metin başlığı: <h1>Okuduğum Kitaplar</h1> olarak güncellendi.

Görsel Hizalama ve Boyutlandırma:

Kitap kapak görsellerinin kart alanı içerisindeki duruşunu iyileştirmek için object-fit kuralları belirlendi.

Kapakların oranının bozulmadan tam sığması için object-fit: contain seçeneği yapılandırıldı.

B. "Müthiş Psikoloji" Kitap Kartı Entegrasyonu

medu.html içerisine yeni kitap kartı eklendi:

Görsel Yolu: images/muthis-psikoloji.jpg

Tür: Psikoloji

Puan: ⭐ 4.5/5

Özet ve Notlar: Kitap özeti ve kişisel değerlendirme metinleri eklendi.

C. İletişim & Kitap Önerisi Formu Entegrasyonu

Kitap kartlarının altına, <footer> etiketinin hemen üstüne yeni bir iletişim bölümü eklendi.

Form Alanları:

Adınız (👤)

Önerdiğiniz Kitap (📖)

Hissettikleriniz & Düşünceleriniz (✨)

E-Posta Servisi: Form verilerinin e-posta adresine düşmesini sağlamak amacıyla Formspree altyapısına uygun POST yönlendirmesi kuruldu.

Görsel İyileştirmeler:

Form alanlarına ikonlar, yumuşak geçişli odaklanma (focus) efektleri ve modern gradyan buton eklendi.

📂 3. Güncel Dosya Yapıları ve Kod Kodlamaları

📄 medu.html (Tam Kod Yapısı)

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Okuduğum Kitaplar</title>
    <link rel="stylesheet" href="medu.css">
</head>
<body>

    <header class="main-header">
        <h1>Okuduğum Kitaplar</h1>
        <p>Okuduğum kitaplar, bıraktıkları izler ve kişisel notlarım.</p>
    </header>

    <main class="container">
        <section class="book-grid">
            
            <!-- Müthiş Psikoloji Kitap Kartı -->
            <article class="book-card">
                <div class="card-image">
                    <img src="images/muthis-psikoloji.jpg" alt="Müthiş Psikoloji Kitap Kapağı">
                    <span class="badge">Psikoloji</span>
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h2>Müthiş Psikoloji</h2>
                        <span class="rating">⭐ 4.5/5</span>
                    </div>
                    <h3 class="author">Destek Yayınları / Kolektif</h3>
                    <p class="summary">
                        <strong>Özet:</strong> Günlük hayatta karşılaştığımız psikolojik süreçleri, insan ilişkilerini ve öz-farkındalığı sade bir dille ele alan rehber niteliğinde bir eser.
                    </p>
                    <p class="personal-note">
                        <strong>Kişisel Notum:</strong> Kendini anlama ve duygusal farkındalık kazanma konusunda oldukça pratik bir başucu kitabı.
                    </p>
                </div>
            </article>

        </section>

        <!-- İletişim ve Kitap Önerisi Formu -->
        <section class="contact-section">
            <div class="contact-header">
                <h2>💬 İletişim & Kitap Önerisi</h2>
                <p>Bana bir kitap önermek veya hislerinizi paylaşmak ister misiniz?</p>
            </div>
            
            <form class="contact-form" action="https://formspree.io/f/E_POSTA_ADRESINIZ" method="POST">
                
                <div class="form-group">
                    <label for="name">👤 Adınız</label>
                    <input type="text" id="name" name="name" placeholder="Örn: Ahmet Yılmaz" required>
                </div>

                <div class="form-group">
                    <label for="suggested-book">📖 Önerdiğiniz Kitap</label>
                    <input type="text" id="suggested-book" name="suggested_book" placeholder="Örn: Dünün Dünyası - Stefan Zweig" required>
                </div>

                <div class="form-group">
                    <label for="feelings">✨ Hissettikleriniz & Düşünceleriniz</label>
                    <textarea id="feelings" name="feelings" rows="4" placeholder="Bu kitap size ne hissettirdi, neden okumalıyım?" required></textarea>
                </div>

                <button type="submit" class="submit-btn">
                    <span>Öneriyi Gönder</span> ✨
                </button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 - Kişisel Kitap Arşivi</p>
    </footer>

</body>
</html>


🎨 medu.css (Tam Kod Yapısı)

/* Temel Sıfırlamalar ve Değişkenler */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f6f8;
    color: #333;
    line-height: 1.6;
}

/* Başlık Alanı */
.main-header {
    text-align: center;
    padding: 2.5rem 1rem;
    background-color: #2c3e50;
    color: #fff;
}

.main-header h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

/* Ana Konteyner ve Grid */
.container {
    max-width: 1100px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

/* Kitap Kartı Stilleri */
.book-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.book-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card-image {
    position: relative;
    height: 260px;
    background-color: #f8fafc;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: rgba(44, 62, 80, 0.85);
    color: #fff;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.card-content {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
}

.card-header h2 {
    font-size: 1.25rem;
    color: #1a202c;
}

.rating {
    font-size: 0.9rem;
    font-weight: bold;
    color: #d69e2e;
}

.author {
    font-size: 0.95rem;
    color: #718096;
    margin-bottom: 0.8rem;
    font-weight: 500;
}

.summary, .personal-note {
    font-size: 0.9rem;
    color: #4a5568;
    margin-bottom: 0.6rem;
}

.personal-note {
    margin-top: auto;
    padding-top: 0.6rem;
    border-top: 1px dashed #e2e8f0;
    color: #2d3748;
}

/* Yenilenmiş İletişim ve Form Stilleri */
.contact-section {
    background: #ffffff;
    border-radius: 16px;
    padding: 2.5rem 2rem;
    margin-top: 3.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid #edf2f7;
}

.contact-header {
    text-align: center;
    margin-bottom: 2rem;
}

.contact-header h2 {
    color: #2c3e50;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
}

.contact-header p {
    color: #718096;
    font-size: 0.95rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    max-width: 580px;
    margin: 0 auto;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-weight: 600;
    font-size: 0.9rem;
    color: #34495e;
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.85rem 1.1rem;
    background-color: #f8fafc;
    border: 1.5px solid #e2e8f0;
    border-radius: 10px;
    font-size: 0.95rem;
    color: #2d3748;
    outline: none;
    transition: all 0.25s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #a0aec0;
}

.form-group input:focus,
.form-group textarea:focus {
    background-color: #ffffff;
    border-color: #3498db;
    box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.12);
}

.submit-btn {
    background: linear-gradient(135deg, #2c3e50, #34495e);
    color: #ffffff;
    border: none;
    padding: 0.95rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.25s ease;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: 0 4px 12px rgba(44, 62, 80, 0.2);
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(44, 62, 80, 0.3);
    background: linear-gradient(135deg, #1a252f, #2c3e50);
}

.submit-btn:active {
    transform: translateY(0);
}

/* Footer */
footer {
    text-align: center;
    padding: 1.5rem;
    color: #718096;
    font-size: 0.85rem;
}

/* Mobil Uyumlu Düzenlemeler */
@media (max-width: 600px) {
    .book-grid {
        grid-template-columns: 1fr;
    }
    
    .main-header h1 {
        font-size: 1.6rem;
    }

    .contact-section {
        padding: 1.5rem 1.25rem;
    }
}
Proje Adı: 14-Haftalık Web Projem - Okuduğum Kitaplar

Tarih: 6 Kasım 2026

Dosya Yapısı:

medu.html (Ana Yapı & İskelet)

medu.css (Görsel Tasarım & Mobil Uyum)

medu.js (Form Doğrulama & İnteraktivite)

📌 Proje Özeti ve Amaç

Okunan kitapların kaydedildiği, mobil ve masaüstü cihazlarda sorunsuz çalışan kişisel bir kitap arşiv sitesi projesi. Projede anlamsal (semantic) HTML5 etiketleri, responsive (mobil uyumlu) CSS Grid yapısı ve form dinamizmini sağlayan JavaScript (DOM Manipülasyonu) kullanılmıştır.

📋 Adım Adım Yapılan Değişiklikler ve Kararlar

1. Başlangıç & Konfigürasyon

Kullanılacak temel dosya isimleri medu.html ve medu.css olarak belirlendi.

Sayfa başlığındaki (<h1>) kitap emojisi (📚) kaldırılarak sade bir başlık oluşturuldu.

2. Kitap Kartları ve Görsel Hizalama

Kitap kapak görsellerinin kart boyutlarına sündürülmeden ve kesilmeden tam sığması için CSS object-fit: contain; kuralı uygulandı.

"Müthiş Psikoloji" kitabı ve detayları HTML kart yapısına eklendi.

3. İletişim & Kitap Önerisi Formu Entegrasyonu

Kitap listesinin altına "İletişim & Kitap Önerisi" alanı eklendi.

Kullanıcıdan Adı, Önerdiği Kitap ve Hissettikleri bilgilerini toplayan form tasarlandı.

Formun arka planda Formspree servisine yönlenmesi sağlandı.

İkonlar, alan odaklanma (focus) efektleri ve gradyan gönder butonu ile form tasarımı geliştirildi.

4. JavaScript Entegrasyonu (medu.js)

Projeye JavaScript dâhil edilerek HTML dosyasının en altına </body> öncesinde <script src="medu.js"></script> şeklinde bağlandı.

Form doğrulama (validation) mekanizması kuruldu:

Kullanıcının eksik/boş alan bırakması veya sadece boşluk tuşuna basması value.trim() ile engellendi.

Hatalı gönderimlerde e.preventDefault() ile sayfa yenilenmesi durduruldu ve kullanıcıya uyarı gösterildi.

💻 Tüm Proje Kodları

📄 medu.html

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Okuduğum Kitaplar</title>
    <link rel="stylesheet" href="medu.css">
</head>
<body>

    <header class="main-header">
        <h1>Okuduğum Kitaplar</h1>
        <p>Okuduğum kitaplar, bıraktıkları izler ve kişisel notlarım.</p>
    </header>

    <main class="container">
        <section class="book-grid">
            
            <!-- Müthiş Psikoloji Kitap Kartı -->
            <article class="book-card">
                <div class="card-image">
                    <img src="images/muthis-psikoloji.jpg" alt="Müthiş Psikoloji Kitap Kapağı">
                    <span class="badge">Psikoloji</span>
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h2>Müthiş Psikoloji</h2>
                        <span class="rating">⭐ 4.5/5</span>
                    </div>
                    <h3 class="author">Destek Yayınları / Kolektif</h3>
                    <p class="summary">
                        <strong>Özet:</strong> Günlük hayatta karşılaştığımız psikolojik süreçleri, insan ilişkilerini ve öz-farkındalığı sade bir dille ele alan rehber niteliğinde bir eser.
                    </p>
                    <p class="personal-note">
                        <strong>Kişisel Notum:</strong> Kendini anlama ve duygusal farkındalık kazanma konusunda oldukça pratik bir başucu kitabı.
                    </p>
                </div>
            </article>

        </section>

        <!-- İletişim ve Kitap Önerisi Formu -->
        <section class="contact-section">
            <div class="contact-header">
                <h2>💬 İletişim & Kitap Önerisi</h2>
                <p>Bana bir kitap önermek veya hislerinizi paylaşmak ister misiniz?</p>
            </div>
            
            <form class="contact-form" action="https://formspree.io/f/E_POSTA_ADRESINIZ" method="POST">
                
                <div class="form-group">
                    <label for="name">👤 Adınız</label>
                    <input type="text" id="name" name="name" placeholder="Örn: Ahmet Yılmaz" required>
                </div>

                <div class="form-group">
                    <label for="suggested-book">📖 Önerdiğiniz Kitap</label>
                    <input type="text" id="suggested-book" name="suggested_book" placeholder="Örn: Dünün Dünyası - Stefan Zweig" required>
                </div>

                <div class="form-group">
                    <label for="feelings">✨ Hissettikleriniz & Düşünceleriniz</label>
                    <textarea id="feelings" name="feelings" rows="4" placeholder="Bu kitap size ne hissettirdi, neden okumalıyım?" required></textarea>
                </div>

                <button type="submit" class="submit-btn">
                    <span>Öneriyi Gönder</span> ✨
                </button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 - Kişisel Kitap Arşivi</p>
    </footer>

    <script src="medu.js"></script>
</body>
</html>


🎨 medu.css

/* Temel Sıfırlamalar ve Değişkenler */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f6f8;
    color: #333;
    line-height: 1.6;
}

/* Başlık Alanı */
.main-header {
    text-align: center;
    padding: 2.5rem 1rem;
    background-color: #2c3e50;
    color: #fff;
}

.main-header h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

/* Ana Konteyner ve Grid */
.container {
    max-width: 1100px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

/* Kitap Kartı Stilleri */
.book-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.book-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card-image {
    position: relative;
    height: 260px;
    background-color: #f8fafc;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: rgba(44, 62, 80, 0.85);
    color: #fff;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.card-content {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
}

.card-header h2 {
    font-size: 1.25rem;
    color: #1a202c;
}

.rating {
    font-size: 0.9rem;
    font-weight: bold;
    color: #d69e2e;
}

.author {
    font-size: 0.95rem;
    color: #718096;
    margin-bottom: 0.8rem;
    font-weight: 500;
}

.summary, .personal-note {
    font-size: 0.9rem;
    color: #4a5568;
    margin-bottom: 0.6rem;
}

.personal-note {
    margin-top: auto;
    padding-top: 0.6rem;
    border-top: 1px dashed #e2e8f0;
    color: #2d3748;
}

/* İletişim ve Form Stilleri */
.contact-section {
    background: #ffffff;
    border-radius: 16px;
    padding: 2.5rem 2rem;
    margin-top: 3.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid #edf2f7;
}

.contact-header {
    text-align: center;
    margin-bottom: 2rem;
}

.contact-header h2 {
    color: #2c3e50;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
}

.contact-header p {
    color: #718096;
    font-size: 0.95rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    max-width: 580px;
    margin: 0 auto;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-weight: 600;
    font-size: 0.9rem;
    color: #34495e;
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.85rem 1.1rem;
    background-color: #f8fafc;
    border: 1.5px solid #e2e8f0;
    border-radius: 10px;
    font-size: 0.95rem;
    color: #2d3748;
    outline: none;
    transition: all 0.25s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #a0aec0;
}

.form-group input:focus,
.form-group textarea:focus {
    background-color: #ffffff;
    border-color: #3498db;
    box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.12);
}

.submit-btn {
    background: linear-gradient(135deg, #2c3e50, #34495e);
    color: #ffffff;
    border: none;
    padding: 0.95rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.25s ease;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: 0 4px 12px rgba(44, 62, 80, 0.2);
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(44, 62, 80, 0.3);
    background: linear-gradient(135deg, #1a252f, #2c3e50);
}

.submit-btn:active {
    transform: translateY(0);
}

/* Footer */
footer {
    text-align: center;
    padding: 1.5rem;
    color: #718096;
    font-size: 0.85rem;
}

/* Mobil Uyumlu Düzenlemeler */
@media (max-width: 600px) {
    .book-grid {
        grid-template-columns: 1fr;
    }
    
    .main-header h1 {
        font-size: 1.6rem;
    }

    .contact-section {
        padding: 1.5rem 1.25rem;
    }
}


⚡ medu.js

document.addEventListener('DOMContentLoaded', function () {
    
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            
            const nameInput = document.getElementById('name');
            const bookInput = document.getElementById('suggested-book');
            const feelingsInput = document.getElementById('feelings');

            if (nameInput.value.trim() === '' || bookInput.value.trim() === '' || feelingsInput.value.trim() === '') {
                e.preventDefault();
                alert('Lütfen tüm alanları doldurunuz! ✨');
            } else {
                alert('Öneriniz için teşekkürler! Mesajınız iletiliyor... 📚');
            }
        });
    }
});
