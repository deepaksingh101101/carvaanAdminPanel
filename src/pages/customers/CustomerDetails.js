import React from 'react'
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popCustomer } from 'store/auth/user_admin_data/actions';


const CustomerDetails = () => {
  const dispatch=useDispatch()
  const handleRemoveCustomer = (sno) => {
    dispatch(popCustomer(sno));
  };
  const navigate=useNavigate();

  const handleEdit=(sno)=>{
    navigate(`/editCustomer/${sno}`)
      }

      const generateActionButtons = (row) => (
        <div>
          <Link to={`/customerProfile/${row.sno}`}>
            <button className="btn btn-primary mx-2">
              <i className="ti-eye"></i>
            </button>
          </Link>
          <button className="btn btn-danger mx-2" onClick={() => handleRemoveCustomer(row.sno)}>
            <i className="ti-trash"></i>
          </button>
          <button className="btn btn-info mx-2" onClick={() => handleEdit(row.sno)}>
            <i className="ti-pencil-alt"></i>
          </button>
        </div>
      );

      
      const {customerData} = useSelector((state) => state.CustomerReducers);


  const data = {
    columns: [
      // {
      //   label: "SNo",
      //   field: "sno",
      //   sort: "asc",
      //   width: 150,
      // },
      {
        label: "Customer Id",
        field: "sno",
        sort: "asc",
        width: 150,
      },
      {
        label: "Customer Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 270,
      },
      {
        label: "Mobile No",
        field: "mobile",
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
    rows: customerData.map((row) => ({
      ...row,
      action: generateActionButtons(row),
    })),
  };

  

      



  // ----------*********have to declare handleEdit, handleDelete functions************------------

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="customerDetails" maintitle="Carvaan" title="Customers" breadcrumbItem="Customer Details" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Customer Details</CardTitle>
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

export default CustomerDetails