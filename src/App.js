import React from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import { Users } from './components/Users';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Let's Learn Redux
        </p>
				<UserForm />
				<hr />
				<Users />
			</header>
		</div>
	);
}

export default App;
