import React from 'react'
import { Row, Col, Card, CardBody, CardTitle,Form } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import CarvaanSpecialCreateForm from './CarvanSpecialCreateForm';

const CarvaanSpecialEdit = () => {

    return (
        <React.Fragment>
      <CarvaanSpecialCreateForm type="Edit"/>
    </React.Fragment>
    )
}

export default CarvaanSpecialEdit;