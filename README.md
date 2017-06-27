# Lambda School: React
- Lambda School tutorial: https://lambdaschool.com/pro/react
- https://facebook.github.io/react/
- https://github.com/reactjs
- https://en.wikipedia.org/wiki/React_(JavaScript_library)
- https://babeljs.io/
- https://jsx.github.io/

# Lesson 1 - Introduction to React and ES6
- [Lecture 1](https://youtu.be/7QwRtGtluJk)
- [Homework Assignment 1](https://github.com/SunJieMing/LS-Pro-React-I)
- [Completed Homework Assignment 1]()

<details><summary><b>LESSON ONE: NOTES</b></summary><p>

### LESSON ONE LECTURE NOTES
#### [@1m08s](https://youtu.be/7QwRtGtluJk?t=1m08s) **Lecture starts**
- https://jsbin.com/
  - Pull up the JavaScript menu and select ES6/Babel
- ES6 and Babel to use NEW and EXCITING ECMAScript features
- **`let` and `const` - say goodbye to `var`**
```js
let x = 5;    // let says we're creating a variable which can be changed later on
const y = 10; // defining a constant and we NEVER want it to change - an error appears if we try and change it
```
- [JS "block" scoping](Lecture1/ifTrue.js)
```js
if (true) {
  var x = 'hi';
  console.log(x); // ---> hi
}                 // ---> function scope remains so x = 'hi'
console.log(x);   // ---> hi
```
- [Block Scope](Lecture1/blockScope.js)
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
- Don't use `var`. Always use `const`, unless it has to change, then use `let`
#### [@7m](https://youtu.be/7QwRtGtluJk?t=7m) **Babel**
- https://babeljs.io/
- Babel takes the ES6 code and compiles it
#### [@7m44s](https://youtu.be/7QwRtGtluJk?t=7m44s) **Constructors and Syntactic Sugar**
- Constructors:
```js
function User(options) {
  this.name     = options.name;
  this.password = options.password;
}
const me = new User({name: 'Ben', password: '12345'});

console.log(me)
```
- NEW Constructor syntax BASIC:
```js
class User(options) {
  sayHello() {
    console.log('hello!');
  }
}
const me = new User({
  name: 'Ben',      // <--- ignored for right now
  password: '12345' // <--- ignored for right now
});

me.sayHello(); // <--- hello!
```
- NEW Constructor with construction and text formatting:
```js
class User(options) {
  constructor(options) {
    this.name     = options.name;
    this.password = options.password;
  }

  sayHello() {
    // console.log('Hello! My name is ' + this.name + '.');
    console.log(`Hello! My name is $(this.name).`); // NEW FORMATTING WITH BACKTICKS!!
  }
}
const me = new User({
  name: 'Ben',
  password: '12345'
});

me.sayHello(); // <--- Hello! My name is Ben.
```
#### [@13m23s](https://youtu.be/7QwRtGtluJk?t=13m23s) **Create React Apps**
- `sudo npm install -g create-react-app`
- `-g` makes it global
- once it's globally, the `create-react-app <app name>` command works!
- localhost:3000
- ES6 class
#### [@20m48s](https://youtu.be/7QwRtGtluJk?t=20m48s) **Importing and Exporting**
- Instead of one big file for a web page, you can use several files - more manageable.
- e.g. import <something> from './file_path';
- e.g. export default App
- destructured import statement, e.g.
```js
import React, { Component } from 'react';
...

class App extends Component {
  ...
}
```
  IS THE SAME THINGS AS:
```js
import React from 'react';
...

class App extends React.Component {
  ...
}
```
#### [@26m32s](https://youtu.be/7QwRtGtluJk?t=26m32s) **Components and Render Methods**
- every React component has a render method.
- Render method is where the HTML is defined which ends up on screen
- JSX: html-like code
  - https://jsx.github.io/
- It all gets boiled down to ES5 code...
- ONE element gets returned, but it can have tons of stuff in it.
```js
class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

export default App;
```
- Files for components are usually Capitalized.js
- e.g. NavBar.js
```js
import React, { Component } from 'react'; // <--- no dot slash means look in node modules folder
import './NavBar.css'; // <--- works with className="navbar"

export default class NavBar extends Component {
  render() {
    return {
      <div className="navbar"> // <--- somewhat different attributes

      </div>
    }
  }
}
```
WORKS WITH "NavBar.css"
```css
.navbar {
  height: 100px;
  background-color: whitesmoke;
}
```
AND THIS:
```js
import React, {Component} from 'react';
import NavBar from './NavBar' // <--- defaults to .js
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar /> // <--- all html elements can be self-closing
      </div>
    );
  }
}

export default App;
```
- NavBarButton.js
```js
import React, { Component } from 'react';

export default class NavBarButton extends Component {

}
```
SAME AS
```js
import React, { Component } from 'react';

class NavBarButton extends Component {
  render() {
    <button>
      // NavBar Button
      { this.prop.text }
    </button>
  }
}

export default NavBarButton;
```
- NavBar.js
```js
import React, { Component } from 'react'; // <--- no dot slash means look in node modules folder
import './NavBar.css'; // <--- works with className="navbar"

export default class NavBar extends Component {
  render() {
    return {
      <div className="navbar"> // <--- somewhat different attributes
        <NavBarButton text={}'Home'} />
        <NavBarButton text={}'FAQ'} />
        <NavBarButton text={}'LogIn'} />
      </div>
    }
  }
}
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
