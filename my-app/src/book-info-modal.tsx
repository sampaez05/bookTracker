import React, {useState} from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { CgCloseO } from "react-icons/cg";
import { Books, Book } from "./book";
import {books1, books2, books3} from "./App"

import "./book-info-modal.css";

function checkRating(rate:number, rating:string){
	if (rate===Number(rating)){
		return true;
	}
	return false;
}

export const BookModal = ({ book, index, closeModal }) => {

	const [submittedForm,setSubmittedForm] = useState({
		title:book.title, author:book.author,translator:book.translator,rating:book.rating,review:book.review});

	const [formFilled, setFormFilled] = useState(true);

	const onChangeHandler = (e) => {
		setSubmittedForm({
			...submittedForm,
			[e.target.name]:e. target.value,
		});
		setFormFilled(true)
	}
	
	const submitAndClose = (e) => {
		e.preventDefault();
		if (submittedForm.title === "" || submittedForm.author === "" || submittedForm.translator === "" || submittedForm.rating === "" || submittedForm.review === ""){
			console.log("Please fill out the form")
			setFormFilled(false);
		}
		else{
			book.title = submittedForm.title;
        	book.author = submittedForm.author;
        	book.translator = submittedForm.translator;
        	book.rating = submittedForm.rating;
        	book.review = submittedForm.review;
			console.log(book.length)
			console.log(book)
			closeModal();
	}
	}
	return (
		<div className="modal-container">
			{book.title}
			<div className="modal">
				<button className="exit-button" onClick={closeModal}>
						<CgCloseO size={30}/>
				</button>
				<form>
					<div className="form-input">
						<label>Title:
							<br></br>
							<input className="input" name="title" defaultValue={submittedForm.title} onChange={(e)=>onChangeHandler(e)}/>
						</label>
					</div>
					<div className="form-input">
						<label>Author:
							<br></br>
							<input className="input" name="author" defaultValue={submittedForm.author} onChange={onChangeHandler}/>
						</label>
					</div>
					<div className="form-input">
						<label>Translator:
							<br></br>
							<input className="input" name="translator" defaultValue={submittedForm.translator} onChange={onChangeHandler}/>
						</label>
					</div>
					<div className="form-input">
						<label>Rating:
							<br></br>
							<input type="radio" className="input" name="rating" id="1.0" value="1.0" checked={checkRating(1.0,submittedForm.rating)} onChange={onChangeHandler}/>
							<input type="radio" className="input" name="rating" id="2.0" value="2.0" checked={checkRating(2.0,submittedForm.rating)} onChange={onChangeHandler}/>
							<input type="radio" className="input" name="rating" id="3.0" value="3.0" checked={checkRating(3.0,submittedForm.rating)} onChange={onChangeHandler}/>
							<input type="radio" className="input" name="rating" id="4.0" value="4.0" checked={checkRating(4.0,submittedForm.rating)} onChange={onChangeHandler}/>
							<input type="radio" className="input" name="rating" id="5.0" value="5.0" checked={checkRating(5.0,submittedForm.rating)} onChange={onChangeHandler}/>
						</label>
					</div>
					<div className="form-input">
						<label>Review:
							<br></br>
							<textarea className="input" name="review" defaultValue={submittedForm.review} onChange={onChangeHandler}/>
						</label>
					</div>
					<br></br>
					<button className="submit-button" onClick={submitAndClose}>
						<FaRegCircleCheck size={30}/>
                    </button>
					<br></br>
					{formFilled===false && <span>Fill Out Entire Form</span>}
				</form>
			</div>
		</div>
	);
};