import React from "react";
import {Row,Col,Card,CardBody,} from "reactstrap";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/user-4.jpg";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomerProfileCard from "pages/customers/CustomerProfileCard";

const AdminProfile = props => {
  const {adminData} = useSelector((state) => state.AdminReducers);
  

  const { sno } = useParams();


  const admin = adminData.find((admin) =>admin.sno == sno);
  
  if (!admin) {
    return <div>Admin not found</div>;
  }
  return (
    <React.Fragment>
      <CustomerProfileCard admin={admin} role="Admin"/>
    </React.Fragment>
  );
};

export default AdminProfile