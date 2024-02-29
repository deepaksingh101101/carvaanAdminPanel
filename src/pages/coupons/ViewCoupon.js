// EditAdminDetailsForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle , FormGroup} from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const ViewCoupon = ({ type }) => {
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

  
 

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="couponsDetails" maintitle="Carvaan" title="Coupons" breadcrumbItem={`View Coupon`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`View Coupon`}</CardTitle>
                  
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="couponsName">
                          Coupons Name
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{couponsName}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="couponsStartDate">
                        Coupons Start Date
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{couponsStartDate}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="couponsEndDate">
                        Coupons End Date
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{couponsEndDate}</CardTitle>
  </Card>
                      </div>

                      

                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="couponsType">
    Coupon Category
  </label>
  <Card body className="border">
    <CardTitle className="h4">{couponsType}</CardTitle>
  </Card>
</div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="discount">
                        Discount (%)
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{discount}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="minAmount">
                        Minimum Amount
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{minAmount}</CardTitle>
  </Card>
                      </div>

                      

                     



                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="status">
    Status
  </label>
  <Card body className="border">
    <CardTitle className="h4">{status}</CardTitle>
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

export default ViewCoupon;
