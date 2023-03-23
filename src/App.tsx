import Layout from './layout'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />
	}
]

function App() {
	const router = createBrowserRouter(routes)
	return (
		<main>
			<Layout>
				<RouterProvider router={router} />
			</Layout>
		</main>
	)
}

export default App
