let users = [
  {
  "index": 0,
  "isActive": true,
  "balance": "$2,226.60",
  "name": "Eugenia Sawyer",
  "gender": "female",
  "phone": "+1 (840) 583-3207",
  "address": "949 John Street, Rose, Puerto Rico, 1857"
  },
  {
  "index": 1,
  "isActive": true,
  "balance": "$2,613.77",
  "name": "Pauline Gallegos",
  "gender": "female",
  "phone": "+1 (985) 593-3328",
  "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
  },
  {
  "index": 2,
  "isActive": false,
  "balance": "$3,976.41",
  "name": "Middleton Chaney",
  "gender": "male",
  "phone": "+1 (995) 591-2478",
  "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
  },
  {
  "index": 3,
  "isActive": true,
  "balance": "$1,934.58",
  "name": "Burns Poole",
  "gender": "male",
  "phone": "+1 (885) 559-3422",
  "address": "730 Seba Avenue, Osage, Alabama, 6290"
  },
  {
  "index": 4,
  "isActive": true,
  "balance": "$3,261.65",
  "name": "Mcfadden Horne",
  "gender": "male",
  "phone": "+1 (942) 565-3988",
  "address": "120 Scholes Street, Kirk, Michigan, 1018"
  },
  {
  "index": 5,
  "isActive": false,
  "balance": "$1,790.56",
  "name": "Suzette Lewis",
  "gender": "female",
  "phone": "+1 (837) 586-3283",
  "address": "314 Dunne Place, Bawcomville, Guam, 9053"
  }
  ]
  console.log(users);
// // // Перша операція використовує метод filter(), щоб відфільтрувати користувачів з балансом більше 2000 доларів. Функція, яка передається в метод filter(),
// // //  використовує метод parseFloat() для перетворення рядка, що представляє баланс, у дійсне число. Потім він замінює кому і долар на порожній рядок, щоб 
// // //  отримати чисте число. Якщо баланс більше 2000 доларів, функція повертає true, і користувач включається в новий масив. Останній метод map() використовується
// // //   для витягнення телефонних номерів відфільтрованих користувачів у новий масив richUsers.

// // // 1)Фільтруємо користувачів з балансом більше 2000 доларів і витягуємо їх телефонні номери
// const UsersNumber = users.filter(user => parseFloat(user.balance.replace(',', '').replace('$', '')) > 2000)

// .map(user => user.phone);
// // // Виводимо масив телефонних номерів
// // console.log(UsersNumber);
// // // Друга операція використовує метод reduce(), щоб знайти суму всіх балансів користувачів. Функція, яка передається в метод reduce(), використовує метод parseFloat()
// // //  для перетворення рядка, що представляє баланс, у дійсне число. Потім він замінює кому і долар на порожній рядок, щоб отримати чисте число. Значення 0 передається 
// // //  як початкове значення акумулятора acc. На кожній ітерації метод reduce() додає поточний баланс користувача до значення акумулятора acc. На кожній ітерації функція
// // //   повертає актуальне значення акумулятора acc. Останній результат повертається після завершення всіх ітерацій, що представляє загальну суму балансу всіх користувачів.

// // // 2)Знаходимо суму всіх балансів користувачів
// // const allBalance = users.reduce((acc, user) => acc + parseFloat(user.balance.replace(',', '').replace('$', '')), 0);

// // // Виводимо суму
// // console.log(allBalance);


// // console.log(users);
// // const UsersNumber = users.filter(user => parseFloat(user.balance.replace(',', '').replace('$', '')) > 2000)
// // .map(user => user.phone);
// // console.log(UsersNumber);
// // const allBalance = users.reduce((acc, user) => acc + parseFloat(user.balance.replace(',', '').replace('$', '')), 0);
// // console.log(allBalance);



// Для вирішення цієї задачі можна використати цикл for для перебору кожного об'єкту в масиві users. Потім, для кожного об'єкту, можна перевірити, чи баланс більший за 2000 доларів. 
// Якщо так, то можна додати телефонний номер користувача до масиву phoneNumbers.
// Для обчислення суми балансів користувачів можна використати цикл for для перебору кожного об'єкту в масиві users і додавати його баланс до змінної totalBalance.
// У цьому коді ми використали метод parseFloat() для перетворення рядка балансу на число, а також метод replace() для видалення коми та знака долара з рядка балансу.

// Запитати який буде кращий!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 

let phoneNumbers = [];
let totalBalance = 0;

for (let i = 0; i < users.length; i++) {
  let user = users[i];
  let balance = parseFloat(user.balance.replace(',', '').replace('$', ''));
  if (balance > 2000) {
    phoneNumbers.push(user.phone);
  }
  totalBalance += balance;
}

console.log(phoneNumbers); // виведе масив телефонних номерів користувачів з балансом більше 2000 доларів
console.log(totalBalance); // виведе суму всіх балансів користувачів





const UsersNumber = users.reduce((result, user) => {
  let balance = parseFloat(user.balance.replace(',', '').replace('$', ''));
  if (balance > 2000) {
    result.push(user.phone);
  }
  return result;
}, []);
console.log(UsersNumber);

const allBalance = users.reduce((acc, user) => acc + parseFloat(user.balance.replace(',', '').replace('$', '')), 0);
console.log(allBalance);



