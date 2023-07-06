"use strict";

const products = {
    fridge: [
        {
            name: "Холодильник Samsung",
            price: 1000,
        },
        {
            name: "Холодильник LG",
            price: 1200,
        },
    ],
    stove: [
        {
            name: "Плита Samsung",
            price: 500,
        },
        {
            name: "Плита LG",
            price: 600,
        },
    ],
    microwave: [
        {
            name: "Мікрохвильова піч Samsung",
            price: 300,
        },
        {
            name: "Мікрохвильова піч LG",
            price: 400,
        },
    ],
};

function showProducts(category) {
    const productsContainer = document.querySelector("#products");
    productsContainer.innerHTML = "<h2>Товари</h2>";

    const categoryProducts = products[category];
    for (let i = 0; i < categoryProducts.length; i++) {
        const product = categoryProducts[i];
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.textContent = product.name;
        productElement.onclick = showProductDetails.bind(null, product);
        productsContainer.appendChild(productElement);
    }
}

function showProductDetails(product) {
    const productDetailsContainer = document.querySelector("#product-details");
    productDetailsContainer.innerHTML = "<h2>Інформація про товар</h2>";

    const productNameElement = document.createElement("p");
    productNameElement.textContent = "Назва товару: " + product.name;

    const productPriceElement = document.createElement("p");
    productPriceElement.textContent = "Ціна: " + product.price + " грн";

    const buyButton = document.createElement("button");
    buyButton.textContent = "Купити";
    buyButton.className = "buy-button";
    buyButton.onclick = buyProduct.bind(null, product);

    productDetailsContainer.appendChild(productNameElement);
    productDetailsContainer.appendChild(productPriceElement);
    productDetailsContainer.appendChild(buyButton);
}

function buyProduct(product) {
    alert("Товару: " + product.name + " нема в наявності");

    setTimeout(function () {
        const productsContainer = document.querySelector("#products");
        productsContainer.innerHTML = "";

        const productDetailsContainer = document.querySelector("#product-details");
        productDetailsContainer.innerHTML = "";
    }, 0);
}