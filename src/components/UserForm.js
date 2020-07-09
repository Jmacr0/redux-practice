import React, { useState } from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../actions/userActions';

export const UserForm = (props) => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
	});
	const handleChange = (e) => {
		const value = e.target.value;
		const prop = e.target.id;
		setUser({
			...user,
			[prop]: value,
		})
	}
	const onSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			firstName: user.firstName,
			lastName: user.lastName,
		}
		createUser(newUser);
	}
	return (
		<>
			<label htmlFor="firstName">First Name</label>
			<input type="text" id="firstName" onChange={handleChange} />
			<label htmlFor="lastName">Last Name</label>
			<input type="text" id="lastName" onChange={handleChange} />
			<button type="submit" onSubmit={onSubmit}>Add User</button>
		</>
	)
}



const mapStateToProps = state => ({
	createUser: PropTypes.func.isRequired,
})

export default connect(mapStateToProps, { createUser })(UserForm);
