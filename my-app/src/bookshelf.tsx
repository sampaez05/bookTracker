import React from 'react';

import "./bookshelf.css";
import { Books, Book } from "./book";
import {books} from "./App";

export const Bookshelf = () => {
	return (
        <div className="bookshelf">
            <div className="bookshelf1">
                    {
                        books.map(function(book,index){
                        return <div key={index}><Books index={index}/></div>;
                        })
                        /** this function iterates through every book in the list of books, 
                         * displaying each book */
                    }
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
};