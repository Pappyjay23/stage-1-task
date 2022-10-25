import React from "react";
import zuriLogo from "../assets/images/zuriLogo.png";
import I4GLogo from "../assets/images/I4GLogo.png";

const Footer = () => {
	return (
		<div className='footerContainer'>
			<div>
				<img className='zuriLogo' src={zuriLogo} alt='zuriLogo' />
			</div>
			<p className='footerDesc'>HNG Internship 9 Frontend Task</p>
			<div>
				<img className='I4GLogo' src={I4GLogo} alt='I4GLogo' />
			</div>
		</div>
	);
};

export default Footer;
