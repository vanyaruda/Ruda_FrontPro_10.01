// ! Напишіть програму на JavaScript для створення об'єкта Animal, який має властивість name та метод speak(). За допомогою спадкування створіть клас Dog, який має властивість breed та перевизначений метод speak(). За допомогою класу Dog створіть об'єкт myDog і викличте його метод speak().

class Animal {
    constructor(name) {
        this.name = name;

    };
    speack() {
        `${this.name} don/t speack`
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed;
    }
    speack() {
        console.log(`${this.name} can speack`)
    }
}

const pitBull = new Dog('Bob', 'Titan')

console.log(pitBull.speack())

// ! Припустимо, що ми створюємо клас Rectangle, який містить дві властивості: width та height. Треба зробити метод, який ставить width та height і виводить. Ми використаємо геттер та сеттер.

class Rectangle {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }

    get getWidth() {
        return this.width;
    }

    get getHeigth() {
        return this.heigth;
    }

    set setWidth(value) {
        this.width = value;
    }

    set setHeigth(value) {
        this.heigth = value;
    }
}

const rectangle = new Rectangle(5, 5)
console.log(rectangle.getWidth)
rectangle.setWidth = 15
console.log(rectangle.getWidth)



// ! Створить задачу, яка приймає невизначену кількість чисел (...rest) і повертає найбільше число.

const func = (...args) => {
    return Math.max(...args)
}

console.log(func(1, 2, 32, 4, 5))


// !В нас є два массиви [11, 3, 9], [2, 0, 6]. Ваша задача створити функцію, яка приймає один оператор, але ви передаєте туди в якості аргументу 2 масиви (...spread). Ваша задача - знайти найбільше число.
const array1 = [11, 3, 9]
const array2 = [2, 0, 6]


const funcMax = (...args) => {
    return Math.max(...args)
}

console.log(funcMax(...array1, ...array2))


// !Створюємо об'єкт person з полями name та age. Потім ми заморожуємо цей об'єкт за допомогою Object.freeze(), що не дозволяє змінювати будь-яке поле об'єкту. Ми намагаємось змінити вік у нашому замороженому об'єкті, але це не вдається, тому що об'єкт заморожений.


const person = {
    name: 'ivan',
    age: 25
}

Object.freeze(person)

person.name = 'petya'
console.log(person)