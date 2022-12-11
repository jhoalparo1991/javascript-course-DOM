
function addProduct(product) {

    let products = getListProduct();

    let result = products.filter(data => data.id === product.id);
    if(result.length <= 0){
        products.push(product);
        localStorage.setItem('product-list', JSON.stringify(products))
    }
}


function getListProduct() {
    return JSON.parse(localStorage.getItem('product-list')) || [];
}


function addOrders(order){
    let orders = getListOrders();

    orders.push(order);
    localStorage.setItem('my-orders', JSON.stringify(orders))
}

function getListOrders(){
    return JSON.parse(localStorage.setItem('my-orders')) || [];
}

function deleteProductCartStorage(products){
    localStorage.removeItem('product-list')
    localStorage.setItem('product-list', JSON.stringify(products))
}

function deleteProductList(){
    localStorage.removeItem('product-list')
}