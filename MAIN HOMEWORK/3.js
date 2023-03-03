class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}

const products = [
  new Product('Product 1', 10, 2, 'This is product 1'),
  new Product('Product 2', 20, 4, 'This is product 2'),
  new Product('Product 3', 30, 6, 'This is product 3'),
  new Product('Product 4', 40, 8, 'This is product 4'),
  new Product('Product 5', 50, 10, 'This is product 5')
];

class ProductSearch {
  constructor(query) {
    this.query = query;
  }

 
  
    search(products) {
    }
  }
