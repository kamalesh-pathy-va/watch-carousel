const buttons = document.querySelectorAll("[data-carousel-btn]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselBtn === 'next' ? 1 : -1;
        const slideTracks = document.querySelectorAll('.slider-track');
        slideTracks.forEach(slideTrack => {
            const slides = slideTrack.querySelectorAll(".slide");
            console.log(slides);
            const activeSlide = slideTrack.querySelector(".active-slide");
            console.log(activeSlide);
            let newIndex = [...slides].indexOf(activeSlide) + offset;

            if (newIndex < 0) return;
            if (newIndex > slides.length) return;
            
            slides[newIndex].classList.add('active-slide');
            activeSlide.classList.remove('active-slide');
        });
    });
});