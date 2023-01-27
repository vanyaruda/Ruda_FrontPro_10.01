// !ДЗ 11. Складніші цикли

// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

for (i = 20; i <= 30; i = i + 0.5) {
    console.log(i);
}

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

let doll = 27;
let resDoll = ''

for (i = 10; i <= 100; i = i + 10) {
    resDoll = `${i} * ${doll} курс долара = ${i * doll} гривень`
    console.log(resDoll)
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let userNumberN = +prompt('число від 1 до 100');
for (i = 1; i <= 100; i++) {
    if (i ** 2 > userNumberN) continue
    console.log(i)
}

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let usNumbers = 10;

nextPrime:
for (let i = 2; i <= usNumbers; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
        console.log(i)
    }
}


// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let userNumberPar = +prompt('Число');
let resultPar = false;
for (i = 1; i <= userNumberPar; i++) {
    if (Math.pow(3, i) === userNumberPar) {
        resultPar = true;
    }
    console.log(resultPar)
}

let userArray1 = [1, 2, 3, 4, 5];
const userArrayKvadrat = userArray1.map(Element => Element ** 2);
console.log(userArrayKvadrat)
