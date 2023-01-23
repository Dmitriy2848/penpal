import { useSelector } from 'react-redux';
import { Tree } from '@geist-ui/react';

import { Folder, File } from 'features/FileTree/ui/index.js';

const FileTree = () => {
	const { files, folders } = useSelector((state) => state.fileTree);

	const dataTree = (files, folders) => {
		const copyFiles = JSON.parse(JSON.stringify(files));
		const copyFolders = JSON.parse(JSON.stringify(folders));
		const data = [];
		copyFolders.allIds.forEach((id) => {
			let node = nodeBuild(copyFolders.byId[id], copyFiles, copyFolders);
			node && data.push(node);
		});
		data.push(...Object.values(copyFiles.byId));
		return data;
	};

	const nodeBuild = (node, files, folders) => {
		if (!node) return;

		if (node.type === 'file') {
			delete files.byId[node.id];
			files.allIds.splice(files.allIds.indexOf(node.id), 1);
			return node;
		}
		if (node.type === 'directory') {
			delete folders.byId[node.id];
			files.allIds.splice(files.allIds.indexOf(node.id), 1);

			if (!node.children.length) return node;

			node.children = node.children.map((id) => {
				const child = files.byId[id] || folders.byId[id];
				return nodeBuild(child, files, folders);
			});
		}

		return node;
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

	return <Tree>{dataTree(files, folders).map(mapCallback)}</Tree>;
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
