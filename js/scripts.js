// let name = prompt('What is your name?');

// alert(`Hello, ${name}! How are you?`);

// ! ДЗ 3. Математичні операції

let userFirstNumber = +prompt('the first number');
let userSecondNumber = +prompt('the second number');
alert(userFirstNumber + userSecondNumber);
alert(userFirstNumber - userSecondNumber);
alert(userFirstNumber * userSecondNumber);
alert(userFirstNumber / userSecondNumber);

// ! ДЗ 4. Години в секунди

let userTime = +prompt('What time is it?')
alert(`${userTime * 60 ** 2} seconds`);

// ! ДЗ 5. Середнє значення

let userFirstMediumNumber = +prompt('first number');
let userSecondMediumNumber = +prompt('second nimber');
let userThirdMediumNumber = +prompt('third number');
alert((userFirstMediumNumber + userSecondMediumNumber + userThirdMediumNumber) / 3);
