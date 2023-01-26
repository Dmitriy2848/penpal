import styled from 'styled-components';

import Header from 'widgets/Sidebar/ui';
import FileTree from 'features/FileTree';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	min-width: 250px;
	height: 100vh;
`;

const Sidebar = () => {
	return (
		<Container>
			<Header />
			<FileTree />
		</Container>
	);
};

export default Sidebar;
