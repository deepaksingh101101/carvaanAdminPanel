//REGISTER
export const POST_FAKE_REGISTER = "/admins/create"
// export const PATCH_ADMIN_EDIT = `admins/:${id}`
export const DELETE_ADMIN = `admins/:id`

//LOGIN
export const POST_FAKE_LOGIN = "/admins/validate"

// Get ALl Admin
export const GET_ALL_ADMIN = "/admins"



// Trip Page

export const GET_ALL_MEALS = "/meal_types"
export const GET_ALL_AGE_RANGES = "/age_ranges"
export const GET_ALL_TRANSPORTATION = "/transportation_types"
export const GET_ALL_TRAVEL_AGENTS = "/travel_agents"
export const POST_TRIP_IMAGES = "/uploads/images"
export const POST_TRIP_IMAGE = "/uploads/image"





// export const POST_FAKE_LOGIN = "/auth/login"
export const POST_FAKE_JWT_LOGIN = "/post-jwt-login"
export const POST_FAKE_PASSWORD_FORGET = "/fake-forget-pwd"
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd"

//PROFILE
export const POST_EDIT_JWT_PROFILE = "/post-jwt-profile"
export const POST_EDIT_PROFILE = "/post-fake-profile"

//CALENDER
export const GET_EVENTS = "/events"
export const ADD_NEW_EVENT = "/add/event"
export const UPDATE_EVENT = "/update/event"
export const DELETE_EVENT = "/delete/event"
export const GET_CATEGORIES = "/categories"