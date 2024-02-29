import React, { useEffect } from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popAdmin } from 'store/auth/user_admin_data/actions';

const AdminDetails = () => {
 

  const dispatch=useDispatch()
  const handleRemoveAdmin = (sno) => {
    dispatch(popAdmin(sno));
  };
  const navigate=useNavigate();


const handleEdit=(sno)=>{
navigate(`/editAdmin/${sno}`)
  }
  const generateActionButtons = (row) => (
    <div>
      <Link to={`/adminProfile/${row.sno}`}>
        <button className="btn btn-primary mx-2">
          <i className="ti-eye"></i>
        </button>
      </Link>
      <button className="btn btn-danger mx-2" onClick={() => handleRemoveAdmin(row.sno)}>
        <i className="ti-trash"></i>
      </button>
      <button className="btn btn-info mx-2" onClick={() => handleEdit(row.sno)}>
        <i className="ti-pencil-alt"></i>
      </button>
    </div>
  );


    const {adminData} = useSelector((state) => state.AdminReducers);
    

  const data = {
    columns: [
      {
        label: 'SNo',
        field: 'sno',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Email',
        field: 'email',
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
        label: 'Mobile',
        field: 'mobile',
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
    rows: adminData.map((row) => ({
      ...row,
      action: generateActionButtons(row),
    })),
  };


  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="/adminDetails" maintitle="Carvaan" title="Admin" breadcrumbItem="Admin Details" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Admin Details</CardTitle>
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

export default AdminDetails;
