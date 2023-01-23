import { memo } from 'react';

import {
	ToolbarContainer,
	ButtonsGroup,
	Button,
	Separator
} from 'entities/Toolbar/ui';
import toolbarElements from 'entities/Toolbar/lib.jsx';
import MenuDropdown from 'shared/ui/blocks/MenuDropdown/index.jsx';

const Toolbar = memo(({ editor }) => {
	if (!editor) {
		return null;
	}

	const mapFn = (group, i, arr) => (
		<ButtonsGroup
			key={i}
			first={i === 0}
			last={i === arr.length - 1}
		>
			{group.map((el, i) => {
				if (el.type === 'button') {
					return (
						<Button
							key={i}
							icon={el.icon}
							shortcut={el.shortcut}
							isActive={el.active}
							clickHandler={el.clickHandler}
						/>
					);
				} else if (el.type === 'menu') {
					return (
						<MenuDropdown
							key={i}
							icon={el.icon}
							active={el.active}
							list={el.list}
						/>
					);
				}
			})}
			{i !== arr.length - 1 && <Separator />}
		</ButtonsGroup>
	);

	return (
		<ToolbarContainer>{toolbarElements(editor).map(mapFn)}</ToolbarContainer>
	);
});

export default Toolbar;
