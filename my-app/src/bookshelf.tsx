import React from 'react';

import "./bookshelf.css";
import { Books, Book } from "./book";
import {books1, books2, books3, books4} from "./App";

export const Bookshelf = () => {
	return (
        <div className="bookshelf">
            <div className="bookshelf1">
                {
                    books1.slice(0,20).map(function(book,index){
                    return <div key={index}><Books book={book} index={index}/></div>;
                    }) 
                    /** this function iterates through every book in the list of books, 
                     * displaying each book */
                }
            </div>
            <div className="bookshelf2">
                {
                    books2.slice(0,20).map(function(book,index){
                    return <div key={index}><Books book={book} index={index}/></div>;
                    })
                    /** this function iterates through every book in the list of books, 
                     * displaying each book */
                } 
            </div>
            <div className="bookshelf3">
                {
                    books3.slice(0,20).map(function(book,index){
                    return <div key={index}><Books book={book} index={index}/></div>;
                    })
                    /** this function iterates through every book in the list of books, 
                     * displaying each book */
                } 
            </div>
            <div className="bookshelf4">
                {
                    books4.slice(0,20).map(function(book,index){
                    return <div key={index}><Books book={book} index={index}/></div>;
                    })
                    /** this function iterates through every book in the list of books, 
                     * displaying each book */
                }
            </div>
        </div>
	);
};