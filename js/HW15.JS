// !ДЗ 15. Цикли, масиви, методи масивів.




// Створіть масив елементів (Наприклад: ["apple", "carrot", "pear", "celery"]).

let array = ["apple", "carrot", "pear", "celery"]

// Виведіть послідовно кожен елемент масиву з допомогою forEach().

array.forEach(element => {
    console.log(element)
})

// Виведіть послідовно кожен елемент масиву з допомогою for ... of.

for (let value of array) {
    console.log(value);
}