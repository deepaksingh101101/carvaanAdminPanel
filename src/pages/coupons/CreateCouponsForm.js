// EditAdminDetailsForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle , FormGroup} from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { pushCoupons, updateCoupons } from '../../store/auth/user_admin_data/actions';
import { useNavigate, useParams } from 'react-router-dom';

const CreateCouponsForm = ({ type }) => {
  const dispatch = useDispatch();
  const { sno } = useParams();

  let { couponsData } = useSelector((state) => state.CouponsReducers);

  const coupons = couponsData.find((coupons) => coupons.sno == sno);

  const [couponsName, setCouponsName] = useState('');
  const [couponsStartDate, setCouponsStartDate] = useState('');
  const [couponsEndDate, setCouponsEndDate] = useState('');
  const [couponsType, setCouponsType] = useState('');
  const [discount, setDiscount] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [status, setStatus] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (coupons) {
      setCouponsName(coupons.couponsName || '');
      setCouponsStartDate(coupons.couponsStartDate || '');
      setCouponsEndDate(coupons.couponsEndDate || '');
      setCouponsType(coupons.couponsType || '');
      setDiscount(coupons.discount || '');
      setMinAmount(coupons.minAmount || '');
      setStatus(coupons.status || '');
    }
  }, [coupons]);

  const handleAddCouponsClick = () => {
    const newAdmin = {
      sno: type === "Edit" ? coupons.sno : (couponsData.length > 0 ? couponsData[couponsData.length - 1].sno + 1 : 1),
      couponsName,
      couponsStartDate,
      couponsEndDate,
      couponsType,
      discount,
      minAmount,
      status,
    };
    if (type === 'Edit') {
      dispatch(updateCoupons(newAdmin));
    } else {
      dispatch(pushCoupons(newAdmin));
    }
    navigate('/couponsDetails');
  };
 

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="couponsDetails" maintitle="Carvaan" title="Admin" breadcrumbItem={`${type} Admin`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`${type} Coupons`}</CardTitle>
                  <form onSubmit={handleAddCouponsClick}>
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="couponsName">
                          Coupons Name
                        </label>
                        <input
                          type="text"
                          id="couponsName"
                          value={couponsName}
                          onChange={(e) => setCouponsName(e.target.value)}
                          className="form-control"
                          placeholder="Enter Coupons Name"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="couponsStartDate">
                        Coupons Start Date
                        </label>
                        <input
                          type="date"
                          id="couponsStartDate"
                          value={couponsStartDate}
                          onChange={(e) => setCouponsStartDate(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="couponsEndDate">
                        Coupons End Date
                        </label>
                        <input
                          type="date"
                          id="couponsEndDate"
                          value={couponsEndDate}
                          onChange={(e) => setCouponsEndDate(e.target.value)}
                          className="form-control"
                          placeholder="Enter Coupons EndDate"
                          required
                        />
                      </div>

                      

                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="couponsType">
    Coupon Category
  </label>
  <select
    id="couponCategory"
    value={couponsType}
    onChange={(e) => setCouponsType(e.target.value)}
    className="form-select"
    required
  >
    <option value="">Select Category</option>
    <option value="internal">Internal</option>
    <option value="affiliate">Affiliate</option>
  </select>
</div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="discount">
                        Discount (%)
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
                        <label className="form-label" htmlFor="minAmount">
                        Minimum Amount
                        </label>
                        <input
                          type="number"
                          id="minAmount"
                          value={minAmount}
                          onChange={(e) => setMinAmount(e.target.value)}
                          className="form-control"
                          placeholder="Enter Minimum Amount"
                          required
                        />
                      </div>

                      

                     



                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="status">
    Status
  </label>
  <select
    id="status"
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    className="form-select"
    required
  >
    <option value="">Select Status</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
  </select>
</div>


                    

              
                    </div>


                    <button type='submit' className="mt-1 btn btn-success">
                      {type === 'Edit' ? 'Update Coupons' : 'Create Coupons'}
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

export default CreateCouponsForm;
