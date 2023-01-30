import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: calc(100vh - 40px);
`;

const TreeWrapper = styled.div`
	height: 100%;
	border-right: 1px solid #f5f5f5;
	padding: 10px;
`;

export { Container, TreeWrapper };
