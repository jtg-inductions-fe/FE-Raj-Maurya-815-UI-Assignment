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
