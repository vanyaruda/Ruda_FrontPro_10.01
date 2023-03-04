// Створюємо вкладений масив [['Audi', 'Lamborghini', 'Skoda'], ['Mercedes-Benz', 'Maybach', 'Smart', 'Mitsubishi']].
// Виводимо у 2 строки ‘concern: …’

// let autoArray = [
//     ['Audi', 'Lamborgini', 'Skoda'],
//     ['Mercedes', 'Smart', 'Maybach', 'Mitsiha']
// ]


//  Створюємо масив [1, 2, 3, 4, 5, -1, -2, -3].
// Фільтруємо всі елементи, які менші за 0 (включно).
// Рахуємо суму всіх елементів (x * y).

let userArraySort = [1, 2, 3, 4, 5, -1, -2, -3]

const filtered = userArraySort.filter(element => element < 0);
console.log(filtered)
const reduced = filtered.reduce((total, current) => total + current)
console.log(filtered, reduced)

// !Функции

// Напишіть функцію JavaScript, яка перегортає число.


function reverse_a_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}

document.writeln(reverse_a_number(258961));



// Напишіть функцію JavaScript, яка отримує рядок як параметр і знаходить найдовше слово у цьому рядку.

// Example: ‘Web Development Tutorial’;
// Output: ‘Development’;

function functionLongestWord(string) {
    const array = string.split(' ');

    return array.reduce((acc, item) => {
        return item.length > acc.length ? item : acc;
    }, '');
}

const longestWord = functionLongestWord('Web Development Tutorial');
console.log(longestWord);

// Напишіть функцію JavaScript, яка повертає переданий рядок з літерами в алфавітному порядку.

// Example: ‘webmaster’;
// Output: ‘abeemrstw’;

const functionSorting = (string) => {
    return string.split('').sort().join('');
}

console.log(functionSorting("webmaster"));


// Напишіть функцію JavaScript, яка приймає масив з двумя елементами і повертає рядок, використовуючи деструктуризацію.

// Example: [‘Hello’, ‘World’];
// Output: ‘Hello world’;

const functionDestructuring = (array) => {
    const [firstWord, secondWord] = array;
    return firstWord + ' ' + secondWord;
}
console.log(functionDestructuring(['Hello', 'world!']));


// Напишіть функцію JavaScript, яка приймає масив об’єктів з полями name, experience і повертає масив імен, у який досвід більше 2-х років. 

const array = [
    { name: "Sasha", experience: 1 },
    { name: "Egor", experience: 3 },
    { name: "Misha", experience: 4 },
    { name: "Alexey", experience: 4 },
    { name: "Vladimir", experience: 0.5 },
];

const functionExperienceChecker = (arr) => {
    const experiencedArray = [];

    arr.forEach(item => {
        if (item.experience > 2) {
            experiencedArray.push(item.name)
        }
    })

    return experiencedArray;

    const mapped = arr.map(person => {
        if (person.experience > 2) {
            return person.name
        }
    })
    return mapped.filter(personName => !!personName)
}

const experienced = functionExperienceChecker(array);
console.log(experienced)



// ! Рекурсия. Замыкание ф-и. метод !This!

// Створіть функцію, яка приймає число та повертає іншу функцію, яка при виклику повертає суму переданого числа та числа, яке було передане при створенні замикання.

// Приклад:
// const add5 = adder(5);
// console.log(add5(3)); // 8

function counter() {
    let count = 0;
    return function countFunc(n) {
        return count += n
    }
}

const addAr = counter()

// Створіть функцію, яка виводить в консоль число 5. Використовуючи ! IIFE.

// (function () {
//     console.log(5)
// })()

// Створіть функцію, яка приймає масив чисел та іншу функцію, яка обробляє кожен елемент масиву, та повертає новий масив з елементів, оброблених заданою функцією. HOF function

// Приклад: console.log(processArray(numbers, (number) => {
//     return number * number;
//   })); // [1, 4, 9, 16, 25]

function processArray(numbers, callback) {
    const processedArray = [];
    for (let i = 0; i < numbers.length; i++) {
        processedArray.push(callback(numbers[i]));
    }
    console.log(processedArray);
}

processArray([1, 2, 3, 4, 5], (number) => { return number + 2 });

// Створіть функцію, яка приймає масив рядків та повертає новий масив, який містить тільки рядки з довжиною більше 3 символів.

// Приклад: console.log(['foo', 'bar', 'baz', 'qux', 'quux']); // ['qux', 'quux']

// const arrowFuncFilter = (arr) => {

//     return arr.filter((elem) => elem.length > 3)

// }
// arrowFuncFilter()

// Створіть функцію, яка приймає масив чисел та повертає суму всіх його елементів.

// Приклад: console.log([1, 2, 3, 4, 5]); // 15

// const addFunc = (arr) => {
//     return arr.reduce((acc, curr) => acc + curr)
// }
// addFunc()


// ! 02.03.2023


// В одному рядку оголосіть три змінні з наступними іменами та значеннями:

// firstName = "John"
// lastName = "Doe"
// age = 35

const firstName = 'Joe'; lastName = 'Doe'; age = 35

console.log(lastName)


// Створіть 3 змінні з такими типами: string, boolean, undefined.

// Typeof x // string
// Typeof y // boolean
// Typeof z // undefined

const stringA = 'John';
const bool = true
let undefineded;


// Створіть функцію, яка приймає необмежену кількість аргументів і повертає масив без повторень.

// Const result = deleteDublicates(1, 2, 3, 2);
// console.log(result) // [1, 2, 3]

const deleteDublicates = (...args) => {
    return [...new Set(args)]
}

const result = deleteDublicates(1, 1, 1, 2)
console.log(result)


// Створіть функцію, яка приймає масив з п’ятьма аргументами, якщо передаєш більше, або менше, то функція зупиняє свою роботу. Якщо ні, то поступово виводить в консоль типи змінних всередині масиву.

// getTypes(true, 2, null, 2, ‘s’); // boolean, number, object, number, string

function hz(...args) {
    if (args.length !== 5) return
    args.forEach(elem => console.log(typeof elem))
}
hz(1, true, 'ivan', undefined, null)

// Використовуйте правильний метод Array, щоб відсортувати масив фруктів за алфавітом.

// ["Banana", "Orange", "Apple", "Kiwi"].method() // ["Apple", "Banana", "Kiwi", "Orange"]

const sorted = ["Banana", "Orange", "Apple", "Kiwi"].sort()

console.log(sorted)

// Використовуйте правильний метод Array, щоб видалити з масиву об’єктів всі об’єкти, у який вік менше 18.

// [{name: "John", age: 19},  {name: "Paul", age: 10}].method() // [{name: "John", age: 19}]

console.log([{ name: "John", age: 19 }, { name: "Paul", age: 10 }].filter(elem => elem.age > 18))

// Створіть функцію, яка об'єднує безліч вхідних масивів в один.

// Const result = concatArrays([1], [2], [3]]
//     console.log(result) // [1, 2, 3]


function tougeze(...args) {
    return args.flat()
}

console.log(tougeze([1], [2], [3]))

// Створіть функцію, яка повертає два методи: increment (count++) та decrement (count--), яка замикає в собі значення.

// const [increment, decrement] = new closure()
// increment() // 1
// increment() // 2
// decrement() // 1
// function funcZam() {
//     let count = 0;
//     function increment() {
//         count++;

//     };
//     function decrement() {
//         count--
//     }
//     [increment, decrement]
// }
// let [increment, decrement] = funcZam()
// console.log(increment)
