// ДЗ 33. Генераторы, итераторы, async await

// 1) Реализовать функцию-генератор которая отдаст 10 рандомных чисел в диапазоне переданном в аргументах в ней.

function* generateSequence(start = 1, end) {
    for (let i = 0; i <= 10; i++) {
        let res = Math.floor(Math.random() * (start - end) + end);
        yield res;
    }
}

const generator = generateSequence(1, 10);

for (let res of generator) {
    console.log(res);
}




// 2) Создать свой распорядок дня с помощью async await ( тоесть мы должны "подождать" выполнение асинхронной функции brushTeeth перед тем как приступать к выполнению следующей асинхронной функции
const delay = ms => {
    return new Promise((r) => setTimeout(() => r(), ms))
}


const morning = new Promise((resolve) => {
    resolve('I wake up at 7 o\'clock')

});
const breakfast = new Promise((resolve) => {
    resolve('I have breakfest at 8 o\'clock')

});
const lunch = new Promise((resolve) => {
    resolve(`I have lunch at 12 o\'clock`)
})
const cameHome = new Promise((resolve) => {
    resolve(`I came home at 19 o\'clock`)
});
const goSleep = new Promise((resolve) => {
    resolve(`I go to sleep at 23:00 o\'clock`)
})


const myDay = async () => {
    try {
        await delay(1500)
        const morningRes = await morning
        console.log(morningRes);
        await delay(2500)
        const breakfastRes = await breakfast
        console.log(breakfastRes);
        await delay(3000)
        const lunchRes = await lunch
        console.log(lunchRes);
        await delay(4000)
        const cameHomeRes = await cameHome
        console.log(cameHomeRes);
        await delay(5000)
        const sleep = await goSleep
        console.log(sleep);
    } catch (err) {
        console.error(err)
    }
}

myDay()