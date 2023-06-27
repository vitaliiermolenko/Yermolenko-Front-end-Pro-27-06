function number(num, degree) {
  if (degree === 0) {
    return 1;
  } else if (degree === 1) {
    return num;
  } else {
    return num * number(num, degree - 1);
  }
}

console.log(number(2, 3)); // 8
console.log(number(5, 2)); // 25
console.log(number(10, 0)); // 1
