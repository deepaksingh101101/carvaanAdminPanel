// actions.js
const { SET_ADMIN_DATA, PUSH_ADMIN, POP_ADMIN, UPDATE_ADMIN, SET_CUSTOMER_DATA, PUSH_CUSTOMER, POP_CUSTOMER, UPDATE_CUSTOMER, SET_ORDER_DATA, PUSH_ORDER, POP_ORDER, UPDATE_ORDER, SET_TRIP_DATA, PUSH_TRIP, POP_TRIP, UPDATE_TRIP, SET_COUPONS_DATA, PUSH_COUPONS, POP_COUPONS, UPDATE_COUPONS, SET_CARVAAN_DATA, PUSH_CARVAAN, POP_CARVAAN, UPDATE_CARVAAN, SET_MANAGE_DATA, PUSH_MANAGE, POP_MANAGE, UPDATE_MANAGE, ADD_BLOG_POST, SET_FAQ_DATA, PUSH_FAQ, POP_FAQ, UPDATE_FAQ, STORE_MEALS, STORE_AGE, STORE_AGENTS, STORE_POINTS, STORE_THEME, STORE_TRANSPORTATION } = require('./actionTypes');

export const setAdminData = (adminData) => ({
  type: SET_ADMIN_DATA,
  payload: adminData,
});

export const pushAdmin = (admin) => ({
  type: PUSH_ADMIN,
  payload: admin,
});

export const popAdmin = (id) => ({
  type: POP_ADMIN,
  payload: id,
});

export const updateAdmin = (admin) => ({
  type: UPDATE_ADMIN,
  payload: admin,
});

// Customer


export const setCustomerData = (customerData) => ({
  type: SET_CUSTOMER_DATA,
  payload: customerData,
});

export const pushCustomer = (customer) => ({
  type: PUSH_CUSTOMER,
  payload: customer,
});

export const popCustomer = (sno) => ({
  type: POP_CUSTOMER,
  payload: sno,
});

export const updateCustomer = (customer) => ({
  type: UPDATE_CUSTOMER,
  payload: customer,
});

// Orders

export const setOrderData = (orderData) => ({
  type: SET_ORDER_DATA,
  payload: orderData,
});

export const pushOrder = (order) => ({
  type: PUSH_ORDER,
  payload: order,
});

export const popOrder = (sno) => ({
  type: POP_ORDER,
  payload: sno,
});

export const updateOrder = (order) => ({
  type: UPDATE_ORDER,
  payload: order,
});

// Trip

export const setTripData = (tripData) => ({
  type: SET_TRIP_DATA,
  payload: tripData,
});

export const pushTrip = (trip) => ({
  type: PUSH_TRIP,
  payload: trip,
});

export const popTrip = (sno) => ({
  type: POP_TRIP,
  payload: sno,
});

export const updateTrip = (trip) => ({
  type: UPDATE_TRIP,
  payload: trip,
});


// Coupons

export const setCouponsData = (couponsData) => ({
  type: SET_COUPONS_DATA,
  payload: couponsData,
});

export const pushCoupons = (coupons) => ({
  type: PUSH_COUPONS,
  payload: coupons,
});

export const popCoupons = (sno) => ({
  type: POP_COUPONS,
  payload: sno,
});

export const updateCoupons = (coupons) => ({
  type: UPDATE_COUPONS,
  payload: coupons,
});




// Carvaan special

export const setCarvaanData = (carvaanData) => ({
  type: SET_CARVAAN_DATA,
  payload: carvaanData,
});

export const pushCarvaan = (carvaan) => ({
  type: PUSH_CARVAAN,
  payload: carvaan,
});

export const popCarvaan = (sno) => ({
  type: POP_CARVAAN,
  payload: sno,
});

export const updateCarvaan = (carvaan) => ({
  type: UPDATE_CARVAAN,
  payload: carvaan,
});




// Manage Booking and Orders

export const setManageData = (manageData) => ({
  type: SET_MANAGE_DATA,
  payload: manageData,
});

export const pushManage = (manage) => ({
  type: PUSH_MANAGE,
  payload: manage,
});

export const popManage = (sno) => ({
  type: POP_MANAGE,
  payload: sno,
});

export const updateManege = (manage) => ({
  type: UPDATE_MANAGE,
  payload: manage,
});

// Blog
export const addBlogPost = (post) => ({
  type: ADD_BLOG_POST,
  payload: post
});

// FAQ


export const setFaqData = (faqData) => ({
  type: SET_FAQ_DATA,
  payload: faqData,
});

export const pushFaq = (faq) => ({
  type: PUSH_FAQ,
  payload: faq,
});

export const popFaq = (sno) => ({
  type: POP_FAQ,
  payload: sno,
});

export const updateFaq = (faq) => ({
  type: UPDATE_FAQ,
  payload: faq,
});

// Store trop options
export const storeMeals = (meals) => ({
  type: STORE_MEALS,
  payload: meals,
});
export const storeAge = (age) => ({
  type: STORE_AGE,
  payload: age,
});
export const storeAgents = (agents) => ({
  type: STORE_AGENTS,
  payload: agents,
});
export const storePoints = (points) => ({
  type: STORE_POINTS,
  payload: points,
});
export const storeTheme = (theme) => ({
  type: STORE_THEME,
  payload: theme,
});
export const storeTransportation = (trans) => ({
  type: STORE_TRANSPORTATION,
  payload: trans,
});