import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onCheking: ( state ) => {
      state.status = 'checking';
      state.user = {},
      state.errorMessage = undefined;
    },
    onLogin: (state, action) => {
      state.status = 'authenticated';
      state.user = action.payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, action) => {
      state.status = 'no-authenticated';
      state.user = {};
      state.errorMessage = action.payload;
    },
    clearErrorMessage: ( state )=> {
      state.errorMessage = undefined;
    }
  }
})

export const { onCheking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;