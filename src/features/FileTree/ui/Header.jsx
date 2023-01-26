import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addFile, addFolder } from 'features/FileTree/model/fileTreeSlice.js';
import Tooltip from 'shared/ui/molecules/Tooltip/index.jsx';
import Button from 'shared/ui/atoms/Button/index.jsx';

import { ReactComponent as FileAdd } from 'shared/assets/icons/file-add.svg';
import { ReactComponent as FolderAdd } from 'shared/assets/icons/folder-add.svg';

const Container = styled.div`
	min-height: 35px;

	display: flex;
	justify-content: center;
	align-items: center;

	border-right: 1px solid #f5f5f5;
	border-bottom: 1px solid #f5f5f5;
`;

const ButtonWithTooltip = ({ tooltipText, icon, clickHandler }) => {
	return (
		<Tooltip text={tooltipText}>
			<Button
				icon={icon}
				onClick={clickHandler}
			/>
		</Tooltip>
	);
};

const Header = () => {
	const dispatch = useDispatch();

	return (
		<Container>
			<ButtonWithTooltip
				tooltipText='Создать папку'
				icon={<FolderAdd />}
				clickHandler={() => dispatch(addFolder('Новая папка'))}
			/>
			<ButtonWithTooltip
				tooltipText='Создать файл'
				icon={<FileAdd />}
				clickHandler={() => dispatch(addFile('Новый файл'))}
			/>
		</Container>
	);
};

export default Header;
