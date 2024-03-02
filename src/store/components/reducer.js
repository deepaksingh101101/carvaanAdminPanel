// alertReducer.js

import { TOGGLE_SOMETHING_ALERT_TRUE, TOGGLE_SOMETHING_ALERT_FALSE } from "./actionTypes";

export const alertReducer = (state = {
  isOpen: false,
}, action) => {
  switch (action.type) {
    case TOGGLE_SOMETHING_ALERT_TRUE:
      console.log("inside reducer alert true", state);
      return {
        ...state,
        isOpen: true,
      };
    case TOGGLE_SOMETHING_ALERT_FALSE:
      console.log("inside reducer alert false", state);
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
