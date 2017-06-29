import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.state = {
      count: 0
    };
  }

incrementCount() {
  // step 1
  // alert(this.state.count);
  // step 2
  // this.state.count++;       // <--- view in browser JS console
  // console.log(this.state)   // <--- count increases, but not rendered!
  //step 3
  // this.setState({
  //   count: this.state.count +1
  // });
  // step 4
  this.setState(currentState => {   // <---- ASNCHRONOUS!!! :D
    return {
      count: currentState.count + 1 // <--- better for instances when you need to reference
    }                               // <--- the current state to get the new state
  });
}

  render () {
    return (
      <div>
        {this.state.count}
        <button onClick={this.incrementCount} >Increment</button>
      </div>
    );
  }
}
