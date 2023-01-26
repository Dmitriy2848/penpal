import styled, { css } from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
	display: inline-block;

	position: relative;
`;

const StyledTooltip = styled.div`
	width: max-content;
	max-width: 500px;

	position: absolute;

	padding: 8px;
	background-color: #fff;
	box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
	border-radius: 5px;

	font-size: 14px;

	z-index: 999;

	${({ position }) => {
		switch (position) {
			case 'top-start':
				return css`
					bottom: 100%;
					left: 0;
				`;
			case 'top-end':
				return css`
					bottom: 100%;
					right: 0;
				`;
			case 'left':
				return css`
					top: 50%;
					right: 100%;
					transform: translateY(-50%);
				`;
			case 'left-start':
				return css`
					top: 0;
					right: 100%;
				`;
			case 'left-end':
				return css`
					bottom: 0;
					right: 100%;
				`;
			case 'right':
				return css`
					top: 50%;
					left: 100%;
					transform: translateY(-50%);
				`;
			case 'right-start':
				return css`
					top: 0;
					left: 100%;
				`;
			case 'right-end':
				return css`
					bottom: 0;
					left: 100%;
				`;
			case 'bottom':
				return css`
					top: 100%;
					left: 50%;
					transform: translateX(-50%);
				`;
			case 'bottom-start':
				return css`
					top: 100%;
					left: 0;
				`;
			case 'bottom-end':
				return css`
					top: 100%;
					right: 0;
				`;
			default:
				return css`
					bottom: 100%;
					left: 50%;
					transform: translateX(-50%);
				`;
		}
	}}
`;

const Tooltip = ({ children, text, delay = 1000, position = 'top' }) => {
	const [isOpen, setIsOpen] = useState(false);

	let timerId = null;
	let interval = 0;

	const mouseEnterHandler = () => {
		interval = Date.now();
		timerId = setTimeout(() => setIsOpen(true), delay);
	};
	const mouseLeaveHandler = () => {
		interval = Date.now() - interval;
		if (interval < delay) {
			clearTimeout(timerId);
		}
		setIsOpen(false);
	};
	return (
		<Wrapper
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			{children}
			{isOpen && <StyledTooltip position={position}>{text}</StyledTooltip>}
		</Wrapper>
	);
};

export default Tooltip;
