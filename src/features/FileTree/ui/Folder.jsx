import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import {
	addFile,
	addFolder,
	deleteFolder
} from 'features/FileTree/model/fileTreeSlice.js';
import { Folder as FolderUI } from 'shared/ui/molecules/Tree';
import Context, {
	useContextMenu
} from 'shared/ui/molecules/Menus/Context/index.jsx';

import { ReactComponent as Trash } from 'shared/assets/icons/trash.svg';
import { ReactComponent as FileAdd } from 'shared/assets/icons/file-add.svg';
import { ReactComponent as FolderAdd } from 'shared/assets/icons/folder-add.svg';

const Folder = ({ id, name, children }) => {
	const dispatch = useDispatch();
	const folderRef = useRef();

	const { clicked, setClicked, points, setPoints } = useContextMenu(folderRef);

	const hideMenu = (onClick) => {
		onClick();
		setClicked(false);
	};

	const onContextMenuHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const { pageX, pageY } = e;
		setClicked(true);
		setPoints({
			x: pageX,
			y: pageY
		});
	};

	return (
		<>
			<FolderUI
				name={name}
				onContextMenu={onContextMenuHandler}
				onClick
			>
				{children}
			</FolderUI>
			{clicked && (
				<Context.Container
					ref={folderRef}
					x={points.x}
					y={points.y}
					closeFunction={() => setClicked(false)}
				>
					<Context.Item
						text='Создать файл'
						icon={<FileAdd />}
						onClick={() => hideMenu(() => dispatch(addFile('Новый файл', id)))}
					/>
					<Context.Item
						text='Создать папку'
						icon={<FolderAdd />}
						onClick={() =>
							hideMenu(() => dispatch(addFolder('Без названия', id)))
						}
					/>
					<Context.Item
						text='Удалить'
						icon={<Trash />}
						onClick={() => hideMenu(() => dispatch(deleteFolder(id)))}
					/>
				</Context.Container>
			)}
		</>
	);
};

export default Folder;
