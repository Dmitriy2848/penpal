import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as FolderIcon } from 'shared/assets/icons/folder.svg';
import { ReactComponent as FolderOpen } from 'shared/assets/icons/folder-open.svg';

const Wrapper = styled.div`
	width: fit-content;
`;
const Name = styled.span`
	font-size: 14px;
	margin: 0 0 0 5px;
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
const Header = styled.div`
	height: 26px;
	display: flex;
	width: fit-content;
	align-items: center;
	cursor: pointer;
	padding: 0 5px;

	:hover {
		background-color: #eaeaea;
	}
`;

const ChildrenContainer = styled.div`
	position: relative;
	height: 0;
	transition: 0.2s ease;
	overflow: hidden;

	& > div {
		margin-left: 10px;
	}

	${({ isOpen }) =>
		isOpen &&
		css`
			height: auto;
			transition: 0.2s ease;
		`}
`;

const Folder = ({
	children,
	onContextMenu,
	name,
	expand = false,
	nested = 0
}) => {
	const [isOpen, setIsOpen] = useState(expand);
	const ref = useRef();

	return (
		<>
			<Wrapper nested={nested}>
				<Header
					onContextMenu={onContextMenu}
					onClick={() => setIsOpen((prevState) => !prevState)}
				>
					<IconWrapper>{isOpen ? <FolderOpen /> : <FolderIcon />}</IconWrapper>
					<Name>{name}</Name>
				</Header>
				<ChildrenContainer
					ref={ref}
					isOpen={isOpen}
				>
					{children}
				</ChildrenContainer>
			</Wrapper>
		</>
	);
};

export default Folder;
