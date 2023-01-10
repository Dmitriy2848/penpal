import React, { useState } from 'react';
import { Button, Grid, Tooltip } from '@geist-ui/react';
import {
	ChevronsUp,
	ChevronsDown,
	FolderPlus,
	FilePlus
} from '@geist-ui/icons';

const Header = () => {
	const [isExpanded, setIsExpand] = useState(false);
	const buttonExpand = () => {
		setIsExpand((prevState) => !prevState);
	};

	return (
		<Grid>
			<Tooltip
				text='Создать папку'
				scale={0.5}
				type={'dark'}
				leaveDelay={0}
			>
				<Button
					type='abort'
					icon={<FolderPlus />}
					auto
					px={0.6}
				/>
			</Tooltip>

			<Tooltip
				text='Создать файл'
				scale={0.5}
				type={'dark'}
				leaveDelay={0}
			>
				<Button
					type='abort'
					icon={<FilePlus />}
					auto
					px={0.6}
					mx='5px'
				/>
			</Tooltip>
			<Tooltip
				text={isExpanded ? 'Развернуть' : 'Свернуть'}
				scale={0.5}
				type={'dark'}
				leaveDelay={0}
			>
				<Button
					type='abort'
					icon={isExpanded ? <ChevronsDown /> : <ChevronsUp />}
					auto
					px={0.6}
					onClick={buttonExpand}
				/>
			</Tooltip>
		</Grid>
	);
};

export default Header;
