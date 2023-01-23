import { useState } from 'react';
import { Button, Input, Spacer, Tooltip } from '@geist-ui/react';
import { Search as SearchIcon } from '@geist-ui/icons';

const ButtonWithTooltip = ({ tooltipText, icon, clickHandler }) => {
	return (
		<Tooltip
			text={tooltipText}
			scale={0.5}
			type={'dark'}
			leaveDelay={0}
		>
			<Button
				type='abort'
				icon={icon}
				auto
				px={0.6}
				onClick={clickHandler}
			/>
		</Tooltip>
	);
};

const Search = () => {
	const [value, setValue] = useState('');
	const changeHandler = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<Spacer />
			<Input
				clearable
				placeholder='Поиск'
				iconClickable
				mx='20px'
				iconRight={<SearchIcon onClick={() => console.log(true)} />}
				value={value}
				onChange={changeHandler}
			/>
		</>
	);
};

export { ButtonWithTooltip, Search };
