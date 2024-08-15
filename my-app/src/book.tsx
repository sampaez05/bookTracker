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
    }
  }

export const Books = () => {
	return (
        <div className="book">
            <div></div>
        </div>
	);
};