import { Outlet } from 'react-router-dom'
import TopBar from './components/layout/topbar'
import BedwarsBackground from '../src/assets/backgrounds/bedwars.jpg'

export default function Layout() {
	return (
		<div
			className="flex flex-col text-white h-full bg-center"
			style={{
				backgroundImage: `url(${BedwarsBackground})`,
				backgroundColor: '#201a20e0',
				backgroundBlendMode: 'multiply'
			}}>
			<TopBar />
			<Outlet />
			<footer className="p-4 mt-auto sm:mx-4 md:mx-32 xl:mx-64 2xl:mx-96 sticky bottom-0 justify-end">
				DISCLAIMER: This website is not affiliated with Hypixel or Mojang. All rights reserved to their respective
				owners.
			</footer>
		</div>
	)
}
