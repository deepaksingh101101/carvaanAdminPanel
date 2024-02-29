// CreateCustomerForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Form,Label, FormGroup } from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import {  useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';

const ViewOrder = ({ type }) => {
  const { sno } = useParams();

  let { orderData } = useSelector((state) => state.OrderReducers);
  const order = orderData.find((order) => order.sno == sno);

  const [userId, setUserId] = useState('');
  const [vendorId, setVendorId] = useState('');
  const [tripId, setTripId] = useState('');
  const [paidOrUnpaid, setPaidOrUnpaid] = useState('');
  const [orderDate, setOrderDate] = useState('');
 

  useEffect(() => {
    if (order) {
      setUserId(order.userId || '');
      setVendorId(order.vendorId || '');
      setTripId(order.tripId || '');
      setPaidOrUnpaid(order.paidOrUnpaid || '');
      setOrderDate(order.orderDate || '');
    }
  },[order]);

 
  


  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Carvaan" title="Orders" breadcrumbItem={`View Orders`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`View`} Order</CardTitle>
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="userId">
                          User Id
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{userId}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="vendorId">
                          Vendor Id
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{vendorId}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="tripId">
                          Trip Id
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{tripId}</CardTitle>
  </Card>
                      </div>

                      

            

                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="paidOrUnpaid">
    Paid Or Unpaid
  </label>
  <Card body className="border">
    <CardTitle className="h4">{paidOrUnpaid}</CardTitle>
  </Card>
</div>


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="orderDate">
                          Order Date
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{orderDate}</CardTitle>
  </Card>
                      </div>

                      

                    </div>


                    
      
                  </div>


                
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewOrder;
