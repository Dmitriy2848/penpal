import styled from 'styled-components';
import { ReactComponent as FileIcon } from 'shared/assets/icons/file.svg';

const Wrapper = styled.div`
	height: 26px;
	width: fit-content;
	cursor: pointer;
	display: flex;
	padding: 0 5px;

	align-items: center;

	:hover {
		background-color: #eaeaea;
	}
`;
const Name = styled.span`
	margin: 0 0 0 5px;
	font-size: 14px;
	line-height: 26px;
`;

const IconWrapper = styled.span`
	display: inline-block;
	width: 20px;
	height: 20px;

	svg {
		width: 100%;
		height: 100%;
		fill: #0d0d0d;
	}
`;

// todo fix useless rerender
const File = ({ name, onClick, onContextMenu }) => {
	return (
		<Wrapper
			onClick={onClick}
			onContextMenu={onContextMenu}
		>
			<IconWrapper>
				<FileIcon />
			</IconWrapper>
			<Name>{name}</Name>
		</Wrapper>
	);
};

export default File;
