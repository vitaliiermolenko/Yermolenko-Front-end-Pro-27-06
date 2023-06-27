// 1==========================================================================================================================
const arr = [1, 'two', 3, 'four', 5, null, undefined];

function averageOfNumbers(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
      count++;
    }
  }
  return count === 0 ? 0 : sum / count;
}

const average = averageOfNumbers(arr);
console.log(average); // 3
// 2==========================================================================================================================
function doMath(x, znak, y) {
  let result;
  switch (znak) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    case "%":
      result = x % y;
      break;
    case "^":
      result = Math.pow(x, y);
      break;
    default:
      result = "щось не те";
  }
  return result;
}

console.log(doMath(3, "+", 3)); 
console.log(doMath(3, "*", 3)); 
console.log(doMath(3, "/", 3)); 
console.log(doMath(3, "^", 3)); 
console.log(doMath(3, "%", 3)); 
console.log(doMath(3, "x", 3)); 
// 3==========================================================================================================================

const arrayLength = Number(prompt("Введіть довжину основного масиву:"));
const innerArrayLength = Number(prompt("Введіть довжину внутрішніх масивів:"));

function opa(arrayLength, innerArrayLength) {
  const arr = new Array(arrayLength);

  for (let i = 0; i < arrayLength; i++) {
    arr[i] = new Array(innerArrayLength);
    for (let j = 0; j < innerArrayLength; j++) {
      arr[i][j] = prompt(`Введіть значення для елемента [${i}][${j}]:`);
      console.log(`Значення елемента [${i}][${j}]: ${arr[i][j]}`);
    }
  }
  
  console.log("Заповнений масив:", arr);
  return arr;
}
opa(arrayLength, innerArrayLength);

// 4==========================================================================================================================
function removeItem(str, item) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!item.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

const input = ' hello world';
const item = ['l', 'd'];
const resultat = removeItem(input, item);
console.log(resultat);
