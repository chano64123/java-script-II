const getProductsAsync = async () => {
  let products = [];
  try {
    const response = await fetch('./data/products.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    products = await response.json()
  } catch (error) {
    console.error('ERROR:', error);
  }
  return products.products;
}

export { getProductsAsync }
