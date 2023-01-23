import React from 'react';
import styled, { css } from 'styled-components';

import Item from 'shared/ui/blocks/MenuDropdown/ui/Item';

const StyledList = styled.div`
	position: absolute;
	top: ${({ top }) => (top ? `calc(100% + ${top})` : 'calc(100% + 10px)')};
	display: none;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 5px;
	background-color: #fff;
	box-shadow: 0 8px 30px rgb(0 0 0 / 12%);

	&:before {
		position: absolute;
		content: '';
		top: 0;
		left: 50%;
		transform: translate(-50%, -5px) rotate(45deg);
		background-color: inherit;
		width: 10px;
		height: 10px;
	}

	& button:first-child {
		border-radius: 5px 0 0 5px;
	}
	& button:last-child {
		border-radius: 0 5px 5px 0;
	}

	${({ isActive }) =>
		isActive &&
		css`
			& {
				display: flex;
			}
		`}
`;

const List = ({ isActive, items, closeHandler }) => {
	const clickHandler = (onClick) => {
		onClick();
		closeHandler();
	};
	return (
		<StyledList isActive={isActive}>
			{items.map((el, i) => (
				<Item
					key={i}
					icon={el.icon}
					current={el.active}
					onClick={() => clickHandler(el.clickHandler)}
				/>
			))}
		</StyledList>
	);
};

export default List;
