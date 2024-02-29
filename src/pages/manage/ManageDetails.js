import React from 'react'
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { MDBDataTable } from "mdbreact";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  popManage } from 'store/auth/user_admin_data/actions';


const ManageDetails = () => {
  const dispatch=useDispatch()
  const handleRemoveManage = (sno) => {
    dispatch(popManage(sno));
  };
  const navigate=useNavigate();

  const handleEdit=(sno)=>{
    navigate(`/editManage/${sno}`)
      }

      const generateActionButtons = (row) => (
        <div>
          <Link  to={`/viewManageBooking/${row.sno}`}>
            <button className="btn btn-primary mx-2">
              <i className="ti-eye"></i>
            </button>
          </Link>
          <button className="btn btn-danger mx-2" onClick={() => handleRemoveManage(row.sno)}>
            <i className="ti-trash"></i>
          </button>
          <button className="btn btn-info mx-2" onClick={() => handleEdit(row.sno)}>
            <i className="ti-pencil-alt"></i>
          </button>
        </div>
      );

      
      // const {manageData} = useSelector((state) => state.ManageReducers);
          const manageData=[{
            sno:"1",
            tripId:"T1",
            user:"Deepak",
            quantity:40,
            totalAmount:"1600"
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
        label: "Trip Id",
        field: "tripId",
        sort: "asc",
        width: 150,
      },
      {
        label: "User",
        field: "user",
        sort: "asc",
        width: 150,
      },
      {
        label: 'Quantity',
        field: 'quantity',
        sort: 'asc',
        width: 270,
      },
      {
        label: "Total Amount",
        field: "totalAmount",
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
    rows: manageData.map((row) => ({
      ...row,
      action: generateActionButtons(row),
    })),
  };

  

      



  // ----------*********have to declare handleEdit, handleDelete functions************------------

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="manageDetails" maintitle="Carvaan" title="Manage Booking" breadcrumbItem="Manage Booking Details" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Booking Details</CardTitle>
                  <MDBDataTable responsive bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ManageDetails