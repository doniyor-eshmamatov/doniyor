let menuBtn = document.querySelector('.menu');
let mobileNav = document.querySelector('.mobile-nav');
let elMain = document.querySelector('main');
let logo = document.querySelector('.logo');
let logo1 = document.querySelector('.logo-1');

menuBtn.addEventListener('click', () => {
    elMain.classList.toggle('blur');
    menuBtn.classList.toggle('menu-bg');
    mobileNav.classList.toggle('height');
})

mobileNav.addEventListener('click', () => { 
    elMain.classList.remove('blur');
    menuBtn.classList.remove('menu-bg');
    mobileNav.classList.remove('height');
})

elMain.addEventListener('click', () => {
    mobileNav.classList.remove('height');
    elMain.classList.remove('blur');
    menuBtn.classList.remove('menu-bg');
})

logo.addEventListener('click', () => {
    location.reload();
})
logo1.addEventListener('click', () => {
    location.reload();
})