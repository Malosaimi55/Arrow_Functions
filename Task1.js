// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) => `Hello, ${name}!`;
console.log(greet("mohammed"));

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

const sum = (A, B) => A + B;
let A = 5, B = 7;
console.log(sum(A, B));

// Q3) Write a simple arrow function that squares a number.

const squareNumber = (num) => num **2;
console.log(squareNumber(7));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

let numbers = [2, 5, 3, 4];

const squareallnumbers = (arr) => {
    for(i = 0; i < numbers.length; i++)
    {
         arr[i] = arr[i] **2
    }
    return arr;
};

console.log(numbers);
console.log(squareallnumbers(numbers));