const products = [
    { id: 1, name: 'Fresh Milk', price: 50, image: 'https://static.vecteezy.com/system/resources/previews/031/697/471/non_2x/glass-pitcher-with-fresh-milk-on-a-wooden-table-ai-generated-free-photo.jpg' },
    { id: 2, name: 'Cheddar Cheese', price: 120, image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 3, name: 'Greek Yogurt', price: 60, image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 4, name: 'Salted Butter', price: 80, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 5, name: 'Cottage Cheese', price: 90, image: 'https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 6, name: 'Whipped Cream', price: 70, image: 'https://cdn.pixabay.com/photo/2024/03/01/10/52/ai-generated-8606229_640.jpg' },
    { id: 7, name: 'Mozzarella', price: 110, image: 'https://img.freepik.com/free-photo/fresh-mozzarella-cheese-soft-italian-cheeses-tomato-basil-olives-oil-rosemary-wooden-serving-board-light-wooden-surface-healthy-food-top-view-flat-lay_1150-44825.jpg' },
    { id: 8, name: 'Sour Cream', price: 65, image: 'https://www.plantpantry.com.au/cdn/shop/files/966e30a7-1d2b-433b-829d-1b8ab6ed19aa_1200x.jpg?v=1724108406' },
    { id: 9, name: 'Flavored Milk', price: 55, image: 'https://media.istockphoto.com/id/534831661/photo/strawberry-regular-and-chocolate-milk-in-bottles-isolated.jpg?s=612x612&w=0&k=20&c=satdFw-w_CM-XXN2-FQwf17INx8hMo3HSTqT8l5ZhEI=' },
    { id: 10, name: 'Paneer', price: 100, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 11, name: 'Ghee', price: 150, image: 'https://media.istockphoto.com/id/914640804/photo/ghee-clarified-butter.jpg?s=612x612&w=0&k=20&c=5kClNIiT5LrIUcMiyIlPuEgWKPILXKJmOx34fKwcPps=' },
    { id: 12, name: 'Lassi', price: 40, image: 'https://st3.depositphotos.com/8120940/15354/i/450/depositphotos_153541124-stock-photo-traditional-indian-lassi-curd-with.jpg' },
    { id: 13, name: 'Milk Chocolate', price: 85, image: 'https://media.istockphoto.com/id/623372420/vector/chocolate-and-milk-splash.jpg?s=612x612&w=0&k=20&c=V3GYZlcb-BaFdYP9bnMwe9KghyCjdzTLuXf1JWgRLvU=' },
    { id: 14, name: 'Dark Chocolate', price: 95, image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { id: 15, name: 'White Chocolate', price: 90, image: 'https://sugarfreelondoner.com/wp-content/uploads/2020/09/Sugar-Free-White-Chocolate-1200-500x500.jpg' }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayTopProducts() {
    const topProductList = document.getElementById('top-product-list');
    if (topProductList) {
        topProductList.innerHTML = '';
        const topProducts = [
            products[0],  // Fresh Milk
            products[1],  // Cheddar Cheese
            products[2],  // Greek Yogurt
            products[12], // Milk Chocolate
            products[13], // Dark Chocolate
            products[14]  // White Chocolate
        ];

        topProducts.forEach(product => {
            const productDiv = createProductElement(product);
            topProductList.appendChild(productDiv);
        });
    }
}

function displayAllProducts() {
    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = '';

        products.forEach(product => {
            const productDiv = createProductElement(product);
            productList.appendChild(productDiv);
        });
    }
}

function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productDiv.addEventListener('click', () => toggleProductClick(productDiv));
    return productDiv;
}

function toggleProductClick(productDiv) {
    productDiv.classList.toggle('clicked');
    setTimeout(() => {
        productDiv.classList.remove('clicked');
    }, 300);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    saveCart();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(index) {
    const item = cart[index];
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
    saveCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
    
    if (cartItems && cartTotal) {
        cartItems.innerHTML = '';

        let total = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">₹${item.price} x ${item.quantity}</span>
                </div>
                <div class="cart-item-actions">
                    <button class="btn decrease-btn" onclick="removeFromCart(${index})">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="btn increase-btn" onclick="addToCart(${item.id})">+</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = total;
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    
    // Remove any existing animation classes
    notification.classList.remove('fadeInOut');
    
    // Trigger a reflow to restart the animation
    void notification.offsetWidth;
    
    // Add the animation class
    notification.classList.add('fadeInOut');
    
    // Hide the notification after the animation ends
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Add this function to your existing script.js file
function handlePaymentMethodChange() {
    const paymentMethod = document.getElementById('payment').value;
    const paymentDetails = document.getElementById('payment-details');
    paymentDetails.innerHTML = '';
    paymentDetails.style.display = 'block';

    switch (paymentMethod) {
        case 'card':
            paymentDetails.innerHTML = `
                <label for="card-number">Card Number:</label>
                <input type="text" id="card-number" required>
                <label for="card-expiry">Expiry Date:</label>
                <input type="text" id="card-expiry" placeholder="MM/YY" required>
                <label for="card-cvv">CVV:</label>
                <input type="text" id="card-cvv" required>
            `;
            break;
        case 'upi':
        case 'paytm':
        case 'gpay':
        case 'phonepe':
        case 'amazonpay':
            paymentDetails.innerHTML = `
                <label for="upi-id">UPI ID / Mobile Number:</label>
                <input type="text" id="upi-id" required>
            `;
            break;
        default:
            paymentDetails.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayTopProducts();
    displayAllProducts();
    updateCart();

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        const orderSummary = document.getElementById('order-summary');
        if (orderSummary) {
            orderSummary.innerHTML = `
                <h3>Order Summary:</h3>
                <ul>
                    ${cart.map(item => `
                        <li>
                            <img src="${item.image}" alt="${item.name}" class="order-item-image">
                            ${item.name} - ₹${item.price} x ${item.quantity}
                        </li>
                    `).join('')}
                </ul>
                <p><strong>Total:</strong> ₹${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
            `;
        }

        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const payment = document.getElementById('payment').value;

            const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();

            // Store order details in localStorage
            const orderDetails = {
                orderId: orderId,
                name: name,
                email: email,
                address: address,
                payment: payment,
                items: cart,
                total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
            };
            localStorage.setItem('lastOrder', JSON.stringify(orderDetails));

            // Clear the cart
            cart = [];
            updateCart();
            saveCart();

            // Redirect to order success page
            window.location.href = 'order-success.html';
        });
    }

    // Handle order success page
    const orderSuccessSection = document.getElementById('order-success');
    if (orderSuccessSection) {
        const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
        if (lastOrder) {
            document.getElementById('order-id').textContent = lastOrder.orderId;
            document.getElementById('order-details').innerHTML = `
                <p><strong>Name:</strong> ${lastOrder.name}</p>
                <p><strong>Email:</strong> ${lastOrder.email}</p>
                <p><strong>Address:</strong> ${lastOrder.address}</p>
                <p><strong>Payment Method:</strong> ${lastOrder.payment}</p>
                <h3>Order Summary:</h3>
                <ul>
                    ${lastOrder.items.map(item => `
                        <li>
                            <img src="${item.image}" alt="${item.name}" class="order-item-image">
                            ${item.name} - ₹${item.price} x ${item.quantity}
                        </li>
                    `).join('')}
                </ul>
                <p><strong>Total:</strong> ₹${lastOrder.total}</p>
            `;
            // Clear the lastOrder from localStorage
            localStorage.removeItem('lastOrder');
        }
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            // Here you would typically send this data to a server
            // For now, we'll just show a notification
            showNotification(`Thank you, ${name}! Your message has been sent.`);

            // Clear the form
            contactForm.reset();
        });
    }

    const paymentSelect = document.getElementById('payment');
    if (paymentSelect) {
        paymentSelect.addEventListener('change', handlePaymentMethodChange);
    }
});

// Close modals when clicking outside
window.onclick = (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};