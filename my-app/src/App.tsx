import React, {useState} from 'react';
import './App.css';
import { isBindingElement } from 'typescript';
import { Modal } from "./modal";
import { Bookshelf } from "./bookshelf";
import { Books, Book } from "./book";

export const books:Book[] = []; 
/*books is an array of Books, 
which starts as empty and gets added to every time a user adds a book through the form on the modal*/

function App() {

  let [modalOpen, setModalOpen] = useState(false);
    /*
    modalOpen is a boolean value to determine whether or not the modal(popup screen) is open or closed 
      and is false by default to keep the modal closed
    setModalOpen - a function that sets modalOpen to true to open the modal component
    */

  return (
    <div className="App">
      <div className="header">
        <span className="title">Hi, welcome to Interactive BookTracker</span>
        <br></br>
        <button className="add-book" onClick={() => setModalOpen(true)}> 
        {/* this calls setModalOpen when the button is pressed, 
          setting modalOpen to true so the modal will open and pop up */}
          Add Book
        </button> 
        {modalOpen && <Modal closeModal={()=>{setModalOpen(false)}}/>} 
        {/* this calls setModalOpen and sets modalOpen to false to close the modal
        closeModal - a function that, when called, calls setModalOpen in order to close the modal
        the closeModal function gets called inside modal.tsx whenever the user either clicks the submit or exit button on the modal*/}
      </div>
    <Bookshelf />
    {books.length != 0 && <Books />} {/* when the length of the books array is 0, no books appear on the bookshelf */}
    </div>
    
  );
}


export default App;
