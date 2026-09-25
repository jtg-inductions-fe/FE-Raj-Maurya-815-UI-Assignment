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
    if (window.innerWidth >= 428) {
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
