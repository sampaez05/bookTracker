import React, {useState} from 'react';
import './App.css';
import { isBindingElement } from 'typescript';
import { Modal } from "./modal";
import { Bookshelf } from "./bookshelf";


class Book {
  x:number;
  y:number;
  height:number;
  width:number;
  constructor (x:number,y:number,height:number,width:number){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }
}

function App() {

  const handleClick = () => {
    console.log("hi");
  }

  let books: Book[] = [];

  return (
    <div className="App">
      <div className="header">
        <span className="title">Hi, welcome to Interactive BookTracker</span>
        <br></br>
        <button className="add-book" onClick={handleClick}>Add Book</button>
      </div>
     {/* <img src="bookcase.png" alt="Bookcase"></img> */}
    <Bookshelf />
    <Modal />
    </div>
    
  );
}


export default App;
