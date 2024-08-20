import React, { useState } from 'react';
import { BookModal } from "./book-info-modal";

import "./book.css";

export class Book {
    title:string;
    author:string;
    translator:string;
    rating:string;
    review:string
    constructor (title:string, author:string,translator:string,
        rating:string,review:string){
      this.title = title;
      this.author = author;
      this.translator = translator;
      this.rating = rating;
      this.review = review;
    /**
     * This dataclass represents a book
     * Attributes:
     * title:string - the name of the book
     * author:string - the person who wrote the book
     * translator:string - the person who translated the book, if applicable
     * rating:string - the number of stars the user would rate the book
     */
    }
  }

export const Books = () => {

    let [modalOpen, setModalOpen] = useState(false);
    /**
     * modalOpen is a boolean value to determine whether or not the modal(popup screen) is open or closed 
     * and is false by default to keep the modal closed
     * setModalOpen - a function that sets modalOpen to true to open the modal component
    */

	return (
        <div className="book">
            <button className="book-button" onClick={() => setModalOpen(true)}></button> 
        {/** this calls setModalOpen when the button is pressed, 
         * setting modalOpen to true so the modal will open and pop up 
         */}
        {modalOpen && <BookModal closeModal={()=>{setModalOpen(false)}}/>} 
        {/** this calls setModalOpen and sets modalOpen to false to close the modal
        * closeModal - a function that, when called, calls setModalOpen in order to close the modal
        * the closeModal function gets called inside modal.tsx whenever the user either clicks the submit or exit button on the modal
        */}
        </div>
	);
};