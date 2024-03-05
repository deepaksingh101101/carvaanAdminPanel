import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import VerticalLayout from "components/VerticalLayout";
import { layoutTypes } from "../constants/layout";


const ValidSuperAdmin = ({ children }) => {
  const { layoutType } = useSelector(state => ({
    layoutType: state.Layout.layoutType,
  }));

  const getLayout = (layoutType) => {
    let Layout = VerticalLayout;
    switch (layoutType) {
      case layoutTypes.VERTICAL:
        Layout = VerticalLayout;
        break;
      case layoutTypes.HORIZONTAL:
        Layout = HorizontalLayout;
        break;
      default:
        break;
    }
    return Layout;
  };
  const Layout = getLayout(layoutType);

  const authUserData = JSON.parse(localStorage.getItem("authUser"));
  

  if (!authUserData || !authUserData.admin || !authUserData.admin.is_super_admin) {
    return <Navigate to="/" />;
  }

  console.log("User is a super admin, allowing access...");
  // Render child components if the user is a super admin
  return <React.Fragment>
   <Layout> {children}</Layout>
    </React.Fragment>;
};

export default ValidSuperAdmin;
