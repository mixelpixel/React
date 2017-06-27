function foo() {
  if (true) {
    var x = 'hi';
    console.log(x);
  }
  console.log(x);
}

foo(); // <--- prints two lines of 'hi'

// console.log(x); // <--- ReferenceError: x is not defined
