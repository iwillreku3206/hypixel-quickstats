import { useState } from 'react'
import PlayerCard from '../components/bedwars/playerCard'
import PlayerInput from '../components/common/playerInput'

export default function BedWarsPage() {
	const [players, setPlayers] = useState<string[]>([])
	const reset = () => setPlayers([])
	return (
		<div
			className="flex flex-col p-4 gap-8 sm:m-4 md:mx-32 xl:mx-64 2xl:mx-96"
			style={{ backgroundColor: '#00000050' }}>
			<h1 className="text-4xl font-bold">BedWars Stats</h1>
			<PlayerInput addPlayer={add => setPlayers(prev => [...prev, add])} resetList={reset} />
			<button className="w-full bg-neutral-800 font-mc p-2" onClick={reset}>
				Reset
			</button>
			<div className="overflow-y-scroll flex flex-col gap-4" style={{ height: '50vh' }}>
				{players.map((player, index) => {
					return <PlayerCard username={player} key={index} />
				})}
			</div>
		</div>
	)
}
