import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
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
				parent: 2
			},
			34: {
				id: 34,
				date: Date.now(),
				type: 'file',
				name: 'файл2',
				parent: 24
			},
			3: {
				id: 3,
				date: Date.now(),
				type: 'file',
				name: 'файл3',
				parent: 2
			},
			13: {
				id: 13,
				date: Date.now(),
				type: 'file',
				name: 'файл4',
				parent: null
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
		addFile: {
			reducer(state, action) {
				const file = action.payload;
				state.files.byId[file.id] = file;
				state.files.allIds.push(file.id);
				if (file.parent) {
					state.folders.byId[file.parent].children.push(file.id);
				}
			},
			prepare(name, folderId) {
				return {
					payload: {
						id: nanoid(7),
						date: Date.now(),
						type: 'file',
						name,
						parent: folderId || null
					}
				};
			}
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
			const node = state.folders.byId[id];
			const parent = state.folders.byId[node.parent];

			function recursiveRemove(node) {
				let parent = node;

				if (parent.type === 'file') {
					delete state.files.byId[parent.id];
					state.files.allIds.slice(state.files.allIds.indexOf(parent.id), 1);
				}
				if (parent.type === 'directory') {
					delete state.folders.byId[parent.id];
					state.folders.allIds.slice(
						state.folders.allIds.indexOf(parent.id),
						1
					);

					if (!parent.children.length) return;

					parent.children = parent.children.map((id) => {
						const child = state.files.byId[id] || state.folders.byId[id];

						return recursiveRemove(child);
					});
				}
			}
			recursiveRemove(node);

			if (node.parent) {
				console.log(node.parent);
				const parentNode = state.folders.byId[node.parent];
				parentNode.children.slice(state.files.allIds.indexOf(id), 1);
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

export const { addFile, deleteFile, addFolder, deleteFolder, changeExpand } =
	fileTreeSlice.actions;
export default fileTreeSlice.reducer;
