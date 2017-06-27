function foo() {
  if (true) {
    var x = 'hi';
    console.log(x);
  }
  console.log(x);
}

foo(); // <--- prints two line of 'hi'

// console.log(x); // <--- ReferenceError: x is not defined
