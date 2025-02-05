import React, {useState} from 'react';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CgCloseO } from "react-icons/cg";
import { Books, Book } from "./book";
import {books1, books2, books3, books4} from "./App"

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
			if (books1.length < 20){
				books1.push(new Book(submittedForm.title,submittedForm.author,submittedForm.translator,submittedForm.rating,submittedForm.review));
				console.log(books1.length)
				console.log(books1)
			}
			else if (books1.length >= 20 && books2.length < 20){
			 	books2.push(new Book(submittedForm.title,submittedForm.author,submittedForm.translator,submittedForm.rating,submittedForm.review));
			 	console.log(books2.length)
			 	console.log(books2)
			}
			 else if (books2.length >= 20 && books3.length < 20){
			  	books3.push(new Book(submittedForm.title,submittedForm.author,submittedForm.translator,submittedForm.rating,submittedForm.review));
			  	console.log(books3.length)
			  	console.log(books3)
			}
			else {
				books4.push(new Book(submittedForm.title,submittedForm.author,submittedForm.translator,submittedForm.rating,submittedForm.review));
			  	console.log(books4.length)
			  	console.log(books4)
			}
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
							<input className="input" name="title" required defaultValue={submittedForm.title} onChange={(e)=>onChangeHandler(e)}/>
						</label>
					</div>
					<div className="form-input">
						<label>Author:
							<br></br>
							<input className="input" name="author"  defaultValue={submittedForm.author} onChange={onChangeHandler}/>
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
							<input type="radio" className="input" name="rating" id="1.0" value="1.0" defaultValue={submittedForm.rating} onChange={onChangeHandler}/>
							<input type="radio" className="input" name="rating" id="2.0" value="2.0" defaultValue={submittedForm.rating} onChange={onChangeHandler}/>
							<input type="radio" className="input" name="rating" id="3.0" value="3.0" defaultValue={submittedForm.rating} onChange={onChangeHandler}/>
							<input type="radio" className="input" name="rating" id="4.0" value="4.0" defaultValue={submittedForm.rating} onChange={onChangeHandler}/>
							<input type="radio" className="input" name="rating" id="5.0" value="5.0" defaultValue={submittedForm.rating} onChange={onChangeHandler}/>
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
