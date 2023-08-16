import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isGridEnable: true,
};

const enableSlice = createSlice({
  name: 'enable',
  initialState: initialState,
  reducers: {
    openGrid(state, action) {
      const { status } = action.payload;
      state.isGridEnable = status;
    },

    closeGrid(state, action) {
      const { status } = action.payload;
      state.isGridEnable = status;
    },
  },
});

export const selectAllEnable = (state) => state.enable;

export const { openGrid, closeGrid, isGridEnable } = enableSlice.actions;

export default enableSlice.reducer;
