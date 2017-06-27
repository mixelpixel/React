import React, { Component } from 'react'; // <--- no dot slash means look in node modules folder
import './NavBar.css'; // <--- works with className="navbar"

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar"> // <--- class vs className, somewhat different attributes

      </div>
    );
  }
}
