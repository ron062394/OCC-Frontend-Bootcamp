//Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof woof!");
    }
}

class Goat extends Animal {
    bark() {
        console.log("Meeee!");
    }
}

const myGoat = new Goat("Goaty");
myGoat.eat();

const myDog = new Dog("Buddy");
myDog.bark();
myDog.eat();