const toggleBtn = document.querySelector('.menu__btn');
const menuResponsive = document.querySelector('.menu__list'); 
const galleryResponsive = document.querySelector('.gallery');
const heroResponsive = document.querySelector('.hero');
const selectResponsive = document.querySelector('.select');


export function showMenu() {
    toggleBtn.addEventListener('click', () => {
        menuResponsive.classList.toggle('menu__list-visible')
        galleryResponsive.classList.toggle('gallery-hidden')
        heroResponsive.classList.toggle('hero-hidden');
        selectResponsive.classList.toggle('select-hidden');
    }

)};