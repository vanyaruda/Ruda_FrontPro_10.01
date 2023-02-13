// !ДЗ 23. Прототипы

// Створити ланцюжок прототипів машина => певна марка машини.

// У підсумкового інстансу повинні бути функції машини типу їхати і гальмувати з прототипу так і функції пов'язані з маркою машини типу вертикального відкриття дверей Lamborghini.


function Cars(brand) {
    this.brand = brand;

}

const defaultMet = {
    drive() {
        console.log(`${this.brand} can driving`)
    },
    breack() {
        console.log(`${this.brand} can breacking`)
    },
    openDoor() {
        console.log(`${this.brand} has ${this.opeD} opening door`)
    },
    openDoor: 'standart'
}

Cars.prototype = defaultMet

const audi = new Cars('audi')
const lamba = new Cars('lamba')
lamba.openDoor = 'vertical'
console.log(audi)
console.log(lamba)





