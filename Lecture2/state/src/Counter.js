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
  // alert(this.state.count);
  this.state.count++;       // <--- view in browser JS console
  console.log(this.state)   // <--- count increases, but not rendered!
  // this.setState({
  //
  // })
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
