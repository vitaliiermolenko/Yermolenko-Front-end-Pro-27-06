import { cities, paymentOptions, buyForm, existingObjects } from "./variable.js";

function createForm(cities, paymentOptions) {
  const form = document.createElement("form");
  form.id = "orderForm";

  const formName = document.createElement("input");
  formName.type = "text";
  formName.required = true;
  formName.name = "name";
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "ПІБ";
  nameLabel.appendChild(formName);
  form.appendChild(nameLabel);

  const cityLabel = document.createElement("label");
  cityLabel.textContent = "Вибріть місто";
  const citySelect = document.createElement("select");
  citySelect.name = "city";
  citySelect.required = true;

  for (let i = 0; i < cities.length; i++) {
    const citiesName = cities[i];
    const option = document.createElement("option");
    option.value = citiesName;
    option.textContent = citiesName;
    citySelect.appendChild(option);
  }
  cityLabel.appendChild(citySelect);
  form.appendChild(cityLabel);

  const newmailLabel = document.createElement("label");
  newmailLabel.textContent = "Який віділ пошти?";
  const newmailInput = document.createElement("input");
  newmailInput.name = "newmail";
  newmailInput.type = "text";
  newmailInput.required = true;
  newmailLabel.appendChild(newmailInput);
  form.appendChild(newmailLabel);

  const paymentLabel = document.createElement("label");
  paymentLabel.textContent = "Оплата";
  const paymentSelect = document.createElement("select");
  paymentSelect.name = "payment";
  paymentSelect.required = true;
  for (let i = 0; i < paymentOptions.length; i++) {
    const element = paymentOptions[i];
    const optionEl = document.createElement("option");
    optionEl.value = element;
    optionEl.textContent = element;
    paymentSelect.appendChild(optionEl);
  }
  paymentLabel.appendChild(paymentSelect);
  form.appendChild(paymentLabel);

  const quantityLabel = document.createElement("label");
  quantityLabel.textContent = "Кількість";
  const quantityInput = document.createElement("input");
  quantityInput.name = "quantity";
  quantityInput.type = "number";
  quantityInput.min = "1";
  quantityInput.max = "10";
  quantityInput.required = true;
  quantityLabel.appendChild(quantityInput);
  form.appendChild(quantityLabel);

  const commentLabel = document.createElement("label");
  commentLabel.textContent = "Коментарі";
  const commentTextarea = document.createElement("textarea");
  commentTextarea.name = "comment";
  commentLabel.appendChild(commentTextarea);
  form.appendChild(commentLabel);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Підтвердити замовлення";
  form.appendChild(submitBtn);
  return { form };
}

export function appendForm() {
  const { form } = createForm(cities, paymentOptions);
  buyForm.innerHTML = "";
  buyForm.appendChild(form);
  const price = document.querySelector(".price").textContent;
  const itemName = document.querySelector("#itemName").textContent;

  form.addEventListener("submit", () => {
    const formData = new FormData(form);
    const name = formData.get("name");
    const quantity = formData.get("quantity");
    const city = formData.get("city");
    const post = formData.get("newmail");
    const select = formData.get("payment");
    const comment = formData.get("comment");
    const date = new Date();
    let userForm = {
      username: name,
      quantity: quantity,
      city: city,
      newmail: post,
      payment: select,
      comment: comment,
      date: date,
      price: +(price * quantity),
      itemName: itemName,
    };
    existingObjects.push(userForm);
    localStorage.setItem("objects", JSON.stringify(existingObjects));
    form.remove();
  });
}
