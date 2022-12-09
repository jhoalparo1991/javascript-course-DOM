const toggleMenu = document.querySelector('#toggle-menu')
const navbarMenu = document.querySelector('#navbar-menu')
const imageArrow = document.querySelector('#image-arrow')

toggleMenu.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop() {

    navbarMenu.classList.toggle('inactive')
    imageArrow.classList.toggle('traslate-arrow')
}