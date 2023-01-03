import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ id: 1 }, { id: 2 }, { id: 3 }];

const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {}
});

export default notesSlice.reducer;
