import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { getResponsivesRequest as gRR, getResponsivesSuccess } from '.'
import { getResponsivesRequest } from '@/lib/baas/responsives'

export const getResponsivesThunk = (): AnyAction => {
  return async (dispatch: Dispatch) => {
      dispatch(gRR())

      const responsives = await getResponsivesRequest()

      dispatch(getResponsivesSuccess(responsives))
      
  }
}
