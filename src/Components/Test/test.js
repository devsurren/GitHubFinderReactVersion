// import React,{useEffect} from 'react';
// import {useParams} from 'react-router-dom';
// //import axios from 'axios';

// // const Test=()=>{

// // const getSingleUser=async(user)=>{
// // 		const res = await axios.get(`https://api.github.com/users/${user}?client_id="924e1dea7b3d24931d7f"&client_secret=21ecfe3ca0913c8b468c1cd5cf85efa66c87e50b`)
// // 		  if(res) console.log(res.data);
// // 		  console.log(res.data.login)
// // 		 // this.setState({user:res,loading:false})
// // 	  }

// // 	  getSingleUser("brad");
	  

// // 	return(
// // 		<>
// // 		<h1>Hey</h1>
// // 		</>
// // 	);

// // } 

// // 

// const Test=(props)=>{
// 	const { login  } = useParams();
// 	useEffect((props)=>{
// 		props.getSingleUser(login);
// 		console.log(props.user.bio)
// 	},[])
// 	return(
// 		<h1>{props.user.name}</h1>
// 	);

// }


// export default Test;