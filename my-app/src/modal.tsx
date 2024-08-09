import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";

import "./modal.css";

export const Modal = ({ closeModal }) => {

	return (
		<div className="modal-container">
			Add Book Info
			<div className="modal">
				<form>
					<div className="form-input">
						<label htmlFor="Title">Title:</label>
						<br></br>
						<input name="Title"/>
					</div>
					<div className="form-input">
						<label htmlFor="Author">Author:</label>
						<br></br>
						<input name="Author"/>
					</div>
					<div className="form-input">
						<label htmlFor="Translator">Translator:</label>
						<br></br>
						<input name="Translator"/>
					</div>
					<div className="form-input">
						<label htmlFor="Rating">Rating:</label>
						<br></br>
						<input name="Rating"/>
					</div>
					<div className="form-input">
						<label htmlFor="Review">Review:</label>
						<br></br>
						<textarea name="Review"/>
					</div>
					<br></br>
					<button className="submit-button" onClick={closeModal}>
						<FaRegCircleCheck size={30}/>
					</button>
				</form>
			</div>
		</div>
	);
};