const one = prompt('введіть перший рядок');
const two = prompt('введіть другий рядок');
const three = prompt('введіть третій рядок');

const answer = `${one} ${two} ${three}`;

const tgap = answer.split('').join(" ");

console.log(answer);
console.log(tgap);