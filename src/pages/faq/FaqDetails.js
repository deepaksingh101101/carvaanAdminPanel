import React, { useEffect } from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
// import { MDBDataTable } from 'mdbreact';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popFaq } from 'store/auth/user_admin_data/actions';

const FaqDetails = () => {
 

  const dispatch=useDispatch()
  const handleRemoveFaq = (sno) => {
    dispatch(popFaq(sno));
  };
  const navigate=useNavigate();


const handleEdit=(sno)=>{
navigate(`/editFaq/${sno}`)
  }
  const generateActionButtons = (row) => (
    <div>
      <Link to={`/viewFaq/${row.sno}`}>
        <button className="btn btn-primary mx-2">
          <i className="ti-eye"></i>
        </button>
      </Link>
      <button className="btn btn-danger mx-2" onClick={() => handleRemoveFaq(row.sno)}>
        <i className="ti-trash"></i>
      </button>
      <button className="btn btn-info mx-2" onClick={() => handleEdit(row.sno)}>
        <i className="ti-pencil-alt"></i>
      </button>
    </div>
  );


    const {faqData} = useSelector((state) => state.FaqReducers);
    

  const data = {
    columns: [
      {
        label: 'SNo',
        field: 'sno',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Question',
        field: 'question',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Answer',
        field: 'answer',
        sort: 'asc',
        width: 270,
      }
    ,
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 200,
      },
    ],
    rows: faqData.map((row) => ({
      ...row,
      action: generateActionButtons(row),
    })),
  };


  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="/faqDetails" maintitle="Carvaan" title="FAQ" breadcrumbItem="FAQ Details" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">FAQ Details</CardTitle>
                  {/* <MDBDataTable responsive bordered data={data} /> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FaqDetails;
