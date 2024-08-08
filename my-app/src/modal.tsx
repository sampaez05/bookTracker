import React from 'react';

import "./modal.css";

export const Modal = () => {
	return (
		<div className="modal-container">
			Add Book Info
			<div className="modal">
				<form>
					<div>
						<label htmlFor="Title">Title:</label>
						<input name="Title"/>
					</div>
					<div>
						<label htmlFor="Author">Author:</label>
						<input name="Author"/>
					</div>
					<div>
						<label htmlFor="Translator">Translator:</label>
						<input name="Translator"/>
					</div>
					<div>
						<label htmlFor="Rating">Rating:</label>
						<input name="Rating"/>
					</div>
					<div>
						<label htmlFor="Review">Review:</label>
						<input name="Review"/>
					</div>
				</form>
			</div>
		</div>
	);
};