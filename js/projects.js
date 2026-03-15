document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const cards = document.querySelectorAll('.project-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.getAttribute('data-filter');

            cards.forEach(card => {
                const year = card.getAttribute('data-year');

                if (filter === 'all' || filter === year) {
                    card.style.display = 'flex';
                    card.style.animation = 'none';
                    card.offsetHeight;
                    card.style.animation = null; 
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});