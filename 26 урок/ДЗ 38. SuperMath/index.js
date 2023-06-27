class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;

    // Перевірка коректності введення математичного знаку
    if (!this.isValidOperator(znak)) {
      console.log('Введено некоректний математичний знак.');
      this.input();
      return;
    }

    // Підтвердження дії від користувача
    const confirmation = prompt(`Ви хочете виконати дію ${znak} з ${X} і ${Y}? (Так/Ні)`);

    if (confirmation && confirmation.toLowerCase() === 'так') {
      this.calculate(X, Y, znak);
    } else {
      this.input();
    }
  }

  calculate(X, Y, znak) {
    let result;

    switch (znak) {
      case '+':
        result = X + Y;
        break;
      case '-':
        result = X - Y;
        break;
      case '*':
        result = X * Y;
        break;
      case '/':
        result = X / Y;
        break;
      case '%':
        result = X % Y;
        break;
      default:
        console.log('Некоректний математичний знак.');
        this.input();
        return;
    }

    console.log(`Результат: ${result}`);
  }

  input() {
    const obj = {
      X: parseInt(prompt('Введіть значення X:'), 10),
      Y: parseInt(prompt('Введіть значення Y:'), 10),
      znak: prompt('Введіть математичний знак (+ - / * %):'),
    };

    this.check(obj);
  }

  isValidOperator(znak) {
    const operators = ['+', '-', '*', '/', '%'];
    return operators.includes(znak);
  }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: '/' };
p.check(obj);
