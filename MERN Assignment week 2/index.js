let age = 25;
let isAdult = age >= 18; // true if age is 18 or more
console.log("Is adult:", isAdult); 

// 2: Perform operations with x and y
let x = 10;
let y = 5;

let addition = x + y;        
let multiplication = x * y;  
let modulus = x % y;          

console.log("Addition:", addition);             
console.log("Multiplication:", multiplication); 
console.log("Modulus:", modulus);               

// 3: Check if a number is even or odd
let n = 7; 
let isEven = (n % 2 === 0) ? "Even" : "Odd";

console.log("The number", n, "is", isEven);     

// 4: For loop to store numbers 1 to 5 in an array
let numbers = [];

for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}

console.log("Array of numbers:", numbers);      

// 5: Function to return square of a number
function square(num) {
  return num * num;
}

console.log("Square of 4:", square(4)); 