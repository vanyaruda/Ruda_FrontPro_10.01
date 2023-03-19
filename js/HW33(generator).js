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



const morning = new Promise((resolve) => {
    setTimeout(() => resolve('I wake up at 7 o\'clock'), 1000)

});
const breakfast = new Promise((resolve) => {
    setTimeout(() => resolve('I have breakfest at 8 o\'clock'), 2000)

});
const lunch = new Promise((resolve) => {
    setTimeout(() => resolve(`I have lunch at 12 o\'clock`), 3000)
})
const cameHome = new Promise((resolve) => {
    setTimeout(() => resolve(`I came home at 19 o\'clock`), 4000)
});
const goSleep = new Promise((resolve) => {
    setTimeout(() => resolve(`I go to sleep at 23:00 o\'clock`), 5000)
})


const myDay = async () => {
    const morningRes = await morning
    console.log(morningRes);
    const breakfastRes = await breakfast
    console.log(breakfastRes);
    const lunchRes = await lunch
    console.log(lunchRes);
    const cameHomeRes = await cameHome
    console.log(cameHomeRes);
    const sleep = await goSleep
    console.log(sleep);

}

myDay()