import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isDateModalOpen: false
  },
  reducers: {
    onOpenDateModel: ( state ) => {
      state.isDateModalOpen = true;
    },
    onCloseDateModal: ( state ) => {
      state.isDateModalOpen = false;
    },
  }
})

export const { onOpenDateModel, onCloseDateModal } = uiSlice.actions;