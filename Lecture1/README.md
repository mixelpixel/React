# LESSON ONE LECTURE NOTES
## [@18s](https://youtu.be/7QwRtGtluJk?t=18s) **Lecture 1 starts**
- ES6 vs ES5
- React uses ES6
- How to get a simple React app going
- JSX
- React syntax, etc.
- https://jsbin.com/ - Pull up the JavaScript menu and select ES6/Babel
- ES6 and Babel to use NEW and EXCITING ECMAScript features

## [@1m44s](https://youtu.be/7QwRtGtluJk?t=1m44s) **`let` & `const` vs. `var`**
- in ES6 say goodbye to `var`!
```js
let x = 5;    // "let" for when we're creating a variable which can be changed later on
const y = 10; // "constant" for when we NEVER want it to change - errors if we try
```

- [JS/ES5 "block" scoping](Lecture1/ifTrue.js), e.g. the following is all in the same scope:
  ```js
  if (true) {
    var x = 'hi';
    console.log(x); // ---> hi
  }                 // ---> function scope remains so x == 'hi'
  console.log(x);   // ---> hi
  ```

  - [ES6 style Block Scope](Lecture1/blockScope.js)
  - Can think of ES6 style as if all the code is happening _inside_ the same function.
  - The scope is contained inside the above `if` statement (and also in `for-loops`) e.g.
  ```js
  function foo() {
    if (true) {
      var x = 'hi';
      console.log(x); // ---> x == hi
    }                 // ---> function scope remains, so x == 'hi'
    console.log(x);   // ---> x == hi
  }
  foo();              // ---> hi
                      // ---> hi
  console.log(x);     // <--- ReferenceError!!!
  ```

- BOTH `let` and  `const` are BLOCK SCOPED
- [`let` block scoping](Lecture1/letBlockScope.js) - the x value is "trapped" inside the block scope:
```js
if (true) {
  let x = 'hi';
  console.log(x) // ---> hi
}

console.log(x)   // <--- ReferenceError
```

- [`const` block scoping](Lecture1/constBlockScope.js) - the x value is "trapped" inside the block scope:
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
x++;            // <--- ERROR!!!
```

- `let` is mutable, e.g.
```js
let x = 5;
x++;
console.log(x); // ---> 6
```

- Don't use `var`.
- BEST PRACTICE:  Always use `const`, unless it has to change, then use `let`

## [@7m](https://youtu.be/7QwRtGtluJk?t=7m) **Babel**
- https://babeljs.io/
- Babel takes the ES6 code and compiles it to ES5/JavaScript for browsers

## [@7m44s](https://youtu.be/7QwRtGtluJk?t=7m44s) **Constructors, Syntactic Sugar, `class` & `construcor`**
- ES5 constructor functions:
```js
function User(options) {
  this.name     = options.name;
  this.password = options.password;
}
const me = new User({name: 'Ben', password: '12345'});
console.log(me) // ---> User { name: 'Ben', password: '12345' }
            //also ---> [object Object] { name: 'Ben', password: '12345' }
```

- ES6 uses a `class` keyword
- Basic syntax:
```js
class User {
  sayHello() {
    console.log('hello!');
  }
}
const me = new User;
// const me = new User(); // <--- also works with ()
me.sayHello(); // <--- hello!
```

- NEW `constructor` property:
```js
class User {
  constructor(options) {
    this.name     = options.name;
    this.password = options.password;
  }

  sayHello() {
    console.log('Hello! My name is ' + this.name + '.');
  }
}
const me = new User({
  name: 'Ben',
  password: '12345'
});
me.sayHello(); // <--- Hello! My name is Ben.
```

## [@11m51s](https://youtu.be/7QwRtGtluJk?t=11m51s) **BackTick Text Formatting**
```js
class User {
  constructor(options) {
    this.name     = options.name;
    this.password = options.password;
  }

  sayHello() {
    // console.log('Hello! My name is ' + this.name + '.'); // NO MORE!
    console.log(`Hello! My name is $(this.name).`); // NEW FORMATTING WITH BACKTICKS!!
    //          ^                  ^^^^^^^^^^^^ ^
  }
}
const me = new User({
  name: 'Ben',
  password: '12345'
});
me.sayHello(); // <--- Hello! My name is Ben.
```

## [@13m23s](https://youtu.be/7QwRtGtluJk?t=13m23s) **Create React Apps**
- `sudo npm install -g create-react-app`
- `-g` makes it global
- once it's set up globally, the `create-react-app <app name>` command works!
- builds a basic boiler plate web app
- `npm start` default uses localhost:3000 to host web apps

## [@16m47s](https://youtu.be/7QwRtGtluJk?t=16m47s) **React App Boilerplate**
- src/App.js - handles the default display page
- index.js - "root" or "head" of the application: takes react components and passes them to the DOM
- React: creating custom html elements, building reusable elements, or, "components"
- one component is the entire page. Inside of that there's a header, and a body. In the header, there's a center, left and right set of buttons, etc. nested inside of each other.
- index.js takes App.js and sticks it all into the DOM (such that the HTML is structured in a way that the JavaScript can communicate with it and interact with it at runtime)
- App.js uses an ES6 class, it imports some stuff and exports the App class so it can be used elsewhere:
  ```js
  import React, { Component } from 'react';
  import logo from './logo.svg'
  import './App.css';

  class App extends Component { ... }

  export default App;
  ```

## [@20m48s](https://youtu.be/7QwRtGtluJk?t=20m48s) **Importing and Exporting**
- Instead of one big file for a web page, you can use several files - more manageable.
  - e.g. `import <something> from './file_path/file';`
  - NOTE: `'./file_path/file';` defaults to .js, unless specified otherwise
- `export default App` gives the file importing App.js access to read in the contents of the App class.
  - e.g. project/index.js accesses the App.js export with:
  ```js
  import App from './App';
  ```
  - and is able to render it like so:
  ```js
  ReactDOM.render(
    <App />, // <------------ here index.js makes use of the imported App class
    document.getElementById('root')
  );
  ```

## [@24m53s](https://youtu.be/7QwRtGtluJk?t=24m53s) **React Components and Extending them**
- `class App extends Component` does just what it says, class App extends the functions/features/etc. "inherited" from the React Component(s) - App adds to/builds upon/extends the React Component
- Don't mess with the files in `project/node_modules`
- `import React, { Component } from 'react';` imports a React component from the 'react' library in the node_modules directory
- de-structured import statement, e.g.
  ```jsx
  import React, { Component } from 'react';
  class App extends Component {...}
  ```
  ...is the same thing as:
  ```js
  import React from 'react';
  class App extends React.Component {...}
  ```

## [@26m32s](https://youtu.be/7QwRtGtluJk?t=26m32s) **Components and Render Methods**
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
