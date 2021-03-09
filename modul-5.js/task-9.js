function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
// рeфакторинг кода
 
class Car {
    brand;
    model;
    price;

    constructor({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

}