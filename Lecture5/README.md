# LESSON FIVE LECTURE NOTES
## [@1m08s](https://youtu.be/Mnfo3aCnri8?t=1m08s) **ES6 Features**
- Destructuring Component
```js
const pizza = {
  calories: 1500,
  origin: 'Italy',
  yummy: true
}

const { calories } = pizza;

console.log(calories); // ---> 1500
// vs.
console.log(pizza.calories) // ---> 1500

```

- shortcut for when an object is being passed in as an argument to a function
```js
const pizza = {
  calories: 1500,
  origin: 'Italy',
  yummy: true
}

// const logInfo = (arg) => {
//   console.log(arg) // ---> prints pizza object
// const logInfo = (arg) => {
//   console.log(arg.calories) // ---> 1500
const logInfo = ({ calories }) => {
  console.log(calories)  // ----> 1500
}

logInfo(pizza);
```

- direct reference to one property in an object

#### [@8m48s](https://youtu.be/Mnfo3aCnri8?t=8m48s) **shorthand syntax**
- structuring objects
```js
const foo = () => {
  console.log('hi');
};

// // ES5
// const obj = {
//   foo: foo
// };
// obj.foo();

// ES6 shorthand
const obj = {
  foo
};
obj.foo();

```

#### [@10m57s](https://youtu.be/Mnfo3aCnri8?t=10m57s) **unknown number of arguments**
```js
const foo = (...args) => {
  console.log(args.length);
};

foo(1, 2, 3, 4, 5, true, null, undefined); // ---> 8

```

#### [@13m40s](https://youtu.be/Mnfo3aCnri8?t=13m40s) **ES5**
- VARIABLE HOISTING: variable and function declarations compiled first, e.g. "hoisted to the top"
```js
var x = 10;
function foo() {
}
var foo = function() { // referred to as a "function expression")
};
```

BECOMES
```js
var x;
var foo;
function foo() {
}
x = 10;
var foo = function() { // referred to as a "function expression")
};
```

IN PRACTICE:
```js
foo();
function foo() {
  console.log('hi')
}
```

WORKS, BUT A FUNCTION EXPRESSION NEEDS TO BE DECLARED BEFORE IT IS CALLED:
```js
foo();                     // <---- This results in an error
var foo = function() {
  console.log('hi')
}
```

## [@18m30s](https://youtu.be/Mnfo3aCnri8?t=18m30s) **React**
## [@22m39s](https://youtu.be/Mnfo3aCnri8?t=22m39s) **BrowserRouter**
- equivalent statements:
```js
export default () => (<div>Home</div>); // <--- () parentheses say just one statement to return

export default () => {
  return <div>Home</div>;
};
```

## [@32m38s](https://youtu.be/Mnfo3aCnri8?t=32m48s) **Sub-Routes and URL parameters**
- adding `props` object
- `import Link from 'react-router-dom';` to use <Link></Link>
- match the base URL with where they are at and send them off to the topics...
- JavaScript string literals:
```js
<Link to={`${props.match.url}/topic1`}>
Topic
</Link>
```

- Route parameter:
```js
<Route path={`${props.match.url}/:topicId`} component={Topic} />
```
