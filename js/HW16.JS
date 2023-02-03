// !ДЗ 16. Реалізуйте функцію removeElement

// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.


const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    item = array.indexOf(item);
    array.splice(item, 1);
    console.log(array)
}
removeElement(array, 2);