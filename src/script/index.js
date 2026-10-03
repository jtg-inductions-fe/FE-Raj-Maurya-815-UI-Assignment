import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('click', (e) => {
    const hamburger = document.querySelector('.header__hamburger');
    const nav = document.querySelector('.header__nav');

    if (hamburger.contains(e.target)) {
        nav.classList.toggle('header__nav--open');
    } else if (!nav.contains(e.target)) {
        nav.classList.remove('header__nav--open');
    }
});

const category = document.querySelector('.header__menu-btn-categories');
const categoryWrapper = document.querySelector('.header__item');
const categorySubmenu = document.querySelector('.header__categories-submenu');
categoryWrapper.addEventListener('mouseenter', () => {
    if (window.innerWidth >= 1024) {
        categorySubmenu.classList.toggle('header__categories-submenu--open');
        category.classList.toggle('header__menu-btn-categories--active');
    }
});

categoryWrapper.addEventListener('mouseleave', () => {
    if (window.innerWidth >= 1024) {
        categorySubmenu.classList.remove('header__categories-submenu--open');
        category.classList.remove('header__menu-btn-categories--active');
    }
});

document.addEventListener('click', (e) => {
    if (window.innerWidth < 1024) {
        if (category.contains(e.target)) {
            categorySubmenu.classList.toggle(
                'header__categories-submenu--open',
            );
            category.classList.toggle('header__menu-btn-categories--active');
        } else if (!categorySubmenu.contains(e.target)) {
            categorySubmenu.classList.remove(
                'header__categories-submenu--open',
            );
            category.classList.remove('header__menu-btn-categories--active');
        }
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
