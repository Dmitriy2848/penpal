import Container from 'shared/ui/atoms/Container/index.jsx';
import styled, { css } from 'styled-components';

const BGroup = styled(Container.Flex)`
	height: 100%;
	align-items: center;

	button {
		border-radius: 0;
	}
`;

const ElementsContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	min-height: 35px;

	border-bottom: 1px solid #f5f5f5;
`;

const Separator = styled.span`
	width: 1px;
	height: 100%;
	background-color: #f5f5f5;
`;

export { ElementsContainer, BGroup, Separator };
