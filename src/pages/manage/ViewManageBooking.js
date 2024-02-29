// CreateCustomerForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle ,Container , Form, 
    CardImg} from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import {  useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const ViewManageBooking = () => {
  const { sno } = useParams();

//   let { manageData } = useSelector((state) => state.ManageReducers);
//   const manage = manageData.find((manage) => manage.sno == sno);
  const manage={
    sno:"1",
    tripId:"T1",
    user:"Deepak",
    quantity:40,
    price:200,
    discount:20,
    coupon:"AXSACDCSXACASX@$#DCS",
    totalAmount:"1600",
    modeOfPayment:"UPI",
    date:Date.now(),
    time:"02:34:AM"

  }
  const [tripId, setTripId] = useState('');
  const [user, setUser] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [coupon, setCoupon] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [modeOfPayment, setModeOfPayment] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

//   const navigate = useNavigate();

  useEffect(() => {
    // Fetch and set the customer data when type is 'Edit'
    if (manage) {
      setTripId(manage.tripId || '');
      setUser(manage.user || '');
      setQuantity(manage.quantity || '');
      setPrice(manage.price || '');
      setDiscount(manage.discount || '');
      setCoupon(manage.coupon || '');
      setTotalAmount(manage.totalAmount || '');
      setModeOfPayment(manage.modeOfPayment || '');
      setDate(manage.date || '');
      setTime(manage.time || '');
    }
  }, [manage]);

//   const handleAddManageClick = () => {
//     const newManage = {
//       sno: type === "Edit" ? manage.sno : (manageData.length > 0 ? manageData[manageData.length - 1].sno + 1 : 1),
//       tripId:tripId,
//       user:user,
//       quantity:quantity,
//       discount:discount,
//       price:price,
//       coupon:coupon,
//       totalAmount:totalAmount,
//       modeOfPayment:modeOfPayment,
//       date:date,
//       time:time,
//     };

//     if (type === 'Edit') {
//       dispatch(updateManege(newManage));
//     } else {
//       // dispatch(pushManage(newManage));
//     }

//     navigate('/manageDetails');
//   };

  

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="/manageDetails" maintitle="Carvaan" title="View Booking" breadcrumbItem={`View Booking`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`View`} Booking</CardTitle>
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="tripId">
                          Trip Id
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{manage.tripId}</CardTitle>
                         </Card>
                    </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="user">
                          User
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{manage.user}</CardTitle>
                         </Card>
                         </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="quantity">
                          Quantity
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{manage.quantity}</CardTitle>
  </Card>
                      </div>

                      

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="price">
                          Price
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{manage.price}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="discount">
                        Discount
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{manage.discount}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="coupon">
                          Coupon Code
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{manage.coupon}</CardTitle>
  </Card>
                      </div>

                      

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalAmount">
                          Total Amount
                        </label>{" "}
                        <Card body className="border">
                        <CardTitle className="h4">{manage.totalAmount}</CardTitle>
  </Card>
                      </div>



                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="modeOfPayment">
    Mode Of Payment
  </label>
  <Card body className="border">
                        <CardTitle className="h4">{manage.modeOfPayment}</CardTitle>
  </Card>
</div>


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="date">
                          Date
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{manage.date}</CardTitle>
  </Card>
                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="time">
                          Time
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{manage.time}</CardTitle>
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

export default ViewManageBooking;
