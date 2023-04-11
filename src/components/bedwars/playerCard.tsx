import MinecraftText from 'minecraft-formatted-text-react'
import { useQuery } from 'react-query'
import { operations } from '../../types/slothpixel'
import { SLOTHPIXEL_BASE_URI } from '../../util/constants'
import { getPlayerAvatar } from '../../util/stringTransformers'
import PlayerStats from '../common/playerStats'
import PlayerCardLoading from './playerLoading'

interface Props {
	username: string
}

type PlayerStatsResponse = operations['getPlayer']['responses'][200]['content']['application/json']
type GuildResponse = operations['getGuildFromPlayer']['responses'][200]['content']['application/json']

export default function PlayerCard(props: Props) {
	const { username } = props

	const {
		isLoading: playerDataIsLoading,
		data: playerData,
		error: playerDataError
	} = useQuery<PlayerStatsResponse>({
		queryKey: [`${username}_STATS`],
		queryFn: () => fetch(SLOTHPIXEL_BASE_URI + `/players/${username}`).then(res => res.json())
	})

	const {
		isLoading: guildDataIsLoading,
		data: guildData,
		error: guildDataError
	} = useQuery<GuildResponse>({
		queryKey: [`${username}_GUILD`],
		queryFn: () => fetch(SLOTHPIXEL_BASE_URI + `/guilds/${username}`).then(res => res.json())
	})

	return (
		<div className="flex flex-col bg-neutral-800 p-4 rounded-md gap-4">
			{(playerDataIsLoading || guildDataIsLoading) && <PlayerCardLoading />}
			{!(playerDataIsLoading || guildDataIsLoading) && (
				<>
					<div className="flex flex-row gap-2">
						<img className="w-12 h-12 rounded-sm" src={getPlayerAvatar(username)} />
						<span className="font-mc text-xl self-baseline">
							<MinecraftText prefix="&">
								{[playerData?.rank_formatted || '', playerData?.username || '', guildData?.tag_formatted || ''].join(
									' '
								)}
							</MinecraftText>
						</span>
					</div>
					<PlayerStats
						stats={[
							{
								displayName: 'Stars',
								value: String(playerData?.stats?.BedWars?.level || 0)
							},
							{
								displayName: 'Player Index',
								value: (
									(playerData?.stats?.BedWars?.level || 1) *
									(playerData?.stats?.BedWars?.final_k_d || 1) ** 2
								).toFixed(3)
							},
							{
								displayName: 'Final Kills',
								value: String(playerData?.stats?.BedWars?.final_kills || 0)
							},
							{
								displayName: 'Final Deaths',
								value: String(playerData?.stats?.BedWars?.final_deaths || 0)
							},
							{
								displayName: 'FKDR',
								value: String(playerData?.stats?.BedWars?.final_k_d || 0)
							},
							{
								displayName: 'Broken Beds',
								value: String(playerData?.stats?.BedWars?.beds_broken || 0)
							},
							{
								displayName: 'Lost Beds',
								value: String(playerData?.stats?.BedWars?.beds_lost || 0)
							},
							{
								displayName: 'BBLR',
								value: String(playerData?.stats?.BedWars?.bed_ratio || 0)
							},
							{
								displayName: 'Winrate',
								value: String(playerData?.stats?.BedWars?.w_l || 0)
							},
							{
								displayName: 'Games Played',
								value: String(playerData?.stats?.BedWars?.games_played || 0)
							}
						]}
					/>
				</>
			)}
		</div>
	)
}
