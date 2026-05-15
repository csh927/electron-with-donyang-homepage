document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    const navLinks = document.querySelectorAll('nav a[data-target]');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.dataset.target;
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const openMapBtn = document.getElementById('open-map');
    const mapModal = document.getElementById('mapModal');
    const closeMapBtn = document.getElementById('closeMap');

    if (openMapBtn && mapModal) {
        openMapBtn.addEventListener('click', event => {
            event.preventDefault();
            mapModal.classList.add('active');
            mapModal.setAttribute('aria-hidden', 'false');
        });
    }

    if (closeMapBtn && mapModal) {
        closeMapBtn.addEventListener('click', () => {
            mapModal.classList.remove('active');
            mapModal.setAttribute('aria-hidden', 'true');
        });
    }

    if (mapModal) {
        mapModal.addEventListener('click', event => {
            if (event.target === mapModal) {
                mapModal.classList.remove('active');
                mapModal.setAttribute('aria-hidden', 'true');
            }
        });
    }
});
