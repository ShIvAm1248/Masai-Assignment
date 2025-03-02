function Item(title, cost, stock) {
    this.title = title;
    this.cost = cost;
    this.stock = stock;
}

Item.prototype.getInfo = function() {
    return `${this.title} - Price: $${this.cost}, Quantity: ${this.stock}`;
};

function Gadget(title, cost, stock, brand, model) {
    Item.call(this, title, cost, stock);
    this.brand = brand;
    this.model = model;
}

Gadget.prototype = Object.create(Item.prototype);
Gadget.prototype.constructor = Gadget;

Gadget.prototype.turnOn = function() {
    return `${this.title} by ${this.brand} is now ON.`;
};

Gadget.prototype.turnOff = function() {
    return `${this.title} by ${this.brand} is now OFF.`;
};

function Apparel(title, cost, stock, size, fabric) {
    Item.call(this, title, cost, stock);
    this.size = size;
    this.fabric = fabric;
}

Apparel.prototype = Object.create(Item.prototype);
Apparel.prototype.constructor = Apparel;

Apparel.prototype.getClothingInfo = function() {
    return `${this.title} - Size: ${this.size}, Fabric: ${this.fabric}`;
};

function Novel(title, cost, stock, author, genre) {
    Item.call(this, title, cost, stock);
    this.author = author;
    this.genre = genre;
}

Novel.prototype = Object.create(Item.prototype);
Novel.prototype.constructor = Novel;

Novel.prototype.getBookDetails = function() {
    return `${this.title} by ${this.author}, Genre: ${this.genre}`;
};

const laptop = new Gadget("Laptop", 1200, 10, "Lenovo", "LOQ");
console.log(laptop.getInfo());
console.log(laptop.turnOn());

const tshirt = new Apparel("T-shirt", 25, 50, "L", "Cotton");
console.log(tshirt.getInfo());
console.log(tshirt.getClothingInfo());

const biography = new Novel("Helen Keller", 15, 30, "Helen Keller", "Biography");
console.log(biography.getInfo());
console.log(biography.getBookDetails());
