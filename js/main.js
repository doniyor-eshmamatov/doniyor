let hero = document.querySelector('.hero');
let about = document.querySelector('.skills');
let skills = document.querySelector('.about');
let menuBtn = document.querySelector('.menu');
let siteHeader = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', () => {
    hero.classList.toggle('blur');
    skills.classList.toggle('blur');
    about.classList.toggle('blur');
    siteHeader.classList.toggle('height');
    menuBtn.classList.toggle('menu-bg');
})