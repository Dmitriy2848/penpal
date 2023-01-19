import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: fixed;
	top: ${({ y }) => `${y}px` || '0'};
	left: ${({ x }) => `${x}px` || '0'};
	padding: 10px;
	background-color: #eaeaea;
	border-radius: 5px;
	z-index: 99;
`;

export default Container;
