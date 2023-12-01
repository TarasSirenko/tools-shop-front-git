import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { api } from './api/api';
import authReducer from './auth/auth-slice';
import filterReducer from './tools/toolsFilterSlice';
import toolsReducer from './tools/toolsSlice';
import cartReducer from './cart/cart-slice';
import tokenReducer from './auth/token-slice';

const rootReducer = combineReducers({
  auth: authReducer,

  token: tokenReducer,

  tools: toolsReducer,

  filter: filterReducer,

  cart: cartReducer,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter', 'tools', 'api', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export default store;
