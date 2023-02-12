// !ДЗ 23. Прототипы

// Створити ланцюжок прототипів машина => певна марка машини.

// У підсумкового інстансу повинні бути функції машини типу їхати і гальмувати з прототипу так і функції пов'язані з маркою машини типу вертикального відкриття дверей Lamborghini.


// !Метод № 1
const autoCharacters = {
    toBreack: [],
    toDrive: [],
    toOpenVerticalDoor: [],

    breack(can) {
        this.toBreack.push(can)
    },
    drive(can) {
        this.toDrive.push(can)
    },
    verticalDoorcan(can) {
        this.toOpenVerticalDoor.push(can)
    }

}

const bmw = {
    toBreack: [],
    toDrive: [],
    __proto__: autoCharacters,
}
bmw.breack('true')
bmw.drive('true')
bmw.verticalDoorcan('false')
console.log(bmw)


const lamba = {
    toBreack: [],
    toDrive: [],
    toOpenVerticalDoor: [],
    __proto__: autoCharacters
}
lamba.breack('true')
lamba.drive('true')
lamba.verticalDoorcan('true')

console.log(lamba)

// ! Метод № 2

function CharacteristicsCar(toDrive, toBreack, toOpenVerticalDoor, power) {
    this.toDrive = toDrive;
    this.toBreack = toBreack;
    this.toOpenVerticalDoor = toOpenVerticalDoor;
    this.power = power;
}

const volkswagen = new CharacteristicsCar('true', 'true', 'false', 'top car maybe 1500 h/p')
console.log(volkswagen)

const maserati = new CharacteristicsCar('true', 'true', 'can do this', 'i dont now:)');
console.log(maserati);

// ! Метод № 3

const jeep = {
    toBreack: true,
    toDrive: true,
    toUpDoor: false,
    get characterCars() {
        return `${this.toBreack}:breack ${this.toDrive}:drive ${this.toUpDoor}:updoor`
    }

}
console.log(jeep)
const ferrari = {
    __proto__: jeep
}
ferrari.toUpDoor = true

console.log(ferrari)