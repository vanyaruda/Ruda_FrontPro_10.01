// let name = prompt('What is your name?');

// alert(`Hello, ${name}! How are you?`);

// ! ДЗ 3. Математичні операції

// let userFirstNumber = +prompt('the first number');
// let userSecondNumber = +prompt('the second number');
// alert(userFirstNumber + userSecondNumber);
// alert(userFirstNumber - userSecondNumber);
// alert(userFirstNumber * userSecondNumber);
// alert(userFirstNumber / userSecondNumber);

// ! ДЗ 4. Години в секунди

// let userTime = +prompt('What time is it?')
// alert(`${userTime * 60 ** 2} seconds`);

// ! ДЗ 5. Середнє значення

// let userFirstMediumNumber = +prompt('first number');
// let userSecondMediumNumber = +prompt('second nimber');
// let userThirdMediumNumber = +prompt('third number');
// alert((userFirstMediumNumber + userSecondMediumNumber + userThirdMediumNumber) / 3);


// ! ДЗ 6. Числа та рядки

// const userWord1 = prompt('Рядок 1', '');
// const userWord2 = prompt('Рядок 2', '');
// const userWord3 = prompt('Рядок 3', '');
// alert(userWord1 + ' ' + userWord3 + ' ' + userWord2);

// second chapter

// const numbers = 12345;
// const stringNumbers = numbers.toString();
// alert(`${stringNumbers[0]} ${stringNumbers[1]} ${stringNumbers[2]} ${stringNumbers[3]} ${stringNumbers[4]}`);


// ! ДЗ 7. Калькулятор
// const userOption = prompt('add, sub, mult, div', '');
// const calkNumber1 = +prompt('Перше число', '');
// const calkNumber2 = +prompt('Друге число', '');

// if (userOption == 'add') {
//     alert(`${calkNumber1} + ${calkNumber2} = ${calkNumber1 + calkNumber2}`);
// } else if (userOption == 'sub') {
//     alert(`${calkNumber1} - ${calkNumber2} = ${calkNumber1 - calkNumber2}`);
// } else if (userOption == 'mult') {
//     alert(`${calkNumber1} * ${calkNumber2} = ${calkNumber1 * calkNumber2}`);
// } else if (userOption == 'div') {
//     alert(`${calkNumber1} / ${calkNumber2} = ${calkNumber1 / calkNumber2}`);
// }

// ! ДЗ 8. Портрет користувача

// const userBirthYear = +prompt('Рік народження');
// const userCity = prompt('ти живеш');
// const userFavoriSport = prompt('Улюблений вид спорту');

// let userYears
// let userLivesCity
// let userSport

// if (userBirthYear) {
//     userYears = `Тобі ${2023 - userBirthYear} років!`
// } else {
//     userYears = 'Шкода, що Ви не захотіли ввести свій рік народження!'
// }

// if (userCity == 'Київ') {
//     userLivesCity = 'Ти живеш в столиці України!'
// } else if (userCity == 'Вашингтон') {
//     userLivesCity = 'Ти живеш в столиці Америки!'
// } else if (userCity == 'Лондон!') {
//     userLivesCity = 'Ти живеш в столиці Франції!'
// } else if (userCity) {
//     userLivesCity = `Ти живеш у місті ${userCity}! `
// } else {
//     userLivesCity = 'Шкода, що Ви не захотіли ввести своє місто!'
// }

// if (userFavoriSport == 'Футбол') {
//     userSport = 'Круто! Хочеш стати як Мессі? чи можливо Роналду?'
// } else if (userFavoriSport == 'Баскетбол') {
//     userSport = 'Круто! Хочеш стати як Джордан?'
// } else if (userFavoriSport == 'Гонки') {
//     userSport = 'Круто! Хочеш стати як Шумахер?'
// } else {
//     userSport = 'Шкода, що Ви не захотіли ввести свій вид спорту'
// }

// alert(`${userYears} \n ${userLivesCity} \n ${userSport}`);


// ! ДЗ 9. switch...case

// let numOrStr = prompt('input number or string');

// switch (numOrStr && numOrStr.trim() && String(+numOrStr)) {
//     case null:
//         alert('ви скасували');
//         break;
//     case '':
//         alert('Empty String');
//         break
//     case 'NaN':
//         alert('number is Ba_NaN');
//         break;
//     default:
//         alert('OK!');
// }



//! ДЗ 10. Написання циклів

// !Вивести на сторінку в один рядок через кому числа від 10 до 20.

// for (let i = 10; i <= 20; i++) {
//     console.log(i);
// }

// !Вивести квадрати чисел від 10 до 20

// for (i = 10; i <= 20; i++) {
//     console.log(i ** 2);
// }

// !Вивести таблицю множення на 7
// let result = ''
// for (i = 1; i <= 10; i++) {
//     result = (`${i} * 7 = ${i * 7}`);
//     console.log(result)

// }


// !Знайти суму всіх цілих чисел від 1 до 15.
// let result = 0
// for (i = 1; i <= 15; i++) {
//     result += i;
//     console.log(result);
// }

// !Знайти добуток усіх цілих чисел від 15 до 35.
// let result = 1
// for (i = 15; i <= 35; i++) {
//     result = result * i;
//     console.log(result)
// }

// !Знайти середнє арифметичне всіх цілих чисел від 1 до 500

// let sum = 0
// let x = 500
// for (i = 1; i <= x; i++) {
//     sum += i;
//     console.log(Math.trunc(sum / x));
// }


// ! Вивести суму лише парних чисел в діапазоні від 30 до 80
// let result = 0
// for (i = 30; i <= 80; i++) {
//     if (i % 2 === 0) {
//         result += i;
//         console.log(result);
//     }
// }


// !Вивести всі числа в діапазоні від 100 до 200 кратні 3

// let res = 0

// for (i = 100; i <= 200; i++) {
//     if (i % 3) {
//         console.log(i)
//     }
// }



// !Дано натуральне число. Знайти та вивести на сторінку всі його дільники
// !Визначити кількість його парних дільників.
// !Знайти суму його парних дільників
// let number = 12;
// let str = '';
// let sum = ''
// for (let i = 1; i <= number; i++) {
//     let a = number % i
//     if (a == 0) {
//         str += i + ', '
//         if (i % 2 === 0) {
//             sum += i;
//             console.log(sum)
//         }
//     }

// }

// !Надрукувати повну таблицю множення від 1 до 10.

// let sum = 1
// for (i = 1; i <= 10; i++) {
//     for (j = 1; j <= 10; j++) {
//         console.log((+ j + "*" + i + "=" + (i * j) + ""))
//     }

// }
