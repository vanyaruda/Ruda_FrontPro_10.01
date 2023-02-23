// !ДЗ 27. Студент
// Вам потрібно зробити конструктор сутності "Студент".

// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

class Student {
    attendent = new Array(25).fill('0');
    grade = [];
    constructor(name, lastname, yearofbirth) {
        this.name = name;
        this.lastname = lastname;
        this.yearofbirth = yearofbirth;

    };
    years() {
        return 2023 - this.yearofbirth
    };

    present() {
        this.visits('true')
    };
    absent() {
        this.visits('false')
    };

    visits(visits) {
        const lastIndex = this.attendent.length - 1;
        for (let i = 0; i < lastIndex; i++) {
            if (this.attendent[i] === '0') {
                this.attendent[i] = visits;
                return
            }
        }
    };
    reitingsGrade() {
        const resul = this.grade.reduce((acc, curr) => acc + curr)
        return resul / this.grade.length
    };
    summary() {
        const attendent = this.attendent.filter((elem) => elem !== '0' && elem === 'true').length
        const attendanceRating = (attendent / this.attendent.filter((elem) => elem !== '0').length) * 100;
        const gradeRating = this.reitingsGrade()
        if (attendanceRating > 0.9 && gradeRating > 90) {
            console.log(`${this.name} ти молодець!`)
        } else if (attendanceRating < 0.9 || gradeRating < 90) {
            console.log(`${this.name} - доброе, але можна краще!!`)
        } else if (attendanceRating < 0.9 && gradeRating < 90) {
            console.log(`${this.name} - Редиска!!`)
        }
    }

}

const userOleksa = new Student('Oleksa', 'Runfre', 1998)
userOleksa.grade.push(90, 80, 70, 95, 99, 87, 100)
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.absent()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
userOleksa.present()
console.log(`${userOleksa.name} ${userOleksa.lastname}, ${userOleksa.yearofbirth} року народження. ${userOleksa.years()} років!`)
userOleksa.years()
console.log(`Середня оцінка студента ${userOleksa.name}: ${userOleksa.reitingsGrade()}`)
userOleksa.summary(
)

const userBob = new Student('bob', 'marley', 1940)
userBob.grade.push(90, 90, 90, 90, 90, 90, 90, 100)
userBob.present()
userBob.present()
userBob.present()
userBob.present()
userBob.present()
userBob.present()
userBob.present()
userBob.present()
userBob.present()
userBob.present()
userBob.present()
userBob.present()
userBob.present()
userBob.present()
userOleksa.absent()
userOleksa.absent()
userOleksa.absent()
userOleksa.absent()
userOleksa.absent()
userOleksa.absent()
userOleksa.absent()
userOleksa.absent()
userOleksa.absent()
userOleksa.absent()
console.log(`Учень ${userBob.name} ${userBob.lastname} ${userBob.yearofbirth} року. ${userBob.years()} роки!`)
userBob.years();
console.log(`Середня оцінка студента ${userBob.name}: ${userBob.reitingsGrade()}`)
userBob.summary()

