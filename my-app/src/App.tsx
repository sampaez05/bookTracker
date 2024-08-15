import React, {useState} from 'react';
import './App.css';
import { isBindingElement } from 'typescript';
import { Modal } from "./modal";
import { Bookshelf } from "./bookshelf";
import { Books, Book } from "./book";

export const books:Book[] = [];

function App() {

  const handleClick = () => {
    console.log("hi");
  }

  let [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <span className="title">Hi, welcome to Interactive BookTracker</span>
        <br></br>
        <button className="add-book" onClick={() => setModalOpen(true)}>
          Add Book
        </button>
        {modalOpen && <Modal closeModal={()=>{setModalOpen(false)}}/>}
      </div>
     {/* <img src="bookcase.png" alt="Bookcase"></img> */}
    <Bookshelf />
    {books.length != 0 && <Books />}
    </div>
    
  );
}


export default App;
