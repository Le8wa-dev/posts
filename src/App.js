import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Navbar } from './components/UI/Navbar/Navbar';
import { AppRouter } from './components/AppRouter';

import './styles/App.css'
import { AuthContext } from './context';

function App() {

	const [isAuth, setIsAuth] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		if(localStorage.getItem('auth')) {
			setIsAuth(true);
		}
		setIsLoading(false)
	}, [])

	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth,
			isLoading,
		}}>
			<BrowserRouter>

				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;

