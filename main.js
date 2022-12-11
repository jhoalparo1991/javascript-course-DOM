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
const quantityItemsCart = document.querySelector('.quantity p');
const orderDetailContainer = document.querySelector('.detail-order');
const totalAmmount = document.querySelector('.total-ammount');

const checkoutButton = document.querySelector('#checkout');


toggleMenu.addEventListener('click', toggleMenuDesktop);
menuBarIcon.addEventListener('click', toggleMenuBar);
menuShoppingCart.addEventListener('click', toggleShoppingCart);

closeWithArrow.addEventListener('click', toggleShoppingCart)
closeProductDetail.addEventListener('click', closeDetailProducts)

checkoutButton.addEventListener('click',saveOrder)

function saveOrder(){
    // let productList = getListProduct();
    deleteProductList();
    loadQuantityItemsCart();
    showOrders();
}

loadQuantityItemsCart()

showOrders();

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
        imgShoppingCart.setAttribute('data-id', product.id);
        imgShoppingCart.addEventListener('click', e => selectedProductCart(e))

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

function selectedProductCart(event) {
    let id = event.target.getAttribute('data-id');
    product = data.filter(d => d.id == id);

    idProduct = product[0].id;
    nameProduct = product[0].name;
    priceProduct = product[0].price;
    imageProduct = product[0].image;

    let items = {
        'id': idProduct,
        'name': nameProduct,
        'price': priceProduct,
        'image': imageProduct
    };

    addProduct(items);
    loadQuantityItemsCart();
    showOrders();

}
function loadQuantityItemsCart() {
    let quantity = getListProduct();
    quantityItemsCart.innerText = quantity.length
}


function showOrders() {
    
    let productList = getListProduct();
    orderDetailContainer.innerHTML = '';
    for (list of productList) {
        let detailOrder = document.createElement('div');
        detailOrder.classList.add('detail')

        let detailFigure = document.createElement('figure');
        let detailImage = document.createElement('img');
        detailImage.setAttribute('src', list.image);
        detailImage.setAttribute('alt', list.name);

        detailFigure.appendChild(detailImage)

        let pNameProduct = document.createElement('p');
        pNameProduct.classList.add('name-product')
        pNameProduct.innerText = list.name;

        let pPriceProduct = document.createElement('p');
        pPriceProduct.classList.add('price')
        pPriceProduct.innerText = '$' + list.price;

        let detailDelete = document.createElement('img');
        detailDelete.setAttribute('src', './icons/icon_close.png');
        detailDelete.setAttribute('alt', 'delete');
        detailDelete.setAttribute('data-id', list.id);
        detailDelete.addEventListener('click',e => deleteProductCart(e))

        detailOrder.appendChild(detailFigure);
        detailOrder.appendChild(pNameProduct);
        detailOrder.appendChild(pPriceProduct);
        detailOrder.appendChild(detailDelete);

        orderDetailContainer.appendChild(detailOrder);

    }

    let ammount = [];
    productList.forEach( item => {
        ammount.push(item.price);

    });

    let total = ammount.reduce((previousValue,currentValue) => previousValue + currentValue, 0)
    totalAmmount.textContent = '$ ' + total;

}

function deleteProductCart(e){
    let id = e.target.getAttribute('data-id');

    let productList = getListProduct();

    let result = productList.filter(data => data.id != id);
    deleteProductCartStorage(result);
    loadQuantityItemsCart();
    showOrders();
}