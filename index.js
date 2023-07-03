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
        console.log(slide);
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
        nextContent.style.setProperty('--animation-name', 'right-left');
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
        prevContent.style.setProperty('--animation-name', 'left-right');
    });
});