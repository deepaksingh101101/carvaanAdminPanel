// CreateCustomerForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Form,Label, FormGroup } from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pushOrder, updateOrder } from 'store/auth/user_admin_data/actions';

const CreateOrderForm = ({ type }) => {
  const dispatch = useDispatch();
  const { sno } = useParams();

  let { orderData } = useSelector((state) => state.OrderReducers);
  const order = orderData.find((order) => order.sno == sno);

  const [userId, setUserId] = useState('');
  const [vendorId, setVendorId] = useState('');
  const [tripId, setTripId] = useState('');
  const [paidOrUnpaid, setPaidOrUnpaid] = useState('');
  const [orderDate, setOrderDate] = useState('');
 
  const navigate = useNavigate();

  useEffect(() => {
    if (order) {
      setUserId(order.userId || '');
      setVendorId(order.vendorId || '');
      setTripId(order.tripId || '');
      setPaidOrUnpaid(order.paidOrUnpaid || '');
      setOrderDate(order.orderDate || '');
    }
  },[order]);

  const handleAddOrderClick = () => {
    // const newOrder = {
    //   sno:orderData.length > 0 ? orderData[orderData.length - 1].sno + 1 : 1,
    //   userId:userId,
    //   vendorId:vendorId,
    //   tripId:tripId,
    //   paidOrUnpaid:paidOrUnpaid,
    //   orderDate:orderDate,
    // };

    // const newOrder = {
    //     sno: type === "Edit" ? sno : (orderData.length > 0 ? orderData[orderData.length - 1].sno + 1 : 1),
    //     userId: userId,
    //     vendorId: vendorId,
    //     tripId: tripId,
    //     paidOrUnpaid: paidOrUnpaid,
    //     orderDate: orderDate,
    //   };
      
    const newOrder = {
        sno: type === "Edit" ? order.sno : (orderData.length > 0 ? orderData[orderData.length - 1].sno + 1 : 1),
        userId: userId,
        vendorId: vendorId,
        tripId: tripId,
        paidOrUnpaid: paidOrUnpaid,
        orderDate: orderDate,
      };

    if (type === 'Create') {
      dispatch(pushOrder(newOrder));
    } else {
      dispatch(updateOrder(newOrder));
    }

    navigate('/orderDetails');
  };

  
//   const handleGenderChange = (e) => {
//     setGender(e.target.value);
//   };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Carvaan" title="Orders" breadcrumbItem={`${type} Orders`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`${type}`} Order</CardTitle>
<form onSubmit={handleAddOrderClick}>
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="userId">
                          User Id
                        </label>
                        <input
                          type="text"
                          id="userId"
                          value={userId}
                          onChange={(e) => setUserId(e.target.value)}
                          className="form-control"
                          placeholder="Enter User Id"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="vendorId">
                          Vendor Id
                        </label>
                        <input
                          type="text"
                          id="vendorId"
                          value={vendorId}
                          onChange={(e) => setVendorId(e.target.value)}
                          className="form-control"
                          placeholder="Enter Vendor Id"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="tripId">
                          Trip Id
                        </label>
                        <input
                          type="text"
                          id="tripId"
                          value={tripId}
                          onChange={(e) => setTripId(e.target.value)}
                          className="form-control"
                          placeholder="Enter Trip Id"
                          required
                        />
                      </div>

                      

            

                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="paidOrUnpaid">
    Paid Or Unpaid
  </label>
  <select
    id="paidOrUnpaid"
    value={paidOrUnpaid}
    onChange={(e) => setPaidOrUnpaid(e.target.value)}
    className="form-select"
    required
  >
    <option value="">Select an option</option>
    <option value="paid">Paid</option>
    <option value="unpaid">Unpaid</option>
  </select>
</div>


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="orderDate">
                          Order Date
                        </label>
                        <input
                          type="date"
                          id="orderDate"
                          value={orderDate}
                          onChange={(e) => setOrderDate(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>

                      

                    </div>


                    
                  <button type='submit' className="mt-1 btn btn-success">
  {type === 'Edit' ? 'Update Order' : 'Create Order'}
</button>
                  </div>


                 </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateOrderForm;
