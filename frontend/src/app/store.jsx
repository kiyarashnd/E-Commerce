import { configureStore } from '@reduxjs/toolkit';
import enableSlice from '../enableSlice';

export const store = configureStore({
  reducer: {
    enable: enableSlice,
  },
});
