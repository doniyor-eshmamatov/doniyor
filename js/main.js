let hero = document.querySelector('.hero');
let menuBtn = document.querySelector('.menu');
let siteHeader = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', () => {
    hero.classList.toggle('blur');
    siteHeader.classList.toggle('height');
    menuBtn.classList.toggle('menu-bg')
})