# Lambda School: React
Lambda School tutorial: https://lambdaschool.com/pro/react

# Lesson 1 - Introduction to React and ES6
- [Lecture 1](https://youtu.be/7QwRtGtluJk)
- [Homework Assignment 1](https://github.com/SunJieMing/LS-Pro-React-I)
- [Completed Homework Assignment 1]()

<details><summary><b>LESSON ONE: NOTES</b></summary><p>

### LESSON ONE LECTURE NOTES
- [@1m08s](https://youtu.be/7QwRtGtluJk?t=1m08s) **Lecture starts**
- https://jsbin.com/
  - ES6 and Babel to use ECMAScript features
  - `let` and `const` - say goodbye to `var`
  ```js
  let x = 5;    // let says we're creating a variable which can be changed later on
  const y = 10; // defining a constant and we NEVER want it to change - an error appears if we try and change it
  ```
  - [JS "block" scoping](ifTrue.js)
  ```js
  if (true) {
    var x = 'hi';
    console.log(x); // ---> hi
  }                 // ---> function scope remains so x = 'hi'
  console.log(x);   // ---> hi
  ```
  - [Block Scope](blockScope.js)
  - Can think of it as if all the code is happening inside the same function
  ```js
  function foo() {
    if (true) {
      var x = 'hi';
      console.log(x);
    }
    console.log(x);
  }
  foo();          // ---> hi \n hi
  console.log(x); // <--- ReferenceError!!!
  ```
  - BOTH `let` and  `const` are BLOCK SCOPED
  - `let`
  ```js
  if (true) {
    let x = 'hi';
    console.log(x) // ---> hi
  }

  console.log(x)   // <--- ReferenceError
  ```
  - `const`
  ```js
  if (true) {
    const x = 'hi';
    console.log(x) // ---> hi
  }

  console.log(x)   // <--- ReferenceError
  ```
  - `const` is immutable, e.g.
  ```js
  const x = 5;
  x++;         // <--- ERROR!!!
  ```
  - compare to `let`
  ```js
  let x = 5;
  x++;
  console.log(x); // ---> 6
  ```



</p></details>

***
# Lesson 2 - More JavaScript and ES6 features
- [Lecture 2](https://youtu.be/FQPowZglpJA)
- [Homework Assignment 2](https://github.com/SunJieMing/LS-Pro-React-II)
- [Completed Homework Assignment 2]()

<details><summary><b>LESSON TWO: NOTES</b></summary><p>

### LESSON TWO LECTURE NOTES

</p></details>

***
# Lesson 3 - ???
- [Lecture 3](https://youtu.be/ULx7gruIh20)
- [Homework Assignment 3](https://github.com/SunJieMing/LS-Pro-React-III)
- [Completed Homework Assignment 3]()

<details><summary><b>LESSON THREE: NOTES</b></summary><p>

### LESSON THREE LECTURE NOTES

</p></details>

***
# Lesson 4 - ???
- [Lecture 4](https://youtu.be/vi8oJD5EcX8)
- [Homework Assignment 4](https://github.com/SunJieMing/LS-Pro-React-IV)
- [Completed Homework Assignment 4]()

<details><summary><b>LESSON FOUR: NOTES</b></summary><p>

### LESSON FOUR LECTURE NOTES

</p></details>

***
# Lesson 5 - ???
- [Lecture 5](https://youtu.be/Mnfo3aCnri8)
- [Homework Assignment 5](https://github.com/SunJieMing/LS-Pro-React-V)
- [Completed Homework Assignment 5]()

<details><summary><b>LESSON FIVE: NOTES</b></summary><p>

### LESSON FIVE LECTURE NOTES

</p></details>

***
## Additional resource:
- http://blog.andrewray.me/reactjs-for-stupid-people/
