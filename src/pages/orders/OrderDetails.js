import React from 'react'
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
// import { MDBDataTable } from "mdbreact";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popOrder } from 'store/auth/user_admin_data/actions';

const OrderDetails = () => {
  const dispatch=useDispatch()
  const handleRemoveOrder = (sno) => {
    dispatch(popOrder(sno));
  };

  const navigate=useNavigate();
  const handleEdit=(sno)=>{
    navigate(`/editOrder/${sno}`)
      }


      const generateActionButtons = (row) => (
        <div>
          <Link to={`/viewOrder/${row.sno}`}>
            <button className="btn btn-primary mx-2">
              <i className="ti-eye"></i>
            </button>
          </Link>
          <button className="btn btn-danger mx-2" onClick={() => handleRemoveOrder(row.sno)}>
            <i className="ti-trash"></i>
          </button>
          <button className="btn btn-info mx-2" onClick={() => handleEdit(row.sno)}>
            <i className="ti-pencil-alt"></i>
          </button>
        </div>
      );




      const {orderData} = useSelector((state) => state.OrderReducers);





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
            label: "Vendor ID",
            field: "vendorId",
            sort: "asc",
            width: 270,
          },
          {
            label: "Trip ID",
            field: "tripId",
            sort: "asc",
            width: 270,
          },
          {
            label: "Paid / Unpaid",
            field: "paidOrUnpaid",
            sort: "asc",
            width: 200,
          },
          {
            label: "Date",
            field: "orderDate",
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
        rows:  orderData.map((row) => ({
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

export default OrderDetails