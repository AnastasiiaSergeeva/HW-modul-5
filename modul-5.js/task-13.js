// Задание
// Выполни рефакторинг заменив функцию - конструктор StringBuilder на класс
// с методами.Сделай так, чтобы свойство value было приватным.

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str;
// };

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// ======>
class StringBuilder{
        #value;

    constructor(baseValue){
        this.#value = baseValue;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value += str;
    }
    padStart(str) {
      this.#value = str + this.#value;
    }
    padBoth(str) {
       this.padStart(str);
       this.padEnd(str);
    }
    }

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='