import { getFirstNElements } from "./utilsProduct.js";

const getProductCard = (product) => {
  return `
    <article class="product-card">
        <a class="product-link" href="details.html?id=${product.id}">
            <img class="product-img" src="${product.images[0]}" alt="Macbook Pro" />
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-description">${product.description}</span>
                <div class="product-price-block">
                    <span class="price">S/${product.price.toFixed(2)}</span>
                    <span class="discount">${product.discount}% Off</span>
                </div>
                <div class="product-tax-policy">${product.observation}</div>
            </div>
        </a>
    </article>
  `;
}

const printProductsCards = (products, idProductsSelector, quantity = 0) => {
  const productsSelector = document.getElementById(idProductsSelector);
  let productsTemplate = '';
  products = quantity == 0 ? products : getFirstNElements(products, quantity);
  for (let product of products) {
    productsTemplate += getProductCard(product);
  }
  productsSelector.innerHTML = productsTemplate;
}


export { getProductCard, printProductsCards }