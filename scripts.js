let currentIndex = 0;

function showNextImage() {
    const carouselInner = document.querySelectorAll('.carousel-inner');
    carouselInner.forEach((inner) => {
        const items = inner.querySelectorAll('.carousel-item');
        currentIndex = (currentIndex + 1) % items.length;
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

setInterval(showNextImage, 3000);
