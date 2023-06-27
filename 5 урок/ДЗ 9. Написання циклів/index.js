document.write("<br>Вивести на сторінку в один рядок через кому числа від 10 до 20.<br>")
for (var i = 10; i <= 20; i++) {
  document.write(i + ", ");
}

document.write("<br>Вивести квадрати чисел від 10 до 20.<br>")
for (var i = 10; i <= 20; i++) {
    document.write(i*i + ", ");
}

document.write("<br>Вивести таблицю множення на 7.<br>")   
for (var i = 1  ; i <= 10; i++) {
    document.write(`7 * ${i} = ${7*i + ", "}`);
}

document.write("<br>Знайти суму всіх цілих чисел від 1 до 15.<br>")
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}    
document.write(sum + ", ");

document.write("<br>Знайти добуток усіх цілих чисел від 15 до 35.<br>")
let mult = 1;
for (let i = 15; i <= 30; i++) {
  mult *= i;
}
document.write(mult + ", ");

document.write("<br>Знайти середнє арифметичне всіх цілих чисел від 1 до 500.<br>")
let sum2 = 0;
for (let i = 1; i <= 500; i++) {
  sum2 += i;
}    
document.write(sum2/500 + ", ");

document.write("<br>Вивести суму лише парних чисел в діапазоні від 30 до 80.<br>")
let ave = 0;
for (let i = 30; i <= 80; i+=2) {
  ave += i;
}
document.write(ave + ", ");

document.write("<br>Вивести всі числа в діапазоні від 100 до 200 кратні 3.<br>")
for (var i = 100; i <= 200; i++) {
  if (i % 3 === 0 ) {
    document.write(i + ", "); 
  }
}

const number = prompt("введіть будь яке натуральне число");
document.write(`<br>Дано натуральне число ${number}. Знайти та вивести на сторінку всі його дільники.<br>`)
let divi = [];

for(let i = 1; i <= number; i++) {
  if(number % i === 0) {
    divi.push(i);
  }
}

document.write(divi + ", ");

let count = 0;
let countsum = 0;

for(let i = 0; i < divi.length; i++) {
  if(divi[i] % 2 === 0) {
    count++;
    countsum += divi[i];
  }
}

document.write(`<br>Визначити кількість парних дільників чила ${number}.<br>`)
document.write(count + ", ");
document.write(`<br>Знайти суму парних дільників чила ${number}.<br>`)
document.write(countsum + ", ");

document.write("<br>Надрукувати повну таблицю множення від 1 до 10.<br>")
for (let i = 1; i <= 10; i++) {
    for (let q = 1; q <= 10; q++) {
      let result = i * q;
      document.write(`${i} x ${q} = ${result}<br>`);
    }
  }  