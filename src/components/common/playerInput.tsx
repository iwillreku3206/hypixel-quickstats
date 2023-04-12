import { useState } from 'react'

interface Props {
	addPlayer: (username: string) => void
	resetList?: () => void
}

export default function PlayerInput(props: Props) {
	const { addPlayer, resetList } = props

	const [text, setText] = useState('')

	const processUsernameList = (text: string) => {
		const valid = /([A-z0-9_]){3,16}/
		return text
			.replaceAll(/([ ])/g, '')
			.split(',')
			.filter(name => valid.test(name))
			.map(name => name.trim())
	}

	const addUsers = (usernames: string[]) => {
		usernames.forEach(name => {
			addPlayer(name)
		})
	}

	const handleAdd = () => {
		addUsers(processUsernameList(handleReset()))
	}

	const handleReset = (): string => {
		const _text = text
		setText('')
		return _text
	}

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		switch (e.key) {
			case 'Enter':
				handleAdd()
				break
			case 'Escape':
				handleReset()
				resetList && resetList()
				break
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value)
	}

	return (
		<div>
			<input
				className="font-mc color-white bg-black w-full text-white border-2 border-neutral-400 outline-none p-2"
				type="text"
				value={text}
				onKeyDown={handleKeyPress}
				onChange={handleChange}
				placeholder="Enter a username..."
			/>
		</div>
	)
}
