const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
})

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active')
    menuBtnIcon.setAttribute('class', 'ri-menu-line')
})

const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: '800',
};

ScrollReveal().reveal('.home-image img', {
    ...scrollRevealOption,
    origin: 'right',
});

ScrollReveal().reveal('.home-content div', {
    duration: 1000,
    delay: 300,
});

ScrollReveal().reveal('.home-content h1', {
    ...scrollRevealOption,
    delay: 600,
});

ScrollReveal().reveal('.home-content p', {
    ...scrollRevealOption,
    delay: 1250,
});

ScrollReveal().reveal('.deals-card', {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal('.about-image img', {
    ...scrollRevealOption,
    origin: 'right',
});

ScrollReveal().reveal('.about-card', {
    duration: 1000,
    interval: 500,
    delay: 200,
});

ScrollReveal().reveal('.about-header h2', {
    ...scrollRevealOption,
    origin: 'right',
});

ScrollReveal().reveal('.about-header p', {
    ...scrollRevealOption,
    origin: 'left',
});

ScrollReveal().reveal('.product-container h2', {
    ...scrollRevealOption,
    origin: 'right',
});

ScrollReveal().reveal('.product-card', {
    ...scrollRevealOption,
    interval: 300,
    origin: 'right',
});

ScrollReveal().reveal('.client-content h2', {
    ...scrollRevealOption,
    origin: 'right',
});

ScrollReveal().reveal('.client-content .client-info', {
    ...scrollRevealOption,
    origin: 'left',
});

const swiper = new Swiper('.swiper', {
    loop:true,
    autoplay: {
        delay: 2500,
    },
});
