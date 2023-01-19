import React from 'react';
import styled, { css } from 'styled-components';

import Button from 'shared/components/blocks/MenuDropdown/ui/Button';

const StyledItem = styled(Button)`
	border: none;
	z-index: 2;
	${({ current }) =>
		current &&
		css`
			& {
				background-color: #0d0d0d;
				svg {
					fill: #fff;
				}
			}
		`}
`;

const Item = ({ icon, onClick, ...props }) => {
	return (
		<StyledItem
			onClick={() => onClick()}
			{...props}
		>
			{icon}
		</StyledItem>
	);
};

export default Item;
