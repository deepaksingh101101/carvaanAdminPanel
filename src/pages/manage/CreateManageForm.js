// CreateCustomerForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Form,Label, FormGroup } from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pushManage, updateManege } from 'store/auth/user_admin_data/actions';

const CreateManageForm = ({ type }) => {
  const dispatch = useDispatch();
  const { sno } = useParams();

  let { manageData } = useSelector((state) => state.ManageReducers);
  const manage = manageData.find((manage) => manage.sno == sno);

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

  const navigate = useNavigate();

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

  const handleAddManageClick = () => {
    const newManage = {
      sno: type === "Edit" ? manage.sno : (manageData.length > 0 ? manageData[manageData.length - 1].sno + 1 : 1),
      tripId:tripId,
      user:user,
      quantity:quantity,
      discount:discount,
      price:price,
      coupon:coupon,
      totalAmount:totalAmount,
      modeOfPayment:modeOfPayment,
      date:date,
      time:time,
    };

    if (type === 'Edit') {
      dispatch(updateManege(newManage));
    } else {
      // dispatch(pushManage(newManage));
    }

    navigate('/manageDetails');
  };

  

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="manageDetails" maintitle="Carvaan" title="Manage Booking" breadcrumbItem={`${type} Booking`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`${type}`} Booking</CardTitle>
                  <form onSubmit={handleAddManageClick}>
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">
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
                        <label className="form-label" htmlFor="user">
                          User
                        </label>
                        <input
                          type="text"
                          id="user"
                          value={user}
                          onChange={(e) => setUser(e.target.value)}
                          className="form-control"
                          placeholder="Enter User"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="quantity">
                          Quantity
                        </label>
                        <input
                          type="number"
                          id="quantity"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="form-control"
                          placeholder="Enter Quantity"
                          required
                        />
                      </div>

                      

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="price">
                          Price
                        </label>
                        <input
                          type="number"
                          id="price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="form-control"
                          placeholder="Enter Price"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="discount">
                        Discount
                        </label>
                        <input
                          type="number"
                          id="discount"
                          value={discount}
                          onChange={(e) => setDiscount(e.target.value)}
                          className="form-control"
                          placeholder="Enter Discount"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="coupon">
                          Coupon Code
                        </label>
                        <input
                          type="text"
                          id="coupon"
                          value={coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                          className="form-control"
                          placeholder="Enter Coupon Code"
                          required
                        />
                      </div>

                      

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalAmount">
                          Total Amount
                        </label>{" "}
                        <input
                          type="number"
                          className="form-control"
                          id="totalAmount"
                          value={totalAmount}
                          onChange={(e) => setTotalAmount(e.target.value)}
                          required
                        />
                      </div>



                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="modeOfPayment">
    Mode Of Payment
  </label>
  <select
    id="modeOfPayment"
    value={modeOfPayment}
    onChange={(e) => setModeOfPayment(e.target.value)}
    className="form-select"
    required
  >
    <option value="">Select mode of payment</option>
    <option value="cash">Cash</option>
    <option value="credit_card">Credit Card</option>
    <option value="debit_card">Debit Card</option>
    <option value="paypal">PayPal</option>
    {/* Add more options as needed */}
  </select>
</div>


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="date">
                          Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="time">
                          Time
                        </label>
                        <input
                          type="time"
                          id="time"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>

              

                    </div>


                    
                  <button type='submit' className="mt-1 btn btn-success">
  {type === 'Edit' ? 'Update Booking' :""}
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

export default CreateManageForm;
