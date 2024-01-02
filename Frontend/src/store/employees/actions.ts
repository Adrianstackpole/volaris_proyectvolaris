import { createAction } from "@reduxjs/toolkit";

import { GET_RESPONSIVES } from "./constants";

export const getEmployees = {
  loading: createAction(GET_RESPONSIVES + '/LOADING'),
  loaded: createAction(GET_RESPONSIVES + '/LOADED'),
  error: createAction(GET_RESPONSIVES + '/ERROR'),
  success: createAction(GET_RESPONSIVES + '/SUCCESS'),
}