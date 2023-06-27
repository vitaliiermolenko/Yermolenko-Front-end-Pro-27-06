class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(`${this.name}`);
  }
}

class Car {
  constructor(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
  }
  setOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log(`${owner.name} менше 18 років але власник авто Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номер: ${this.licensePlate}`);
    }
  }
  getInfo() {
    if (this.owner) {
      console.log(
        `Власник: ${this.owner.name}, Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номер: ${this.licensePlate}`
      );
    }
  }
}

const human1 = new Human("Олександр", 25);
const human2 = new Human("Ірина", 32);
const human3 = new Human("Микола", 17);

const car1 = new Car("Toyota", "Camry", 2019, "BC1234AA",);
const car2 = new Car("Honda", "Civic", 2015, "AA4321BC",);
const car3 = new Car("BMW", "118i", 2008, "AB5678CA",);

car1.setOwner(human1);
car2.setOwner(human2);
car3.setOwner(human3);

car1.getInfo();
car2.getInfo();
car3.getInfo();