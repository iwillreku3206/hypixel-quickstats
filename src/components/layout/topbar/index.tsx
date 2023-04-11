import TopBarButton from './button'
import BedwarsActive from '../../../assets/icons/games/bedwars_selected.png'
import BedwarsInactive from '../../../assets/icons/games/bedwars_inactive.png'

export default function TopBar() {
	return (
		<div className="flex flex-row sticky w-screen bg-neutral-900">
			<TopBarButton key="bw" text="Bed Wars" icon={BedwarsActive} iconInactive={BedwarsInactive} path="/bedwars" />
		</div>
	)
}
