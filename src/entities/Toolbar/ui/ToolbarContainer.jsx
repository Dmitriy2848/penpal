import styled from 'styled-components';

const Container = styled.div`
	height: 36px;
	display: flex;
	flex-wrap: wrap;
	border-radius: 5px;
	margin: 16px auto;
	& > div {
		& button {
			border-width: 1px;
			border-style: solid;
			border-color: #eaeaea;
			border-left: none;
			border-right: none;
		}

		&:first-child {
			border-left: 1px solid #eaeaea;
		}
		&:last-child {
			border-right: 1px solid #eaeaea;
		}
	}
`;

export default Container;
