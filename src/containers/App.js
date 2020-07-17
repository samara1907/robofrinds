import React , {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import '../containers/App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';

class App extends Component {
	constructor(){
		super()
		this.state ={
			robots: [],
			searchfield: ''
		} 
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=> this.setState({robots: users}));

	}

	onsearchchange = (event) => {
		this.setState({searchfield: event.target.value})
		
		
	}
	render(){
		const filterrobota = this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.robots.length ===0){
			return <h1>Loading</h1>
		} else{
			return(
			<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchchange={this.onsearchchange} />
			<Scroll>
				<ErrorBoundry>
		 			<Cardlist robots={filterrobota} /> 
		 		</ErrorBoundry>
		 	</Scroll>
		 	</div>
		 );
		}

	}
	
}

export default App;