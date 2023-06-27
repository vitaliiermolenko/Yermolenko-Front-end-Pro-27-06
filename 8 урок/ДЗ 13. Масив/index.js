const input = prompt(`Введіть цифри через пробіл`)
document.write(`Ви ввели значення: ${input} <br /> <br />`);

const array = input.split(' ')
document.write(`Ваш масив: ${array} <br /><br />`);

array.sort((a, b) => {
    return a - b;
});
document.write(`Відсотрований масив: ${array} <br /> <br />`);

array.splice(1, 3);
document.write(`Видалені елементи з масиву з 2 по 4 (включно!): ${array} <br /> <br />`);





