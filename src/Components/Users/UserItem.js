import React from 'react';
import { Link } from "react-router-dom";

const UserItem=(props)=> {
    return(
        <div className="user-container">
            <img className="avatar" src={props.avatar} alt="Users" />
            <p className="lead">{props.login}</p>
            <Link className="btn btn-dark"  to={`/user/${props.login}`}> More </Link>
        </div>
    )
}


export default UserItem;
