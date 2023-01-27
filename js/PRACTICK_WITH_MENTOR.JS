// Створюємо вкладений масив [['Audi', 'Lamborghini', 'Skoda'], ['Mercedes-Benz', 'Maybach', 'Smart', 'Mitsubishi']].
// Виводимо у 2 строки ‘concern: …’

let autoArray = [
    ['Audi', 'Lamborgini', 'Skoda'],
    ['Mercedes', 'Smart', 'Maybach', 'Mitsiha']
]


//  Створюємо масив [1, 2, 3, 4, 5, -1, -2, -3].
// Фільтруємо всі елементи, які менші за 0 (включно).
// Рахуємо суму всіх елементів (x * y).

let userArraySort = [1, 2, 3, 4, 5, -1, -2, -3]

const filtered = userArraySort.filter(element => element < 0);
console.log(filtered)
const reduced = filtered.reduce((total, current) => total + current)
console.log(filtered, reduced)