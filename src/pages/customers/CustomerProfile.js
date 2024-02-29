import React from "react";
// import { Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button, } from "reactstrap";

//Import Breadcrumb
// import Breadcrumb from "../../components/Common/Breadcrumb";
import CustomerProfileCard from "./CustomerProfileCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// import avatar from "../../assets/images/users/user-4.jpg";


const CustomerProfile = props => {
    const {customerData} = useSelector((state) => state.CustomerReducers);
  

    const { sno } = useParams();
  
  
    const customer = customerData.find((customer) =>customer.sno == sno);
    
    if (!customer) {
      return <div>Customer not found</div>;
    }
    return (

        <React.Fragment>
            <CustomerProfileCard admin={customer} role="Customer"/>
        </React.Fragment>
    );
};

export default CustomerProfile