import React, {useState} from 'react';
import './App.css';
import { isBindingElement } from 'typescript';
import { Modal } from "./modal";
import { Bookshelf } from "./bookshelf";
import { Books, Book } from "./book";

export const books:Book[] = []; 

export function getIndex(books:Book[]):number{
  /**
   * this function takes in a 
   */
  let index:number = -1; //starts at -1 since indexing starts at 0 not 1
  for (let book of books){
    index=index+1;
  }
  return index;
}
/** books is an array of Books, 
 * which starts as empty and gets added to every time a user adds a book through the form on the modal
 */

function App() {

  let [modalOpen, setModalOpen] = useState(false);
    /**
     * modalOpen is a boolean value to determine whether or not the modal(popup screen) is open or closed 
     * and is false by default to keep the modal closed
     * setModalOpen - a function that sets modalOpen to true to open the modal component
    */

  return (
    <div className="App">
      <div className="header">
        <span className="title">Hi, welcome to Interactive BookTracker</span>
        <br></br>
        <button className="add-book" onClick={() => setModalOpen(true)}>Add Book</button> 
        {/** this calls setModalOpen when the button is pressed, 
         * setting modalOpen to true so the modal will open and pop up 
         */}
        {modalOpen && <Modal closeModal={()=>{setModalOpen(false)}}/>} 
        {/** this calls setModalOpen and sets modalOpen to false to close the modal
        * closeModal - a function that, when called, calls setModalOpen in order to close the modal
        * the closeModal function gets called inside modal.tsx whenever the user either clicks the submit or exit button on the modal
        */}
      </div>
      <div className='bookshelf'>
        <Bookshelf />
      </div>
    </div>
    
  );
}
export default App;
