import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const toolsUpdateSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    updateTools: (state, action) => {
      state.value = action.payload;
    },
    addToolsForCurrentRequest: (state, action) => {
      state.value = [...current(state).value, ...action.payload];
    },
  },
});

export const { updateTools, addToolsForCurrentRequest } =
  toolsUpdateSlice.actions;

export default toolsUpdateSlice.reducer;
