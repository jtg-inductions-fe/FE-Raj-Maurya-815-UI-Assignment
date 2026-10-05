const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const category = document.querySelector('.header__menu-btn-categories');
const categoryWrapper = document.querySelector('.header__item');
const categorySubmenu = document.querySelector('.header__categories-submenu');

document.addEventListener('click', (e) => {
    if (hamburger.contains(e.target)) {
        nav.classList.toggle('header__nav--open');
    } else if (!nav.contains(e.target)) {
        nav.classList.remove('header__nav--open');
    }
});

categoryWrapper.addEventListener('mouseenter', () => {
    if (window.innerWidth >= 1024) {
        categorySubmenu.classList.add('header__categories-submenu--open');
        category.classList.add('header__menu-btn-categories--active');
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
        nav.classList.remove('header__nav--open');
        categorySubmenu.classList.remove('header__categories-submenu--open');
    }
});
