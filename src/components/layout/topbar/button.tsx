import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface Props {
	text: string
	icon: string
	iconInactive: string
	path: string
}

export default function TopBarButton(props: Props) {
	const { text, icon, iconInactive, path } = props
	const [active, setActive] = useState(false)

	const location = useLocation()

	useEffect(() => {
		setActive(location.pathname === path)
	}, [location.pathname])

	return (
		<Link className="flex flex-row bg-neutral-800 text-white p-2 gap-2 items-center" to={path}>
			<img src={active ? icon : iconInactive} className="w-6 h-6" />
			{text}
		</Link>
	)
}
