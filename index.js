// const buttons = document.querySelectorAll("[data-carousel-btn]");

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const offset = button.dataset.carouselBtn === 'next' ? 1 : -1;
//         const slideTracks = document.querySelectorAll('.slider-track');
//         slideTracks.forEach(slideTrack => {
//             const slides = slideTrack.querySelectorAll(".slide");
//             console.log(slides);
//             const activeSlide = slideTrack.querySelector(".active-slide");
//             console.log(activeSlide);
//             let newIndex = [...slides].indexOf(activeSlide) + offset;

//             if (newIndex < 0) return;
//             if (newIndex > slides.length) return;
            
//             slides[newIndex].classList.add('active-slide');
//             activeSlide.classList.remove('active-slide');
//         });
//     });
// });

const prevBtn = document.querySelector('[data-carousel-btn="prev"]');
const nextBtn = document.querySelector('[data-carousel-btn="next"]');

const tracks = document.querySelectorAll(".slider-track");
tracks.forEach(track => {
    const slides = Array.from(track.children);
    
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

    prevText.style.setProperty('--_animation-name', 'left-right');
    prevFeature.style.setProperty('--_animation-name', 'left-right');
    nextBtn.disabled = false;
    if (prevText.previousElementSibling === null) {
        nextBtn.disabled = false;
        prevBtn.disabled = true;
    }
});