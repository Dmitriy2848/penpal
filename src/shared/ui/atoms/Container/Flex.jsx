import styled from 'styled-components';

export const Flex = styled.div`
	width: ${({ w }) => w || ''};
	max-width: ${({ maxW }) => maxW || ''};
	height: ${({ h }) => h || ''};
	position: ${({ pos }) => pos || ''};

	margin: ${({ m }) => m || ''};
	padding: ${({ p }) => p || ''};
	overflow: ${({ overflow }) => overflow || ''};

	background-color: ${({ bg }) => bg || ''};
	border-radius: ${({ radius }) => radius || ''};
	box-shadow: ${({ shadow }) => shadow || ''};

	display: ${({ display }) => display || 'flex'};
	flex-wrap: ${({ wrap }) => wrap || ''};
	flex-direction: ${({ direction }) => direction || ''};
	align-items: ${({ items }) => items || ''};
	justify-content: ${({ justify }) => justify || ''};

	z-index: ${({ z }) => z || ' '};
`;

export default Flex;
