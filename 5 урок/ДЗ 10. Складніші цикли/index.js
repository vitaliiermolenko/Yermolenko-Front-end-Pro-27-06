document.write("<br>Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).<br>")
for (var i = 20; i <= 30; i+=0.5) {
  document.write(i + ", ");
}

document.write("<br>Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.).<br>")
let UAN = 27;
for (var i = 10; i <= 100; i+=10) {
  document.write(`${i} доларів коштує ${UAN * i} гривень, <br>`);
}

document.write("<br>Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.).<br>")
let n = 2000;
for (var i = 1; i <= 100; i++) {
  if (n > i*i) {
    document.write(i + ", ");    
  }
}

document.write("<br>Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе)..).<br>") 
let num = 17;
function number(num) {
  if (num <= 1) {
    return false; 
  }
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  
  return true; 
}

let result = number(num); 

if (result) {
  document.write(`${num} є простим числом`);
} else {
  document.write(`${num} не є простим числом`);
}

document.write("<br>Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).<br>") 

let numnerik = 81; //буль яке числе
let step = 3; //будь який степвгь від числа
let q;
for (q = 0; Math.pow(step, q) < numnerik; q++) {}
if (Math.pow(step, q) === numnerik) {
    document.write(`Можна отримати число ${numnerik} як ${step} в ${q} степені.`);
} else {
    document.write(`Не вийде отримати число ${numnerik} як ${step} в будь якому степеню.`);
}




