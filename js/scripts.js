// let name = prompt('What is your name?');

// alert(`Hello, ${name}! How are you?`);

// // ! ДЗ 3. Математичні операції

// let userFirstNumber = +prompt('the first number');
// let userSecondNumber = +prompt('the second number');
// alert(userFirstNumber + userSecondNumber);
// alert(userFirstNumber - userSecondNumber);
// alert(userFirstNumber * userSecondNumber);
// alert(userFirstNumber / userSecondNumber);

// // ! ДЗ 4. Години в секунди

// let userTime = +prompt('What time is it?')
// alert(`${userTime * 60 ** 2} seconds`);

// // ! ДЗ 5. Середнє значення

// let userFirstMediumNumber = +prompt('first number');
// let userSecondMediumNumber = +prompt('second nimber');
// let userThirdMediumNumber = +prompt('third number');
// alert((userFirstMediumNumber + userSecondMediumNumber + userThirdMediumNumber) / 3);


// ! ДЗ 6. Числа та рядки

const userWord1 = prompt('Рядок 1', '');
const userWord2 = prompt('Рядок 2', '');
const userWord3 = prompt('Рядок 3', '');
alert(userWord1 + ' ' + userWord3 + ' ' + userWord2);

// second chapter

const numbers = 12345;
const stringNumbers = numbers.toString();
alert(`${stringNumbers[0]} ${stringNumbers[1]} ${stringNumbers[2]} ${stringNumbers[3]} ${stringNumbers[4]}`);


// ! ДЗ 7. Калькулятор
const userOption = prompt('add, sub, mult, div', '');
const calkNumber1 = +prompt('Перше число', '');
const calkNumber2 = +prompt('Друге число', '');

if (userOption == 'add') {
    alert(`${calkNumber1} + ${calkNumber2} = ${calkNumber1 + calkNumber2}`);
} else if (userOption == 'sub') {
    alert(`${calkNumber1} - ${calkNumber2} = ${calkNumber1 - calkNumber2}`);
} else if (userOption == 'mult') {
    alert(`${calkNumber1} * ${calkNumber2} = ${calkNumber1 * calkNumber2}`);
} else if (userOption == 'div') {
    alert(`${calkNumber1} / ${calkNumber2} = ${calkNumber1 / calkNumber2}`);
}

// ! ДЗ 8. Портрет користувача

const userBirthYear = +prompt('Рік народження');
const userCity = prompt('ти живеш');
const userFavoriSport = prompt('Улюблений вид спорту');

let userYears
let userLivesCity
let userSport

if (userBirthYear) {
    userYears = `Тобі ${2023 - userBirthYear} років!`
} else {
    userYears = 'Шкода, що Ви не захотіли ввести свій рік народження!'
}

if (userCity == 'Київ') {
    userLivesCity = 'Ти живеш в столиці України!'
} else if (userCity == 'Вашингтон') {
    userLivesCity = 'Ти живеш в столиці Америки!'
} else if (userCity == 'Лондон!') {
    userLivesCity = 'Ти живеш в столиці Франції!'
} else if (userCity) {
    userLivesCity = `Ти живеш у місті ${userCity}! `
} else {
    userLivesCity = 'Шкода, що Ви не захотіли ввести своє місто!'
}

if (userFavoriSport == 'Футбол') {
    userSport = 'Круто! Хочеш стати як Мессі? чи можливо Роналду?'
} else if (userFavoriSport == 'Баскетбол') {
    userSport = 'Круто! Хочеш стати як Джордан?'
} else if (userFavoriSport == 'Гонки') {
    userSport = 'Круто! Хочеш стати як Шумахер?'
} else {
    userSport = 'Шкода, що Ви не захотіли ввести свій вид спорту'
}

alert(`${userYears} \n ${userLivesCity} \n ${userSport}`);


// ! ДЗ 9. switch...case

let numOrStr = prompt('input number or string');

switch (numOrStr && numOrStr.trim() && String(+numOrStr)) {
    case null:
        alert('ви скасували');
        break;
    case '':
        alert('Empty String');
        break
    case 'NaN':
        alert('number is Ba_NaN');
        break;
    default:
        alert('OK!');
}