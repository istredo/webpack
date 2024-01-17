import { Link } from 'react-router-dom'


import classes from './Header.module.scss'

const Header = () => {
	return (
		<header className={classes.header}>
			<Link to={'/'} className={classes.link}>go home</Link>
			<Link to={'/personal'} className={classes.link}>Personal</Link>
			<Link to={'/admin'} className={classes.link}>Admin</Link>
		</header>
	)
}

export default Header
