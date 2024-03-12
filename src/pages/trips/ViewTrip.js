// CreateCustomerForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle ,Container , Form, 
CardImg} from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { getAllAdmins, getAllAgeRange, getAllMeals, getAllPoints, getAllThemes, getAllTransportationTypes, getPackage, get_All_Travel_Agents } from 'helpers/fakebackend_helper';
import { setAdminData, setTripData, storeAge, storeAgents, storeMeals, storePoints, storeTheme, storeTransportation } from 'store/auth/user_admin_data/actions';
import FsLightbox from "fslightbox-react";

const ViewTrip = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

 
  const [mealsOptions, setMealsOptions] = useState([])
  const [ageRanges, setAgeRanges] = useState([])
  const [transportationTypesState, setTransportationTypesState] = useState([])
  // const [travelAgents, setTravelAgents] = useState([])
  const [points, setPoints]=useState([])
  const [themes, setThemes]=useState([])
  const [loader, setLoader] = useState(true);
  const [message, setMessage] = useState("Something went wrong");
 const [tempTrip,setTempTrip]=useState([])

  const fetchOptions=async()=>{
    try {
     const meals= await getAllMeals();
     const ages= await getAllAgeRange();
     const agents=await get_All_Travel_Agents()
     const points=await getAllPoints();
     const theme=await getAllThemes();
    const transportationTypes=await getAllTransportationTypes()
    const tripData = await getPackage();
    let adminData = await getAllAdmins();
    dispatch(setAdminData(adminData));

    
    
    dispatch(setTripData(tripData));
      dispatch(storeMeals(meals))
      dispatch(storeAge(ages))
      dispatch(storeAgents(agents))
      dispatch(storePoints(points))
      dispatch(storeTransportation(transportationTypes))
      dispatch(storeTheme(theme))
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
  fetchOptions()
  }, [id])

  const { adminData } = useSelector((state) => state.AdminReducers);

  let { tripData } = useSelector((state) => state.TripReducers);



  const trip = tripData.find((trip) => trip.id == id);
  const foundAdmin = adminData.find((admin) => admin.id === trip?.created_by);




  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });


  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }
  

  let { agentsData } = useSelector((state) => state.AgentsReducers);

  
  const [selectedBanner, setSelectedBanner] = useState(null);


  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'; // or any placeholder you prefer
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Invalid date' : date.toISOString().split('T')[0];
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="/tripDetails" maintitle="Carvaan" title="Trip" breadcrumbItem={`View Trip`} />

          <Row>
            <Col className="col-12">
              <Card >
                <CardBody>
                  <CardTitle className="h4">{`View`} Trip</CardTitle>
                  
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">


                    <div className="mb-3 col-lg-12">
  <label className="form-label" htmlFor="tripBanner">
    Banner Pictures
  </label>{" "}
  <div className="mb-5">
    <Form>
      <div className="d-flex dropzone-previews mt-3" id="file-previews">
        {trip && trip.images.map((image, index) => (
          <Card key={index} className="mt-1  d-flex justify-content-center align-items-center col-lg-3 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
            <div className="p-2 d-flex">
              <Row className=" d-flex align-items-center justify-content-center">
                <Col className="col-auto d-flex align-items-center justify-content-center">
                  <img
                    style={{ height: "200px", width: "250px" }}
                    data-dz-thumbnail=""
                    className="avatar-sm rounded bg-light object-fit-cover"
                    alt={`Banner ${index}`}
                    src={image}
                    onClick={() => openLightboxOnSlide(index + 1)}
                  />
                </Col>
              </Row>
            </div>
          </Card>
        ))}
      </div>
    </Form>
  </div>
</div>


<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="headline">
    Trip Title
  </label>
  <Card body className="border">
    <CardTitle className="h4">{trip?.title}</CardTitle>
  </Card>
</div>

                      {/* <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="pdf">
                        PDF-Details  
                        </label>{" "}
                        <input
                          type="file"
                          className="form-control"
                          id="pdf"
                          required
                          accept=".pdf"

                        />
                      </div> */}


                      <div className="mb-3 col-lg-3">
                        <label className="  form-label" htmlFor="from">
                          Starting Point
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip?.starting_point_id.name}</CardTitle>
  </Card>

                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className=" form-label" htmlFor="to">
                          Ending Point
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip?.ending_point_id.name}</CardTitle>
  </Card>

                      </div>

                       <div className="mb-3 col-lg-3">
                        <label className=" form-label" htmlFor="start_Date">
                          Start Date
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{formatDate(trip?.start_date)}</CardTitle>
                        </Card>

                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="travel_agent">
                          Travel Agent
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{agentsData.find(agent => agent.id == trip.created_by)?.name}</CardTitle>
  </Card>

                      </div>


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="created_by">
                          Created By
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{foundAdmin?.name}</CardTitle>
  </Card>

                      </div>

                      {/* <div className="mb-3 col-lg-3">
                        <label className=" form-label" htmlFor="start_time">
                          Start Time
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.startTime}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className=" form-label" htmlFor="end_time">
                          End Time
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.endTime}</CardTitle>
  </Card>

                      </div> */}

                      <div className="mb-3 col-lg-3">
                        <label className=" form-label" htmlFor="duration">
                          Duration Days
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{`${trip?.duration_days} Days ${trip?.duration_days - 1} Night`}</CardTitle>
  </Card>

                      </div>

                     

                      

<div className="mb-3 col-lg-3">
  <label className=" form-label" htmlFor="total_seats">
    Total Number Of Seats Left
  </label>{" "}
  <Card body className="border">
  <CardTitle className="h4">{trip?.seats_left}</CardTitle>
  </Card>

</div>





                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="price">
                          Price Per Person
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip?.price}</CardTitle>
  </Card>

                      </div>

                      {/* <div className="mb-3 col-lg-3">
  <label className=" form-label" htmlFor="accommodation">
    Accommodation
  </label>
  <Card body className="border">
  <CardTitle className="h4">{trip.accommodation}</CardTitle>
  </Card>

</div> */}


<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="transportation">
    Transportation
  </label>
  <Card body className="border">
  <CardTitle className="h4">{trip?.transportation_type_id.type_name}</CardTitle>
  </Card>

</div>



<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="trip_captain_required">
  Trip Captain Required
  </label>
  <Card body className="border">
  <CardTitle className="h4">{trip?.trip_captain_required===true?"Yes":"NO"}</CardTitle>
  </Card>

</div>

<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="pick_up_location">
  Pickup Location
  </label>
  <Card body className="border">
  <CardTitle className="h4">{trip?.pick_up_location}</CardTitle>
  </Card>

</div>

<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="drop_location">
  Drop Location
  </label>
  <Card body className="border">
  <CardTitle className="h4">{trip?.drop_location}</CardTitle>
  </Card>

</div>


<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="is_handpicked">
  Is HandPicked
  </label>
  <Card body className="border">
  <CardTitle className="h4">{trip?.is_handpicked?"Yes":"No"}</CardTitle>
  </Card>

</div>

<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="meal_type_id">
  Meal Type
  </label>
  <Card body className="border">
  <CardTitle className="h4">{trip?.meal_type_id.type_name}</CardTitle>
  </Card>

</div>



<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="flights_inclusive">
   Flights Inclusive
  </label>
  <Card body className="border">
  <CardTitle className="h4">{trip?.flights_inclusive===true?"Yes":"No"}</CardTitle>
  </Card>

</div>


<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="transportation">
    Created At
  </label>
  <Card body className="border">
  <CardTitle className="h4">{formatDate(trip?.created_at)}</CardTitle>
  </Card>

</div>


                   

                      {/* <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalLunch">
                        Total Lunch
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.totalLunch}</CardTitle>
  </Card>

                      </div> */}

                      {/* <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalDinner">
                        Total Dinner
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.totalDinner}</CardTitle>
  </Card>

                      </div> */}
                     
                      {/* <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="localGuide">
                         Local Guide
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.localGuide}</CardTitle>
  </Card>

                      </div> */}


                      {/* <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="thingsToCarry">
                          Things To Carry
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.thingsToCarry}</CardTitle>
  </Card>

                      </div> */}



<div className="mb-3 col-lg-12">
  <label className="form-label" htmlFor="day_wise_itinerary">
    Day Wise Detailed Itinerary
  </label>
  <Card body className="border">
    {trip?.day_wise_itenary.map((dayDetail, index) => (
      <div key={index} className='d-flex align-items-center'>
        <CardTitle className="h4 mb-0">Day {index + 1}</CardTitle>
        <CardBody className='fs-6'>
  {/* {dayDetail.split(':').length > 1 ? dayDetail.split(':')[1].trim() : 'N/A'} */}
  {dayDetail}
</CardBody>      </div>
    ))}
  </Card>
</div>


                      <div className="mb-3 col-lg-12">
                        <label className="form-label" htmlFor="description">
                        Description
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip?.description}</CardTitle>
  </Card>
                      </div>



                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="inclusives">
    Inclusion
  </label>
  <Card body className="border">
    {trip?.inclusives && trip.inclusives.map((inclusive, index) => (
      <div key={index} className='d-flex align-items-center' >
        <CardTitle className="h4 ms-2 ">{index+1}</CardTitle>
        <CardTitle className="h4 ms-2 ">{inclusive}</CardTitle>
      </div>
    ))}
  </Card>
</div>


<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="exclusives">
    Exclusion
  </label>
  <Card body className="border">
    {trip?.exclusives && trip.exclusives.map((exclusive, index) => (
      <div key={index} className='d-flex align-items-center' >
        <CardTitle className="h4 ms-2 ">{index+1}</CardTitle>
        <CardTitle className="h4 ms-2 ">{exclusive}</CardTitle>
      </div>
    ))}
  </Card>
</div>



<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="packing_guide">
  Packing Guide
  </label>
  <Card body className="border">
    {trip?.packing_guide && trip.packing_guide.map((guide, index) => (
      <div key={index} className='d-flex align-items-center' >
        <CardTitle className="h4 ms-2 ">{index+1}</CardTitle>
        <CardTitle className="h4 ms-2 ">{guide}</CardTitle>
      </div>
    ))}
  </Card>
</div>

<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="themes">
  Themes
  </label>
  <Card body className="border">
    {trip?.themes && trip.themes.map((theme, index) => (
      <div key={index} className='d-flex align-items-center' >
        <CardTitle className="h4 ms-2 ">{index+1}</CardTitle>
        <CardTitle className="h4 ms-2 ">{theme.name}</CardTitle>
      </div>
    ))}
  </Card>
</div>

   <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="accomodation_type_id">
                        Accomodation Type
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip?.accomodation_type_id.type_name}</CardTitle>
  </Card>

                      </div>


                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="age_ranges">
  Age Ranges
  </label>
  <Card body className="border">
    {trip?.age_ranges && trip.age_ranges.map((age_range, index) => (
      <div key={index} className='d-flex align-items-center' >
        <CardTitle className="h4 ms-2 ">*</CardTitle>
        <CardTitle className="h4 ms-2 ">{age_range.display_name}</CardTitle>
      </div>
    ))}
  </Card>
</div>

<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="middle_points">
  Middle Points
  </label>
  <Card body className="border">
    {trip?.middle_points && trip.middle_points.map((middle_point, index) => (
      <div key={index} className='d-flex align-items-center' >
        <CardTitle className="h4 ms-2 ">{index+1}</CardTitle>
        <CardTitle className="h4 ms-2 ">{middle_point.name}</CardTitle>
      </div>
    ))}
  </Card>
</div>


<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="facilities">
  Facilities Included
  </label>
  <Card body className="border">
    {trip?.facilities && trip.facilities.map((facilitie, index) => (
      <div key={index} className='d-flex align-items-center' >
        <CardTitle className="h4 ms-2 ">{index+1}</CardTitle>
        <CardTitle className="h4 ms-2 ">{facilitie}</CardTitle>
      </div>
    ))}
  </Card>
</div>



                    </div>


                    
                 
                  </div>

                 
                </CardBody>
              </Card>
            </Col>
          </Row>
          <FsLightbox
  toggler={lightboxController.toggler}
  sources={trip?.images.map(banner => banner)}
  types={trip?.images.map(banner => 'image')}
  slide={lightboxController.slide}
/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewTrip;
