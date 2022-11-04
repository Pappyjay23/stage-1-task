import React, { useState } from "react";
import Footer from "../components/Footer";
import { formLogic } from "../data/ContactFormLogic";

const Contact = () => {
	const [formValues, setFormValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const [successMessage, setsuccessMessage] = useState("");

	const checkErrors = () => {
		setErrors(formLogic(formValues));
	};
	const checkToSubmit = () => {
		if (Object.values(errors).length === 0) {
			setSubmitted(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		checkErrors();
		checkToSubmit();
		submitted && setsuccessMessage("Sucessful submission!");
		submitted &&
			setTimeout(() => {
				setsuccessMessage("Sucessful submission!");
				setFormValues({
					...formValues,
					firstName: "",
					lastName: "",
					email: "",
					message: "",
				});
				setsuccessMessage("");
				setSubmitted(false);
				setErrors({});
			}, 2000);
	};

	return (
		<>
			<div className='contactPage'>
				<div className='contactForm'>
					<div className='contactFormContainer'>
						<h2>Contact Me</h2>
						<p className='contactDesc'>
							Hi there, contact me to ask anything you have in mind.
						</p>
						{successMessage && (
							<p className='successMessage'>{successMessage}</p>
						)}
						<form onSubmit={handleSubmit} className='formContainer'>
							<div className='firstInputContainer'>
								<div className='inputGroup'>
									<label htmlFor='firstName'>First name</label>
									<input
										className={
											errors?.firstName ? "errorInput" : "noErrorInput"
										}
										value={formValues.firstName}
										onChange={(e) =>
											setFormValues({
												...formValues,
												firstName: e.target.value,
											})
										}
										id='firstName'
										type='text'
										placeholder='Enter your first name'
									/>
									<small className='errorClass'>{errors?.firstName} </small>
								</div>
								<div className='inputGroup'>
									<label htmlFor='lastName'>Last name</label>
									<input
										className={errors?.lastName ? "errorInput" : "noErrorInput"}
										value={formValues.lastName}
										onChange={(e) =>
											setFormValues({
												...formValues,
												lastName: e.target.value,
											})
										}
										id='lastName'
										type='text'
										placeholder='Enter your last name'
									/>
									<small className='errorClass'>{errors?.lastName}</small>
								</div>
							</div>
							<div className='InputContainer'>
								<div className='inputGroup'>
									<label htmlFor='email'>Email</label>
									<input
										className={errors?.email ? "errorInput" : "noErrorInput"}
										value={formValues.email}
										onChange={(e) =>
											setFormValues({
												...formValues,
												email: e.target.value,
											})
										}
										id='email'
										type='email'
										placeholder='yourname@email.com'
									/>
									<small className='errorClass'>{errors?.email}</small>
								</div>
							</div>
							<div className='messageInputContainer'>
								<label className='messageLabel' htmlFor='message'>
									Message
								</label>
								<textarea
									className={`messageInput ${
										errors?.message ? "errorInput" : "noErrorInput"
									}`}
									value={formValues.message}
									onChange={(e) =>
										setFormValues({
											...formValues,
											message: e.target.value,
										})
									}
									id='message'
									placeholder="Send me a message and I'll reply as soon as possible..."></textarea>
								<small className='errorClass'>{errors.message}</small>
							</div>
							<div className='checkBoxContainer'>
								<input type='checkbox' id='checkBox' />
								<label htmlFor='checkBox' className='checkBoxLabel'>
									You agree to providing your data to Peace Jinadu-Paul who may
									contact you.
								</label>
							</div>
							<button className='contactButton'>Send message</button>
						</form>
					</div>
				</div>
				<div className='footer'>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Contact;
