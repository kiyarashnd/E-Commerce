import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isGridEnable: true,
};

const enableSlice = createSlice({
  name: 'enable',
  initialState: initialState,
  reducers: {
    chnageStatus(state) {
      state.isGridEnable = !state.isGridEnable;
    },
  },
});

export const selectAllEnable = (state) => state.enable;

export const { isGridEnable, chnageStatus } = enableSlice.actions;

export default enableSlice.reducer;
