import React, {useState} from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { CgCloseO } from "react-icons/cg";
import { Books, Book } from "./book";
import {books} from "./App"

import "./modal.css";

export const Modal = ({ closeModal }) => {

	const [submittedForm,setSubmittedForm] = useState({
		title:"", author:"",translator:"",rating:"",review:""});

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
			books.push(new Book(submittedForm.title,submittedForm.author,submittedForm.translator,submittedForm.rating,submittedForm.review));
			console.log(books.length)
			console.log(books)
			setFormFilled(true)
			closeModal();
		}
	}
	return (
		<div className="modal-container">
			Add Book Info
			<div className="modal">
				<button className="exit-button" onClick={closeModal}>
						<CgCloseO size={30}/>
				</button>
				<form>
					<div className="form-input">
						<label>Title:
							<br></br>
							<input name="title" required defaultValue={submittedForm.title} onChange={(e)=>onChangeHandler(e)}/>
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
