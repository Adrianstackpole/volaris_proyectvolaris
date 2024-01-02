import { createSlice } from '@reduxjs/toolkit';

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: {
      loading: false,
      loaded: false,
      data: null,
      error: null,
    }
  },
  reducers: {
    getEmployeesRequest: (state, /* action */ ) => {
      state.employees.loading = true
    },
    getEmployeesSuccess: (state, action ) => {
      state.employees.loading = false
      state.employees.loaded = true
      state.employees.data = action.payload
      state.employees.error = null
    },
  }
});

export const { getEmployeesRequest, getEmployeesSuccess } = employeesSlice.actions;