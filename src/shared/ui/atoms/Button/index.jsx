import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	height: 32px;

	position: relative;
	display: flex;

	align-items: center;

	color: ${({ color }) => color || '#000'};
	background-color: ${({ bg }) => bg || 'transparent'};
	outline: none;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	overflow: hidden;

	:active svg {
		transform: scale(0.9);
	}

	${({ icon }) =>
		icon &&
		css`
			min-width: 32px;

			svg {
				width: 32px;
				height: 100%;
				padding: 8px;

				position: absolute;
				top: 0;
				left: 0;

				fill: #0d0d0d;
			}
			span {
				margin: 0 8px 0 2rem;
			}
		`}

	${({ primary }) =>
		primary &&
		css`
			color: #fff;
			background-color: #0d0d0d;

			svg {
				fill: #eaeaea;
			}
		`}
	${({ surrounded }) =>
		surrounded &&
		css`
			border-width: 1px;
			border-style: solid;
			border-color: #eaeaea;
			transition: 0.15s;

			:hover {
				border-color: #0d0d0d;
			}
		`}
`;

const WrapperText = styled.span`
	margin: 0 8px;
`;

const Button = ({ text, onClick, icon, ...props }) => {
	return (
		<StyledButton
			onClick={onClick}
			icon={icon}
			{...props}
		>
			{icon}
			{text && <WrapperText>{text}</WrapperText>}
		</StyledButton>
	);
};

export default Button;
