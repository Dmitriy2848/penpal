import React from 'react';
import styled from 'styled-components';
import { Button } from '@geist-ui/react';

const Wrapper = styled.li`
	width: inherit;
	list-style-type: none;
`;

const Item = ({ text, icon, onClick }) => {
	return (
		<Wrapper>
			<Button
				icon={icon}
				scale={1 / 2}
				type='abort'
				font='12px'
				onClick={onClick}
			>
				{text}
			</Button>
		</Wrapper>
	);
};

export default Item;
