let calculator = {
  read(a,b) {
    calculator.a = a;
    calculator.b = b;
  },
  sum() {
    let total = +this.a + +this.b;
    return total;
  },
  mul() {
    let result = this.a * this.b;
    return result;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
