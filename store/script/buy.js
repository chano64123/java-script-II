const buySelector = document.getElementById('finalizar-compra')

buySelector.addEventListener('click', function () {
  cartProducts = [];
  localStorage.removeItem('cart')
  printCartProducts(cartProducts)
})