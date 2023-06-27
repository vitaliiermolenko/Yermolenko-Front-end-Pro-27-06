const date = prompt("Введіть рік свого народження.");
const n_city = prompt("В якому місті ви живете.").toLowerCase();
const n_sport = prompt("Який ваш улюблений вид спорту.").toLowerCase();

const year = (Number(date));

let message;
switch (date) {
  case null:
    message = `Шкода, що Ви не захотіли ввести свій рік народження.`;
    break;
  case '':
    message = `Шкода, що Ви не захотіли ввести свій рік народження.`;
    break;
  default:
    message = `Вам ${2023 - year} роки(ів)`;
    break;
}

let message1
switch (n_city) {
  case "київ":
    message1 = `Вітаємо, ви живете в столиці Київ !`;
    break;
  case "вашингтон":
    message1 = `Вітаємо, ви живете в столиці Вашингтон !`;
    break;
  case "лондон":
    message1 = `Вітає мо, ви живете в столиці Лондон !`;
    break;
  case null:
    message1 = `Шкода, що Ви не захотіли ввести своє місто в якому ви живете.`;
    break;
  case '':
    message1 = `Шкода, що Ви не захотіли ввести своє місто в якому ви живете.`;
    break;
  default:
    message1 = `Вітаємо, ви живете в ${n_city} !`;    
    break;
}

let message2;
switch (n_sport) {
  case "бокс":
    message2 = `Круто! Хочеш стати Олександрем Усиком?`;
    break;
  case "футбол":
    message2 = `Круто! Хочеш стати Ліонельем Мессі?`;
    break;
  case "хокей":
    message2 = `Круто! Хочеш стати Вейном Ґрецкі?`;
    break;
  case null:
    message2 = `Шкода, що Ви не захотіли ввести свій найулюблений вид спорту.`;
    break;
  case '':
    message2 = `Шкода, що Ви не захотіли ввести свій найулюблений вид спорту.`;
    break;
  default:
    message2 = `Круто, хочеш стати накращим?`;    
    break;
} 

alert(`${message}\n${message1}\n${message2}`);