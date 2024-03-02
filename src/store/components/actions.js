// actions/alertActions.js

import { TOGGLE_SOMETHING_ALERT_TRUE, TOGGLE_SOMETHING_ALERT_FALSE } from "./actionTypes";

export const SomethingAlertTrue = () => ({
  type: TOGGLE_SOMETHING_ALERT_TRUE
});

export const SomethingAlertFalse = () => ({
  type: TOGGLE_SOMETHING_ALERT_FALSE
});
