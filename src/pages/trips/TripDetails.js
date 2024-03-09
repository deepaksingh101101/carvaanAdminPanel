import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popTrip } from 'store/auth/user_admin_data/actions';

const TripDetails = () => {

  const dispatch=useDispatch()
  const handleRemoveTrip = (sno) => {
    dispatch(popTrip(sno));
  };

  const navigate=useNavigate();
  const handleEdit=(sno)=>{
    navigate(`/editTrip/${sno}`)
      }

      const generateActionButtons = (row) => (
        <div>
          <Link to={`/viewTrip/${row.sno}`}>
            <button className="btn btn-primary mx-2">
              <i className="ti-eye"></i>
            </button>
          </Link>
          <button className="btn btn-danger mx-2" onClick={() => handleRemoveTrip(row.sno)}>
            <i className="ti-trash"></i>
          </button>
          <button className="btn btn-info mx-2" onClick={() => handleEdit(row.sno)}>
            <i className="ti-pencil-alt"></i>
          </button>
        </div>
      );


      const {tripData} = useSelector((state) => state.TripReducers);

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
        rows:  tripData.map((row) => ({
          ...row,
          action: generateActionButtons(row),
        })),
    }

    // ----------*********have to declare handleEdit, handleDelete functions************------------

  return (
    <React.Fragment>
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumbs maintitle="Carvaan" title="Trips" breadcrumbItem="Trip Details" />

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

export default TripDetails