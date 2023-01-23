import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	current: '',
	folders: {
		byId: {
			2: {
				id: 2,
				date: Date.now(),
				type: 'directory',
				name: 'папка1',
				initialExpand: false,
				parent: null,
				children: [12, 24, 3]
			},
			24: {
				id: 24,
				date: Date.now(),
				type: 'directory',
				name: 'папка2',
				initialExpand: false,
				parent: 2,
				children: [34]
			}
		},
		allIds: [2, 24]
	},
	files: {
		byId: {
			12: {
				id: 12,
				date: Date.now(),
				type: 'file',
				name: 'файл1',
				parent: 2,
				content: {
					type: 'doc',
					content: [
						{
							type: 'heading',
							attrs: {
								level: 2
							},
							content: [
								{
									type: 'text',
									text: 'файл1'
								}
							]
						}
					]
				}
			},
			34: {
				id: 34,
				date: Date.now(),
				type: 'file',
				name: 'файл2',
				parent: 24,
				content: {
					type: 'doc',
					content: [
						{
							type: 'heading',
							attrs: {
								level: 2
							},
							content: [
								{
									type: 'text',
									text: 'файл2'
								}
							]
						}
					]
				}
			},
			3: {
				id: 3,
				date: Date.now(),
				type: 'file',
				name: 'файл3',
				parent: 2,
				content: {
					type: 'doc',
					content: [
						{
							type: 'heading',
							attrs: {
								level: 2
							},
							content: [
								{
									type: 'text',
									text: 'файл3'
								}
							]
						}
					]
				}
			},
			13: {
				id: 13,
				date: Date.now(),
				type: 'file',
				name: 'файл4',
				parent: null,
				content: {
					type: 'doc',
					content: [
						{
							type: 'heading',
							attrs: {
								level: 2
							},
							content: [
								{
									type: 'text',
									text: 'файл4'
								}
							]
						}
					]
				}
			}
		},
		allIds: [12, 34, 3, 13]
	}
};
//todo добавить все возможные action creators и изучи api для подключения к зметке
const fileTreeSlice = createSlice({
	name: 'fileSystem',
	initialState,
	reducers: {
		fileEdit(state, action) {
			state.current = action.payload;
		},
		addFile: {
			reducer(state, action) {
				const file = action.payload;
				state.files.byId[file.id] = file;
				state.files.allIds.push(file.id);
				if (file.parent) {
					state.folders.byId[file.parent].children.push(file.id);
				}
				state.current = file.id;
			},
			prepare(name, folderId) {
				return {
					payload: {
						id: nanoid(7),
						date: Date.now(),
						type: 'file',
						name,
						parent: folderId || null,
						content: {
							type: 'doc',
							content: [
								{
									type: 'heading',
									attrs: {
										level: 2
									},
									content: [
										{
											type: 'text',
											text: `${name}`
										}
									]
								}
							]
						}
					}
				};
			}
		},
		updateFile(state, action) {
			const { id, content } = action.payload;
			console.log(action.payload);
			state.files.byId[id].content = content;
		},
		deleteFile(state, action) {
			const fileId = action.payload;
			const folderId = state.files.byId[fileId].parent;
			console.log(folderId);
			if (folderId) {
				state.folders.byId[folderId].children = state.folders.byId[
					folderId
				].children.filter((id) => id !== fileId);
			}

			delete state.files.byId[fileId];
			state.files.allIds = state.files.allIds.filter((id) => id !== fileId);

			state.current = state.files.allIds[0];
		},
		addFolder: {
			reducer(state, action) {
				const folder = action.payload;
				state.folders.byId[folder.id] = folder;
				state.folders.allIds.push(folder.id);
				folder.parent &&
					state.folders.byId[folder.parent].children.push(folder.id);
			},
			prepare(name, folderId) {
				return {
					payload: {
						id: nanoid(7),
						date: Date.now(),
						type: 'directory',
						name,
						initialExpand: false,
						children: [],
						parent: folderId || null
					}
				};
			}
		},
		deleteFolder(state, action) {
			const id = action.payload;
			const folder = state.folders.byId[id];

			function recursiveRemove(node) {
				if (node.type === 'file') {
					delete state.files.byId[node.id];
					state.files.allIds.splice(state.files.allIds.indexOf(node.id), 1);
				}
				if (node.type === 'directory') {
					delete state.folders.byId[node.id];
					state.folders.allIds.splice(state.folders.allIds.indexOf(node.id), 1);

					if (!node.children.length) return;

					node.children = node.children.map((id) => {
						const child = state.files.byId[id] || state.folders.byId[id];

						return recursiveRemove(child);
					});
				}
			}
			recursiveRemove(folder);

			if (folder.parent) {
				const parent = state.folders.byId[folder.parent];
				parent.children.splice(parent.children.indexOf(id));
			}
		},
		changeExpand(state) {
			function changeExpand(tree) {
				for (let i = 0; i < tree.length; i++) {
					const node = tree[i];
					if (node.type === 'directory') {
						console.log(state[node.id]);
						state[node.id].initialExpand = !state[node.id].initialExpand;
					}
					if (node.files?.length) {
						changeExpand(node.files);
					}
				}
			}
			changeExpand(state);
		}
	}
});

export const {
	fileEdit,
	updateFile,
	addFile,
	deleteFile,
	addFolder,
	deleteFolder,
	changeExpand
} = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
