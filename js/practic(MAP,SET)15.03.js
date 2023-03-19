// ! Створіть javascript функцію, яка приймає масив об’єктів і повертає новий масив без дублікатів.

const users = [{ name: 'John', age: 10 }, { name: 'Misha', age: 20 }, { name: 'John', age: 10 }, { name: 'Masha', age: 17 }, { name: 'Misha', age: 20 }, { name: 'Masha', age: 17 }, { name: 'Pasha', age: 23 }, { name: 'Oleg', age: 40 }]

const detectdublicates = (arr) => {
    const jsonArr = arr.map(elem => JSON.stringify(elem));
    const jsonArrWithoutDublicates = [...new Set(jsonArr)]
    return jsonArrWithoutDublicates.map(elem => JSON.parse(elem))
}

const result = detectdublicates(users);
console.log(result)



// ! Створіть javascript функцію, яка буде імітувати асинхронний запит на сервер і повертати рандомне число від 1 до 9 (якщо 9-10, то викидати помилку)

const getRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            randomNumber >= 8 ? reject('Error') : resolve(randomNumber);
        }, 1000)
    })
}

// getRandomNumber()
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

const getResponse = async () => {
    // Перепишіть попередню задачу і зробіть одразу 3 Promise в 1 try/catch.
    try {
        const response = await Promise.all([getRandomNumber(), getRandomNumber(), getRandomNumber()]);
        console.log(response);

    } catch (er) {
        console.log(`er`)
    }
}
getResponse()