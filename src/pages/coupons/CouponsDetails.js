import React, { useEffect } from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popCoupons } from 'store/auth/user_admin_data/actions';

const CouponsDetails = () => {
 

  const dispatch=useDispatch()
  const handleRemoveCoupons = (sno) => {
    dispatch(popCoupons(sno));
  };
  const navigate=useNavigate();


const handleEdit=(sno)=>{
navigate(`/editCoupons/${sno}`)
  }
  const generateActionButtons = (row) => (
    <div>
      <Link to={`/viewCoupon/${row.sno}`}>
        <button className="btn btn-primary mx-2">
          <i className="ti-eye"></i>
        </button>
      </Link>
      <button className="btn btn-danger mx-2" onClick={() => handleRemoveCoupons(row.sno)}>
        <i className="ti-trash"></i>
      </button>
      <button className="btn btn-info mx-2" onClick={() => handleEdit(row.sno)}>
        <i className="ti-pencil-alt"></i>
      </button>
    </div>
  );


    const {couponsData} = useSelector((state) => state.CouponsReducers);
    

  const data = {
    columns: [
      {
        label: 'SNo',
        field: 'sno',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Coupons Name',
        field: 'couponsName',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Coupons Type',
        field: 'couponsType',
        sort: 'asc',
        width: 270,
      },
      // {
      //   label: 'Password',
      //   field: 'password',
      //   sort: 'asc',
      //   width: 200,
      // },
      {
        label: 'Coupons Discount',
        field: 'discount',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Coupons Status ',
        field: 'status',
        sort: 'asc',
        width: 200,
      },
     
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 200,
      },
    ],
    rows: couponsData.map((row) => ({
      ...row,
      action: generateActionButtons(row),
    })),
  };


  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="couponsDetails" maintitle="Carvaan" title="Coupons" breadcrumbItem="Coupons Details" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Coupons Details</CardTitle>
                  <MDBDataTable responsive bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CouponsDetails;
