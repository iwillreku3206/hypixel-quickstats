import Layout from './layout'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import { QueryClient, QueryClientProvider } from 'react-query'
import BedWarsPage from './pages/bedwars'

export const routes: RouteObject[] = [
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				index: true,
				element: <HomePage />
			},
			{
				path: '/bedwars',
				element: <BedWarsPage />
			}
		]
	}
]

function App() {
	const router = createBrowserRouter(routes)
	const queryClient = new QueryClient()
	return (
		<main>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</main>
	)
}

export default App
