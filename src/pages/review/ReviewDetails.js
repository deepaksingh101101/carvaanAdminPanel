import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, Input, Label , FormGroup } from "reactstrap";
// import { MDBDataTable } from "mdbreact";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { popOrder } from 'store/auth/user_admin_data/actions';
import  { useState } from 'react';
// import { Link } from 'react-router-dom';

const reviewDetails = () => {


    const [isActive, setIsActive] = useState(true);

  const toggleStatus = () => {
    setIsActive(!isActive);
  };


//   const dispatch=useDispatch()
//   const handleRemoveReview = (sno) => {
//     dispatch(popOrder(sno));
    
//   };


//   const navigate=useNavigate();
//   const handleEdit=(sno)=>{
//     navigate(`/editOrder/${sno}`)
//       }


const generateActionButtons = (row) => (
    <div>
      <FormGroup switch>
        <Input type="switch" role="switch" onChange={toggleStatus} />
        <Label
          check={isActive}
          style={{
            color: isActive ? 'green' : 'red',
            width: '50px', // Adjust the width as needed
            display: 'inline-block' // Ensures the label doesn't take full width
          }}
        >
          {isActive ? "Active" : "Inactive"}
        </Label>
      </FormGroup>
    </div>
  );
  




    //   const {orderData} = useSelector((state) => state.OrderReducers);

    const reviewData=[{
        sno:"1",
        userId:"101",
        review:"Very good",
        rating:"5 start",
        reviewDate:"30/02/20024"
    }]





    const data = {
        columns: [
        {
            label: "SNo",
            field: "sno",
            sort: "asc",
            width: 150,
            },
          {
            label: "User ID",
            field: "userId",
            sort: "asc",
            width: 150,
          },
          {
            label: "Review",
            field: "review",
            sort: "asc",
            width: 270,
          },
          {
            label: "Rating",
            field: "rating",
            sort: "asc",
            width: 270,
          },
          {
            label: "Date",
            field: "reviewDate",
            sort: "asc",
            width: 200,
          },
          {
            label: "Action",
            field: "action",
            sort: "asc",
            width: 200,
          },
        ],
        rows:  reviewData.map((row) => ({
          ...row,
          action: generateActionButtons(row),
        })),
    }
 
    // ----------*********have to declare handleEdit, handleDelete functions************------------

    return (
        <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Carvaan" title="Orders" breadcrumbItem="Order Details" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Order Details</CardTitle>
                  {/* <MDBDataTable responsive bordered data={data} /> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
    )
}

export default reviewDetails