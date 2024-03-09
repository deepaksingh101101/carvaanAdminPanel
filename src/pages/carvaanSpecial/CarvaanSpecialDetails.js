import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popCarvaan } from 'store/auth/user_admin_data/actions';

const CarvaanSpecialDetails = () => {

  const dispatch=useDispatch()
  const handleRemoveCarvaanSpecial = (sno) => {
    dispatch(popCarvaan(sno));//edit it 
  };

  const navigate=useNavigate();
  const handleEdit=(sno)=>{
    navigate(`/editCarvaan/${sno}`)
      }

      const generateActionButtons = (row) => (
        <div>
          <Link to={`/viewCarvaanSpecial/${row.sno}`}>
            <button className="btn btn-primary mx-2">
              <i className="ti-eye"></i>
            </button>
          </Link>
          <button className="btn btn-danger mx-2" onClick={() => handleRemoveCarvaanSpecial(row.sno)}>
            <i className="ti-trash"></i>
          </button>
          <button className="btn btn-info mx-2" onClick={() => handleEdit(row.sno)}>
            <i className="ti-pencil-alt"></i>
          </button>
        </div>
      );


      const {carvaanData} = useSelector((state) => state.CarvaanReducers);

    const data = {
        columns: [
        {
            label: "SNo",
            field: "sno",
            sort: "asc",
            width: 150,
            },
        {
            label: "From ( Arrival )",
            field: "from",
            sort: "asc",
            width: 150,
        },
        {
            label: "To ( Destination )",
            field: "to",
            sort: "asc",
            width: 150,
        },
          {
            label: "Start Date ",
            field: "startDate",
            sort: "asc",
            width: 150,
          },
          {
            label: "End Date ",
            field: "endDate",
            sort: "asc",
            width: 270,
          },
          {
            label: "Action",
            field: "action",
            sort: "asc",
            width: 200,
          },
        ],
        rows:  carvaanData.map((row) => ({
          ...row,
          action: generateActionButtons(row),
        })),
    }

    // ----------*********have to declare handleEdit, handleDelete functions************------------

  return (
    <React.Fragment>
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumbs link="/carvaanDetails" maintitle="Carvaan" title="Carvaan Special" breadcrumbItem="Carvaan Special Details" />

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle className="h4">Trips Details</CardTitle>
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

export default CarvaanSpecialDetails