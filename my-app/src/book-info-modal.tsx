import React, {useState} from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { CgCloseO } from "react-icons/cg";
import { Books, Book } from "./book";
import {books1, books2, books3} from "./App"

import "./modal.css";

export const BookModal = ({ booksList, index, closeModal }) => {

	const [submittedForm,setSubmittedForm] = useState({
		title:booksList[index].title, author:booksList[index].author,translator:booksList[index].translator,rating:booksList[index].rating,review:booksList[index].review});
		console.log("title book1");

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
			if (books1.length <= 20){
				books1[index].title = submittedForm.title;
        		books1[index].author = submittedForm.author;
        		books1[index].translator = submittedForm.translator;
        		books1[index].rating = submittedForm.rating;
        		books1[index].review = submittedForm.review;
				console.log(books1.length)
				console.log(books1)
			}
			else if (books1.length > 20 && books2.length <= 20){
				books2[index].title = submittedForm.title;
        		books2[index].author = submittedForm.author;
        		books2[index].translator = submittedForm.translator;
        		books2[index].rating = submittedForm.rating;
        		books2[index].review = submittedForm.review;
				console.log(books2.length)
				console.log(books2)
			}
			else if (books2.length > 20 && books3.length <= 20){
				books3[index].title = submittedForm.title;
        		books3[index].author = submittedForm.author;
        		books3[index].translator = submittedForm.translator;
        		books3[index].rating = submittedForm.rating;
        		books2[index].review = submittedForm.review;
				console.log(books3.length)
				console.log(books3)
			}
			closeModal();
	}
	}
	return (
		<div className="modal-container">
			{books1[index].title}
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
					<br></br>
					{formFilled===false && <span>Fill Out Entire Form</span>}
				</form>
			</div>
		</div>
	);
};