import React , {Component} from 'react';
import {connect } from 'react-redux';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import '../containers/App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import {setSearchfield, requestRobots} from '../actions';

const mapStateToProps = state => {
	return { searchfield: state.searchRobots.searchfield,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {onsearchchange: (event) => dispatch(setSearchfield(event.target.value)) ,
			onRequestRobots: () => dispatch(requestRobots())
	}
}


class App extends Component {
	componentDidMount(){
		this.props.onRequestRobots()
	}

	render(){
		const {searchfield , onsearchchange, robots, isPending} = this.props;
		const filterrobota = robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return isPending ?
			 <h1>Loading</h1> :
			 (
			<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchchange={onsearchchange} />
			<Scroll>
				<ErrorBoundry>
		 			<Cardlist robots={filterrobota} /> 
		 		</ErrorBoundry>
		 	</Scroll>
		 	</div>
		 );
		}

	}
	

export default connect(mapStateToProps, mapDispatchToProps)(App);