"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
var Product = /** @class */ (function () {
    function Product(product) {
        this.id = product.id;
        this.images = product.images;
        this.title = product.title;
        this.description = product.description;
        this.price = product.price;
        this.discount = product.discount;
        this.observation = product.observation;
        this.colors = product.colors;
    }
    return Product;
}());
var product1 = new Product({
    id: 1,
    images: ['assets/mock1.jpg', 'assets/mock2.jpg'],
    title: 'Macbook Pro 15\'4',
    description: 'Space Gray',
    price: 1500,
    discount: 60,
    observation: 'Incluye impuesto País y percepción AFIP',
    colors: ['Rosa', 'Negro', 'Rosa']
});
var product2 = new Product({
    id: 2,
    images: ['assets/mock1.jpg', 'assets/mock2.jpg'],
    title: 'Macbook Pro 14\'4',
    description: 'Space Gray',
    price: 2300,
    discount: 60,
    observation: 'Incluye impuesto País y percepción AFIP',
    colors: ['Gris', 'Amarillo']
});
var product3 = new Product({
    id: 3,
    images: ['assets/mock1.jpg', 'assets/mock2.jpg'],
    title: 'Macbook Pro 13\'4',
    description: 'Space Gray',
    price: 1800,
    discount: 60,
    observation: 'Incluye impuesto País y percepción AFIP',
    colors: ['Blanco', 'Azul', 'Gris']
});
var product4 = new Product({
    id: 4,
    images: ['assets/mock1.jpg', 'assets/mock2.jpg'],
    title: 'Macbook Pro 12\'4',
    description: 'Space Gray',
    price: 2500,
    discount: 60,
    observation: 'Incluye impuesto País y percepción AFIP',
    colors: ['Morado', 'Negro']
});
var product5 = new Product({
    id: 5,
    images: ['assets/mock1.jpg', 'assets/mock2.jpg'],
    title: 'Macbook Pro 11\'4',
    description: 'Space Gray',
    price: 2199,
    discount: 9,
    observation: 'Incluye impuesto País y percepción AFI',
    colors: ['Guinda', 'Cyan']
});
var product6 = new Product({
    id: 6,
    images: ['assets/mock1.jpg', 'assets/mock2.jpg'],
    title: 'Macbook Pro 10\'4',
    description: 'Space Gray',
    price: 3200,
    discount: 9,
    observation: 'Incluye impuesto País y percepción AFI',
    colors: ['Celeste', 'Negro']
});
var products = [product1, product2, product3, product4, product5, product6];
exports.products = products;
