function buyProduct(productName) {
    // Відкриваємо модальне вікно
    document.getElementById("modal").style.display = "block";
    document.getElementById("product-name").innerText = productName;
    
    // Встановлюємо ціну в залежності від товару
    let price = '';
    if (productName === '60 UC') {
        price = '10 USD';
    } else if (productName === '300 UC') {
        price = '50 USD';
    } else if (productName === '600 UC') {
        price = '100 USD';
    }
    
    document.getElementById("product-price").innerText = Ціна: ${price};
}

function closeModal() {
    // Закриваємо модальне вікно
    document.getElementById("modal").style.display = "none";
}