import React from 'react';
import { Container, MenuList, Item } from 'entities/ContextMenu/ui/index.js';

const Template = React.forwardRef(({ x, y, children }, ref) => {
	return (
		<Container
			ref={ref}
			x={x}
			y={y}
		>
			<MenuList>{children}</MenuList>
		</Container>
	);
});

const ContextMenu = {
	Container: Template,
	Item: Item
};
export default ContextMenu;
