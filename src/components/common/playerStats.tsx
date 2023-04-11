export type Stats = Stat[]

export interface Stat {
	displayName: string
	value: string
}

export default function PlayerStats(props: { stats: Stats }) {
	return (
		<div className="flex sm:flex-row flex-col overflow-x-scroll w-full sm:gap-2">
			{props.stats.map((stat, index) => {
				return (
					<div className="flex sm:flex-col flex-row w-full" key={index}>
						<div className="font-extrabold text-left sm:text-center sm:min-w-max">{stat.displayName}</div>
						<div className="text-right sm:text-center ml-auto sm:ml-0">{stat.value}</div>
						{index !== props.stats.length - 1 && <hr className="sm:hidden" />}
					</div>
				)
			})}
		</div>
	)
}
