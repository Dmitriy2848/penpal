import styled from 'styled-components';

const StyledList = styled.ul`
	width: 100%;

	& li:not(:first-child) {
		margin-top: 5px;
	}
`;

const MenuList = ({ children }) => {
	return <StyledList>{children}</StyledList>;
};

export default MenuList;
