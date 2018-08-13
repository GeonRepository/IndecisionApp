const add = (a,b) => {
    return a+b;
}
console.log(add(55,1));

const user = {
    name: "peter",
    cities: ["Beijing", "Seoul", "Virginia"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
        // this.cities.forEach(function (city) {
        //     console.log(that.name + " has lived in " + city);
        // })
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4,5,6,7],
    mult: 2,
    multiply() {
        return this.numbers.map((number) => number * this.mult);
    }
}

console.log(multiplier.multiply());