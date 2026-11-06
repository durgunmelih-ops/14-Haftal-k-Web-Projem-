// Sayfa yüklendiğinde çalışacak ana JavaScript kodları
document.addEventListener('DOMContentLoaded', function () {
    
    // HTML'deki formu seçiyoruz
    const contactForm = document.querySelector('.contact-form');

    // Form gönderilmeye çalışıldığında çalışacak olay (Event Listener)
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            
            // Formdaki girdi alanlarını alıyoruz
            const nameInput = document.getElementById('name');
            const bookInput = document.getElementById('suggested-book');
            const feelingsInput = document.getElementById('feelings');

            // Değerlerin boşluklarını temizleyip kontrol ediyoruz
            if (nameInput.value.trim() === '' || bookInput.value.trim() === '' || feelingsInput.value.trim() === '') {
                e.preventDefault(); // Formun hatalı gönderilmesini engeller
                alert('Lütfen tüm alanları doldurunuz! ✨');
            } else {
                // Başarılı mesajı (Formspree'ye gitmeden hemen önce kullanıcıyı bilgilendirir)
                alert('Öneriniz için teşekkürler! Mesajınız iletiliyor... 📚');
            }
        });
    }
});