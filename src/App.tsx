import React from 'react'
import { Outlet } from 'react-router-dom'

import './styles/index.scss';
import Header from './components/Header'
import Main from './components/Main'


const App = () => {


	return (
		<div className="App" >
			< Header />
			<Outlet />
			<Main />
		</div >

	)
}

export default App
