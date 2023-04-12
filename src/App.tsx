import Layout from './layout'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import { QueryClient, QueryClientProvider } from 'react-query'
import BedWarsPage from './pages/bedwars'
import SkywarsPage from './pages/skywars'

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
			},
			{
				path: '/skywars',
				element: <SkywarsPage />
			}
		]
	}
]

function App() {
	const router = createBrowserRouter(routes)
	const queryClient = new QueryClient()
	return (
		<main className="h-screen">
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</main>
	)
}

export default App
