const createCard = (product) => {
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

const printCards = (arrayOfProducts, idSelector) => {
  let productsTemplate = "";

  for (let product of arrayOfProducts) {
    productsTemplate += createCard(product);
  }

  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate
}

printCards(products, 'products')
