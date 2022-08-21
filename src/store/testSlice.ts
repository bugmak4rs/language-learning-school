import { createSlice } from '@reduxjs/toolkit';

const test = {
  test: 'test ASASASASASASAS'
};

type TinitialState = {
  test: typeof test;
};

const initialState: TinitialState = {
  test
};

const dataSlice = createSlice({
  name: 'test',
  initialState,

  reducers: {}
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
