const first_number = prompt("введіть перше число")
const second_number = prompt("введіть друге число")

const one = (Number(first_number));
const two = (Number(second_number));

const add = (one + two);
const sub = (one - two);
const mult = (one * two);
const div = (one / two);


alert (`${one}+${two}=${add}\n${one}-${two}=${sub}\n${one}*${two}=${mult}\n${one}/${two}=${div}`)