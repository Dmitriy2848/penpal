import { configureStore } from '@reduxjs/toolkit';
import notesSlice from '../features/notesSlice';
export default configureStore({
	reducer: {
		notes: notesSlice
	}
});
