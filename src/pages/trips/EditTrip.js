import React from 'react'
import { Row, Col, Card, CardBody, CardTitle,Form } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import CreateTripForm from './CreateTripForm';

const EditTrip = () => {

    return (
        <React.Fragment>
      <CreateTripForm type="Edit"/>
    </React.Fragment>
    )
}

export default EditTrip