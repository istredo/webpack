import { createRoot } from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";


import App from './App';
import Admin from './pages/Admin';
import ErrorPage from './pages/Error';
import './styles/index.scss'

const root = document.getElementById('root');
const container = createRoot(root)
if (!root) {
	throw new Error('Root not found')
}
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/personal",
				element: <h2>Личное</h2>,
			},
			{
				path: "/admin",
				element: <Admin />,
			},

		]
	},

]);

container.render(
	<RouterProvider router={router} />
)