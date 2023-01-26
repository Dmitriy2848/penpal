import styled from 'styled-components';

import Folder from 'shared/ui/molecules/Tree/ui/Folder.jsx';
import File from 'shared/ui/molecules/Tree/ui/File.jsx';

const Container = styled.div`
	width: 100%;
	height: 100%;

	user-select: none;

	overflow: auto;

	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}
	::-webkit-scrollbar-thumb {
		background-color: #eaeaea;
	}
`;

const Tree = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Tree;
export { File, Folder };
