import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { page: 1, storeId: '', type: '', tags: [], status: '' },
};

export const toolsFilterSlice = createSlice({
  name: 'toolsFilter',
  initialState,
  reducers: {
    updateToolsFilter: (state, action) => {
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
  },
});

export const { updateToolsFilter } = toolsFilterSlice.actions;

export default toolsFilterSlice.reducer;
