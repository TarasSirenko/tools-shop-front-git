import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operation';

const initialState = {
  user: {
    email: null,
    subscription: null,
  },
  token: null,
  isLoggedIn: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
