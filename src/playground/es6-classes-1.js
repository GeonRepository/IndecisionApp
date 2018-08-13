class Person {

    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `HI. I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major = "Undecided") {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }

    getDescription() {
        let description = super.getDescription();
        if (!!this.location) {
            description += ` I am from ${this.location}.`
        }
        return description;
    }
}

const me = new Traveler("Peter Park", 21);
console.log(me.getDescription());