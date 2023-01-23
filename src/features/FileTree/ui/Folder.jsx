import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Tree } from '@geist-ui/react';
import { Trash, FilePlus } from '@geist-ui/icons';

import {
	addFile,
	addFolder,
	deleteFolder
} from 'features/FileTree/model/fileTreeSlice.js';
import useContextMenu from 'entities/ContextMenu/lib/useContextMenu.js';
import ContextMenu from 'entities/ContextMenu/index.jsx';

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
			<Tree.Folder
				name={name}
				onContextMenu={onContextMenuHandler}
			>
				{children}
			</Tree.Folder>
			{clicked && (
				<ContextMenu.Container
					ref={folderRef}
					x={points.x}
					y={points.y}
					closeFunction={() => setClicked(false)}
				>
					<ContextMenu.Item
						text='Создать файл'
						icon={<FilePlus />}
						onClick={() => hideMenu(() => dispatch(addFile('Новый файл', id)))}
					/>
					<ContextMenu.Item
						text='Создать папку'
						icon={<FilePlus />}
						onClick={() =>
							hideMenu(() => dispatch(addFolder('Без названия', id)))
						}
					/>
					<ContextMenu.Item
						text='Удалить'
						icon={<Trash />}
						onClick={() => hideMenu(() => dispatch(deleteFolder(id)))}
					/>
				</ContextMenu.Container>
			)}
		</>
	);
};

export default Folder;
