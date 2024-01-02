import { createReducer } from "@reduxjs/toolkit"

import { getEmployees } from "./actions"

const initialState = {
  employees: {
    loading: false,
    loaded: false,
    error: null,
    data: []
  }
}

export const employeesReducer = createReducer(initialState, builder => {
  builder.addCase(getEmployees.loading, state => {
    state.employees.loading = true
  })
})