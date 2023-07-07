const cursor = document.getElementById("cursor");
const pointer = document.getElementById("pointer");

document.querySelector('.main-wrapper').onpointermove = coordinates => {
    const { pageX, pageY } = coordinates;

    pointer.style.left = `${pageX}px`;
    pointer.style.top = `${pageY}px`;

    cursor.animate({
        left: `${pageX}px`,
        top: `${pageY}px`}, {duration: 150, fill: "forwards"});
};

const prevBtn = document.querySelector('[data-carousel-btn="prev"]');
const nextBtn = document.querySelector('[data-carousel-btn="next"]');

let slideIndex = 1;
const currentIndex = document.querySelector('.current-index');
currentIndex.innerHTML = `0${slideIndex}`;

const totalIndex = document.querySelector('.total-index');

const tracks = document.querySelectorAll(".slider-track");
tracks.forEach(track => {
    const slides = Array.from(track.children);
    totalIndex.innerHTML = `/0${slides.length}`;

    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });
    
    nextBtn.addEventListener("click", e => {
        const activeSlide = track.querySelector('.active-slide');
        const nextSlide = activeSlide.nextElementSibling;

        const activeContent = activeSlide.querySelector('.active-content');
        const nextContent = nextSlide.querySelector('.main-image-content');

        const amountToMove = nextSlide.style.left;
        track.style.transform = 'translateX(-' + amountToMove + ')';
        activeSlide.classList.remove('active-slide');
        nextSlide.classList.add('active-slide');
        activeContent.classList.remove('active-content');
        nextContent.classList.add('active-content');
        nextContent.style.setProperty('--_animation-name', 'right-left');
    });
    
    prevBtn.addEventListener("click", e => {
        const activeSlide = track.querySelector('.active-slide');
        const prevSlide = activeSlide.previousElementSibling;

        const activeContent = activeSlide.querySelector('.active-content');
        const prevContent = prevSlide.querySelector('.main-image-content');

        const amountToMove = prevSlide.style.left;
        track.style.transform = 'translateX(-' + amountToMove + ')';
        activeSlide.classList.remove('active-slide');
        prevSlide.classList.add('active-slide');
        activeContent.classList.remove('active-content');
        prevContent.classList.add('active-content');
        prevContent.style.setProperty('--_animation-name', 'left-right');
    });
});

nextBtn.addEventListener("click", () => {
    const activeText = document.querySelector('.active-text');
    const nextText = activeText.nextElementSibling;

    const activeFeature = document.querySelector('.active-feature');
    const nextFeature = activeFeature.nextElementSibling;

    activeText.classList.remove('active-text');
    nextText.classList.add('active-text');

    activeFeature.classList.remove('active-feature');
    nextFeature.classList.add('active-feature');

    nextText.style.setProperty('--_animation-name', 'right-left');
    nextFeature.style.setProperty('--_animation-name', 'right-left');

    currentIndex.innerHTML = `0${++slideIndex}`;

    prevBtn.disabled = false;
    if (nextText.nextElementSibling === null) {
        nextBtn.disabled = true;
        prevBtn.disabled = false;
    }
});

prevBtn.addEventListener("click", () => {
    const activeText = document.querySelector('.active-text');
    const prevText = activeText.previousElementSibling;
    
    const activeFeature = document.querySelector('.active-feature');
    const prevFeature = activeFeature.previousElementSibling;

    activeText.classList.remove('active-text');
    prevText.classList.add('active-text');
    
    activeFeature.classList.remove('active-feature');
    prevFeature.classList.add('active-feature');

    currentIndex.innerHTML = `0${--slideIndex}`;

    prevText.style.setProperty('--_animation-name', 'left-right');
    prevFeature.style.setProperty('--_animation-name', 'left-right');
    nextBtn.disabled = false;
    if (prevText.previousElementSibling === null) {
        nextBtn.disabled = false;
        prevBtn.disabled = true;
    }
});