import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: number;
  name: string;
};
type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
};
const initialState: InitialState = {
  loading: false,
  users: [],
  error: '',
};

// const interface Products{
//   _id: string,
//             name: string,
//             avatar: string,
//             description: string,
//             price: number,
//             category: string,
//             developerEmail: string,
//             createdAt: string,
//             updatedAt: string,
//             __v: number

// }

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYW5uYXZlZXJwYXRpbDk5OUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vQ2hhbm51NjU0IiwiaWF0IjoxNjY0MDg3ODE5LCJleHAiOjE2NjQ1MTk4MTl9.tIuc3dEk5m-c2zOdHM_8UN3QISEn85cVZuu15V6uu-Q';
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get(`https://upayments-studycase-api.herokuapp.com/api/products`, config)
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = '';

        console.log(action.payload);
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default userSlice.reducer;
