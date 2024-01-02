import { createSlice } from '@reduxjs/toolkit';

export const responsivesSlice = createSlice({
  name: 'responsives',
  initialState: {
    responsives: {
      loading: false,
      loaded: false,
      data: null,
      error: null,
    }
  },
  reducers: {
    getResponsivesRequest: (state, /* action */ ) => {
      state.responsives.loading = true
    },
    getResponsivesSuccess: (state, action ) => {
      state.responsives.loading = false
      state.responsives.loaded = true
      state.responsives.data = action.payload
      state.responsives.error = null
    },
  }
});

export const { getResponsivesRequest, getResponsivesSuccess } = responsivesSlice.actions;