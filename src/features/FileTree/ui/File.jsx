import { Tree } from '@geist-ui/react';
import useContextMenu from 'entities/ContextMenu/lib/useContextMenu.js';
import { useRef } from 'react';
import ContextMenu from 'entities/ContextMenu/index.js';
import { Edit2, Trash } from '@geist-ui/icons';
import { useDispatch } from 'react-redux';
import { deleteFile, fileEdit } from 'features/FileTree/model/fileTreeSlice.js';

const File = ({ id, name }) => {
	const dispatch = useDispatch();
	const fileRef = useRef();
	const { clicked, setClicked, points, setPoints } = useContextMenu(fileRef);

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
			<Tree.File
				name={name}
				onContextMenu={onContextMenuHandler}
			/>
			{clicked && (
				<ContextMenu.Container
					ref={fileRef}
					x={points.x}
					y={points.y}
					closeFunction={() => setClicked(false)}
				>
					<ContextMenu.Item
						text='Редактировать'
						icon={<Edit2 />}
						onClick={() => hideMenu(() => dispatch(fileEdit(id)))}
					/>
					<ContextMenu.Item
						text='Удалить'
						icon={<Trash />}
						onClick={() => hideMenu(() => dispatch(deleteFile(id)))}
					/>
				</ContextMenu.Container>
			)}
		</>
	);
};

export default File;
