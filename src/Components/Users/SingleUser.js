import React,{useEffect} from 'react';
import {useParams,Link} from 'react-router-dom'


const SingleUser=(props)=>{
    const {login}=useParams(props);
    useEffect(()=>{
        props.getSingleUser(login);
        //eslint-disable-next-line;
    },[])
    
    return(
       
        <React.Fragment>
                     <div className='singleuser-container'>
                   <img className="singeluser-image" src={ props.user.avatar_url} alt="Image" />
                     <div className="sinuser-info-container">
                         <h2 className="singleuser-lead">Name</h2>
                         <h3 className="dynamic-lead" >{props.user.name}</h3>
                         <h2 className="singleuser-lead">Blog</h2>
                         <h3  className="dynamic-lead"   >{props.user.blog}</h3>
                        <h2 className="singleuser-lead">Follwing</h2>
                        <h3  className="dynamic-lead"   >{props.user.following}</h3>
                        <h2 className="singleuser-lead">followers</h2>
                        <h3  className="dynamic-lead"   >{props.user.followers}</h3>
                        <Link to='/' className="btn btn-dark btn-block">Home</Link>
                    </div>
              
                    </div>
                
                </React.Fragment>
    )
}


export default SingleUser;