//React Components
import React,{ Component,Fragment } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

//Layout Components
import Navbar from './Components/layout/Navbar';
import Search from './Components/layout/Search';
import About from './Components/layout/About';
import NotFound from './Components/layout/NotFound';

//User Components
import Users from './Components/Users/Users';
import SingleUser from './Components/Users/SingleUser'

//Npm Package
import axios from 'axios';

//Debug
//import Test from './Components/Test/test';


class App extends Component{

  state={
    allusers:[],
    user:{},
    searchtext:"",
    loading:false,
  }

 async componentDidMount(){
    const response = await axios.get("https://api.github.com/users");
    this.setState({allusers:response.data,loading:false});
  }

  searchtext=async(text)=> {
    this.setState({ searchtext:text });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id="924e1dea7b3d24931d7f"&client_secret=21ecfe3ca0913c8b468c1cd5cf85efa66c87e50b`);
    this.setState({ allusers:response.data.items,loading:false })

  }

  getSingleUser=async(user)=>{
    const res = await axios.get(`https://api.github.com/users/${user}?client_id="924e1dea7b3d24931d7f"&client_secret=21ecfe3ca0913c8b468c1cd5cf85efa66c87e50b`)
      if(res) console.log("Response Received");
      this.setState({user:res.data,loading:false})
      console.log(this.state.user);
      console.log(this.state.allusers.length);
  }

  render(){
    return(
  <BrowserRouter>
       <Switch>
        <Route exact path="/"> 
         
         <Fragment>
          <Navbar title="GithubFinder" />
            <Search searchtext={this.searchtext} />
        <div className="container">
              <div className="users-showcase">
          <Users users={this.state.allusers} />
        </div>
        </div> 
        </Fragment>

         </Route>

        <Route exact path="/user/:login" >
          <SingleUser getSingleUser={this.getSingleUser} user={this.state.user} />
        </Route>
        
         <Route exact path="/about"><About/></Route> 
        
         <Route path="*"> <NotFound /> </Route>
          
      </Switch> 
    
  </BrowserRouter>
    )
  }
}

export default App;

