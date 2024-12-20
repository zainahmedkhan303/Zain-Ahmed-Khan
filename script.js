function addToCart(product, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ product, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} has been added to the cart!`);
}

document.getElementById('checkout-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    localStorage.removeItem('cart');
    window.location.href = 'confirmation.html';
});

window.onload = function () {
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length > 0) {
            cart.forEach(item => {
                const div = document.createElement('div');
                div.textContent = `${item.product} - ${item.price} PKR`;
                cartItems.appendChild(div);
            });
        } else {
            cartItems.textContent = "Your cart is empty.";
        }
    }
};