import React from "react";
import { Link } from "react-router-dom";

const ProfileButton = ({ children, link }) => {
	return (
		<Link to={link}>
			<button className='profileButton'>{children}</button>
		</Link>
	);
};

export default ProfileButton;
