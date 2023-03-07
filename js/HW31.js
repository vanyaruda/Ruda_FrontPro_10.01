// ! ДЗ 31. Map и Set

// 1) Избавится от неуникальных элементов массива

const numbersArray = [1, 1, 2, 3, 4, 5, 5, 5, 6];


function uniqueValues(array) {
    return [...new Set(array)]
}

console.log(uniqueValues(numbersArray))




// 2) Создать Map который будет по переданному объекту возвращать строку привествия

// greetUser(userBob) // Hello Bob nice to see you
// greetUser(userJane) // How your kids doing Jane?
// Иными словами создать Map где ключ это будет объект а значение строка

const userBob = { name: 'Bob' }
const userJane = { name: 'Jane' }

const userMap = new Map()

userMap.set(userBob, `Hello ${userBob.name} nice to see you`)
userMap.set(userJane, `Hello ${userJane.name} nice to see you`)

function alertsRes(obj) {
    return userMap.get(obj)
}

console.log(alertsRes(userBob))
console.log(alertsRes(userJane))


// 3) Создать функцию по превращению Map в object или object в Map в зависимости от того что было передано в функцию

function restMap(obj) {
    if (obj.size) {
        return Object.fromEntries(obj);
    } else {
        return new Map(Object.entries(obj));
    }
}

let userJohn = {
    name: "John",
    age: 30
};

let prices = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);


console.log(restMap(userJohn))
console.log(restMap(prices))