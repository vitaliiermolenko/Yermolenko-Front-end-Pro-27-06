export const shop = {
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

export const existingObjects = JSON.parse(localStorage.getItem("objects")) || [];

export const cities = ["Одеса", "Київ", "Львів", "Харків"];
export const paymentOptions = ["Передоплата", "Оплата банківською картою", "Оплата готівкою"];
export const purchasesBtn = document.querySelector("#myPurchases");
export const categoryList = document.querySelector("#category-list");
export const productList = document.querySelector("#product-list");
export const productInfo = document.querySelector("#product-info");
export const buyForm = document.querySelector("#buyForm");
export const wrapper = document.querySelector(".wrapper");
