function car(make, model, year, type) {
    this.make = make;
    this.mode = model;
    this.year = year;
    this.type = type;
    this.isAvailable = true;
  }
  
  function Customer(name) {
    this.name = name;
    this.rentedCars = [];
  }
  
  Customer.prototype.rentedCar = function (car) {
    if (car.isAvailable) {
      car.isAvailable = false;
      this.rentedCars.push(car);
      console.log(`${this.name} rented a ${car.make} ${car.model}`);
    } else {
      console.log(`${car.make}  ${car.model} is already rented`);
    }
  };
  
  Customer.prototype.returnCar = function (car) {
    const index = this.rentedCars.indexOf(car);
    if (index > -1) {
      console.loog(`${this.name} is returning ${car.make} ${car.mode}`);
  
      setTimeout(() => {
        car.isAvailable = true;
        this.rentedCars.splice(index, 1);
        console.log(`${this.name} has returened ${car.make} ${car.model}`);
      }, 2000);
    } else {
      console.log(`${this.name} did not rent this car`);
    }
  };
  
  function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);
    this.discountRate = discountRate;
  }
  
  PremiumCustomer.prototype = Object.create(Customer.prototype);
  PremiumCustomer.prototype.constructor = PremiumCustomer;
  
  function calculateRentalPrice(car, days, customer) {
    const baseprice = 50;
    let ratemul = 1;
  
    switch (car.type) {
      case "SUV":
        ratemul = 1.5;
        break;
  
      case "sedan":
        ratemul = 1.2;
        break;
      case "Economy":
        ratemul = 1.0;
        break;
     default:
      ratemul = 1;
    }
  let price = baseprice*ratemul*days;
  if(customer instanceof PremiumCustomer){
      price*=(1-customer.discountRate/100);
  }
  console.log(`${customer.name} pay $${price.toFixed(2)}`)
  
  }
  
  function Maintance(car,delay){
      console.log(`Maintance started for ${car.name} ${car.model}`)
  
      setTimeout(()=>{
          car.isAvailable = true;
          
      },delay)
  }
  
  const car1 = new car("Toyota","fortuner",2020,"SUV");
  
  const customer1 = new Customer("Alice");
  const customer2 = new Customer("Bob",10);
  
  customer1.rentedCar(car1)
  customer2.rentedCar(car1);
  
  calculateRentalPrice(car1,3,customer1);
  calculateRentalPrice(car1,5,customer2);
  
  Maintance(car1,3000)
  