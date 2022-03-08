import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface counterSliceInterface {
  value: number,
}

const initialState: counterSliceInterface = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: counterSliceInterface, { payload = 1 }: PayloadAction<number>) => {
      state.value += payload;
    },
    decrement: (state: counterSliceInterface, { payload = 1 }: PayloadAction<number>) => {
      state.value -= payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterState = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
