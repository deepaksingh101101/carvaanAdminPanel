import React from 'react'
import { Row, Col, Card, CardBody, CardTitle,Form } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import CreateOrderForm from './CreateOrderForm';

const CreateOrder = () => {

    return (
        <React.Fragment>
     <CreateOrderForm type="Create"/>
    </React.Fragment>
    )
}

export default CreateOrder