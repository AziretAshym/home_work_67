import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NumpadState {
  input: string;
  accessGranted: boolean | null;
}

const initialState: NumpadState = {
  input: '',
  accessGranted: null,
};

const correctPassword = '8888';

const numpadSlice = createSlice({
  name: 'numpad',
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.input.length < 4) {
        state.input += action.payload;
      }
    },
    deleteNumber: (state) => {
      state.input = state.input.slice(0, -1);
    },
    checkPassword: (state) => {
      state.accessGranted = state.input === correctPassword;
    }

  }
});

export const {addNumber, deleteNumber, checkPassword} = numpadSlice.actions;
export default numpadSlice.reducer;