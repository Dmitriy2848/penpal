import toolbarElements from 'entities/Toolbar/lib.jsx';

import { ElementsContainer, BGroup, Separator } from 'entities/Toolbar/ui.jsx';

import Dropdown from 'shared/ui/molecules/Menus/Dropdown/index.jsx';
import Button from 'shared/ui/atoms/Button/index.jsx';

const Toolbar = ({ editor }) => {
	if (!editor) {
		return null;
	}

	const mapFn = (group, i, arr) => (
		<BGroup key={i}>
			{group.map((el, i) => {
				if (el.type === 'button') {
					return (
						<Button
							key={i}
							icon={el.icon}
							primary={el.primary}
							onClick={el.onClick}
						/>
					);
				} else if (el.type === 'menu') {
					return (
						<Dropdown
							icon={el.icon}
							primary={el.active}
							menuList={el.list}
							key={i}
						/>
					);
				}
			})}
			{i !== arr.length - 1 && <Separator />}
		</BGroup>
	);

	return (
		<ElementsContainer>{toolbarElements(editor).map(mapFn)}</ElementsContainer>
	);
};

export default Toolbar;
