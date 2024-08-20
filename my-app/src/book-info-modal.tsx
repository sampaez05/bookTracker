import React, {useState} from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { CgCloseO } from "react-icons/cg";
import { Books, Book } from "./book";
import {books, getIndex} from "./App"

import "./modal.css";

export const BookModal = ({ closeModal }) => {

	const [submittedForm,setSubmittedForm] = useState({
		title:books[getIndex(books)].title, author:books[getIndex(books)].author,translator:books[getIndex(books)].translator,rating:books[getIndex(books)].translator,review:books[getIndex(books)].review});

	const onChangeHandler = (e) => {
		setSubmittedForm({
			...submittedForm,
			[e.target.name]:e. target.value,
		});
	}
	
	const submitAndClose = (e) => {
		e.preventDefault();
        books[getIndex(books)].title = submittedForm.title;
        books[getIndex(books)].author = submittedForm.author;
        books[getIndex(books)].translator = submittedForm.translator;
        books[getIndex(books)].rating = submittedForm.rating;
        books[getIndex(books)].review = submittedForm.review;
		console.log(books.length)
		console.log(books)
		closeModal();
	}
	return (
		<div className="modal-container">
			{books[getIndex(books)].title}
			<div className="modal">
				<button className="exit-button" onClick={closeModal}>
						<CgCloseO size={30}/>
				</button>
				<form>
					<div className="form-input">
						<label>Title:
							<br></br>
							<input name="title" defaultValue={submittedForm.title} onChange={(e)=>onChangeHandler(e)}/>
						</label>
					</div>
					<div className="form-input">
						<label>Author:
							<br></br>
							<input name="author" defaultValue={submittedForm.author} onChange={onChangeHandler}/>
						</label>
					</div>
					<div className="form-input">
						<label>Translator:
							<br></br>
							<input name="translator" defaultValue={submittedForm.translator} onChange={onChangeHandler}/>
						</label>
					</div>
					<div className="form-input">
						<label>Rating:
							<br></br>
							<input name="rating" defaultValue={submittedForm.rating} onChange={onChangeHandler}/>
						</label>
					</div>
					<div className="form-input">
						<label>Review:
							<br></br>
							<textarea name="review" defaultValue={submittedForm.review} onChange={onChangeHandler}/>
						</label>
					</div>
					<br></br>
					<button className="submit-button" onClick={submitAndClose}>
						<FaRegCircleCheck size={30}/>
                    </button>
				</form>
			</div>
		</div>
	);
};