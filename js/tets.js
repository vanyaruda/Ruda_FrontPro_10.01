// const userIvan = {
//     name: 'Иван',
//     age: 25,
//     lenguig: 'Украинский',
//     address: {
//         city: 'Новомосковск',
//         street: 'Гетьманская 47'
//     },
// }

// const userPavlo = {
//     name: 'Павел',
//     age: 25,
//     lenguig: 'Украинский',
//     address: {
//         city: 'Новомосковск',
//         street: 'Олеся Гончара 29В'
//     }
// }

// let showMessage = (key) => {
//     let res = `${[key.name]}, тебе ${[key.age]} лет. Твой родной язык ${[key.lenguig]} Ты живешь в городе ${[key.address.city]}, на улице ${[key.address.street]}. `
//     return res
// }
// console.log(showMessage(userIvan))
// console.log(showMessage(userPavlo))


const arr = ['elelelelle', ' elelelelelel'];
const newaaa = arr[arr.length - 1]
console.log(newaaa)


// !this
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.


let calculator = {
    read() {
        this.a = +prompt('a')
        this.b = +prompt('b')
    },
    add() {
        return this.a + this.b
    },
    mult() {
        return this.a * this.b
    }
};
calculator.read()
console.log(calculator.add())
console.log(calculator.mult())