import { Outlet } from 'react-router-dom'
import TopBar from './components/layout/topbar'
import BedwarsBackground from '../src/assets/backgrounds/bedwars.jpg'

export default function Layout() {
	return (
		<div
			className="text-white min-h-screen bg-center"
			style={{
				backgroundImage: `url(${BedwarsBackground})`,
				backgroundColor: '#201a20e0',
				backgroundBlendMode: 'multiply'
			}}>
			<TopBar />
			<Outlet />
		</div>
	)
}
