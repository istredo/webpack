import { createRoot } from 'react-dom/client'
import App from './components/App';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";


const root = document.getElementById('root');

if (!root) {
	throw new Error('Root not found')
}
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/personal",
				element: <h2>Личное</h2>,
			},
			{
				path: "/admin",
				element: <h2>Админ</h2>,
			},
		]
	},
]);
const container = createRoot(root)

container.render(
	<RouterProvider router={router} />
)