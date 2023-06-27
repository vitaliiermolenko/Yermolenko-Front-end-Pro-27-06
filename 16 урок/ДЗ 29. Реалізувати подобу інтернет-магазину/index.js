const shop = {
  Aвто: {
    BMW: {
      name: "BMW",
      inf: "1",
      price: 1780,
    },
    VW: {
      name: "VW",
      inf: "2",
      price: 2690,
    },
    AUDI: {
      name: "AUDI",
      inf: "3",
      price: 4670,
    },
  },
  Мото: {
    bmw: {
      name: "BMW",
      inf: "1",
      price: 2280,
    },
    Yamaha: {
      name: "Yamaha",
      inf: "2",
      price: 1650,
    },
    Suzuki: {
      name: "Suzuki",
      inf: "3",
      price: 1600,
    },
  },
  Велосипеди: {
    Kellys: {
      name: "Kellys",
      inf: "1",
      price: 790,
    },
    GIANT: {
      name: "GIANT",
      inf: "2",
      price: 850,
    },
    Merida: {
      name: "Merida",
      inf: "3",
      price: 470,
    },
  },
};

const categoryList = document.querySelector("#category-list");
const productList = document.querySelector("#product-list");
const productInfo = document.querySelector("#product-info");

function createCategoryList(shop) {
  for (const category in shop) {
    const div = document.createElement("div");
    div.style.cursor = "pointer";
    div.textContent = category;
    categoryList.append(div);

    div.addEventListener("click", () => {
      productList.innerHTML = "";
      createProductList(shop[category]);
    });
  }
}

function createProductList(items) {
  for (const product in items) {
    const div = document.createElement("div");
    div.style.cursor = "pointer";
    div.textContent = items[product].name;
    productList.append(div);

    div.addEventListener("click", () => {
      productInfo.innerHTML = "";
      createProductInfo(items[product], alertsBtn);
    });
  }
}

function createProductInfo(item, onBuy) {
  const name = document.createElement("h2");
  const inf = document.createElement("p");
  const price = document.createElement("p");
  const buyBtn = document.createElement("button");

  name.textContent = item.name;
  inf.textContent = item.inf;
  price.textContent = `Цена: ${item.price}`;
  buyBtn.textContent = "Придбати";

  productInfo.append(name, inf, price, buyBtn);

  buyBtn.addEventListener("click", () => {
    onBuy(item);
  });
}

function alertsBtn(item) {
  alert(`Ви купили товар "${item.name}"`);
  productInfo.innerHTML = "";
  productList.innerHTML = "";
}  
createCategoryList(shop);


