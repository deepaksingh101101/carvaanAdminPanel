// AdminReducers.js
const { SET_ADMIN_DATA, PUSH_ADMIN, POP_ADMIN, UPDATE_ADMIN, SET_CUSTOMER_DATA, PUSH_CUSTOMER, POP_CUSTOMER, UPDATE_CUSTOMER, SET_ORDER_DATA, PUSH_ORDER, POP_ORDER, UPDATE_ORDER, SET_TRIP_DATA, PUSH_TRIP, POP_TRIP, UPDATE_TRIP, SET_COUPONS_DATA, PUSH_COUPONS, POP_COUPONS, UPDATE_COUPONS, SET_CARVAAN_DATA, PUSH_CARVAAN, POP_CARVAAN, UPDATE_CARVAAN, SET_MANAGE_DATA, PUSH_MANAGE, POP_MANAGE, UPDATE_MANAGE, ADD_BLOG_POST, SET_FAQ_DATA, PUSH_FAQ, POP_FAQ, UPDATE_FAQ } = require('./actionTypes');


export const AdminReducers = (state ={
  adminData: [], // Initialize as an array
}, action) => {
  switch (action.type) {
    case SET_ADMIN_DATA:
      return { ...state, adminData: action.payload };
    case PUSH_ADMIN:
      return { ...state, adminData: [...state.adminData, action.payload] };
    case POP_ADMIN:
      return {
        ...state,
        adminData: state.adminData.filter((admin) => admin.id !== action.payload),
      };
      case UPDATE_ADMIN:
        console.log(state.adminData)
      // const updateIndex = state.adminData.findIndex((admin) => admin.email === action.payload.email);
      const updateIndex = state.adminData.findIndex((admin) => admin.sno === parseInt(action.payload.sno));
      const updatedAdminData = [...state.adminData];
      updatedAdminData[updateIndex] = action.payload;

      return { ...state, adminData: updatedAdminData };

    default:
      return state;
  }
};


// Customer
export const CustomerReducers = (state = {
  customerData: [], // Initialize as an array
}, action) => {
  switch (action.type) {
    case SET_CUSTOMER_DATA:
      return { ...state, customerData: action.payload };
    case PUSH_CUSTOMER:
      return { ...state, customerData: [...state.customerData, action.payload] };
    case POP_CUSTOMER:
      return {
        ...state,
        customerData: state.customerData.filter((customer) => customer.sno !== action.payload),
      };
      case UPDATE_CUSTOMER:
      // const updateIndex = state.customerData.findIndex((customer) => customer.email === action.payload.email);
      const updateIndex = state.customerData.findIndex((customer) => customer.sno === parseInt(action.payload.sno));
      const updatedCustomerData = [...state.customerData];
      updatedCustomerData[updateIndex] = action.payload;

      return { ...state, customerData: updatedCustomerData };

    default:
      return state;
  }
};



// Orders

export const OrderReducers = (state = {
  orderData: [], // Initialize as an array
}, action) => {
  switch (action.type) {
    case SET_ORDER_DATA:
      return { ...state, orderData: action.payload };
    case PUSH_ORDER:
      return { ...state, orderData: [...state.orderData, action.payload] };
    case POP_ORDER:
      return {
        ...state,
        orderData: state.orderData.filter((order) => order.sno !== action.payload),
      };
      case UPDATE_ORDER:
        console.log("Updating inside reducers")
      // const updateIndex = state.orderData.findIndex((order) => {
      //   console.log(order.sno,action.payload.sno)
      //   order.sno === action.payload.sno
      // });

      const updateIndex = state.orderData.findIndex((order) => order.sno === parseInt(action.payload.sno));

     console.log(updateIndex)
      const updatedOrderData = [...state.orderData];
      updatedOrderData[updateIndex] = action.payload;

      return { ...state, orderData: updatedOrderData };

    default:
      return state;
  }
};

// Trip
export const TripReducers = (state = {
  tripData: [], // Initialize as an array
}, action) => {
  switch (action.type) {
    case SET_TRIP_DATA:
      return { ...state, tripData: action.payload };
    case PUSH_TRIP:
      return { ...state, tripData: [...state.tripData, action.payload] };
    case POP_TRIP:
      return {
        ...state,
        tripData: state.tripData.filter((trip) => trip.sno !== action.payload),
      };
      case UPDATE_TRIP:
        console.log("Updating inside reducers")
      // const updateIndex = state.orderData.findIndex((order) => {
      //   console.log(order.sno,action.payload.sno)
      //   order.sno === action.payload.sno
      // });

      const updateIndex = state.tripData.findIndex((trip) => trip.sno === parseInt(action.payload.sno));

     console.log(updateIndex)
      const updatedTripData = [...state.tripData];
      updatedTripData[updateIndex] = action.payload;

      return { ...state, tripData: updatedTripData };

    default:
      return state;
  }
};


// Trip
export const CouponsReducers = (state = {
  couponsData: [], // Initialize as an array
}, action) => {
  switch (action.type) {
    case SET_COUPONS_DATA:
      return { ...state, couponsData: action.payload };
    case PUSH_COUPONS:
      return { ...state, couponsData: [...state.couponsData, action.payload] };
    case POP_COUPONS:
      return {
        ...state,
        couponsData: state.couponsData.filter((coupons) => coupons.sno !== action.payload),
      };
      case UPDATE_COUPONS:
        console.log("Updating inside reducers")
    

      const updateIndex = state.couponsData.findIndex((coupons) => coupons.sno === parseInt(action.payload.sno));

      const updatedCouponsData = [...state.couponsData];
      updatedCouponsData[updateIndex] = action.payload;

      return { ...state, couponsData: updatedCouponsData };

    default:
      return state;
  }
};





// Carvaan
export const CarvaanReducers = (state = {
  carvaanData: [], // Initialize as an array
}, action) => {
  console.log("Inside Reducers")
  switch (action.type) {
    case SET_CARVAAN_DATA:
      return { ...state, carvaanData: action.payload };
    case PUSH_CARVAAN:
      return { ...state, carvaanData: [...state.carvaanData, action.payload] };
    case POP_CARVAAN:
      return {
        ...state,
        carvaanData: state.carvaanData.filter((carvaan) => carvaan.sno !== action.payload),
      };
      case UPDATE_CARVAAN:
        console.log("Updating inside reducers")
    

      const updateIndex = state.carvaanData.findIndex((carvaan) => carvaan.sno === parseInt(action.payload.sno));

      const updatedCarvaanData = [...state.carvaanData];
      updatedCarvaanData[updateIndex] = action.payload;

      return { ...state, carvaanData: updatedCarvaanData };

    default:
      return state;
  }
};



// Manage Booking and Order
export const ManageReducers = (state = {
  manageData: [], // Initialize as an array
}, action) => {
  console.log("Inside Reducers")
  switch (action.type) {
    case SET_MANAGE_DATA:
      return { ...state, manageData: action.payload };
    case PUSH_MANAGE:
      return { ...state, manageData: [...state.manageData, action.payload] };
    case POP_MANAGE:
      return {
        ...state,
        manageData: state.manageData.filter((manage) => manage.sno !== action.payload),
      };
      case UPDATE_MANAGE:
        console.log("Updating inside reducers")
    

      const updateIndex = state.manageData.findIndex((manage) => manage.sno === parseInt(action.payload.sno));

      const updatedManageData = [...state.manageData];
      updatedManageData[updateIndex] = action.payload;

      return { ...state, manageData: updatedManageData };

    default:
      return state;
  }
};




// Blog

export const BlogReducers = (state = {
  blogPosts: []
}, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return {
        ...state,
        blogPosts: [...state.blogPosts, action.payload]
      };
    default:
      return state;
  }
};

// FAQ

export const FaqReducers = (state ={
  faqData: [], // Initialize as an array
}, action) => {
  switch (action.type) {
    case SET_FAQ_DATA:
      return { ...state, faqData: action.payload };
    case PUSH_FAQ:
      return { ...state, faqData: [...state.faqData, action.payload] };
    case POP_FAQ:
      return {
        ...state,
        faqData: state.faqData.filter((faq) => faq.sno !== action.payload),
      };
      case UPDATE_FAQ:
      // const updateIndex = state.adminData.findIndex((admin) => admin.email === action.payload.email);
      const updateIndex = state.faqData.findIndex((faq) => faq.sno === parseInt(action.payload.sno));
      const updatedFaqData = [...state.faqData];
      updatedFaqData[updateIndex] = action.payload;

      return { ...state, faqData: updatedFaqData };

    default:
      return state;
  }
};
