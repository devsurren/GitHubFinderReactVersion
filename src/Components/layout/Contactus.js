import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ContactUs=()=>{
    return(
        <Fragment>

		<div className="about-container">
               <p style={{fontFamily:"Pacifico"}}>E-Mail:</p>
			<h2 style={{margin:'1rem 0rem'}}>computingwithsurren@gmail.com</h2>
			<Link to="/" className="btn btn-pink btn-block">Home</Link>
		</div>
		</Fragment>
    );
}

export default ContactUs