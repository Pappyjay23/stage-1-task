import React from "react";
import { Link } from "react-router-dom";

const ProfileButton = ({ children, link, buttonId, rdct }) => {
	return (
		<Link to={link} target={rdct ? '_blank' : '_self'}>
			<button id={buttonId} className='profileButton'>{children}</button>
		</Link>
	);
};

export default ProfileButton;
