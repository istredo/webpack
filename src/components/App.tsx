import React from 'react'
import classes from './App.module.scss'


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
			<button className={classes.button} onClick={increment}>+</button>
			<div className={classes.count}>{count}</div>
			<button className={classes.button} onClick={decrement}>-</button>
		</div>
	)
}

export default App
