let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} añadido al carrito.`);
}

function viewCart() {
    const cartSection = document.getElementById('cart');
    const productList = document.getElementById('cart-items');
    
    productList.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - $${item.price}`;
        productList.appendChild(listItem);
    });

    cartSection.style.display = 'block';
    document.getElementById('product-list').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
}

function checkout() {
    alert('Compra realizada con éxito.');
    cart = [];
    viewCart();
}

function viewProfile() {
    const profileSection = document.getElementById('profile');
    profileSection.style.display = 'block';
    document.getElementById('product-list').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
}

function updateProfile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Perfil actualizado: ${name}, ${email}`);
}

document.getElementById('view-cart').addEventListener('click', viewCart);
document.getElementById('view-profile').addEventListener('click', viewProfile);
