import styled from 'styled-components';
import Header from 'widgets/Content/ui.jsx';

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

const Content = ({ children }) => {
	return (
		<Container>
			<Header />
			{children}
		</Container>
	);
};

export default Content;
