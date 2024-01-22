import React from 'react'
import classes from './Admin.module.scss'
import Phone from '@/assets/phone.svg'
const Admin = () => {

	return (
		<div className={classes.admin}>
			<h2>Admin!!22</h2>
			<Phone width={40} height={40} color={'red'} />
		</div>
	)
}

export default Admin
