const fruits = ["Яблуко", "Банан", "Вишня", "Груша", "Абрикоса", "Ізюм"];

function removeElement(arr, valueArr) {
  function myFilter1(value) {
    return value !== valueArr;
  }
  return arr.filter(myFilter1);
}

const fruitfilter = removeElement(fruits, "Ізюм");
console.log(fruits);
console.log(fruitfilter);


// Спосіб 2 видалення через індекс

// function removeElement(arr, index) {
//   arr.splice(index, 1);
//   return arr;
// }

// const indexToRemove = 5; // індекс елемента, який треба видалити
// const fruitfilter = removeElement(fruits, indexToRemove);
// console.log(fruitfilter);


