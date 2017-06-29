import React from 'react';
import './App.css';

export default function(props) {
  return (
    <div className='Header'>
      {props.title}
    </div>
  );
}
