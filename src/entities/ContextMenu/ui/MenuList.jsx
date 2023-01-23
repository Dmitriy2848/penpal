import styled from 'styled-components';

const StyledList = styled.ul`
	& li:not(:first-child) {
		margin-top: 5px;
	}
`;

const MenuList = ({ children }) => {
	return <StyledList>{children}</StyledList>;
};

export default MenuList;
