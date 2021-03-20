import react,{Component} from 'react';


class User extends Component {

	async ComponentDidMount(){
		this.props.getSingleUser(this.props.match.params.login);
	}


	render(){
		return(
			<h1>{this.props.user.name}</h1>
			);
	}
}


export default User;