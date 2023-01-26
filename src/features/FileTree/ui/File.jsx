import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { deleteFile, fileEdit } from 'features/FileTree/model/fileTreeSlice.js';
import Context, {
	useContextMenu
} from 'shared/ui/molecules/Menus/Context/index';
import { File as FileUI } from 'shared/ui/molecules/Tree';

import { ReactComponent as Trash } from 'shared/assets/icons/trash.svg';
import { ReactComponent as Edit } from 'shared/assets/icons/edit-box.svg';

const File = ({ id, name }) => {
	const dispatch = useDispatch();
	const ref = useRef();
	const { clicked, setClicked, points, setPoints } = useContextMenu(ref);

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
			<FileUI
				name={name}
				onContextMenu={onContextMenuHandler}
				onClick={() => hideMenu(() => dispatch(fileEdit(id)))}
			/>
			{clicked && (
				<Context.Container
					ref={ref}
					x={points.x}
					y={points.y}
					closeFunction={() => setClicked(false)}
				>
					<Context.Item
						text='Редактировать'
						icon={<Edit />}
						onClick={() => hideMenu(() => dispatch(fileEdit(id)))}
					/>
					<Context.Item
						text='Удалить'
						icon={<Trash />}
						onClick={() => hideMenu(() => dispatch(deleteFile(id)))}
					/>
				</Context.Container>
			)}
		</>
	);
};
export default File;
