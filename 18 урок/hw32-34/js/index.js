import { shop, categoryList, productList, productInfo } from "./variable.js";
import { appendForm } from "./formDev.js";
import { createPurchases } from "./myOrder.js";

function createCategoryList(shop) {
  for (const category in shop) {
    const li = document.createElement("li");
    li.style.cursor = "pointer";
    li.textContent = category;
    categoryList.append(li);

    li.addEventListener("click", () => {
      productList.innerHTML = "";
      createProductList(shop[category]);
    });
  }
}

function createProductList(items) {
  for (const product in items) {
    const li = document.createElement("li");
    li.style.cursor = "pointer";
    li.textContent = items[product].name;
    productList.append(li);

    li.addEventListener("click", () => {
      productInfo.innerHTML = "";
      createProductInfo(items[product]);
    });
  }
}

function createProductInfo(item) {
  const name = document.createElement("h2");
  name.id = "itemName";
  const description = document.createElement("p");
  const price = document.createElement("p");
  price.className = "price";
  const buyBtn = document.createElement("button");

  name.textContent = item.name;
  description.textContent = item.description;
  price.textContent = item.price;
  buyBtn.textContent = "Купити";

  productInfo.append(name, description, price, buyBtn);

  buyBtn.addEventListener("click", () => {
    appendForm();
  });
}

createCategoryList(shop);
