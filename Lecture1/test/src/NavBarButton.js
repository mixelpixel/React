import React, { Component } from 'react';

export default class NavBarButton extends Component {
  render() {
    return (
      <button>
        { this.props.text }
      </button>
    );
  }
}
