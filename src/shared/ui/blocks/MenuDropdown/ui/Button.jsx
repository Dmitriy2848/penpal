import styled, { css } from 'styled-components';

const Button = styled.button`
	display: flex;
	align-items: center;
	height: 36px;
	padding: 10px;
	outline: none;
	background-color: #fff;
	border: none;
	cursor: pointer;
	line-height: 100%;
	color: #0d0d0d;
	&:active svg {
		transform: scale(0.95);
	}
	svg {
		fill: #0d0d0d;
		height: 16px;
		width: 16px;
	}
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

export default Button;
