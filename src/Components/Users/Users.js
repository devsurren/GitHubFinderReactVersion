import React from 'react';
import UserItem from './UserItem';


const Users=(props)=>{
    return(
        <>
            {
                props.users.map((eachusers)=>{
                   return <UserItem key={eachusers.id} 
                   login={eachusers.login} 
                   avatar={eachusers.avatar_url} 
                   url={eachusers.html_url}/>
                })
            }
        </>
    )
}

export default Users;