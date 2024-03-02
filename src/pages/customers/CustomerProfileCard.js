import React from "react";
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button, } from "reactstrap";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

// import avatar from "../../assets/images/users/user-4.jpg";

const CustomerProfileCard = ({admin,role}) => {
    return (

        <React.Fragment>
            <div className="page-content">
                <div className="container-fluid">
                    {/* Render Breadcrumb */}
                    <Breadcrumb link={role==="Admin"?"/adminDetails":"/customerDetails"} maintitle="Carvaan" title={`${role}s`} breadcrumbItem={`${role} Profile` } />

                    <Row>
                        <Col className="d-flex w-100">
                            <Card className="w-30 mx-2 d-flex align-items-center">
                                <CardImg
                                    style={{ width: '70%' }}
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="Card image cap"
                                />
                                <CardBody className="d-flex flex-column align-items-center">
                                    <CardTitle  tag="h1">{admin.name}</CardTitle>
                                   { role==="Customer" && <CardSubtitle tag="h6" className="mb-2 text-muted">
                                        {admin.profession?admin.profession:""}
                                    </CardSubtitle>}
                                    {/* <div className="d-flex justify-content-center m-2">
                                        <Button color="primary">Follow</Button>
                                        <Button outline color="primary" className="ms-1">
                                            Message
                                        </Button>
                                    </div> */}
                                </CardBody>
                            </Card>
                            <Card className="mb-4 w-100 mx-2" >
                                <CardBody>
                                    <Row>
                                        <Col sm="3">
                                            <p className="mb-0">Full Name</p>
                                        </Col>
                                        <Col sm="9">
                                            <p className="text-muted mb-0">{admin.name}</p>
                                        </Col>
                                    </Row>
                                    <hr />
                       {role === "Customer" && (
   <><Row>
        <Col sm="3">
            <p className="mb-0">Age</p>
        </Col>
        <Col sm="9">
            <p className="text-muted mb-0">{admin.age ? admin.age : null}</p>
        </Col>
    </Row>
     <hr />
     </> 
)}


  
    

                                   
                                    {
                                        role==="Customer" &&(
                                        <><Row>
                                            <Col sm="3">
                                                <p className="mb-0">Gender</p>
                                            </Col>
                                            <Col sm="9">
                                                <p className="text-muted mb-0">{admin.gender?admin.gender:""}</p>
                                            </Col>
                                        </Row>
                                        <hr />
                                        </>)
                                    }
                                    <Row>
                                        <Col sm="3">
                                            <p className="mb-0">Email</p>
                                        </Col>
                                        <Col sm="9">
                                            <p className="text-muted mb-0">{admin.email}</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col sm="3">
                                            <p className="mb-0">Is SuperAdmin</p>
                                        </Col>
                                        <Col sm="9">
                                            <p className="text-muted mb-0"> {admin.is_super_admin?"Yes":"No"}</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
        <Col sm="3">
            <p className="mb-0">Created By</p>
        </Col>
        <Col sm="9">
        <p className="text-muted mb-0">{admin.created_by && admin.created_by.name !== '' ? admin.created_by.name : "Unknown"}</p>
        </Col>
    </Row>
    <hr />
    <hr />
                                    <Row>
        <Col sm="3">
            <p className="mb-0">Created At</p>
        </Col>
        <Col sm="9">
            <p className="text-muted mb-0">{admin.created_at ? admin.created_at : "Not Available"}</p>
        </Col>
    </Row>
    <hr />
    <hr />
                                    <Row>
        <Col sm="3">
            <p className="mb-0">Updated At</p>
        </Col>
        <Col sm="9">
            <p className="text-muted mb-0">{admin.updated_at ? admin.updated_at : "Not Updated Yet"}</p>
        </Col>
    </Row>
    <hr />
                                   {
                                    role==="Customer" &&(
                                        <>
                                         <hr />
                                    <Row>
                                        <Col sm="3">
                                            <p className="mb-0">Current City</p>
                                        </Col>
                                        <Col sm="9">
                                            <p className="text-muted mb-0">{admin.curentCity?admin.curentCity:null}</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col sm="3">
                                            <p className="mb-0">Interest</p>
                                        </Col>
                                        <Col sm="9">
                                            <p className="text-muted mb-0">{admin.interest}</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                        </>
                                    )
                                   }
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CustomerProfileCard