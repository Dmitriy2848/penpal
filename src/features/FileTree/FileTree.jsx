import { Tree } from '@geist-ui/react';
import { Folder, File } from 'features/FileTree/ui/index.js';
import { useSelector } from 'react-redux';

const FileTree = () => {
	const fileTree = useSelector((state) => state.fileTree);
	const files = JSON.parse(JSON.stringify(fileTree.files));
	const folders = JSON.parse(JSON.stringify(fileTree.folders));
	// todo исправь функцию, оставь данные нетронутыми
	const denormalize = (files, folders) => {
		const copyFiles = { ...files };
		const copyFolders = { ...folders };
		const data = [];

		folders.allIds.forEach((id) => {
			let node = reqFunc(folders.byId[id], copyFiles, copyFolders);

			node && data.push(node);
		});
		data.push(...Object.values(copyFiles.byId));
		return data;
	};

	const reqFunc = (node, files, folders) => {
		let parent = node;

		if (!parent) return;

		if (parent.type === 'file') {
			delete files.byId[parent.id];
			files.allIds = files.allIds.filter((id) => id !== parent.id);
			return parent;
		}
		if (parent.type === 'directory') {
			delete folders.byId[parent.id];
			folders.allIds = folders.allIds.filter((id) => id !== parent.id);

			if (!parent.children.length) return parent;

			parent.children = parent.children.map((id) => {
				const child = files.byId[id] || folders.byId[id];

				return reqFunc(child, files, folders);
			});
		}

		return parent;
	};
	const mapCallback = (el) => {
		if (el.type === 'file') {
			return (
				<File
					name={el.name}
					key={el.id}
					id={el.id}
				/>
			);
		}
		if (el.type === 'directory') {
			return (
				<Folder
					name={el.name}
					key={el.id}
					id={el.id}
				>
					{el.children?.map(mapCallback)}
				</Folder>
			);
		}
	};

	return <Tree>{denormalize(files, folders).map(mapCallback)}</Tree>;
};

export default FileTree;
/* Тестовая функция перебора массива для изменения значения initialExpand
function changeExpand(tree, expand) {
	console.log(arguments[1]);
	for (let i = 0; i < tree.length; i++) {
		let node = tree[i];
		if (Array.isArray(node)) {
			changeExpand(node, expand);
		}
		if (node.type === 'directory') {
			node.initialExpand = expand;
		}
		if (node.files?.length) {
			changeExpand(node.files, expand);
		}
	}
}
*/
