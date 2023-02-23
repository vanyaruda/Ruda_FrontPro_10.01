// !ДЗ 26. Створюємо сутності

//! 1. Створити сутність "Людина".

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    personalInfo() {
        console.log(`name: ${this.name}; age: ${this.age};`)
    }
}


//! 2. Створити сутність "Автомобіль".

// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

class Cars {
    constructor(brand, model, year, plate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.plate = plate;

    };
    driver(human) {
        if (human.age < 18) {
            console.log(`${human.name} you dont has 18 y.o`)
        } else {
            this.human = human;
        }
    };
    aboutCars() {
        console.log(`brand: ${this.brand}; model: ${this.model}; years: ${this.year}; plate: ${this.plate}`)
        this.human.personalInfo()

    }

}

const userBob = new Human('Bob', 25);
const userJane = new Human('Jane', 18)



const bmw = new Cars('bmw', 'X5', 2020, 'AI1398HX')
const vw = new Cars('VW', 'Tiguan', 2020, 'AE5555II')


bmw.driver(userBob);
vw.driver(userJane);

bmw.aboutCars();
vw.aboutCars()
