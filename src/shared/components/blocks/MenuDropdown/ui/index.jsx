import React from 'react';

import Container from 'shared/components/blocks/MenuDropdown/ui/Container.jsx';
import List from 'shared/components/blocks/MenuDropdown/ui/List.jsx';
import Button from 'shared/components/blocks/MenuDropdown/ui/Button.jsx';
const Template = ({
	active,
	buttonOnClick,
	icon,
	isActive,
	listItems,
	closeHandler
}) => {
	return (
		<Container>
			<Button
				onClick={buttonOnClick}
				current={active}
			>
				{icon}
			</Button>
			<List
				isActive={isActive}
				items={listItems}
				closeHandler={closeHandler}
			/>
		</Container>
	);
};

export default Template;
