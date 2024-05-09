class Product {
  constructor(id, images, title, description, price, discount, observation, colors) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.observation = observation;
    this.colors = colors;
  }
}

const product1 = new Product(1, ['assets/mock1.jpg', 'assets/mock2.jpg'], 'Macbook Pro 15\'4', 'Space Gray', 1500, 60, 'Incluye impuesto País y percepción AFIP', ['Rosa', 'Negro', 'Rosa']);
const product3 = new Product(3, ['assets/mock1.jpg', 'assets/mock2.jpg'], 'Macbook Pro 13\'4', 'Space Gray', 1800, 60, 'Incluye impuesto País y percepción AFIP', ['Blanco', 'Azul', 'Gris']);
const product2 = new Product(2, ['assets/mock1.jpg', 'assets/mock2.jpg'], 'Macbook Pro 14\'4', 'Space Gray', 2300, 60, 'Incluye impuesto País y percepción AFIP', ['Gris', 'Amarillo']);
const product4 = new Product(4, ['assets/mock1.jpg', 'assets/mock2.jpg'], 'Macbook Pro 12\'4', 'Space Gray', 2500, 60, 'Incluye impuesto País y percepción AFIP', ['Morado', 'Negro']);
const product5 = new Product(5, ['assets/mock1.jpg', 'assets/mock2.jpg'], 'Macbook Pro 11\'4', 'Space Gray', 2199.99, 60, 'Incluye impuesto País y percepción AFIP', ['Guinda', 'Cyan']);
const product6 = new Product(6, ['assets/mock1.jpg', 'assets/mock2.jpg'], 'Macbook Pro 10\'4', 'Space Gray', 3200.99, 60, 'Incluye impuesto País y percepción AFIP', ['Celeste', 'Negro']);

const products = [product1, product2, product3, product4, product5, product6];
