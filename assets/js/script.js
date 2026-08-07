/**
 * StarlightDaemon Portfolio - Interactive Features
 */


// Main Init
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    initSmoothScroll();

    // Intersection Observer for scroll animations
    initScrollAnimations();

    // Dynamic year in footer
    updateCopyrightYear();

    // Whole-card click-through to each project's primary link
    initCardClickThrough();

});

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards for staggered animation
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`;
        observer.observe(category);
    });
}

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
    .project-card.visible,
    .skill-category.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

/**
 * Make each project card's body act as a click target for its primary
 * link (Demo/Gallery). Cards without a live primary link (e.g. the
 * promoted Stargate card) are left alone. Clicks on inner links keep
 * their own behavior, and selecting card text never triggers navigation.
 */
function initCardClickThrough() {
    document.querySelectorAll('.project-card').forEach(card => {
        const primary = card.querySelector('.project-links-main a.project-link[href]');
        if (!primary) { return; }

        card.classList.add('card-clickable');

        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) { return; }
            const selection = window.getSelection();
            if (selection && selection.type === 'Range') { return; }

            if (e.ctrlKey || e.metaKey) {
                window.open(primary.href, '_blank', 'noopener');
            } else {
                window.location.href = primary.href;
            }
        });

        // Middle-click opens the primary link in a new tab, like a real link
        card.addEventListener('auxclick', (e) => {
            if (e.button !== 1 || e.target.closest('a')) { return; }
            window.open(primary.href, '_blank', 'noopener');
        });
    });
}

/**
 * Update copyright year dynamically
 */
function updateCopyrightYear() {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace(/©\s*\d{4}/, `© ${currentYear}`);
    }
}




/**
 * Optional: Add typing effect to tagline
 * Uncomment to enable
 */
/*
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Usage:
// const tagline = document.querySelector('.tagline');
// typeWriter(tagline, 'Developer & Open Source Enthusiast');
*/
