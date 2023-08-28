import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://tools-shop-server.vercel.app';

const setToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/users/signup`,
      credentials,
    );

    return data;
  } catch (error) {
    console.log(error);
  }
});

const authOperations = { register };

export default authOperations;
