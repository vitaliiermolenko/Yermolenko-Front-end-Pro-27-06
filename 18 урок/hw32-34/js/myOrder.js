import { wrapper, purchasesBtn, existingObjects, buyForm } from "./variable.js";

function showPurchases() {
  if (existingObjects.length > 0) {
    const ul = document.querySelector("#purchases");
    buyForm.remove();
    wrapper.remove();
    if (ul) {
      ul.parentNode.removeChild(ul);
    }
    createPurchases(existingObjects);
  }
}

purchasesBtn.addEventListener("click", showPurchases);

export function createPurchases(orders) {
  const ul = document.createElement("ul");
  ul.id = "purchases";

  orders.forEach((order, index) => {
    const { date, price, itemName, username, quantity, city, newmail, payment, comment } = order;

    const orderItem = document.createElement("li");
    const detailBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    detailBtn.textContent = "Деталі";
    orderItem.textContent = `Заказ #${index + 1} - Дата: ${date}, Ціна ${price}`;
    orderItem.appendChild(detailBtn);
    orderItem.appendChild(deleteBtn);
    ul.appendChild(orderItem);

    detailBtn.addEventListener("click", () => {
      const detailText = `Товар: ${itemName} І'мя: ${username}, Кількість: ${quantity}, Місто: ${city}, Відділ Нової пошти: ${newmail}, Оплата: ${payment}, Комментарі: ${comment}`;
      const p = document.createElement("p");
      const pNode = document.querySelector("p");
      if (pNode) {
        pNode.remove();
      }
      p.append(detailText);
      orderItem.append(p);
    });

    deleteBtn.addEventListener("click", () => {
      const index = orders.indexOf(order);
      if (index !== -1) {
        orders.splice(index, 1);
        localStorage.setItem("objects", JSON.stringify(orders));
      }
      orderItem.remove();
      if (ul.children.length <= 0) {
        ul.parentNode.removeChild(ul);
      }
    });
  });

  if (ul.children.length > 0) {
    document.body.appendChild(ul);
  }
}
