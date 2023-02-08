// !ДЗ 18. Написати декілька функцій

// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const userArray = ['Ukraine', '7', 'Odessa', 2, 'Lviv', 3, 'Dnipro', 9, 15, 'Yasno', 50, '20', '100']

const showAddNumbers = (arr, item) => {
    let numbers = arr.filter(elem => elem == +elem)
    return numbers.reduce((acc, curr) => acc + +curr, 0)
}

console.log(showAddNumbers(userArray))

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.


const userNumbersArray = []

for (i = 0; i < 3; i++) {
    let element = prompt(`Enter:\n First number : x;\n What I must do : +, -, *, /, %, ^ ;\n Second number: y.`)
    if (element === null) {
        alert('Скасували')
        break
    } else if (element.trim() === '') {
        alert('Empty String')
        break
    }
    userNumbersArray.push(element)
}

console.log(userNumbersArray)

const doMath = (x) => {
    let res
    if (x[1] === '+') {
        res = Number(+x[0] + +x[2])
    } else if (x[1] === '-') {
        res = (+x[0] - +x[2])
    } else if (x[1] === '*') {
        res = (x[0] * x[2])
    } else if (x[1] === '/') {
        res = (x[0] / x[2])
    } else if (x[1] === '%') {
        res = (+x[0] % +x[2])
    } else if (x[1] === '^') {
        res = (x[0] ** x[2])
    }
    return res

}
console.log(doMath(userNumbersArray))

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.


const usersMatrixArray = () => {
    const matrixArray = []

    let userFirsArray = +prompt(`Кількість масивів`)

    for (let i = 0; i < userFirsArray; i++) {
        matrixArray.push([]);

        let userSecondArray = +prompt(`Кількість елементів в ${(i + 1)} му масиві `);

        for (let j = 0; j < userSecondArray; j++) {

            let elementArrays = +prompt(`${(j + 1)} елемент ${(i + 1)} масива`)

            matrixArray[i].push(elementArrays)
        }
    }
    console.log(matrixArray)

}
usersMatrixArray()

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let arrOsn = []
const userArr = prompt('Текст')
arrOsn.push(userArr)
console.log(arrOsn)
const usArgumDel = []
let usElemDel = +prompt('Кількість елементів для видалення')

for (i = 1; i <= usElemDel; i++) {
    let item = prompt(`Елем ${i} для видалення`)
    usArgumDel.push(item)
}
console.log(usArgumDel)

arrOsn = arrOsn.join('').split('')

function usDel(item1, item2) {

    let res = item1.filter(elem => item2.includes(elem));
    let someOvl = item1.filter(elem => !res.includes(elem));
    someOvl = someOvl.join("");
    return console.log(someOvl.split(''));
}
usDel(arrOsn, usArgumDel)



