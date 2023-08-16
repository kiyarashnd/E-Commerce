import { configureStore } from '@reduxjs/toolkit';
import enableSlice from '../pages/products/enableSlice';

export const store = configureStore({
  reducer: {
    enable: enableSlice,
  },
});
