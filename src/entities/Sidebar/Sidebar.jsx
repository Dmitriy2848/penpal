import React from 'react';
import { Spacer } from '@geist-ui/react';

import FileTree from 'entities/Sidebar/FileTree.jsx';
import Header from 'entities/Sidebar/Header.jsx';
import SearchBar from 'entities/Sidebar/Search.jsx';

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

// todo пофиксить ошибку при большой вложенности
// todo подогнать редактор под стиль приложения
// todo сделать возможно добавления и удаления заметки
// todo нормализовать данные в заметке и сделать единое хранилище

const Sidebar = () => {
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

	return (
		<React.Fragment>
			<Spacer />
			<SearchBar />
			<Spacer h={0.5} />
			<Header />
			<Spacer h={0.5} />
			<FileTree data={files} />
		</React.Fragment>
	);
};

export default Sidebar;
