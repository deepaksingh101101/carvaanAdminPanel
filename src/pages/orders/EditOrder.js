import React from 'react'
import { Row, Col, Card, CardBody, CardTitle,Form } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import CreateOrderForm from './CreateOrderForm';

const EditOrder = () => {

    return (
        <React.Fragment>
     <CreateOrderForm type="Edit"/>
    </React.Fragment>
    )
}

export default EditOrder