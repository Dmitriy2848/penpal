import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialState from 'features/FileTree/model/initialState.js';

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
										textAlign: 'center',
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
			state.files.byId[id].content = content;
		},
		deleteFile(state, action) {
			const fileId = action.payload;
			const folderId = state.files.byId[fileId].parent;
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
				parent.children.splice(parent.children.indexOf(id), 1);
			}
		}
	}
});

export const {
	fileEdit,
	updateFile,
	addFile,
	deleteFile,
	addFolder,
	deleteFolder
} = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
