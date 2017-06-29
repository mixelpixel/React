import React, { Component } from 'react';

export default class Counter extends Component {
  render () {
    const count = 0;
    return (
      <div>
        {count}
        <button>Increment</button>
      </div>
    );
  }
}
