class Student {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.grades = [];
    this.attendance = new Array(25).fill();
  }
  getAge() {
    return 2023 - this.age;
  }
  // Цей код є методом JavaScript з назвою getAge(). Його призначення - повернути вік особи, представленої об'єктом, який містить властивість age.
  // Код new Date().getFullYear() повертає поточний рік в форматі числа (наприклад, для поточної дати 13 квітня 2023 він поверне 2023).
  //   Код this.age повертає властивість age поточного об'єкту, до якого метод getAge() було застосовано.
  //   Оскільки new Date().getFullYear() повертає поточний рік, а this.age містить рік народження особи, різниця між цими значеннями є віком особи. Тому, використовуючи операцію віднімання, метод getAge() повертає вік особи.
  //   Наприклад, якщо властивість age містить рік народження 2000, а поточний рік 2023, то виклик методу getAge() поверне число 23, що відповідає віку особи.
  present() {
    const i = this.attendance.indexOf();
    if (i !== -1) {
      this.attendance[i] = true;
    }
    return this;
  }
  // Цей код є методом JavaScript з назвою present(). Його призначення - встановити позначку про присутність у поточному об'єкті, який містить масив з властивістю attendance.
  // Код this.attendance.indexOf() повертає індекс першого елемента в масиві attendance, що дорівнює шуканому елементу. Проте у вихідному коді відсутнє значення, 
  // що шукається, тому цей метод поверне -1.
    // Умова if (i !== -1) перевіряє, чи знайдено шуканий елемент. Якщо так, то відбувається наступне:
    // this.attendance[i] = true; - елемент в масиві attendance, що дорівнює шуканому значенню, встановлюється в true.
  // Якщо значення, що шукається, не знайдено в масиві attendance, то жодної зміни не відбувається, а метод повертає поточний об'єкт this.
    // Наприклад, якщо масив attendance містить [true, false, false, true], а this.attendance.indexOf() шукає значення false, то змінна i отримає значення 
  // 1. Тоді виконується код this.attendance[i] = true;, що призведе до зміни масиву на [true, true, false, true]. Нарешті, метод поверне поточний об'єкт.
  absent() {
    const i = this.attendance.indexOf();
    if (i !== -1) {
      this.attendance[i] = false;
    }
    return this;
  }
  // Цей код є методом JavaScript з назвою absent(). Його призначення - встановити позначку про відсутність у поточному об'єкті, який містить масив з властивістю attendance.
  // Код this.attendance.indexOf() повертає індекс першого елемента в масиві attendance, що дорівнює шуканому елементу. Проте у вихідному коді відсутнє значення, що шукається, 
  // тому цей метод поверне -1.
    // Умова if (i !== -1) перевіряє, чи знайдено шуканий елемент. Якщо так, то відбувається наступне:
    // this.attendance[i] = false; - елемент в масиві attendance, що дорівнює шуканому значенню, встановлюється в false.
  // Якщо значення, що шукається, не знайдено в масиві attendance, то жодної зміни не відбувається, а метод повертає поточний об'єкт this.
    // Наприклад, якщо масив attendance містить [true, false, false, true], а this.attendance.indexOf() шукає значення false, то змінна i отримає значення 
  // 1. Тоді виконується код this.attendance[i] = false;, що призведе до зміни масиву на [true, false, false, true]. Нарешті, метод поверне поточний об'єкт.
  avgAttendance() {
    return (
      this.attendance.reduce((acc, el) => {
        if (el === true) {
          acc++;
        }
        return acc;
      }, 0) / this.attendance.length
    );
  }
  // Цей код є методом JavaScript з назвою avgAttendance(). Його призначення - обчислити середнє арифметичне присутності студента на уроці, використовуючи масив attendance, що належить 
  // поточному об'єкту.
  // У цьому методі використовується метод reduce(), який обчислює загальну кількість відвідувань студента, де значення true відповідає присутності, а значення false - відсутності.
  //   this.attendance.reduce((acc, el) => {...}, 0) - метод reduce() обчислює загальну кількість присутностей, де початкове значення acc встановлюється в 0, а el є кожним 
  // елементом масиву attendance. Якщо значення елементу el дорівнює true, то збільшується значення acc на 1. Після того, як reduce() обійде весь масив attendance, повертається фінальне значення acc, яке відповідає загальній кількості присутностей.
  //   / this.attendance.length - загальна кількість присутностей ділиться на загальну кількість уроків, щоб отримати середнє арифметичне.
  //   Отже, якщо масив attendance містить [true, true, false, true, false], то метод поверне середнє арифметичне присутності студента, тобто (3/5) = 0.6, що відповідає 60%
  //  присутності на уроці.
  avgGrade() {
    if (this.grades.length === 0) {
      return 0;
    } else {
      return (
        this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length
      );
    }
  }
  // Цей код є методом JavaScript з назвою avgGrade(). Його призначення - обчислити середнє арифметичне оцінок, які містяться в масиві grades, що належить поточному об'єкту.
  // Умова if (this.grades.length === 0) перевіряє, чи масив grades містить хоча б один елемент. Якщо масив порожній, то метод повертає 0, тобто середнє арифметичне визначити неможливо.
  //   Якщо масив grades не порожній, то виконується код в блоку else:
  //   this.grades.reduce((sum, grade) => sum + grade, 0) - метод reduce() застосовується для обчислення суми всіх елементів масиву grades. Параметр sum початково встановлюється в 0,
  //    а grade є кожним елементом масиву grades. Результатом цієї операції є загальна сума оцінок.
  // / this.grades.length - сума оцінок ділиться на кількість елементів масиву grades, щоб отримати середнє арифметичне.
  // Отже, якщо масив grades містить оцінки [5, 4, 3, 5, 5], то метод поверне середнє арифметичне цих оцінок, тобто (5+4+3+5+5)/5 = 4.4.
  sum() {
    if (this.avgGrade() > 90 && this.avgAttendance() > 0.9) {
      return "ти молодець!";
    } else if (this.avgGrade() > 90 || this.avgAttendance() > 0.9) {
      return "добре, але можна краще";
    } else {
      return "ти редиска!";
    }
  }
}
const student1 = new Student("Максиміліан", "Шевченко", 2002);
student1.grades = [90, 100, 90, 90, 90, 90, 90, 90, 90, 95];
student1.present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present();
console.log(`${student1.name} ${student1.surname} ${student1.getAge()} років`);
console.log(`${student1.avgAttendance()} відвідуваність`);
console.log(`${student1.avgGrade()} середній бал`);
console.log(`${student1.name} ${student1.sum()}`);

const student2 = new Student("Олександра", "Мельникова", 2001);
student2.grades = [55, 33, 0.9, 5, 100];
student2.present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present();
console.log(`${student2.name} ${student2.surname} ${student2.getAge()} років`);
console.log(`${student2.avgAttendance()} відвідуваність`);
console.log(`${student2.avgGrade()} середній бал`);
console.log(`${student2.name} ${student2.sum()}`);

const student3 = new Student("Артемій", "Ковальов", 2000);
student3.grades = [90, 100, 90, 90, 90, 90, 90, 90, 90, 95];
student3.present().present().present().present().present().present().present().present();
console.log(`${student3.name} ${student3.surname} ${student3.getAge()} років`);
console.log(`${student3.avgAttendance()} відвідуваність`);
console.log(`${student3.avgGrade()} середній бал`);
console.log(`${student3.name} ${student3.sum()}`);

const student4 = new Student("Юлія ", "Лисенко", 2003);
student4.grades = [55, 33, 0.9, 5, 100];
student3.present().present().present().present().present().present().present().present();
console.log(`${student4.name} ${student4.surname} ${student4.getAge()} років`);
console.log(`${student4.avgAttendance()} відвідуваність`);
console.log(`${student4.avgGrade()} середній бал`);
console.log(`${student4.name} ${student4.sum()}`);