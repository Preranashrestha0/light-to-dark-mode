function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    body.classList.toggle('dark-mode');
    themeIcon.classList.toggle('ri-moon-line');
    themeIcon.classList.toggle('ri-sun-line');
}

// Carousel Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });

    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();

function toggleMenuBar() {
    const navBar = document.getElementById("nav-links");
    if (navBar.style.display === 'none' || navBar.style.display === '') {
        navBar.style.display = 'flex';
        navBar.style.justifyContent = 'end';
        navBar.style.alignItems ='end';
    } else {
        navBar.style.display = 'none';
    }
}
