import React, { useRef } from 'react';
import { Spacer, Tree } from '@geist-ui/react';

import Header from 'entities/Sidebar/Header.jsx';
import SearchBar from 'entities/Sidebar/Search.jsx';
import useContextMenu from 'entities/ContextMenu/lib/useContextMenu.js';
import ContextMenu from 'entities/ContextMenu/index.js';

import { Edit2 } from '@geist-ui/icons';

const files = [
	{
		type: 'directory',
		name: 'bin',
		initialExpand: false,
		files: [
			{
				type: 'file',
				name: 'cs.js'
			}
		]
	},
	{
		type: 'directory',
		name: 'docs',
		extra: '4 files',
		initialExpand: false,
		files: [
			{
				type: 'file',
				name: 'controllers.md'
			},
			{
				type: 'file',
				name: 'es6.md'
			},
			{
				type: 'file',
				name: 'production.md'
			},
			{
				type: 'directory',
				name: 'docs',
				extra: '4 files',
				initialExpand: false,
				files: [
					{
						type: 'file',
						name: 'controllers.md'
					},
					{
						type: 'file',
						name: 'es6.md'
					},
					{
						type: 'file',
						name: 'production.md'
					}
				]
			}
		]
	}
];

const Sidebar = () => {
	const folderRef = useRef();
	const fileRef = useRef();

	const {
		clicked: folderContextClicked,
		setClicked: folderContextSetClicked,
		points: folderContextPoints,
		setPoints: folderContextSetPoints
	} = useContextMenu(folderRef);

	const {
		clicked: fileContextClicked,
		setClicked: fileContextSetClicked,
		points: fileContextPoints,
		setPoints: fileContextSetPoints
	} = useContextMenu(fileRef);

	const closeFolderClicked = (onClick) => {
		onClick();
		folderContextSetClicked(false);
	};
	const closeFileClicked = (onClick) => {
		onClick();
		fileContextSetClicked(false);
	};

	const treeMap = (el, i) => {
		if (el.type === 'file') {
			return (
				<Tree.File
					name={el.name}
					key={i}
					onContextMenu={(e) => {
						e.preventDefault();
						const { pageX, pageY } = e;
						fileContextSetClicked(true);
						fileContextSetPoints({
							x: pageX,
							y: pageY
						});
					}}
				/>
			);
		}
		if (el.type === 'directory') {
			return (
				<Tree.Folder
					name={el.name}
					key={i}
					onContextMenu={(e) => {
						e.preventDefault();
						const { pageX, pageY } = e;
						folderContextSetClicked(true);
						folderContextSetPoints({
							x: pageX,
							y: pageY
						});
					}}
				>
					{el.files.map(treeMap)}
				</Tree.Folder>
			);
		}
	};
	return (
		<React.Fragment>
			<Spacer />
			<SearchBar />
			<Spacer h={0.5} />
			<Header />
			<Spacer h={0.5} />
			<Tree>{files.map(treeMap)}</Tree>

			{folderContextClicked && (
				<ContextMenu.Container
					ref={folderRef}
					x={folderContextPoints.x}
					y={folderContextPoints.y}
					closeFunction={() => folderContextSetClicked(false)}
				>
					<ContextMenu.Item
						text='Редактировать'
						icon={<Edit2 />}
						onClick={() => closeFolderClicked(() => console.log('edit'))}
					/>
				</ContextMenu.Container>
			)}
			{fileContextClicked && (
				<ContextMenu.Container
					ref={fileRef}
					x={fileContextPoints.x}
					y={fileContextPoints.y}
					closeFunction={() => fileContextSetClicked(false)}
				>
					<ContextMenu.Item
						text='Заметка'
						icon={<Edit2 />}
						onClick={() => closeFileClicked(() => console.log('edit'))}
					/>
				</ContextMenu.Container>
			)}
		</React.Fragment>
	);
};

export default Sidebar;

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
