import React, { Component } from 'react';
import './App.css';


export default class Card extends Component {
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
