import styled, { css } from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	border-width: 1px;
	border-color: #eaeaea;
	border-style: solid;
	height: 100%;

	${({ first }) =>
		first &&
		css`
			&,
			& div:first-child button {
				border-radius: 5px 0 0 5px;
			}
		`}
	${({ last }) =>
		last &&
		css`
			&,
			& div:last-child button {
				border-radius: 0 5px 5px 0;
			}
		`};
`;

const ButtonsGroup = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>;
};

export default ButtonsGroup;
