import { FETCH_USERS, NEW_USER } from './types';

export const fetchUsers = () => dispatch => {
	console.log('fetching')
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users =>
			dispatch({
				type: FETCH_USERS,
				payload: users,
			})
		);
};

export const createUser = userData => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/users', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(userData)
	})
		.then(res => res.json())
		.then(user =>
			dispatch({
				type: NEW_USER,
				payload: user
			})
		);
}