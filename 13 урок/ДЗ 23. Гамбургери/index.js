class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_LARGE = { price: 100, calories: 40 };
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };
  static TOPPING_MAYO = { price: 20, calories: 5 };
  static TOPPING_SPICE = { price: 15, calories: 0 };
  // Ця частина коду містить статичні властивості класу Hamburger, які представляють можливі розміри гамбургера, начинки та додаткові топінги. Кожна властивість є об'єктом з 
  // двома властивостями: price (вартість) та calories (кількість калорій).
  // Ці статичні властивості можуть бути використані для створення екземплярів класу Hamburger з відповідними розмірами, начинками та топінгами. Наприклад, при створенні 
  // екземпляру hamburger з розміром "малий" та начинкою "сир" в коді використовуються властивості SIZE_SMALL та STUFFING_CHEESE, які містять ціну та калорійність відповідних 
  // розмірів та начинок.

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    const sizePrice = this.size.price;
    const stuffingPrice = this.stuffing.price;
    const toppingsPrice = this.toppings.reduce(
      (acc, topping) => acc + topping.price,
      0
    );
    return sizePrice + stuffingPrice + toppingsPrice;
  }
  // Метод calculatePrice() обчислює вартість гамбургера, враховуючи його розмір, начинку та додаткові добавки.
  // У першу чергу, метод отримує вартість розміру гамбургера зі змінної this.size.price і вартість начинки зі змінної this.stuffing.price.
  // Далі, метод використовує метод reduce() для обчислення загальної вартості додаткових добавок. Метод reduce() приймає функцію, яка викликається для кожного елемента масиву 
  // this.toppings. Функція додає вартість додаткової добавки до змінної acc, яка представляє загальну вартість додаткових добавок, та повертає оновлене значення acc.
  // Значення 0 в другому параметрі методу reduce() визначає початкове значення змінної acc. Якщо масив this.toppings порожній, метод reduce() поверне 0, оскільки немає жодної
  //  додаткової добавки.
  // На останок, метод повертає суму вартостей розміру гамбургера, начинки та додаткових добавок, що були обчислені раніше.

  calculateCalories() {
    const sizeCalories = this.size.calories;
    const stuffingCalories = this.stuffing.calories;
    const toppingsCalories = this.toppings.reduce(
      (acc, topping) => acc + topping.calories,
      0
    );
    return sizeCalories + stuffingCalories + toppingsCalories;
  }
}

// приклад використання
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Калорії: " + hamburger.calculateCalories());
console.log("Ціна: " + hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log("Ціна з соусами: " + hamburger.calculatePrice());


// Цей код є прикладом ООП підходу до реалізації задачі з розрахунку вартості та калорійності гамбургера.
// Ми визначили клас Hamburger, який містить в собі конструктор, методи та константи. У конструкторі ми задаємо основні властивості гамбургера: його розмір (size), начинку (stuffing) 
// та додаткові добавки (toppings). Для визначення розміру та начинки ми використовуємо статичні властивості класу.
// Статичні властивості - це властивості, що належать не конкретному екземпляру класу, а самому класу в цілому. В даному випадку, статичні властивості визначають розміри, начинки та 
// добавки до гамбургера з їх ціною та калорійністю. Зверніть увагу, що визначення статичних властивостей проводиться за допомогою ключового слова static, що дозволяє використовувати ці 
// властивості без необхідності створювати екземпляр класу.
// Для додавання додаткових добавок до гамбургера ми використовуємо метод addTopping, який приймає об'єкт з ціною та калорійністю добавки. Метод addTopping додає цю добавку до масиву 
// toppings у поточному об'єкті гамбургера.
// Для розрахунку вартості та калорійності гамбургера ми використовуємо методи calculatePrice та calculateCalories відповідно. В цих методах ми використовуємо властивості розміру, начинки 
// та добавок, щоб визначити загальну вартість та калорійність гамбургера.
// Нарешті, ми створюємо екземпляр класу Hamburger, додаємо до нього додаткові добавки та використовуємо методи calculatePrice та calculateCalories, щоб отримати вартість та калорійність
// класу Hamburger з параметрами розміру та начинки, ми можемо додавати до нього додаткові добавки за допомогою методу addTopping. Кожна добавка представлена як статична властивість 
// класу Hamburger, яка містить інформацію про ціну та кількість калорій.
// Для розрахунку вартості гамбургера використовується метод calculatePrice, який обчислює загальну вартість, враховуючи розмір, начинку та всі додаткові добавки.
// Аналогічно, для розрахунку калорійності використовується метод calculateCalories, який обчислює загальну кількість калорій, враховуючи розмір, начинку та всі додаткові добавки.
// У прикладі, який ми розглянули, ми створили маленький гамбургер з начинкою з сиру, додали до нього майонез і обчислили вартість та калорійність. Потім ми додали ще приправу 
// та знову обчислили вартість. Результати були виведені на консоль за допомогою функції console.log.