import React from "react";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Admin
import AdminDetails from "pages/admin/AdminDetails";
import CreateAdmin from "pages/admin/CreateAdmin";
import AdminProfile from "pages/admin/AdminProfile";

//Trips
import TripDetails from "pages/trips/TripDetails";
import CreateTrip from "pages/trips/CreateTrip";

//Customers
import CustomerDetails from "../pages/customers/CustomerDetails";
import CreateCustomer from "../pages/customers/CreateCustomer";
import CustomerProfile from "pages/customers/CustomerProfile";

//Orders
import OrderDetails from "../pages/orders/OrderDetails";
import CreateOrder from "../pages/orders/CreateOrder";

//Blogs
import AddBlog from "pages/blogs/AddBlog";
import BlogDetails from "pages/blogs/BlogDetails";

// Pages Calendar


//Email


// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

//  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login";
import Login2 from "../pages/AuthenticationInner/Login2";
import Register1 from "../pages/AuthenticationInner/Register";
import Register2 from "../pages/AuthenticationInner/Register2";
import Recoverpw from "../pages/AuthenticationInner/Recoverpw";
import Recoverpw2 from "../pages/AuthenticationInner/Recoverpw2";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen";
import LockScreen2 from "../pages/AuthenticationInner/auth-lock-screen-2";
import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail";
import ConfirmMail2 from "../pages/AuthenticationInner/page-confirm-mail-2";
import EmailVerification from "../pages/AuthenticationInner/auth-email-verification";
import EmailVerification2 from "../pages/AuthenticationInner/auth-email-verification-2";
import TwostepVerification from "../pages/AuthenticationInner/auth-two-step-verification";
import TwostepVerification2 from "../pages/AuthenticationInner/auth-two-step-verification-2";

// Dashboard
import Dashboard from "../pages/Dashboard/index";


// Maps


//Icons
import IconDripicons from "../pages/Icons/IconDripicons";
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign";
import TypiconsIcon from "../pages/Icons/IconTypicons";
import IconIon from "../pages/Icons/IconIon";
import ThemifyIcon from "../pages/Icons/IconThemify";
import IconFontawesome from "../pages/Icons/IconFontawesome";

//Tables
import BasicTables from "../pages/Tables/BasicTables";
import DatatableTables from "../pages/Tables/DatatableTables";
import ResponsiveTables from "../pages/Tables/ResponsiveTables";

// Forms

//Ui
import UiAlert from "../pages/Ui/UiAlert";
import UiButtons from "../pages/Ui/UiButtons";
import UiCards from "../pages/Ui/UiCards";
import UiCarousel from "../pages/Ui/UiCarousel";
import UiColors from "../pages/Ui/UiColors";
import UiDropdown from "../pages/Ui/UiDropdown";
import UiGeneral from "../pages/Ui/UiGeneral";
import UiGrid from "../pages/Ui/UiGrid";
import UiImages from "../pages/Ui/UiImages";
import UiModal from "../pages/Ui/UiModal";
import UiProgressbar from "../pages/Ui/UiProgressbar";
import UiTabsAccordions from "../pages/Ui/UiTabsAccordions";
import UiTypography from "../pages/Ui/UiTypography";
import UiVideo from "../pages/Ui/UiVideo";
import UiSessionTimeout from "../pages/Ui/UiSessionTimeout";
import UiUtilities from "pages/Ui/UiUtilities";
import UiOffcanvas from "pages/Ui/UiOffcanvas";

//Pages
import PagesStarter from "../pages/Utility/pages-starter";
import PagesMaintenance from "../pages/Utility/pages-maintenance";
import PagesComingsoon from "../pages/Utility/pages-comingsoon";
import PagesTimeline from "../pages/Utility/pages-timeline";
import PagesInvoice from "../pages/Utility/PagesInvoice";
import PagesFaqs from "../pages/Utility/pages-faqs";
import PagesPricing from "../pages/Utility/pages-pricing";
import Pages404 from "../pages/Utility/pages-404";
import Pages500 from "../pages/Utility/pages-500";
import PagesDirectory from "../pages/Utility/PagesDirectory";
import PagesProfile from "pages/Utility/pages-profile";
import EditAdminDetail from "pages/admin/EditAdminDetail";
import EditCustomer from "pages/customers/EditCustomer";
import EditOrder from "pages/orders/EditOrder";
import EditTrip from "pages/trips/EditTrip";


// Coupons
import CouponsDetails from "pages/coupons/CouponsDetails";
import CreateCouponsPage from "pages/coupons/CreateCouponsPage";
import EditCouponsPage from "pages/coupons/EditCouponsPage";

// Review
import ReviewDetails from "pages/review/ReviewDetails";

// Carvaan
import CarvaanSpecialDetails from "pages/carvaanSpecial/CarvaanSpecialDetails";
import CarvaanSpecialCreate from "pages/carvaanSpecial/CarvaanSpecialCreate";
import CarvaanSpecialEdit from "pages/carvaanSpecial/CarvaanSpecialEdit";
import ManageDetails from "pages/manage/ManageDetails";
import EditManage from "pages/manage/EditManage";
import ViewTrip from "pages/trips/ViewTrip";
import ViewOrder from "pages/orders/ViewOrder";
import ViewCoupon from "pages/coupons/ViewCoupon";
import ViewCarvaanSpecial from "pages/carvaanSpecial/ViewCarvaanSpecial";
import ViewManageBooking from "pages/manage/ViewManageBooking";
import ViewBlog from "pages/blogs/ViewBlog";
import EditBlog from "pages/blogs/EditBlog";
import FaqDetails from "pages/faq/FaqDetails";
import FaqCreate from "pages/faq/FaqCreate";
import FaqEdit from "pages/faq/FaqEdit";
import ViewFaq from "pages/faq/ViewFaq";

const superAdminRoutes=[
     // Admin
  { path: "/adminDetails", component: <AdminDetails /> },
  { path: "/createAdmin", component: <CreateAdmin /> },
  { path: "/editAdmin/:id", component: <EditAdminDetail/> },
  { path: "/adminProfile/:id", component: <AdminProfile /> },
  { path: "/adminProfile", component: <AdminProfile /> },
  
]


const userRoutes = [
  { path: "/dashboard", component: <Dashboard /> },

  // //calendar
  

  // //profile
  { path: "/profile", component: <UserProfile /> },

  // Admin
  // { path: "/adminDetails", component: <AdminDetails /> },
  // { path: "/createAdmin", component: <CreateAdmin /> },
  // { path: "/editAdmin/:id", component: <EditAdminDetail/> },
  // { path: "/adminProfile/:id", component: <AdminProfile /> },
  // { path: "/adminProfile", component: <AdminProfile /> },
  

  // Admin
  { path: "/faqDetails", component: <FaqDetails /> },
  { path: "/createFaq", component: <FaqCreate /> },
  { path: "/editFaq/:sno", component: <FaqEdit/> },
  { path: "/viewFaq/:sno", component: <ViewFaq /> },


  // Trips
  { path: "/tripDetails", component: <TripDetails /> },
  { path: "/createTrip", component: <CreateTrip /> },
  { path: "/editTrip/:sno", component: <EditTrip /> },
  { path: "/viewTrip/:sno", component: <ViewTrip /> },

  // Carvaan Special
  { path: "/carvaanDetails", component: <CarvaanSpecialDetails /> },
  { path: "/createCarvaan", component: <CarvaanSpecialCreate /> },
  { path: "/editCarvaan/:sno", component: <CarvaanSpecialEdit /> },
  { path: "/viewCarvaanSpecial/:sno", component: <ViewCarvaanSpecial /> },

  // Customers
  { path: "/customerDetails", component: <CustomerDetails /> },
  { path: "/createCustomer", component: <CreateCustomer /> },
  { path: "/editCustomer/:sno", component: <EditCustomer /> },
  { path: "/customerProfile", component: <CustomerProfile /> },
  { path: "/customerProfile/:sno", component: <CustomerProfile /> },
  
  // Manage Booking/Order
  { path: "/manageDetails", component: <ManageDetails /> },
  { path: "/editManage/:sno", component: <EditManage /> },
  { path: "/viewManageBooking/:sno", component: <ViewManageBooking /> },
  
  
  // Orders
  { path: "/orderDetails", component: <OrderDetails /> },
  { path: "/createOrder", component: <CreateOrder /> },
  { path: "/editOrder/:sno", component: <EditOrder/> },
  { path: "/viewOrder/:sno", component: <ViewOrder/> },
  
  
  // Coupons
  { path: "/couponsDetails", component: <CouponsDetails /> },
  { path: "/createCoupons", component: <CreateCouponsPage /> },
  { path: "/editCoupons/:sno", component: <EditCouponsPage /> },
  { path: "/viewCoupon/:sno", component: <ViewCoupon /> },
  
  // Review
  { path: "/reviewDetails", component: <ReviewDetails /> },
  
  // Blogs
  { path: "/addBlog", component: <AddBlog /> },
  { path: "/blogDetails", component: <BlogDetails /> },
  { path: "/viewBlog/:sno", component: <ViewBlog /> },
  { path: "/editBlog/:sno", component: <EditBlog /> },

  //Email

  // Email Template
  


  // Icons
  { path: "/icons-dripicons", component: <IconDripicons /> },
  { path: "/icons-materialdesign", component: <IconMaterialdesign /> },
  { path: "/icons-fontawesome", component: <IconFontawesome /> },
  { path: "/icons-ion", component: <IconIon /> },
  { path: "/icons-themify", component: <ThemifyIcon /> },
  { path: "/icons-typicons", component: <TypiconsIcon /> },

  // Tables
  { path: "/tables-basic", component: <BasicTables /> },
  { path: "/tables-datatable", component: <DatatableTables /> },
  { path: "/tables-responsive", component: <ResponsiveTables /> },
  
  // Maps

  // Forms

  // Ui
  { path: "/ui-alerts", component: <UiAlert /> },
  { path: "/ui-buttons", component: <UiButtons /> },
  { path: "/ui-cards", component: <UiCards /> },
  { path: "/ui-carousel", component: <UiCarousel /> },
  { path: "/ui-colors", component: <UiColors /> },
  { path: "/ui-dropdowns", component: <UiDropdown /> },
  { path: "/ui-general", component: <UiGeneral /> },
  { path: "/ui-grid", component: <UiGrid /> },
  { path: "/ui-images", component: <UiImages /> },
  { path: "/ui-modals", component: <UiModal /> },
  { path: "/ui-progressbars", component: <UiProgressbar /> },
  { path: "/ui-tabs-accordions", component: <UiTabsAccordions /> },
  { path: "/ui-typography", component: <UiTypography /> },
  { path: "/ui-video", component: <UiVideo /> },
  { path: "/ui-session-timeout", component: <UiSessionTimeout /> },
  { path: "/ui-utilities", component: <UiUtilities /> },
  { path: "/ui-offcanvas", component: <UiOffcanvas /> },

  //Utility
  { path: "/pages-starter", component: <PagesStarter /> },
  { path: "/pages-timeline", component: <PagesTimeline /> },
  { path: "/pages-invoice", component: <PagesInvoice /> },
  { path: "/pages-directory", component: <PagesDirectory /> },
  { path: "/pages-faqs", component: <PagesFaqs /> },
  { path: "/pages-pricing", component: <PagesPricing /> },
  { path: "/pages-profile", component: <PagesProfile /> },

  // this route should be at the end of all other routes
  { path: "/", component: <Dashboard /> },
];

const authRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },

  { path: "/pages-maintenance", component: <PagesMaintenance /> },
  { path: "/pages-comingsoon", component: <PagesComingsoon /> },
  { path: "*", component: <Pages404 /> },
  { path: "/pages-500", component: <Pages500 /> },
  // Authentication Inner
  { path: "/pages-login", component: <Login1 /> },
  { path: "/pages-login-2", component: <Login2 /> },
  { path: "/pages-register", component: <Register1 /> },
  { path: "/pages-register-2", component: <Register2 /> },
  { path: "/page-recoverpw", component: <Recoverpw /> },
  { path: "/page-recoverpw-2", component: <Recoverpw2 /> },
  { path: "/pages-forgot-pwd", component: <ForgetPwd1 /> },
  { path: "/auth-lock-screen", component: <LockScreen /> },
  { path: "/auth-lock-screen-2", component: <LockScreen2 /> },
  { path: "/page-confirm-mail", component: <ConfirmMail /> },
  { path: "/page-confirm-mail-2", component: <ConfirmMail2 /> },
  { path: "/auth-email-verification", component: <EmailVerification /> },
  { path: "/auth-email-verification-2", component: <EmailVerification2 /> },
  { path: "/auth-two-step-verification", component: <TwostepVerification /> },
  { path: "/auth-two-step-verification-2", component: <TwostepVerification2 /> },
];

export { userRoutes, authRoutes ,superAdminRoutes};
