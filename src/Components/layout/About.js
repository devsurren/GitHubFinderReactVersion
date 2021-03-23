import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';


const About=()=>{
	return(
		<Fragment>

		<div className="about-container">
			<h3>GitHub Finder</h3>
			<p>V.0.0.1</p>
			<Link to="/" className="btn btn-pink btn-block">Home</Link>
		</div>
		</Fragment>
		);
}

export default About;