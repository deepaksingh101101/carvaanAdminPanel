import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

import {AccoReducers, AdminReducers, AgentsReducers, AgesReducers, MealsReducers, PointsReducers, ThemeReducers, TransReducers} from "./auth/user_admin_data/reducer"
import {CustomerReducers} from "./auth/user_admin_data/reducer.js"
import {OrderReducers} from "./auth/user_admin_data/reducer.js"
import {TripReducers} from "./auth/user_admin_data/reducer.js"
import {CouponsReducers} from "./auth/user_admin_data/reducer.js"
import {CarvaanReducers} from "./auth/user_admin_data/reducer.js"
import {ManageReducers} from "./auth/user_admin_data/reducer.js"
import {BlogReducers} from "./auth/user_admin_data/reducer.js"
import {FaqReducers} from "./auth/user_admin_data/reducer.js"
import {alertReducer} from "./components/reducer"

//Calendar
// import calendar from "./calendar/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  AdminReducers,
  CustomerReducers,
  OrderReducers,
  TripReducers,
  CouponsReducers,
  CarvaanReducers,
  ManageReducers,
  BlogReducers,
  FaqReducers,
  alertReducer,
  MealsReducers,
  AgesReducers,
  AgentsReducers,
  PointsReducers,
  ThemeReducers,
  TransReducers,
  AccoReducers,
})

export default rootReducer
