import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const category = document.querySelector('.menu__btn');
const categoryWrapper = document.querySelector('.menu__item');
const categorySubmenu = document.querySelector('.submenu');

document.addEventListener('click', (e) => {
    if (hamburger.contains(e.target)) {
        nav.classList.toggle('header__nav--open');
    } else if (!nav.contains(e.target)) {
        nav.classList.remove('header__nav--open');
    }
});

categoryWrapper.addEventListener('mouseenter', () => {
    if (window.innerWidth >= 1024) {
        categorySubmenu.classList.add('submenu--open');
        category.classList.add('menu__btn--active');
    }
});

categoryWrapper.addEventListener('mouseleave', () => {
    if (window.innerWidth >= 1024) {
        categorySubmenu.classList.remove('submenu--open');
        category.classList.remove('menu__btn--active');
    }
});

document.addEventListener('click', (e) => {
    if (window.innerWidth < 1024) {
        if (category.contains(e.target)) {
            categorySubmenu.classList.toggle('submenu--open');
            category.classList.toggle('menu-btn--active');
        } else if (!categorySubmenu.contains(e.target)) {
            categorySubmenu.classList.remove('submenu--open');
            category.classList.remove('menu-btn--active');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        nav.classList.remove('header__nav--open');
        categorySubmenu.classList.remove('submenu--open');
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
