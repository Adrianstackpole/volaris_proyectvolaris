import { configureStore } from '@reduxjs/toolkit'

import { responsivesSlice } from './responsives'
import { employeesSlice } from './employees'
import { settingsSlice } from './settings/slice'

export const store = configureStore({
  reducer: {
    responsives: responsivesSlice.reducer,
    employees: employeesSlice.reducer,
    settings: settingsSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>