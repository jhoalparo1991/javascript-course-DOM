
function addProduct(product) {

    let products = getListProduct();

    products.push(product);
    localStorage.setItem('product-list', JSON.stringify(products))

}

function getListProduct() {
    return JSON.parse(localStorage.getItem('product-list')) || [];
}