const pop = [1, 2, 3, [1, 2, 3, [1, [1, 2], 2]], 0, 10];

function nestedList(arr) {
  const ul = document.createElement('ul');
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    if (Array.isArray(arr[i])) {
      li.appendChild(nestedList(arr[i]));
    } else {
      li.textContent = arr[i];
    }
    ul.appendChild(li);
  }
  return ul;
}

document.body.appendChild(nestedList(pop));

