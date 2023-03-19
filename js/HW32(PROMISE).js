// !ДЗ 32. Promise
// Создать цепочку промисов (длинной минимум в 3) - свой распорядок дня

let promises = new Promise((resolve) => {
    setTimeout(() => {
        resolve('I wake up at 7 o\'clock')

    }, 1000)
});


promises.then((result) => {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("I get up at 7:30 o\'clock")
        }, 2000)
    })
}).then((result2) => {
    console.log(result2)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("I have breakfast at 8 o\'clock")
        }, 2500)
    })
}).then((result3) => {
    console.log(result3)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("I go to work at 8:30 o\'clock")
        }, 3000)
    })
}).then((result4) => {
    console.log(result4)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("I have lunch at 13 o\'clock")
        }, 3500)
    })
}).then((result5) => {
    console.log(result5)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("I came home after work at 19 o\'clock ")
        }, 4000)
    })
}).then((result6) => {
    console.log(result6)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("When I have free time I do IT, and then I go to sleep at 23:00 o\'clock")
        }, 4500)
    })
}).then((data) => console.log(data))
