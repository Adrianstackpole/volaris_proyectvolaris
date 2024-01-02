import { createAction } from "@reduxjs/toolkit";

import { GET_EMPLOYEES } from "./constants";

export const getResponsives = {
  loading: createAction(GET_EMPLOYEES + '/LOADING'),
  loaded: createAction(GET_EMPLOYEES + '/LOADED'),
  error: createAction(GET_EMPLOYEES + '/ERROR'),
  success: createAction(GET_EMPLOYEES + '/SUCCESS'),
}