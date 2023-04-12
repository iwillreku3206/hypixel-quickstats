import TopBarButton from './button'
import BedwarsActive from '../../../assets/icons/games/bedwars_selected.png'
import BedwarsInactive from '../../../assets/icons/games/bedwars_inactive.png'
import SkywarsActive from '../../../assets/icons/games/skywars_selected.png'
import SkywarsInactive from '../../../assets/icons/games/skywars_inactive.png'

export default function TopBar() {
	return (
		<div className="flex flex-row sticky w-screen bg-neutral-900">
			<TopBarButton key="bw" text="Bed Wars" icon={BedwarsActive} iconInactive={BedwarsInactive} path="/bedwars" />
			<TopBarButton key="bw" text="Sky Wars" icon={SkywarsActive} iconInactive={SkywarsInactive} path="/skywars" />
		</div>
	)
}
