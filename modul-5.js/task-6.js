// Задание
// С помощью Function Declaration напиши функцию - конструктор Storage,
//     которая будет создавать объекты для управления складом товаров.
// Функция ожидает только один аргумент - начальный массив товаров,
//     который записывается на создаваемый объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items объекта,
//     который вызывает этот метод.
//     addItem(newItem) - принимает новый товар newItem и добавляет его в массив
// товаров в свойстве items объекта, который вызывает этот метод.
//     removeItem(item) - принимает товар item и удаляет его из массива товаров
// в свойстве items объекта, который вызывает этот метод.

function Storage(items) {
    this.items;
}
Storage.prototype.getItems = function(){
    return this.items;
}
Storage.prototype.addItem = function (newItem) {
    return this.items.push(newItem);
}
Storage.prototype.removeItem = function (item) {
    for (const it of this.items) {
        if (it === item) {
    return this.items.splice(this.items.indexOf(item), 1)
}
    }
}
or
class Storage {
    constructor (items) {
        this.items = items;
    }
    getItems() {
    return this.items;
}
addItem (newItem) {
    return this.items.push(newItem);
}
removeItem (itemToRemove) {
    return this.items.splice(this.items.indexOf(itemToRemove), 1);
}
}
// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
