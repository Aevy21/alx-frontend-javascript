<<<<<<< HEAD

# 0x00. ES6 Basics

## Overview
This project, Ripple, is a front-end application built with modern JavaScript (ES6). It leverages various ES6 features to enhance code readability, maintainability, and efficiency.

## Key Features of ES6 Utilized

### 1. Template Literals
Template literals provide an easy way to interpolate variables and expressions into strings.

```javascript
const name = "John";
const greeting = `Hello, ${name}! Welcome to Ripple.`;
console.log(greeting); // Output: Hello, John! Welcome to Ripple.
```

### 2. Destructuring Assignment
Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.

```javascript
const user = { firstName: "Jane", lastName: "Doe" };
const { firstName, lastName } = user;
console.log(firstName); // Output: Jane
console.log(lastName);  // Output: Doe
```

### 3. Modules
ES6 modules allow you to import and export functions, objects, or primitives between different files.

```javascript
// module.js
export const add = (a, b) => a + b;

// main.js
import { add } from './module.js';
console.log(add(2, 3)); // Output: 5
```

### 4. Promises
Promises provide a way to handle asynchronous operations.

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
};

fetchData().then(data => console.log(data)); // Output: Data fetched! (after 2 seconds)
```

### 5. Let and Const
`let` and `const` are block-scoped variable declarations.

```javascript
let mutableVariable = "I can be changed";
const immutableVariable = "I cannot be changed";
mutableVariable = "New value";
// immutableVariable = "New value"; // This will throw an error
```

### 6. Default Parameters
Default function parameters allow named parameters to be initialized with default values if no value is passed.

```javascript
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!
```

### 7. Rest Parameters
Rest parameters allow functions to accept an indefinite number of arguments as an array.

```javascript
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4)); // Output: 10
```

### 8. Spread Operator
The spread operator allows an iterable to expand in places where multiple elements are expected.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
```

### 9. Variable Hoisting
Hoisting allows functions and variables to be used before they are declared.

```javascript
console.log(hoistedVar); // Output: undefined
var hoistedVar = "This is hoisted";
```

### 10. The `const` Keyword
`const` declarations create read-only references to values.

```javascript
const CONSTANT_VALUE = "This cannot be changed";
// CONSTANT_VALUE = "New value"; // This will throw an error
```

### 11. Handling `this` in Arrow Functions
Arrow functions do not have their own `this` context, they inherit `this` from the parent scope.

```javascript
function Person(name) {
  this.name = name;
  this.sayName = () => {
    console.log(this.name);
  };
}

const person = new Person("John");
person.sayName(); // Output: John
```

## Examples

### Template Literals Example

```javascript
const user = { name: "Alice", age: 25 };
const message = `User ${user.name} is ${user.age} years old.`;
console.log(message); // Output: User Alice is 25 years old.
```

### Destructuring Assignment Example

```javascript
const person = { name: "Bob", age: 30 };
const { name, age } = person;
console.log(name); // Output: Bob
console.log(age);  // Output: 30
```

### Modules Example

```javascript
// utils.js
export const multiply = (a, b) => a * b;

// main.js
import { multiply } from './utils.js';
console.log(multiply(3, 4)); // Output: 12
```

### Promises Example

```javascript
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
};

getData().then(data => console.log(data)); // Output: Data received (after 1 second)
```

### Let and Const Example

```javascript
let changeable = "Change me";
const unchangeable = "Don't change me";
changeable = "I've been changed";
// unchangeable = "Try to change me"; // This will throw an error
```

### Default Parameters Example

```javascript
const increment = (num, incrementBy = 1) => num + incrementBy;
console.log(increment(5));       // Output: 6
console.log(increment(5, 2));    // Output: 7
```

### Rest Parameters Example

```javascript
const joinStrings = (...strings) => strings.join(' ');
console.log(joinStrings("This", "is", "a", "sentence")); // Output: This is a sentence
```

### Spread Operator Example

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
```

### Variable Hoisting Example

```javascript
console.log(hoistedVar); // Output: undefined
var hoistedVar = "Hoisted";
```

### Const Keyword Example

```javascript
const PI = 3.14;
// PI = 3.14159; // This will throw an error
```

### Arrow Functions and `this` Example

```javascript
function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}

const myCounter = new Counter();
// Output: Increments the count by 1 every second
```
=======
# Front-End Project(Javascript)

## This repository contains the source codes for the javascript projects , showcasing how these ES6 features are implemented to enhance code readability and maintainability.
>>>>>>> d7b9e81495fd5d143e0bcaba7c5cd82beedd4526
