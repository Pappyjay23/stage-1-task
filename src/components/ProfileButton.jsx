import React from "react";
import { Link } from "react-router-dom";

const ProfileButton = ({ children, link, buttonId }) => {
	return (
		<Link to={link} target="_blank">
			<button id={buttonId} className='profileButton'>{children}</button>
		</Link>
	);
};

export default ProfileButton;
