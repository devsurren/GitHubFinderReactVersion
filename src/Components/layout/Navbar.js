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
            <Link to="/about" className="about-link">About</Link>
            </nav>
            </Fragment>
        )
    }
}

export default Navbar;
