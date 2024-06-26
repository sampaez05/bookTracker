import React, {useState} from 'react';
import './App.css';
import { isBindingElement } from 'typescript';

function add_book(){

}

function App() {

  return (
    <div className="App">
      <div className="header">
        <span className="title">Welcome to Interactive BookTracker</span>
        <br></br>
        <button className="add-book">Add Book</button>
      </div>
     {/* <img src="bookcase.png" alt="Bookcase"></img> */}
      <div className="bookshelf1">
        <span className="books"></span>
      </div>
      <div className="bookshelf2">
        <span className="books"></span>
      </div>
      <div className="bookshelf3">
        <span className="books"></span>
      </div>
      <div className="bookshelf4">
        <span className="books"></span>
      </div>
    </div>
  );
}


export default App;
