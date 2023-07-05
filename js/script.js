"use strict" ;

let products = {
    fridge: [
        {
            name: "Холодильник Samsung",
            price: 1000,
        },
        {
            name: "Холодильник LG",
            price: 1200,
        }
    ],
    stove: [
        {
            name: "Плита Samsung",
            price: 500,
        },
        {
            name: "Плита LG",
            price: 600,
        }
    ],
    microwave: [
        {
            name: "Мікрохвильова піч Samsung",
            price: 300,
        },
        {
            name: "Мікрохвильова піч LG",
            price: 400,
        }
    ]
};

function showProducts(category) {
    let productsContainer = document.querySelector("#products");
    productsContainer.innerHTML = "<h2>Товари</h2>";

    let categoryProducts = products[category];
    for (let i = 0; i < categoryProducts.length; i++) {
        let product = categoryProducts[i];
        let productElement = document.createElement("div");
        productElement.className = "product";
        productElement.textContent = product.name;
        productElement.onclick = showProductDetails.bind(null, product);
        productsContainer.appendChild(productElement);
    }
}

function showProductDetails(product) {
    let productDetailsContainer = document.querySelector("#product-details");
    productDetailsContainer.innerHTML = "<h2>Шнформація про товар</h2>";

    let productNameElement = document.createElement("p");
    productNameElement.textContent = "Назва товару: " + product.name;

    let productPriceElement = document.createElement("p");
    productPriceElement.textContent = "Ціна: " + product.price + " грн";

    let buyButton = document.createElement("button");
    buyButton.textContent = "Купити";
    buyButton.className = "buy-button";
    buyButton.onclick = buyProduct.bind(null, product);

    productDetailsContainer.appendChild(productNameElement);
    productDetailsContainer.appendChild(productPriceElement);
    productDetailsContainer.appendChild(buyButton);
}

function buyProduct(product) {
    alert("Товару: " + product.name + " нема в наявності");
    let productDetailsContainer = document.querySelector("#product-details");
    productDetailsContainer.innerHTML = "<h2>Інформація про товар</h2>";
}