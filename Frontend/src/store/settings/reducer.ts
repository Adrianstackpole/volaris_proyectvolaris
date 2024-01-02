import { createReducer } from "@reduxjs/toolkit"

import { getSettings } from "./actions"

const initialState = {
  responsives: {
    loading: false,
    loaded: false,
    error: null,
    data: []
  }
}

export const responsivesReducer = createReducer(initialState, builder => {
  builder.addCase(getSettings.loading, state => {
    state.responsives.loading = true
  })
})