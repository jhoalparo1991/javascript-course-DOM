const toggleMenu = document.querySelector('#toggle-menu')
const navbarMenu = document.querySelector('#navbar-menu')
const imageArrow = document.querySelector('#image-arrow')

const menuBarIcon = document.querySelector('.menu-bar')
const mobileMenu = document.querySelector('.mobile-nav')

const menuShoppingCart = document.querySelector('.figure')
const cart = document.querySelector('.cart')

const cardsContainer = document.querySelector('.cards-container')
const shoppingCart = document.querySelector('.shopping-cart')

const closeWithArrow = document.querySelector('.flechita')
const closeProductDetail = document.querySelector('.product-detail .close')
const productDetail = document.querySelector('.product-detail')

const productDetailImage = document.querySelector('.product-image');
const productDetailPrice = document.querySelector('.product-info-price');
const productDetailName = document.querySelector('.product-info-name');

toggleMenu.addEventListener('click', toggleMenuDesktop);
menuBarIcon.addEventListener('click', toggleMenuBar);
menuShoppingCart.addEventListener('click', toggleShoppingCart);

closeWithArrow.addEventListener('click', toggleShoppingCart)
closeProductDetail.addEventListener('click', closeDetailProducts)

function toggleMenuDesktop() {

    let isCart = cart.classList.contains('inactive');
    let isProductDetail = productDetail.classList.contains('inactive')

    if (!isProductDetail) {
        productDetail.classList.add('inactive')
    }

    if (!isCart) {
        cart.classList.add('inactive')
    }
    navbarMenu.classList.toggle('inactive')
    imageArrow.classList.toggle('traslate-arrow')
}

function toggleMenuBar() {
    let isShoppingCart = cart.classList.contains('inactive')

    let isProductDetail = productDetail.classList.contains('inactive')

    if (!isProductDetail) {
        productDetail.classList.add('inactive')
    }

    if (!isShoppingCart) {
        cart.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function closeDetailProducts() {
    productDetail.classList.add('inactive')
}
function toggleShoppingCart() {

    let isMenuMobile = mobileMenu.classList.contains('inactive')
    let isNavbarMenu = navbarMenu.classList.contains('inactive')
    let isProductDetail = productDetail.classList.contains('inactive')

    if (!isProductDetail) {
        productDetail.classList.add('inactive')
    }


    if (!isMenuMobile) {
        mobileMenu.classList.add('inactive')
    }


    if (!isNavbarMenu) {
        navbarMenu.classList.add('inactive')
        imageArrow.classList.toggle('traslate-arrow')
    }

    shoppingCart.classList.toggle('inactive')
    shoppingCart.classList.toggle('shopping-cart-display-grid')
    cart.classList.toggle('inactive')



}

loadProducts();

function loadProducts() {
    let dataList = data;
    for (product of dataList) {

        let cardProduct = document.createElement('div');
        cardProduct.classList.add('card-products');

        let imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
        imgProduct.setAttribute('alt', product.name);
        imgProduct.setAttribute('data-id', product.id);
        imgProduct.addEventListener('click', e => showDetailPorduct(e))

        let divInfo = document.createElement('div');
        let divProducInfo = document.createElement('div');
        divProducInfo.classList.add('info');

        let pPrice = document.createElement('p');
        pPrice.classList.add('price');
        pPrice.innerText = '$ ' + product.price;

        let pNameProduct = document.createElement('p');
        pNameProduct.classList.add('name-product');
        pNameProduct.innerText = product.name;

        let figureProduct = document.createElement('figure');

        let imgShoppingCart = document.createElement('img');

        imgShoppingCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        imgShoppingCart.setAttribute('alt', 'add to cart');

        figureProduct.appendChild(imgShoppingCart);
        divProducInfo.appendChild(pPrice);
        divProducInfo.appendChild(pNameProduct);

        divInfo.appendChild(divProducInfo)
        divInfo.appendChild(figureProduct)

        cardProduct.appendChild(imgProduct)
        cardProduct.appendChild(divInfo)
        cardsContainer.appendChild(cardProduct)

    }
}

function showDetailPorduct(event) {

    mobileMenu.classList.add('inactive')
    imageArrow.classList.remove('traslate-arrow')

    shoppingCart.classList.add('inactive')
    shoppingCart.classList.remove('shopping-cart-display-grid')
    cart.classList.add('inactive')

    navbarMenu.classList.add('inactive')
    productDetail.classList.remove('inactive')

    getProduct(event.target.getAttribute('data-id'))
}


function getProduct(id) {

    product = data.filter(d => d.id == id);
    productDetailImage.setAttribute('src', product[0].image);
    productDetailPrice.innerText = '$' + product[0].price;
    productDetailName.innerText = product[0].name;
}