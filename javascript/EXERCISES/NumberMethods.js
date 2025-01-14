// Number methods
var result;
var n1 = "10";
var n2 = 10;
const PI = 3.14159265359;
var n3 = "10.5";
var n4 = "10 15 20";
var n5 = "10,15,20";
var n6 = "9e+2"
var n7 = 10e+2; // scientific notation
var n8 = 2000.45;

// toString() method
result = n2.toString(); // return string representation of number

// parseInt() method
result = parseInt(n1); // return integer representation of number
//example
result = parseInt("10") + parseInt("10")

// parseFloat() method
result = parseFloat(n3); // return floating point representation of number

// toExponential() method
result = PI.toExponential(2); // return exponential representation of number

// toFixed() method
result = n8.toFixed()

result = Number("10")
result = Number(undefined)
result = Number(null)
result = Number(true)
result = Number(false)

result = Number.MAX_VALUE
result = Number.MIN_VALUE
result = Number.MAX_SAFE_INTEGER
result = Number.POSITIVE_INFINITY
result = Number.NEGATIVE_INFINITY
result = Number.NaN
result = Number.isFinite(10)
result = Number.isFinite(Infinity)
result = Number.isFinite(NaN)
result = Number.isInteger("10")
result = Number.isInteger(10)
result = Number.isNaN(10/NaN)
result = Number.isNaN("10"/"10")
result = Number.isSafeInteger(10)

// var userInput = 10
// if(Number.isInteger(userInput)){
//     console.log("Valid input")
// }else{
//     console.log("Invalid input")
// }



//console.log(result, typeof result)



// program for a simple calculator with if... else if...else

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);





// program for a simple calculator with switch
let result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}