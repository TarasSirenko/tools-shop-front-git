import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: null,
    subscription: null,
    phone: null,
  },
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addCurrentUser: (state, action) => {
      console.log(action.payload);
      return {
        user: {
          email: action.payload.data?.email,
          subscription: action.payload.data?.subscription,
          phone: null,
        },
        isLoggedIn: false,
      };
    },
    updateCurrentUser: (state, action) => {
      return action.payload
        ? {
            user: {
              email: action.payload.user.email,
              subscription: action.payload.user.subscription,
              phone: action.payload.user.phone,
            },
            isLoggedIn: true,
          }
        : initialState;
    },
  },
});

export const { addCurrentUser, updateCurrentUser } = authSlice.actions;

export default authSlice.reducer;
