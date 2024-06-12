document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card img');
    const bigImages = document.querySelectorAll('.big-image');
    
    cards.forEach((card, index) => {
        card.addEventListener('click', function() {
            bigImages[index].style.display = 'flex';
        });
    });

    bigImages.forEach(bigImage => {
        bigImage.addEventListener('click', function() {
            this.style.display = 'none';
        });
    });
});
