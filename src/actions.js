import {CHANGE_SEARCH_FIELD , REQUEST_ROBOTS_PINDING,
 REQUEST_ROBOTS_SUCCESS , 
 REQUEST_ROBOTS_FAILED} from './constants.js';


export const setSearchfield=(text)=>({
	type: CHANGE_SEARCH_FIELD ,
	payload: text
})

export const requestRobots =() => (dispatch) => {
	dispatch({type:REQUEST_ROBOTS_PINDING});
	fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
	.then(data=>dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
	.catch(error=> dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}