import React from 'react'
import classes from './Ws.module.scss'
import Header from '@/components/Header'


const WS: React.FC = () => {
	const [messages, setMessages] = React.useState([]);
	const [value, setValue] = React.useState('');
	const [username, setUsername] = React.useState('');
	const [connected, setConnected] = React.useState(false);
	const socket = React.useRef(null)

	// Сделать историю чата, токен \ авторизацию 


	function connect(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault()
		socket.current = new WebSocket('ws://localhost:5000')

		socket.current.onopen = () => {
			setConnected(true)
			const message = {
				event: 'connection',
				username,
				id: Date.now()
			}
			socket.current.send(JSON.stringify(message))
		}
		socket.current.onmessage = (event: { data: string }) => {
			const message = JSON.parse(event.data)
			setMessages(prev => [message, ...prev])
			console.log
		}
		socket.current.onclose = () => {
			console.log('Socket closed')
		}
		socket.current.onerror = () => {
			console.log('Socket error')
		}
	}

	const sendMessage = async (event: React.FormEvent) => {
		event.preventDefault()

		const message = {
			username,
			message: value,
			id: Date.now(),
			event: 'message',
			time: new Date().toString().slice(16, 24),
		}
		socket.current.send(JSON.stringify(message));
		setValue('')
	}



	if (!connected) {
		return (
			<>
				<Header />
				<div className={classes.ws}>
					<form onSubmit={(event) => connect(event)} className={classes.form}>
						<input
							className={classes.input}
							value={username}
							onChange={e => setUsername(e.target.value)}
							type="text"
							placeholder='input username'
						/>
						<button type='submit' className={classes.button}>Enter</button>
					</form>
				</div>
			</>
		)
	}

	return (
		<>
			<Header />
			<div className={classes.ws}>
				<div>
					<form onSubmit={(event) => sendMessage(event)} className={classes.form}>
						<input className={classes.input} value={value} onChange={e => setValue(e.target.value)} type="text" />
						<button className={classes.button} type='submit'>Enter</button>
					</form>
					<div className={classes.message__block}>
						{messages.map(mess =>
							<div key={mess.id}>
								{mess.event === 'connection'
									? <div className="connection__message">
										User {mess.username} connected !
									</div>
									: <div className={classes.message}>
										<span className={classes.username}>{mess.username}</span>:
										<span className={classes.msg}>{mess.message}</span>
										<span className={classes.date}>{mess.time}</span>
									</div>
								}
							</div>
						)}
					</div>
				</div>
			</div></>
	)
}

export default WS
