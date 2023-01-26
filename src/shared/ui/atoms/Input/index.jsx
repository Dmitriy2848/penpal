import { useRef, useState } from 'react';
import styled from 'styled-components';

import useOnClickOutside from 'shared/hooks/useOnClickOutside.js';

const Wrapper = styled.div`
	min-height: 32px;
	width: 200px;
	margin: ${({ m }) => m || ''};
	padding: ${({ p }) => p || ''};

	position: relative;
	display: flex;

	border-width: 1px;
	border-style: solid;
	border-color: ${({ focus }) => (focus ? '#0d0d0d' : '#eaeaea')};
	border-radius: 5px;

	overflow: hidden;
`;

const StyledInput = styled.input.attrs({ type: 'text' })`
	/* icon ? w - (mx + svg) - border : w - mx - border */
	width: ${({ icon }) =>
		icon ? 'calc(200px - 3rem - 2px)' : 'calc(200px - 1rem - 2px)'};
	margin: 0.2rem 0.5rem;

	background-color: transparent;
	outline: none;
	border: none;
`;

const WrapperButton = styled.button`
	width: 32px;
	height: 100%;
	padding: 8px;

	position: absolute;
	top: 0;
	right: 0;

	display: flex;
	align-items: center;

	background-color: transparent;
	cursor: pointer;
	outline: none;
	border: none;

	svg {
		width: 100%;
		height: 100%;
	}

	:active svg {
		transform: scale(0.9);
	}
`;

const Input = ({ icon, onChange, onClick, placeholder, value, ...props }) => {
	const ref = useRef();
	const [focus, setFocus] = useState(false);
	useOnClickOutside(ref, () => setFocus(false));

	return (
		<Wrapper
			focus={focus}
			{...props}
		>
			<StyledInput
				ref={ref}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onClick={() => setFocus(true)}
				icon={icon}
			/>
			{icon && <WrapperButton onClick={onClick}>{icon}</WrapperButton>}
		</Wrapper>
	);
};

export default Input;
