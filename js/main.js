let cart = [];

// Обработка отправки формы
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const title = card.dataset.title;
            const price = parseInt(card.dataset.price);
            cart.push({ title, price });
            updateCartDisplay();
            alert(`Открытка "${title}" добавлена в корзину`);
        });
    });

    document.querySelector(".cta-button").addEventListener("click", scrollToGallery);
});

// Закрыть форму
function closeCheckout() {
    document.getElementById("checkout-form").style.display = "none";
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("total");
    const count = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let sum = 0;
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.title} - ${item.price} руб.`;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "✖";
        removeBtn.onclick = () => {
            cart.splice(index, 1);
            updateCartDisplay();
        };
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
        sum += item.price;
    });

    total.textContent = sum;
    count.textContent = cart.length;
}

// Закроем корзину
function toggleCart() {
    document.getElementById("cart").classList.toggle("hidden");
}

function clearCart() {
    cart = [];
    updateCartDisplay();
}

function checkout() {
    document.getElementById("checkout-form").classList.remove("hidden");
}

function submitOrder() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const order = cart.map(item => `${item.title} - ${item.price} руб.`).join("\n");
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const message = `Имя: ${name}\nEmail: ${email}\nЗаказ:\n${order}\nИтого: ${total} руб.`;

    console.log("Отправка заказа:", message);
    alert("Спасибо за заказ! Мы свяжемся с вами по электронной почте.");

    clearCart();
    document.getElementById("checkout-form").classList.add("hidden");
}


//это взял из отдельной галереи

const images = [
    'img/ot1.jpg',
    'img/ot2.jpg',
    'img/ot3.jpg',
    'img/ot4.jpg',
    'img/ot5.jpg'
];

let currentSlide = 0;

function openSlider() {
    document.getElementById("slider").classList.remove("hidden");
    showSlide(currentSlide);
}

function closeSlider() {
    document.getElementById("slider").classList.add("hidden");
}

function showSlide(index) {
    const image = document.getElementById("slider-image");
    image.src = images[index];
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}
