// !ДЗ 30. SuperMath
// Створити клас SuperMath.

// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.



// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

// При введенні znak потрібно перевірити коректність введення на можливі математичні дії

class SuperMath {
    check(obj) {
        const perem = confirm(`Виконати цю операцію ${obj.X} ${obj.znak} ${obj.Y}?`);
        let userRes = 0;
        if (perem) {
            if (obj.znak === '+') {
                userRes = obj.X + obj.Y
            } else if (obj.znak === '-') {
                userRes = obj.X - obj.Y
            } else if (obj.znak === '/') {
                userRes = obj.X / obj.Y
            } else if (obj.znak === '*') {
                userRes = obj.X * obj.Y
            } else if (obj.znak === "%") {
                userRes = obj.X % obj.Y;
            }

        } else {
            this.input();
        }
        let alertsZnak = ''
        if (obj.znak === '+') {
            alertsZnak = 'додавання'
        } else if (obj.znak === '-') {
            alertsZnak = 'віднімання'
        } else if (obj.znak === '/') {
            alertsZnak = 'ділення'
        } else if (obj.znak === '*') {
            alertsZnak = 'множення'
        } else if (obj.znak === '%') {
            alertsZnak = 'частки від ділення'
        }
        alert(` Результат ${alertsZnak} : ${obj.X} ${obj.znak} ${obj.Y} = ${userRes}`);
    }



    input() {
        let userRes = 0;
        const firstNumber = +prompt('Перше число')
        const secondNumber = +prompt('Друге число')

        const userZnak = prompt(`Виберіть що потрібно зробити з ${firstNumber} та ${secondNumber} знаком + - / * %`)

        if (userZnak === '+') {
            userRes = firstNumber + secondNumber;
        } else if (userZnak === '-') {
            userRes = firstNumber - secondNumber;
        } else if (userZnak === '*') {
            userRes = firstNumber * secondNumber;
        } else if (userZnak === '/') {
            userRes = firstNumber / secondNumber;
        } else if (userZnak === '%') {
            userRes = firstNumber % secondNumber;
        } else {
            alert(`${userZnak} не коректний символ. Виберіть із варінтів "+ - / * %"`)
        }
        alert(`Результат: ${firstNumber} ${userZnak} ${secondNumber}= ${userRes}`)
    }
}

let obj = { X: 25, Y: 5, znak: "*" };
let peremennaya = new (SuperMath)
peremennaya.check(obj)