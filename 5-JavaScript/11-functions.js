//Functions - Set of instructions

function greet() {
    console.log("Instruction # 1")
    console.log("Instruction # 2")
    console.log("Instruction # 3")
    console.log("Merry Christmas!")
};
greet();


//Function Hoisting
// 1. Function Declaration
functionDeclaration()
function functionDeclaration () {
    console.log("Hello World! I am a function declaration");
}
// 2. Function Expression
const functionExpression = function() {
    console.log("Hello universe! I am a function expression");
}
functionExpression();


//Function with parameters
function greet(name) { //varible - parameter / argument - value
    console.log("Hello", name);
}
greet('Gab');

//Functions with a return value
function sum(a, b) {
    a = a + 1
    return a + b;
    console.log("Hello KC");
};
console.log("Sum:", sum(10, 5));


//Anonymous Function
let greet2 = function() {
    console.log("Hello")
};
greet2();


//Higher-order function 
function calculate(operation, num1, num2) {
    return operation(num1, num2);
}

//Callback functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
}

//Using higher-order function
let total = calculate(add, 10, 5);
let difference = calculate(subtract, 23, 13);

console.log("Result of addition:" , total);
console.log("Result of subtraction:", difference);
