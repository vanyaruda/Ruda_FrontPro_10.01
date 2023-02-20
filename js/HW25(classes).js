// ! ДЗ 25. Багатоквартирний будинок



// 1. Створити клас Людина.

// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

}
const peopleWhoLives1 = new Human('ivan', 'man');
const peopleWhoLives2 = new Human('jane', 'woman')




// 2. Створити клас Квартира.

// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.

// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

class Apartment {
    people = [];
    housePeople(human) {
        this.people.push(human);

    }
}

const houseMates1 = new Apartment();
const houseMates2 = new Apartment();
houseMates1.housePeople(peopleWhoLives1);
houseMates2.housePeople(peopleWhoLives2);





// 3. Створити клас Будинок

// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.

// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }
    addApartments(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        }
    }
}
const houses1 = new House(1)

houses1.addApartments(houseMates1)
houses1.addApartments(houseMates2)






