import React, { Component } from 'react';
// per deprecation warning, but no difference with compile error ?
// import PropTypes from 'prop-types';
import './App.css';


export default class Card extends Component {
  // deprecation warning upon compile?
  static propTypes = {
    title:   React.PropTypes.string,
    author:  React.PropTypes.string,
    content: React.PropTypes.string
  };

  render() {
     return(
       <div className="card">
         <h2>{this.props.title}</h2>
         <h3>{this.props.author}</h3>
         <p>{this.props.content}</p>
       </div>
     )
   }
}
