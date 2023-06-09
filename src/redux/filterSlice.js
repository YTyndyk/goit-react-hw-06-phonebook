import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'valueFilter',
  initialState: '',
  reducers: {
    setFilterValue(state, action) {
      return action.payload;
    },
  },
});
export const getFilterValue = state => state.valueFilter;
export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
