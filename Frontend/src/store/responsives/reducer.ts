import { createReducer } from "@reduxjs/toolkit"

import { getResponsives } from "./actions"

const initialState = {
  responsives: {
    loading: false,
    loaded: false,
    error: null,
    data: []
  }
}

export const responsivesReducer = createReducer(initialState, builder => {
  builder.addCase(getResponsives.loading, state => {
    state.responsives.loading = true
  })
})