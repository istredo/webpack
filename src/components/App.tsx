import React from 'react'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import Admin from "@/pages/Admin"


const App = () => {
	const [count, setCount] = React.useState(0)
	const increment = () => {
		setCount(prev => prev + 1)
	}
	const decrement = () => {
		setCount(prev => prev - 1)
	}

	return (
		<div className={classes.App}>
			<header className={classes.header}>
				<Link to={'/personal'}>Personal</Link>
				<Link to={'/admin'}><Admin /></Link>
			</header>

			<main className={classes.main}>
				{/* <Outlet /> */}
				<button className={classes.button} onClick={increment}>+</button>
				<div className={classes.count}>{count}</div>
				<button className={classes.button} onClick={decrement}>-</button>

			</main>


		</div>

	)
}

export default App
