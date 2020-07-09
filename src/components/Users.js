import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers } from '../actions/userActions';
import store from '../store';

export const Users = (props) => {
	useEffect(() => {
		fetchUsers();
		console.log(store.getState())
	}, []);

	// const userItems = props.users.map(user => (
	// 	<div>
	// 		<h3>{user.name}</h3>
	// 	</div>
	// ));

	return (
		<div>
			{/* {userItems} */}
		</div>
	)
};

Users.propTypes = {
	fetchUsers: PropTypes.func.isRequired,
	users: PropTypes.array.isRequired,
	newUser: PropTypes.object,
}

const mapStateToProps = state => ({
	users: state.users.items,
	newUser: state.users.item,
});

export default connect(mapStateToProps, { fetchUsers })(Users);
