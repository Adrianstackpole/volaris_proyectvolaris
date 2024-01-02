import { AnyAction, Dispatch } from '@reduxjs/toolkit'

import { getEmployees } from '@/lib/baas/employees'

import { getEmployeesRequest, getEmployeesSuccess } from '.'

export const getEmployeesThunk = (): AnyAction => {
  return async (dispatch: Dispatch) => {
      dispatch(getEmployeesRequest())

      const responsives = await getEmployees()

      dispatch(getEmployeesSuccess(responsives))
      
  }
}
