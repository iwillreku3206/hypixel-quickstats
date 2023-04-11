import { useState } from 'react'
import PlayerCard from '../components/bedwars/playerCard'
import PLayerInput from '../components/common/playerInput'

export default function BedWarsPage() {
	const [players, setPlayers] = useState<string[]>([])
	return (
		<div
			className="flex flex-col p-4 gap-8 sm:m-4 md:mx-32 xl:mx-64 2xl:mx-96"
			style={{ backgroundColor: '#00000050' }}>
			<PLayerInput addPlayer={add => setPlayers(prev => [...prev, add])} />
			<div className="overflow-y-scroll flex flex-col gap-4" style={{ maxHeight: '80vh' }}>
				{players.map((player, index) => {
					return <PlayerCard username={player} key={index} />
				})}
			</div>
		</div>
	)
}
