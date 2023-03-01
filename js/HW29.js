// !ДЗ 29. Гамбургери
class Hamburger {
    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_BIG = { price: 100, calories: 40 };

    static STUFFING_CHEESE = { price: 10, calories: 20 };
    static STUFFING_SALAD = { price: 50, calories: 5 };
    static STUFFING_POTATO = { price: 15, calories: 10 };

    static TOPPING_SAUSE = { price: 15, calories: 0 };
    static TOPPING_MAYO = { price: 20, calories: 5 };

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = [];
    }

    addTopping(meaning) {
        this.topping.push(meaning);
    }

    calculateCalories() {
        let calories = this.size.calories + this.stuffing.calories;
        this.topping.forEach((meaning) => {
            calories += meaning.calories;
        });
        return calories;
    }

    calculatePrice() {
        let price = this.size.price + this.stuffing.price;
        this.topping.forEach((meaning) => {
            price += meaning.price;
        });
        return price;
    }
}

// БІГмак гамбургер з салатом
const hamburger = new Hamburger(
    Hamburger.SIZE_BIG,
    Hamburger.STUFFING_SALAD
);

// + соус
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// калорійність
console.log("Calories: " + hamburger.calculateCalories());

// прайс
console.log("Price: " + hamburger.calculatePrice());

// +  приправу
hamburger.addTopping(Hamburger.TOPPING_SAUSE);

// скільки тепер коштує
console.log("Price with sauce: " + hamburger.calculatePrice());