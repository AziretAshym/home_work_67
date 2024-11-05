import { configureStore } from '@reduxjs/toolkit';
import numpadReducer from '../Containers/Numpad/numpadSlice.ts';

export const store = configureStore({
  reducer: {
    numpad: numpadReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;