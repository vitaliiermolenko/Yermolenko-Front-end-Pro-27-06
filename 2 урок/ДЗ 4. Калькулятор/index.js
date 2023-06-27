const input = prompt("введіть дію '+' '-' '*' '/' ");
const first_number = prompt("введіть перше число")
const second_number = prompt("введіть друге число")
const add = "+";
const sub = "-";
const mult = "mult";
const div = "div";

const one = (Number(first_number));
const two = (Number(second_number));

if (input === "+") {
    console.log(one + two);
} 

else if (input === "-") {
    console.log(one - two);
} 

else if (input === "*") {
    console.log(one * two);
} 

else if (input === "/") {
    console.log(one / two);
} 

else {
  console.log("Некоректна дія. Введіть ще раз.");
}
