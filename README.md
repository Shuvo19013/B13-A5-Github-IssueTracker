## 1️⃣ What is the difference between var, let, and const?

var, let, and const are keywords used in JavaScript to declare variables.

var:
It is the older way of declaring variables.

It is function-scoped.

A variable declared with var can be redeclared and updated.


let:
Introduced in ES6.

It is block-scoped (limited inside { }).

It can be updated but cannot be redeclared in the same scope.


const:
Also introduced in ES6.

It is block-scoped.

Its value cannot be changed after declaration.

## 2️⃣ What is the spread operator (...)?

The spread operator is used to expand elements of an array or object into individual elements.

Example (Array):

const arr1 = [1, 2, 3];
const arr2 = [arr1, 4, 5];


Example (Object):

const person = { name: "Shuvo" };
const newPerson = { person, age: 22 };


## 3️⃣ What is the difference between map(), filter(), and forEach()?

These are array methods used to perform operations on array elements.

map():

Executes a function on each array element.

Returns a new array with modified values.


filter():

Selects elements based on a condition.

Returns a new array with elements that match the condition.


forEach():

Executes a function for each element.

Does not return a new array.

## 4. What is an arrow function?

1. An arrow function is a short way to write functions in JavaScript.
2. It uses the `=>` symbol.

Example:
const add = (a, b) => a + b;

 ## 5. What are template literals?

1. Template literals are used to create strings easily.
2. They use backticks `` ` ` `` instead of quotes.
3. Variables can be added inside a string using `${}`.

Example:

```
const name = "Shuvo";
const message = `Hello ${name}`;
```