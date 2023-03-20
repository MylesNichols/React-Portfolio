import React from "react";
import GithubLogo from '../img/github-logo.png';
import LinkedInLogo from '../img/Linkedin.png';
import TwitterLogo from '../img/twitter-logo.png';

// Footer that displays github, twitter and linkedin links on every route
const Footer = () => {
    return ( 
        <div className="footer">
            <a className="logo" href="https://github.com/MylesNichols"><img className="logo" src={GithubLogo} alt="Github" /></a>
            <a className="logo" href="https://www.linkedin.com/in/myles-nichols-40b662215/"><img className="logo" src={LinkedInLogo} alt="LinkdIn" /></a>
            <a className="logo" href="https://twitter.com/mylesnicholsdev"><img className="logo" src={TwitterLogo} alt="Twitter" /></a>
        </div>
     );
}

export default Footer;