class Car {
    constructor(name, brand) {
      this.name = name;
      this.brand = brand;
    }
}

class Engine extends Car {
    constructor(name, brand, type, age) {
        super(name, brand);
        this.type = type
        this.age = age
    }
}

const Petrol = new Engine('Petrol', 'Chevrolet', 'Flat', 100)

console.log(Petrol)