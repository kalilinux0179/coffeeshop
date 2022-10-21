// navbar
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

// change images

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        let src = images.getAttribute('src');
        document.querySelector('.main-home-img').setAttribute('src', src);
    }
})


// swiper
var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }, breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }, 1200: {
            slidesPerView: 3,
        },
    },
    loop: true,
    grabCursor: true,
});