document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links li a');
    const currentPath = window.location.pathname;

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
});

document.querySelectorAll('.main-download-btn, .download-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.href.endsWith('.pdf')) {
            this.setAttribute('download', this.getAttribute('download') || 'document.pdf');
        }
    });
});