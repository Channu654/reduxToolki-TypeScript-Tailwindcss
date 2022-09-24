import React from 'react';
import { InitilState } from '../Types';
import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const initialState: InitilState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const store = configureStore({
  reducer: {
    product: ProductSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
