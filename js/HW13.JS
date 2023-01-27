// !ДЗ 13. Пошук у масиві

// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let firstArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

// Знайти суму та кількість позитивних елементів.

const filtredPositArray = firstArray.filter(element => element > 0)
console.log(filtredPositArray.length)
console.log(filtredPositArray.sort())
const reducedArray = filtredPositArray.reduce((total, current) => total + current)
console.log(reducedArray)

// Знайти мінімальний елемент масиву та його порядковий номер.

const minArrayNumber = Math.min.apply(null, firstArray)
console.log(minArrayNumber)
const minArrayIndex = firstArray.findIndex(element => element === minArrayNumber)
console.log(minArrayIndex)

// Знайти максимальний елемент масиву та його порядковий номер.

const maxArrayNumber = Math.max.apply(null, firstArray)
console.log(maxArrayNumber)
const maxArrayIndex = firstArray.findIndex(element => element === maxArrayNumber)
console.log(maxArrayIndex)

// Визначити кількість негативних елементів.

const filtredNegativeArray = firstArray.filter(element => element < 0)
console.log(filtredNegativeArray.length)

// Знайти кількість непарних позитивних елементів.

let resultNepPosit = filtredPositArray.filter(element => element % 2)
console.log(resultNepPosit.length)

// Знайти кількість парних позитивних елементів.

const resultParnPosit = filtredPositArray.filter(element => element % 2 === 0)

console.log(resultParnPosit.length)

// Знайти суму парних позитивних елементів.

const amountParnPosit = resultParnPosit.reduce((total, current) => total + current)

console.log(amountParnPosit)

// Знайти суму непарних позитивних елементів.

const amountNepPosit = resultNepPosit.reduce((total, current) => total + current)

console.log(amountNepPosit)

// Знайти добуток позитивних елементів.

const multParnPositiv = filtredPositArray.reduce((total, current) => total * current)
console.log(multParnPositiv)

// Знайти найбільший серед елементів масиву, ост альні обнулити.

let max = firstArray[0];

for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] > max) {
        max = firstArray[i];
    }
}

let res = firstArray.map(val => max !== val ? 0 : val);
console.log(res);