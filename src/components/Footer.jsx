import React from "react";
import zuriLogo from "../assets/images/zuriLogo.png";
import I4GLogo from "../assets/images/I4GLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className='footerContainer'>
			<Link to=''>
				<img className='zuriLogo' src={zuriLogo} alt='zuriLogo' />
			</Link>
			<p className='footerDesc'>HNG Internship 9 Frontend Task</p>
			<Link to=''>
				<img className='I4GLogo' src={I4GLogo} alt='I4GLogo' />
			</Link>
		</div>
	);
};

export default Footer;
