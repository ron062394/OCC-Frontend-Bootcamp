//Polymorphism
class Animal {
    makeSound() {
        return "The animal make a noise";
    };
}

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + ", the dog barks"
    }
}

const dog = new Dog();
console.log(dog.makeSound());


