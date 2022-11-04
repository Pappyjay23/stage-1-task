import React from "react";
import Input from "../components/Input";
import Footer from "../components/Footer";

const Contact = () => {
	return (
		<>
			<div className='contactPage'>
				<div className='contactForm'>
					<div className='contactFormContainer'>
						<h2>Contact Me</h2>
						<p className="contactDesc">Hi there, contact me to ask anything you have in mind.</p>
						<form className="formContainer">
							<div className="firstInputContainer">
								<Input
									label='First name'
									type='text'
									id='firstName'
									placeholder='Enter your first name'
								/>
								<Input
									label='Last name'
									type='text'
									id='lastName'
									placeholder='Enter your last name'
								/>
							</div>
							<div className="InputContainer">
                            <Input
								label='Email'
								type='email'
								id='email'
								placeholder='yourname@email.com'
							/>
                            </div>
							<div className="messageInputContainer">
								<label className="messageLabel" htmlFor='message'>Message</label>
								<textarea className="messageInput"
									id='message'
									placeholder="Send me a message and I'll reply as soon as possible..."></textarea>
							</div>
							<div className="checkBoxContainer">
								<input type='checkbox' id='checkBox' />
								<label htmlFor='checkBox' className="checkBoxLabel">
									You agree to providing your data to Peace Jinadu-Paul who may
									contact you.
								</label>
							</div>
							<button className='contactButton'>Send message</button>
						</form>
					</div>
				</div>
				<div className="footer">
                <Footer />
                </div>
			</div>
		</>
	);
};

export default Contact;
