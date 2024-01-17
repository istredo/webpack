import React from 'react'


import classes from './Main.module.scss'

const Main = () => {
	const [count, setCount] = React.useState(0)
	const increment = () => {
		setCount(prev => prev + 1)
	}
	const decrement = () => {
		setCount(prev => prev - 1)
	}
	return (
		<main className={classes.main}>

			<button className={classes.button} onClick={increment}>+</button>
			<div className={classes.count}>{count}</div>
			<button className={classes.button} onClick={decrement}>-</button>

		</main>
	)
}

export default Main
