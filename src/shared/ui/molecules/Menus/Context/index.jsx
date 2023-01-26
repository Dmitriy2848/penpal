import { forwardRef } from 'react';
import styled from 'styled-components';

import useContextMenu from 'shared/ui/molecules/Menus/Context/lib.js';
import Button from 'shared/ui/atoms/Button/index.jsx';

const StyledContainer = styled.div`
	position: fixed;
	top: ${({ y }) => `${y}px` || '0'};
	left: ${({ x }) => `${x}px` || '0'};
	display: flex;
	flex-direction: column;
	padding: 5px;

	//box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
	border: 1px solid #bdbdbd;
	background-color: #eaeaea;
	border-radius: 5px;
	z-index: 99;
`;

const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: #bdbdbd;
`;

const StyledItem = styled.div`
	width: 100%;
	cursor: pointer;
	border-radius: 5px;

	:hover {
		background-color: #e0e0e0;
	}
`;
const Item = ({ text, onClick, icon }) => {
	return (
		<StyledItem onClick={onClick}>
			<Button
				text={text}
				icon={icon}
			/>
		</StyledItem>
	);
};

const Container = forwardRef(({ children, x, y }, ref) => {
	return (
		<StyledContainer
			ref={ref}
			x={x}
			y={y}
		>
			{children}
		</StyledContainer>
	);
});

const Context = {
	Container,
	Item,
	Divider
};

export { useContextMenu };
export default Context;
