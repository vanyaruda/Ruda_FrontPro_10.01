// !ДЗ 28. Date

// Создать функцию которая будет принимать миллисекунды и вернет true или false в зависимости от того сегодня ли то число которое было передано


function constTime(time) {
    const usTime = Date.now()

    return time === usTime ? "true" : "false"
}
console.log(constTime(1677110400000))

// Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды


function formatTime(d) {
    const date = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    const h = d.getHours().toString().padStart(2, '0');
    const m = d.getMinutes().toString().padStart(2, '0');

    return `Today: ${date}.${month}.${year} ${h}:${m}`
}

console.log(formatTime(new Date(1677232098000)))

// Создать функцию которая принимает миллисекунды и вернет количество времени которое прошло или должно пройти с текущего момента.

function hz(stamp) {
    const date = Date.now()
    const result = date - stamp
    return `${result} ms`

}
console.log(hz(1677232098000))