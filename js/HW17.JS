// ! ДЗ 17. Реалізуйте функцію generateKey

// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

function generateKey(length, characters) {
    characters = 'asjnfajkbfkasnckasnckasncakjnkajkJQWFUQWNFUQKWNKQ2893r7238r6128989123891724r1237ryhusdc'
    let strin = '';
    for (let i = 0; i < length; i++) {
        let ret = Math.floor(Math.random() * characters.length);
        strin += characters.substring(ret, ret + 1)
    }
    return strin;
}
console.log(generateKey(15))