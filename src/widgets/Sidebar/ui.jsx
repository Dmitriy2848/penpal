import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 40px;

	border-right: 1px solid #f5f5f5;
	border-bottom: 1px solid #f5f5f5;
`;

const Header = () => {
	return (
		<Container w='100%'>
			<span></span>
		</Container>
	);
};

export default Header;
