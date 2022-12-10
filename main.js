const toggleMenu = document.querySelector('#toggle-menu')
const navbarMenu = document.querySelector('#navbar-menu')
const imageArrow = document.querySelector('#image-arrow')
const menuBarIcon = document.querySelector('.menu-bar')
const mobileMenu = document.querySelector('.mobile-nav')
const menuShoppingCart = document.querySelector('.figure')
const shoppingCart = document.querySelector('.shopping-cart')

toggleMenu.addEventListener('click', toggleMenuDesktop);
menuBarIcon.addEventListener('click',toggleMenuBar);
menuShoppingCart.addEventListener('click',toggleShoppingCart);

function toggleMenuDesktop() {

    navbarMenu.classList.toggle('inactive')
    imageArrow.classList.toggle('traslate-arrow')
}

function toggleMenuBar() {

    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCart() {

    let isActive = shoppingCart.classList.toggle('inactive')
    let isMenuMobile = mobileMenu.classList.contains('inactive')

    if(isMenuMobile){
        if(isActive){
            shoppingCart.style.display='none';
        }else{
            
            shoppingCart.style.display='grid';
        }
    }else{
        shoppingCart.style.display='none';
    }

    

    console.log(isMenuMobile);
}
