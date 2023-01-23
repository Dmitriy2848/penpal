import React, { useState } from 'react';

import Template from 'shared/ui/blocks/MenuDropdown/ui';

const MenuDropdown = ({ icon, active, list }) => {
	const [isActive, setIsActive] = useState(false);
	const closeHandler = () => {
		setIsActive((prevState) => !prevState);
	};
	return (
		<Template
			buttonOnClick={() => setIsActive((prevState) => !prevState)}
			active={active}
			icon={icon}
			closeHandler={closeHandler}
			isActive={isActive}
			listItems={list}
		/>
	);
};

export default MenuDropdown;
