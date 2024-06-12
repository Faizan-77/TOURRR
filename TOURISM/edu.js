// Add transition effect to content sections
const contentSections = document.querySelectorAll('.content-section');

contentSections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'scale(1.05)';
        section.style.transition = 'transform 0.3s ease';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transform = 'scale(1)';
    });
});

// Open external links in a new tab
const externalLinks = document.querySelectorAll('.external-link');

externalLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = link.getAttribute('href');
        window.open(url, '_blank');
    });
});
