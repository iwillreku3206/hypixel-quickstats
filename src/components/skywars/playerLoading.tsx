import { PacmanLoader } from 'react-spinners'

export default function PlayerCardLoading() {
	return (
		<div className="w-full h-full grid place-items-center">
			<PacmanLoader color="#fff" />
		</div>
	)
}
