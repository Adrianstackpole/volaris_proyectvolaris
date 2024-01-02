import { createAction } from "@reduxjs/toolkit";

import { GET_SETTINGS } from "./constants";

export const getSettings = {
  loading: createAction(GET_SETTINGS + '/LOADING'),
  loaded: createAction(GET_SETTINGS + '/LOADED'),
  error: createAction(GET_SETTINGS + '/ERROR'),
  success: createAction(GET_SETTINGS + '/SUCCESS'),
}