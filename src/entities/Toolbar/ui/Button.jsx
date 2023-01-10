import styled, { css } from 'styled-components';
import { Keyboard, Popover } from '@geist-ui/react';

const StyledButton = styled.button`
	display: flex;
	align-items: center;

	height: 100%;

	padding: 10px;

	border-width: 1px;
	border-style: solid;
	border-color: #eaeaea;
	border-left: none;
	border-right: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;

	& svg {
		width: 1em;
		height: 1em;
	}
	&:active svg {
		transform: scale(0.95);
	}

	${({ isActive }) =>
		isActive &&
		css`
			& {
				background-color: #0d0d0d;
				border-color: #0d0d0d;
			}
			& svg {
				fill: #ffffff;
			}
		`}
`;
// todo подумай над ренеймом пропсов
const PopoverContent = ({ shortcut }) => {
	return (
		<Popover.Item
			scale={1 / 2}
			type='dark'
		>
			{shortcut.map((el, i) => (
				<Keyboard
					scale={1 / 2}
					key={i}
					mx='2px'
				>
					{el}
				</Keyboard>
			))}
		</Popover.Item>
	);
};

const Button = ({ icon, shortcut, isActive, onClick }) => {
	if (!shortcut) {
		return (
			<StyledButton
				isActive={isActive}
				onClick={onClick}
			>
				{icon}
			</StyledButton>
		);
	}

	return (
		<Popover
			scale={1 / 2}
			offset={8}
			py={0.3}
			type='dark'
			trigger='hover'
			enterDelay='1000'
			content={shortcut && <PopoverContent shortcut={shortcut} />}
		>
			<StyledButton
				isActive={isActive}
				onClick={onClick}
			>
				{icon}
			</StyledButton>
		</Popover>
	);
};

export default Button;
