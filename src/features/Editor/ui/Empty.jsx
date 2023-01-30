import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #e0e0e0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ContentWrapper = styled.div`
	user-select: none;
`;

const Text = styled.p`
	font-size: 14px;
	color: #9e9e9e;
`;

const Empty = () => {
	return (
		<Container>
			<ContentWrapper>
				<Text>Ни один файл не открыт</Text>
			</ContentWrapper>
		</Container>
	);
};

export default Empty;
