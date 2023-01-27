
// ! ДЗ 12. Масив
// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку

let userArrayLenght = +prompt('Вести довжину масиву');

let userArray = [];

for (i = 0; i < userArrayLenght; i++) {
    const element = +prompt(`Введіть номери ${i}`)
    userArray.push(element)
}

console.log(userArray)
console.log(userArray.sort((a, b) => a - b))

userArray.splice(1, 3)
console.log(userArray)

