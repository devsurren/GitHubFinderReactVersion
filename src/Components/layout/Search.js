import React,{Component,Fragment} from 'react';

class Search extends Component {

 state={
 	searchtext:null,
 }

  onChange=(event)=>{
 	this.setState({[event.target.name]:event.target.value});
 }

 onSubmit=(event)=>{
 	console.log("submitbutton triggered");
	 event.preventDefault();
	 if(this.state.searchtext){
		this.props.searchtext(this.state.searchtext);
	 }else{
		 alert("Please Enter Something");
		 console.log("alert from Search.js")
	 }
 }

 test=(e)=>{
 	e.preventDefault();
 	console.log("test")
 }


  render(){
  	return(
  		<Fragment>
  			<form className="search-form" onSubmit={this.onSubmit}>
  				<input type="text" name="searchtext"
  				placeholder="Please Enter Name..." onChange={this.onChange} value={this.state.searchtext}/>
  				<input className="btn btn-dark btn-block" type="submit" 
  				 value="Search"/>
  			</form>

  		</Fragment>
  		)
  }
}

export default Search;