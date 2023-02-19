// ДЗ 24. JSON, setTimeout, setInterval





// Создать функцию которая будет принимать имя пользователя и время через которое он хочет чтоб его поприветствовали. Время пользователь хочет вводить строкой в разном формате например '10 minutes' , '20 seconds', '1 hour', '2 hours'


function userHi(name, time) {
    const timeArray = time.split(" ",);
    let userNumberTime = timeArray.slice(0, 1);
    let userTime = timeArray.splice(1, 1);
    userNumberTime = userNumberTime.join()
    userTime = userTime.join();
    let interval
    switch (userTime) {
        case 'second':
        case 'seconds':
            interval = userNumberTime * 1000;
            break;
        case 'minute':
        case 'minutes':
            interval = (userNumberTime * 60) * 1000;
            break;
        case 'hour':
        case 'hours':
            interval = (userNumberTime * 3600) * 1000;
            break;
        default:
            console.log("Error");
    }
    setTimeout(function userHi() {
        console.log(`Hello user '${name}'`);
    }, interval);
}
userHi('Ivan', '2 seconds')

// Создать функцию которая будет или сериализировать или десериализировать объект в зависимости от того в какой форме он был передан

const companies = {
    name: 'Apple',
    ceo: 'Undef',
    number: 200

}

function jsonM(obj) {
    let temp
    typeof obj === "object" ? temp = JSON.stringify(obj) : temp = JSON.parse(obj)
    console.log(temp)
}

jsonM(companies)

// Создать функцию которая вернет true или false в зависимости от того что в нее передать JSON строку или обычную строку
function newStr(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
