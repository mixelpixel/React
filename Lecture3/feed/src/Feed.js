import React, { Component } from 'react';
import Card from './Card';
import './App.css';

// DUMMY DATAnormally grabbed through an http request or db or something
const posts = [
  {
    title: 'My Post',
    author: 'Ben',
    content: 'osdhlajshdvlahdsjva ljdhlasd lsdhlajksdhfla liasdghf a'
  },
  {
    title: 'My Post',
    author: 'Ben',
    content: 'osdhlajshdvlahdsjva ljdhlasd lsdhlajksdhfla liasdghf a'
  },
  {
    title: 'My Post',
    author: 'Ben',
    content: 'osdhlajshdvlahdsjva ljdhlasd lsdhlajksdhfla liasdghf a'
  },
  {
    title: 'My Post',
    author: 'Ben',
    content: 'osdhlajshdvlahdsjva ljdhlasd lsdhlajksdhfla liasdghf a'
  }
];

export default class Feed extends Component {

  render() {
     return(
       <div className="feed">
         { posts.map((post) => {
           return <Card />
         }) }
       </div>
     )
   }
}
