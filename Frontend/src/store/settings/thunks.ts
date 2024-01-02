import { AnyAction, Dispatch } from '@reduxjs/toolkit'

import { getSettingsSuccess, getSettingsRequest as getResponsivesRequestLoading } from '.'

import { getSettingsRequest } from '@/lib/baas/settings'

export const getSettingsThunk = (): AnyAction => {
  return async (dispatch: Dispatch) => {
      dispatch(getResponsivesRequestLoading())

      const responsives = await getSettingsRequest()

      dispatch(getSettingsSuccess(responsives))
      
  }
}
