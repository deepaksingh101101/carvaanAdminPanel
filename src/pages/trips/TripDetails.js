import React, { useEffect, useState } from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popTrip, setTripData } from 'store/auth/user_admin_data/actions';
import Loader from 'components/loader/Loader';
import { SomethingAlertFalse, SomethingAlertTrue } from 'store/components/actions';
import Alert from 'components/alert/Alert';
import DataTable from 'react-data-table-component';
import { getPackage } from 'helpers/fakebackend_helper';

const TripDetails = () => {

  const dispatch=useDispatch()
  const [loader, setLoader] = useState(true);
  const [message, setMessage] = useState("Something went wrong");
 const [tempTrip,setTempTrip]=useState([])

  const fetchData = async () => {
    try {
      let tripData = await getPackage();
      dispatch(setTripData(tripData));
      setTempTrip(tripData); 
      setLoader(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    setLoader(true);
    fetchData();
  }, []);


  const handleRemoveTrip = async(id) => {
    try {
      // let res = await deleteTrip(id);
      dispatch(popTrip(id));
       setTempTrip((tempTrip) => tempTrip.filter(trip => trip.id !== id));
      console.log(res);
    } catch (error) {
      setMessage(error.response.data.message ? error.response.data.message : "Something went wrong");
      dispatch(SomethingAlertTrue());
      setTimeout(() => {
        dispatch(SomethingAlertFalse());
        setMessage("Something went wrong");
      }, 2000);
    }
  };

  const navigate=useNavigate();
  // const handleEdit=(sno)=>{
  //   navigate(`/editTrip/${sno}`)
  //     }

      const generateActionButtons = (row) => (
        <div>
          <Link to={`/viewTrip/${row.id}`}>
            <button className="btn btn-primary mx-2">
              <i className="ti-eye"></i>
            </button>
          </Link>
          <button className="btn btn-danger mx-2" onClick={() => handleRemoveTrip(row.id)}>
            <i className="ti-trash"></i>
          </button>
          <Link to={`/editTrip/${row.id}`}>
          <button className="btn btn-info mx-2">
            <i className="ti-pencil-alt"></i>
          </button>
          </Link>
        </div>
      );


      const {tripData} = useSelector((state) => state.TripReducers);

    // const data = {
    //     columns: [
    //     {
    //         label: "SNo",
    //         field: "sno",
    //         sort: "asc",
    //         width: 150,
    //         },
    //     {
    //         label: "From ( Arrival )",
    //         field: "from",
    //         sort: "asc",
    //         width: 150,
    //     },
    //     {
    //         label: "To ( Destination )",
    //         field: "to",
    //         sort: "asc",
    //         width: 150,
    //     },
    //       {
    //         label: "Start Date ",
    //         field: "startDate",
    //         sort: "asc",
    //         width: 150,
    //       },
    //       {
    //         label: "End Date ",
    //         field: "endDate",
    //         sort: "asc",
    //         width: 270,
    //       },
    //       {
    //         label: "Action",
    //         field: "action",
    //         sort: "asc",
    //         width: 200,
    //       },
    //     ],
    //     rows:  tripData.map((row) => ({
    //       ...row,
    //       action: generateActionButtons(row),
    //     })),
    // }



    const columns=[
      {
        name:'sno',
        selector:row=>row.sno,
        sortable:true,
      },
      {
        name:'Trip Title',
        selector:row=>row.title,
        sortable:true,
      },
      {
        name:'Company Name',
        selector:row=>row.travel_agent_id.name,
        sortable:true,
      },
      {
        name:'Start Date',
        selector:row=>row.start_date,
        sortable:true,
      },
      {
        name:'Seats Left',
        selector:row=>row.seats_left,
        sortable:true,
      },
      {
        name:'Actions',
        selector:row=>row.actions,
        sortable:true,
        width:"auto"
      },

    ]

    const data=tripData.map((row,index)=>({
      ...row,
      sno:index+1,
      actions:generateActionButtons(row),
    }));

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
                {loader && <Loader/>}
                {!loader && 
                    <div style={{minHeight:"80vh"}}  >
                      <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        responsive
                      />
                    </div>
                  }
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