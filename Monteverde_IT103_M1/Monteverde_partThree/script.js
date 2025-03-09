// Navigation Functionality
document.getElementById('nav-home').addEventListener('click', () => showSlide('home-slide'));
document.getElementById('nav-about').addEventListener('click', () => showSlide('about-slide'));
document.getElementById('nav-projects').addEventListener('click', () => showSlide('projects-slide'));
document.getElementById('nav-wip').addEventListener('click', () => showSlide('wip-slide'));

function showSlide(slideId) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');
    document.getElementById(slideId).style.display = 'block';
}

// Video Carousel Functionality
let currentVideo = 0;
const videoSlides = document.querySelectorAll('.video-slide');

document.getElementById('next-btn').addEventListener('click', () => {
    videoSlides[currentVideo].classList.remove('active');
    currentVideo = (currentVideo + 1) % videoSlides.length;
    videoSlides[currentVideo].classList.add('active');
});

document.getElementById('prev-btn').addEventListener('click', () => {
    videoSlides[currentVideo].classList.remove('active');
    currentVideo = (currentVideo - 1 + videoSlides.length) % videoSlides.length;
    videoSlides[currentVideo].classList.add('active');
});
