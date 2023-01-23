import { useDispatch } from 'react-redux';
import { Grid, Spacer } from '@geist-ui/react';
import { FolderPlus, FilePlus } from '@geist-ui/icons';

import { ButtonWithTooltip, Search } from 'widgets/Sidebar/ui/Header/ui.jsx';
import { addFile, addFolder } from 'features/FileTree/model/fileTreeSlice.js';

const Header = () => {
	const dispatch = useDispatch();
	return (
		<>
			<Search />
			<Spacer h={0.5} />
			<Grid>
				<ButtonWithTooltip
					tooltipText='Создать папку'
					icon={<FolderPlus />}
					clickHandler={() => dispatch(addFolder('Новая папка'))}
				/>
				<ButtonWithTooltip
					tooltipText='Создать файл'
					icon={<FilePlus />}
					clickHandler={() => dispatch(addFile('Новый файл'))}
				/>
			</Grid>
		</>
	);
};

export default Header;
