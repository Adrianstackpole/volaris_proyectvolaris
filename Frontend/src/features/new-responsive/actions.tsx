import { Employee } from "@/interfaces"

export enum GetAssignerAction {
  GET_ASSIGNER_REQUEST = 'GET_ASSIGNER_REQUEST',
  GET_ASSIGNER_SUCCESS = 'GET_ASSIGNER_SUCCESS',
  GET_ASSIGNER_ERROR = 'GET_ASSIGNER_ERROR'
}

export enum GetReceiverAction {
  GET_RECEIVER_REQUEST = 'GET_RECEIVER_REQUEST',
  GET_RECEIVER_SUCCESS = 'GET_RECEIVER_SUCCESS',
  GET_RECEIVER_ERROR = 'GET_RECEIVER_ERROR'
}

export enum SaveResponsiveAction {
  SAVE_RESPONSIVE_REQUEST = 'SAVE_RESPONSIVE_REQUEST',
  SAVE_RESPONSIVE_SUCCESS = 'SAVE_RESPONSIVE_SUCCESS',
  SAVE_RESPONSIVE_ERROR = 'SAVE_RESPONSIVE_ERROR'
}

export enum GetLocationsAction {
  GET_LOCATIONS_REQUEST = 'GET_LOCATIONS_REQUEST',
  GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS',
  GET_LOCATIONS_ERROR = 'GET_LOCATIONS_ERROR'
}

export interface ActionType {
  type: GetAssignerAction | GetReceiverAction | SaveResponsiveAction | GetLocationsAction
  payload?: any
}

export interface State {
  assigner: AssignerState
  receiver: ReceiverState
  saveResponsive: SaveResponsive
  location: Location
}

export interface AssignerState {
  loading: boolean
  loaded: boolean
  error: any
  data: Employee | null
}

export interface ReceiverState {
  loading: boolean
  loaded: boolean
  error: any
  data: any
}

export interface Location {
  loading: boolean
  loaded: boolean
  error: any
  data: any
}

export interface SaveResponsive {
  loading: boolean
  loaded: boolean
  error: any,
  data: any,

}

export const INITIAL_STATE: State = {
  assigner: {
    loading: false,
    loaded: false,
    error: null,
    data: null
  },
  receiver: {
    loading: false,
    loaded: false,
    error: null,
    data: null
  },
  location: {
    loading: false,
    loaded: false,
    error: null,
    data: null
  },
  saveResponsive: {
    loading: false,
    loaded: false,
    error: null,
    data: null
  }
}