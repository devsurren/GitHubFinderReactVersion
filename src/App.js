//React Components
import React,{ Component,Fragment } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

//Layout Components
import Navbar from './Components/layout/Navbar';
import Search from './Components/layout/Search';
import About from './Components/layout/About';

//User Components
import Users from './Components/Users/Users';

//Npm Package
import axios from 'axios';


class App extends Component{

  state={
    allusers:[],
    searchtext:"",
    loading:false,
  }

 // async componentDidMount(){
 //    const response = await axios.get("https://api.github.com/users");
 //   // console.log(response.data);
 //    this.setState({allusers:response.data,loading:false});
 //  }

  searchtext=async(text)=> {
    this.setState({ searchtext:text });
    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id="924e1dea7b3d24931d7f"&client_secret=21ecfe3ca0913c8b468c1cd5cf85efa66c87e50b`);
    this.setState({ allusers:response.data.items,loading:false })
    console.log(this.state.allusers.length);
  }

  render(){
    return(
  <BrowserRouter>
      <Fragment>

      <Navbar title="GithubFinder" />
            <Search searchtext={this.searchtext}/>
    

        <div className="container">
              <div className="users-showcase">
          <Users users={this.state.allusers} />
        </div>
        </div> 

       <Switch>
         <Route path="/about"><About/></Route> 
          </Switch> 


      </Fragment>
  </BrowserRouter>
    )
  }
}

export default App;

