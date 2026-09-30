import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const hamburger = document.querySelector('.header__hamburger');

const nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('header__nav--open');
});

document.addEventListener('click', (e) => {
    const category = document.querySelector('.header__categories-button');
    const categorySubmenu = document.querySelector(
        '.header__categories-submenu',
    );
    if (category.contains(e.target)) {
        categorySubmenu.classList.toggle('header__categories-submenu--open');
        category.classList.toggle('header__categories-button--active');
    } else if (!categorySubmenu.contains(e.target)) {
        categorySubmenu.classList.remove('header__categories-submenu--open');
        category.classList.remove('header__categories-button--active');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        const nav = document.querySelector('.header__nav--open');
        const categorySubmenu = document.querySelector(
            '.header__categories-submenu--open',
        );
        if (nav) nav.classList.remove('header__nav--open');
        if (categorySubmenu) {
            categorySubmenu.classList.remove(
                'header__categories-submenu--open',
            );
        }
    }
});

new Swiper('.latest-releases__carousel', {
    modules: [Navigation, Pagination],
    slidesPerView: 2.15,
    centeredSlides: true,

    pagination: {
        el: '.latest-releases .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.latest-releases .swiper-button-next',
        prevEl: '.latest-releases .swiper-button-prev',
    },

    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

new Swiper('.best-sellers__carousel', {
    modules: [Navigation, Pagination],
    slidesPerView: 2.15,
    centeredSlides: true,

    pagination: {
        el: '.best-sellers__carousel .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.best-sellers .swiper-button-next',
        prevEl: '.best-sellers .swiper-button-prev',
    },

    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});
