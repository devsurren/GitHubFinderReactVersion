import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component{
    static defaultProps={
        title:"GithubFinder",
    }


    render(){
        return(
            <Fragment>
            <nav>
            <h3 className="navbar-lead">{this.props.title}</h3>
            <ul className="nav-links">
            <li> 
                <Link to="/" className="about-link">Home</Link>
                </li>
                <li>
                <Link to="/about" className="about-link">About</Link>
                </li>
                <li> 
                <Link to="/contactus" className="about-link">ContactUs</Link>
                </li>
            </ul>
            </nav>
            </Fragment>
        )
    }
}

export default Navbar;
