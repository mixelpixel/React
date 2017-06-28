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
const numbers = [ 1, 2, 3, 4, 5 ]

numbers.forEach(num => {
  console.log(num);
})
```

```js
((multiple, variables) => { side_effect_or_return_value; })
```
- OT: how does `=>` know `i` is the index? (it's a [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?v=example) thing: second parameter is index.)

```js
const numbers = [ 1, 2, 3, 4, 5 ]

numbers.forEach((num, i) => {
  console.log(num, i);
})
```

```js
let numbers = [ 1, 2, 3, 4, 5 ]

let mapNumbers = numbers.map(num => num * 2)

console.log(mapNumbers)
```
