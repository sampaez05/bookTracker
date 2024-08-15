import React from 'react';

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
     * review:string - the user's review/thoughts/opinions about the book
     */
    }
  }

export const Books = () => {
	return (
        <div className="book">
            <div></div>
        </div>
	);
};