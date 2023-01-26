import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Folder, File, Header } from 'features/FileTree/ui/index.js';
import Tree from 'shared/ui/molecules/Tree/index.jsx';

const Container = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: calc(100vh - 40px);
`;

const TreeWrapper = styled.div`
	height: 100%;
	border-right: 1px solid #f5f5f5;
	padding: 10px;
`;

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

	const mapFn = (el) => {
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
					{el.children?.map(mapFn)}
				</Folder>
			);
		}
	};

	return (
		<Container
			direction='column'
			h='calc(100vh - 40px)'
			w='100%'
		>
			<Header />
			<TreeWrapper>
				<Tree>{dataTree(files, folders).map(mapFn)}</Tree>
			</TreeWrapper>
		</Container>
	);
};

export default FileTree;
