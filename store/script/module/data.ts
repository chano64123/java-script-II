import { IProduct } from "./Product";

class Product implements IProduct {
  id: number
  images: string[];
  title: string
  description: string
  price: number
  discount: number
  observation: string
  colors: string[]

  constructor(product: Product) {
    this.id = product.id;
    this.images = product.images;
    this.title = product.title;
    this.description = product.description;
    this.price = product.price;
    this.discount = product.discount;
    this.observation = product.observation;
    this.colors = product.colors;
  }
}

const product1: IProduct = new Product({
  id: 1,
  images: ['assets/mock1.jpg', 'assets/mock2.jpg'],
  title: 'Macbook Pro 15\'4',
  description: 'Space Gray',
  price: 1500,
  discount: 60,
  observation: 'Incluye impuesto País y percepción AFIP',
  colors: ['Rosa', 'Negro', 'Rosa']
});
const product2: IProduct = new Product({
  id: 2,
  images: ['assets/mock1.jpg', 'assets/mock2.jpg'],
  title: 'Macbook Pro 14\'4',
  description: 'Space Gray',
  price: 2300,
  discount: 60,
  observation: 'Incluye impuesto País y percepción AFIP',
  colors: ['Gris', 'Amarillo']
});
const product3: IProduct = new Product({
  id: 3,
  images: ['assets/mock1.jpg', 'assets/mock2.jpg'],
  title: 'Macbook Pro 13\'4',
  description: 'Space Gray',
  price: 1800,
  discount: 60,
  observation: 'Incluye impuesto País y percepción AFIP',
  colors: ['Blanco', 'Azul', 'Gris']
});
const product4: IProduct = new Product({
  id: 4,
  images: ['assets/mock1.jpg', 'assets/mock2.jpg'],
  title: 'Macbook Pro 12\'4',
  description: 'Space Gray',
  price: 2500,
  discount: 60,
  observation: 'Incluye impuesto País y percepción AFIP',
  colors: ['Morado', 'Negro']
});
const product5: IProduct = new Product({
  id: 5,
  images: ['assets/mock1.jpg', 'assets/mock2.jpg'],
  title: 'Macbook Pro 11\'4',
  description: 'Space Gray',
  price: 2199,
  discount: 9,
  observation: 'Incluye impuesto País y percepción AFI',
  colors: ['Guinda', 'Cyan']
});
const product6: IProduct = new Product({
  id: 6,
  images: ['assets/mock1.jpg', 'assets/mock2.jpg'],
  title: 'Macbook Pro 10\'4',
  description: 'Space Gray',
  price: 3200,
  discount: 9,
  observation: 'Incluye impuesto País y percepción AFI',
  colors: ['Celeste', 'Negro']
});

const products: Product[] = [product1, product2, product3, product4, product5, product6];

export { products }
