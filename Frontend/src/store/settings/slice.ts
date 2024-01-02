import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    settings: {
      loading: false,
      loaded: false,
      data: null,
      error: null,
    }
  },
  reducers: {
    getSettingsRequest: (state, /* action */ ) => {
      state.settings.loading = true
    },
    getSettingsSuccess: (state, action ) => {
      state.settings.loading = false
      state.settings.loaded = true
      state.settings.data = action.payload
      state.settings.error = null
    },
  }
});

export const { getSettingsRequest, getSettingsSuccess } = settingsSlice.actions;