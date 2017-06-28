# LESSON TWO LECTURE NOTES
## [@1m17s](https://youtu.be/FQPowZglpJA?t=1m17s) **ES6 Feature: "Arrow" Functions & Lexical `this`**
- Arrows are a shortcut syntax for writing functions
- Arrow functions have _some_ different behavior
- https://babeljs.io
- ES6 & ES2015 are the same thing
- https://babeljs.io/learn-es2015/#ecmascript-2015-features-arrows-and-lexical-this
- The Arrow: `=>`
- The Arrow and lexical `this`:
  > Unlike functions, arrows share the same lexical `this` as their surrounding code. If an arrow is inside another function, it shares the “arguments” variable of its parent function.

## [@2m56s](https://youtu.be/FQPowZglpJA?t=2m56s) **Arrow Function Examples**
```js
const numbers = [ 1, 2, 3, 4, 5 ];
// prints each array item
numbers.forEach(num => {
  console.log(num);
})
```
- syntax: `argument arrow {curly braces}`

#### [@4m1s](https://youtu.be/FQPowZglpJA?t=4m1s)
```js
const numbers = [ 1, 2, 3, 4, 5 ];
// prints each array item and index position
numbers.forEach((num, i) => {
  console.log(num, i);
})
```
- syntax `((multiple, arguments, passed, in) => { side_effect_or_return_value; })`
- OT: Q: how does `=>` know `i` is the index?
  - A: it doesn't, it's a [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?v=example) thing: the second parameter is index.)

#### [@4m38s](https://youtu.be/FQPowZglpJA?t=4m38s)
```js
let numbers = [ 1, 2, 3, 4, 5 ];
// map duplicates value from numbers array
let doubleNums = numbers.map(num => num * 2);
// ---> [ 2, 4, 6, 8, 10 ]
console.log(doubleNums)
```
- Without curly braces a single statement is returned by default:
- syntax: `(variable_name(s) => single_expression_return_value )`
- note on map: doesn't modify the original array, just makes a copy

#### [@7m50s](https://youtu.be/FQPowZglpJA?t=7m50s) **The equivalent functional version**
```js
const numbers = [ 1, 2, 3, 4, 5 ];
// map duplicates value from numbers array
const doubleNums = numbers.map(function (num) {
  return num * 2;
});
// ---> [ 2, 4, 6, 8, 10 ]
console.log(doubleNums)
```

#### [@8m45s](https://youtu.be/FQPowZglpJA?t=8m45s) **Lexical This**
- **Functional Notation**
  - `this` is bound to the function
  ```js
  const numbers = [ 1, 2, 3, 4, 5 ];
  // prints each array item
  numbers.forEach(function (num) {
    console.log(this);
  })
  ```

- **Arrow Notation**
  - an arrow function doesn't have it's own `this`
  ```js
  const numbers = [ 1, 2, 3, 4, 5 ];
  // prints each array item
  numbers.forEach(num => {
    console.log(this);
  })
  ```
