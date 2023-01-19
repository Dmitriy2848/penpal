import { configureStore } from '@reduxjs/toolkit';
import fileTreeSlice from 'features/FileTree/model/fileTreeSlice.js';

export default configureStore({
	reducer: {
		fileTree: fileTreeSlice
	}
});
