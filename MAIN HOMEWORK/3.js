class Product {
    constructor(name, price, quantity, description) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
    }
  }
  
  const products = [
    new Product("Product 1", 10, 5, "Description 1"),
    new Product("Product 2", 20, 3, "Description 2"),
    new Product("Product 3", 30, 6, "Description 3"),
  ];