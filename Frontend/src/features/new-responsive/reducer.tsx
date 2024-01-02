import {
  ActionType,
  GetAssignerAction,
  GetLocationsAction,
  GetReceiverAction,
  INITIAL_STATE,
  SaveResponsiveAction,
  State
} from './actions'

export const reducer = (state: State = INITIAL_STATE, action: ActionType) => {
  const { type, payload } = action

  console.log(action)

  switch (type) {
    case GetAssignerAction.GET_ASSIGNER_REQUEST:
      return {
        ...state,
        assigner: {
          ...state.assigner,
          loading: true,
          loaded: false,
          error: null
        }
      }
    case GetAssignerAction.GET_ASSIGNER_SUCCESS:
      return {
        ...state,
        assigner: {
          loading: false,
          loaded: true,
          error: null,
          data: payload
        }
      }
    case GetAssignerAction.GET_ASSIGNER_ERROR:
      return {
        ...state,
        assigner: {
          ...state.assigner,
          loading: false,
          loaded: false,
          error: payload
        }
      }
    case GetReceiverAction.GET_RECEIVER_REQUEST:
      return {
        ...state,
        receiver: {
          ...state.receiver,
          loading: true,
          loaded: false,
          error: null
        }
      }
    case GetReceiverAction.GET_RECEIVER_SUCCESS:
      return {
        ...state,
        receiver: {
          loading: false,
          loaded: true,
          error: null,
          data: payload
        }
      }
    case GetReceiverAction.GET_RECEIVER_ERROR:
      return {
        ...state,
        receiver: {
          ...state.receiver,
          loading: false,
          loaded: false,
          error: payload
        }
      }
    case SaveResponsiveAction.SAVE_RESPONSIVE_REQUEST:
      return {
        ...state,
        saveResponsive: {
          ...state.saveResponsive,
          loading: true,
          loaded: false,
          payload: null,
          error: null
        }
      }
    case SaveResponsiveAction.SAVE_RESPONSIVE_SUCCESS:
      return {
        ...state,
        saveResponsive: {
          loading: false,
          loaded: true,
          data: payload,
          error: null
        }
      }
    case SaveResponsiveAction.SAVE_RESPONSIVE_ERROR:
      return {
        ...state,
        saveResponsive: {
          ...state.saveResponsive,
          loading: false,
          data: null,
          loaded: false,
          error: payload
        }
      }
      case GetLocationsAction.GET_LOCATIONS_REQUEST:
        return {
          ...state,
          location: {
            ...state.location,
            loading: true,
            loaded: false,
            error: null,
          }
        }
      case GetLocationsAction.GET_LOCATIONS_SUCCESS:
        return {
          ...state,
          location: {
            loading: false,
            loaded: true,
            error: null,
            data: payload
          }
        }
      case GetLocationsAction.GET_LOCATIONS_ERROR:
        return {
          ...state,
          location: {
            ...state.location,
            loading: false,
            loaded: false,
            error: payload,
          }
        }
    default:
      return state
  }
}
