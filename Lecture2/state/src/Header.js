import React from 'react';
import './App.css';

export default function(props) {
  return (
    <div className='Header'>
      <h1>{props.title}</h1>
    </div>
  );
}
