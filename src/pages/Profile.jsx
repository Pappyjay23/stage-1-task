import React from "react";
import ProfileButton from "../components/ProfileButton";
import ProfileImage from "../assets/images/profileImage.jpg";
import menuButton from "../assets/images/shareButtonMobile.png";
import shareButton from "../assets/images/shareButton.png";
import { ProfileLinksData } from "../data/ProfileData";
import slackLogo from "../assets/images/slackLogo.png";
import githubLogo from "../assets/images/githubLogo.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Profile = () => {
	return (
		<div className='profileContainer'>
			<div className='profileDetails'>
				<div className='profileDetail'>
					<div className='profileImageContainer'>
						<img id="profile__img" className='profileImage' src={ProfileImage} alt='Profile' />
					</div>
					<p id="twitter" className='profileUsername'>@_pappy_jay_</p>
					<p id="slack" className='profileUsername2'>@pappyjay23</p>
				</div>
				<div className='menuButton'>
					<img className='menuButtonMobile' src={menuButton} alt='MenuButton' />
					<img className='shareButton' src={shareButton} alt='ShareButton' />
				</div>
			</div>
			<div className='profileLinks'>
				{ProfileLinksData.map((data, index) => (
					<div key={index} className='profileButtonContainer'>
						<ProfileButton buttonId={data.id} link={data.linkTo}>{data.name}</ProfileButton>
					</div>
				))}
			</div>
			<div className='socialLinks'>
				<div>
					<img src={slackLogo} alt='slackLogo' />
				</div>
				<Link to='//github.com/Pappyjay23/stage-1-task' target='_blank'>
					<img src={githubLogo} alt='githubLogo' />
				</Link>
			</div>
			<Footer />
		</div>
	);
};

export default Profile;
