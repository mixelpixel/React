# LESSON FIVE LECTURE NOTES
## [@1m08s](https://youtu.be/Mnfo3aCnri8?t=1m08s) **Lecture 5 starts**
- ES6 features and Routing
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

const { calories } = pizza;

// const logInfo = (arg) => {
//   console.log(arg) // ---> prints pizza object
// const logInfo = (arg) => {
//   console.log(arg.calories) // ---> 1500
const logInfo = ({ calories }) => {
  console.log(calories)  // ----> 1500
}

logInfo(pizza);
```

- direct reference to one property in an objectk
