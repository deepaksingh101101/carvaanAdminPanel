// CreateCustomerForm.js
import React, { useEffect, useState } from 'react';
import {Badge, Row, Col, Card, CardBody, CardTitle ,Container , Form} from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pushTrip, updateTrip } from 'store/auth/user_admin_data/actions';
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";

// Form validation
import * as Yup from 'yup';
import { useFormik } from 'formik';


const CreateTripForm = ({ type }) => {
  const dispatch = useDispatch();
  const { sno } = useParams();

  let { tripData } = useSelector((state) => state.TripReducers);
  const trip = tripData.find((trip) => trip.sno == sno);

  const [tripImage1, setTripImage1] = useState(null);
  const [tripImage2, setTripImage2] = useState(null);
  const [tripImage3, setTripImage3] = useState(null);
  const [headline, setHeadline] = useState('');
  const [itinerary, setItinerary] = useState('');
//   const [detailedPdf, setDetailedPdf] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [duration, setDuration] = useState('');
  const [inclusion, setInclusion] = useState('');
  const [exclusion, setExclusion] = useState('');
  const [totalSeats, setTotalSeats] = useState('');
  const [price, setPrice] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [transportation, setTransportation] = useState('');
  const [totalBreakfast, setTotalBreakfast] = useState('');
  const [totalLunch, setTotalLunch] = useState('');
  const [totalDinner, setTotalDinner] = useState('');
  const [sightSeeing, setSightSeeing] = useState('');
  const [localGuide, setLocalGuide] = useState('');
  const [thingsToCarry, setThingsToCarry] = useState('');
  const [tripBanner, setTripBanner] = useState(null);


  const navigate = useNavigate();

  const [tripCreate, setTripCreate] = useState([]);

const [middlePointsSize, setMiddlePointsSize] = useState(8)
const [top_facilities_size, setTop_facilities_size] = useState(6)

const [packing_guide_size, setPacking_guide_size] = useState(8)
const [middle_points_array, setMiddle_points_array] = useState([])
const [inclusive_array, setInclusive_array] = useState([])
const [exclusive_array, setExclusive_array] = useState([])

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      company_name: tripCreate.company_name || "",
      company_overview: tripCreate.company_overview || "",
      trip_title:tripCreate.trip_title || "",
      start_point: tripCreate.start_point || "",
      end_point: tripCreate.end_point || "",
      middle_points: tripCreate.middle_points || []  ,
      start_date:tripCreate.start_date || "",
      end_date:tripCreate.end_date || "",
      price_per_person:tripCreate.price_per_person || "",
// trips photo
    // itineary
    duration: tripCreate.duration || [],
    exclusion: tripCreate.exclusion || [],
    inclusion: tripCreate.inclusion || [], 
    things_to_carry:tripCreate.things_to_carry || [],
    seats_left: tripCreate.seats_left || "",
    total_seats: tripCreate.total_seats || "",
      room_occupancy: tripCreate.room_occupancy || "",
      no_of_meal: tripCreate.no_of_meal || "",
      age_range: tripCreate.age_range || [],
      is_trip_captain: tripCreate.is_trip_captain || "",
      accommodation: tripCreate.accommodation || "",//stay options
      type_of_transportation: tripCreate.type_of_transportation || "",
      food_options: tripCreate.food_options|| "",
      theme: tripCreate.theme|| "",
      
// fields from frontend
 offer_price:tripCreate.offer_price || "",
      overview:tripCreate.overview || "",
      full_address:tripCreate.full_address || "",
      top_facilities: tripCreate.top_facilities || [], // Array with default size or length of tripCreate.middle_points filled with empty strings
       packing_guide: tripCreate.packing_guide || [] ,
       
      pickup_location:tripCreate.pickup_location || "",
      drop_location:tripCreate.drop_location || "",
      pickup_time:tripCreate.pickup_time || "",
      drop_time:tripCreate.drop_time || "",
    }
  })
  
// add middle points
  const handleAddMiddlePoints=(e)=>{
   e.preventDefault(validation.values.middle_points.length);
   console.log()
if(validation.values.middle_points.length==0){
// show a error message  for not filling the field
}
else{
  middle_points_array.push(
    validation.values.middle_points
   )
   validation.setFieldValue('middle_points', ""); 
}

   
  }

// add inclusion 
const handleAddExclusion=(e)=>{
  e.preventDefault(validation.values.exclusion.length);
  console.log()
if(validation.values.exclusion.length==0){
// show a error message  for not filling the field
}
else{
  exclusive_array.push(
   validation.values.exclusion
  )
  validation.setFieldValue('exclusion', ""); 
}  
 }

// add  exclusion 
 const handleAddInclusion=(e)=>{
  e.preventDefault(validation.values.inclusion.length);
  console.log()
if(validation.values.inclusion.length==0){
// show a error message  for not filling the field
}
else{
  inclusive_array.push(
   validation.values.inclusion
  )
  validation.setFieldValue('inclusion', ""); 
}
 }

 const handleDeleteInclusion = (i) => {
  const newArray = [...inclusive_array]; // Create a copy of the array
  newArray.splice(i, 1); // Remove one element at index i
  setInclusive_array(newArray); // Update the state with the new array
}

const handleDeleteExclusion = (i) => {
  const newArray = [...exclusive_array]; // Create a copy of the array
  newArray.splice(i, 1); // Remove one element at index i
  setExclusive_array(newArray); // Update the state with the new array
}

  const handleDeleteMiddlePoints = (i) => {
    const newArray = [...middle_points_array]; // Create a copy of the array
    newArray.splice(i, 1); // Remove one element at index i
    setMiddle_points_array(newArray); // Update the state with the new array
  }
  




  // useEffect(() => {
  //   if (trip) {
  //     setTripBanner(trip.tripBanner || '');
  //     setTripImage1(trip.tripImage1 || '');
  //     setTripImage2(trip.tripImage2 || '');
  //     setTripImage3(trip.tripImage3 || '');
  //     setHeadline(trip.headline || '');
  //     setItinerary(trip.itinerary || '');
  //     setFrom(trip.from || '');
  //     setTo(trip.to || '');
  //     setStartDate(trip.startDate || '');
  //     setEndDate(trip.endDate || '');
  //     setStartTime(trip.startTime || '');
  //     setEndTime(trip.endTime || '');
  //     setDuration(trip.duration || '');
  //     setTotalSeats(trip.totalSeats || '');
  //     setPrice(trip.price || '');
  //     setAccommodation(trip.accommodation || '');
  //     setTransportation(trip.transportation || '');
  //     setTotalBreakfast(trip.totalBreakfast || '');
  //     setTotalLunch(trip.totalLunch || '');
  //     setTotalDinner(trip.totalDinner || '');
  //     setSightSeeing(trip.sightSeeing || '');
  //     setLocalGuide(trip.localGuide || '');
  //     setThingsToCarry(trip.thingsToCarry || '');
  //   //   setDetailedPdf(trip.detailedPdf || '');
  //     setInclusion(trip.inclusion || '');
  //     setExclusion(trip.exclusion || '');
  //     setSelectedBanner(trip.selectedBanner || '');
      
  //   }
  // }, [trip]);

  // const handleAddTripClick = () => {
  //   const newTrip = {
  //     sno: type === "Edit" ? trip.sno : (tripData.length > 0 ? tripData[tripData.length - 1].sno + 1 : 1),
  //     selectedBanner:selectedBanner,
  //     tripImage1:tripImage1,
  //     tripImage2:tripImage2,
  //     tripImage3:tripImage3,
  //     headline:headline,
  //     itinerary:itinerary,
  //     from:from,
  //     to:to,
  //     startDate:startDate,
  //     endDate:endDate,
  //     startTime:startTime,
  //     endTime:endTime,
  //     duration:duration,
  //     totalSeats:totalSeats,
  //     price:price,
  //     accommodation:accommodation,
  //     transportation:transportation,
  //     totalBreakfast:totalBreakfast,
  //     totalLunch:totalLunch,
  //     totalDinner:totalDinner,
  //     sightSeeing:sightSeeing,
  //     localGuide:localGuide,
  //     thingsToCarry:thingsToCarry,
  //     inclusion:inclusion,
  //     exclusion:exclusion
  //   };

  //   if (type === 'Create') {
  //     dispatch(pushTrip(newTrip));
  //   } else {
  //     dispatch(updateTrip(newTrip));
  //   }

  //   navigate('/tripDetails');
  // };


  // const [selectedBanner, setSelectedBanner] = useState(null);

  // function handleAcceptedBanner(file) {
  //   Object.assign(file, {
  //     preview: URL.createObjectURL(file),
  //     formattedSize: formatBytes(file.size),
  //   });
  //   setSelectedBanner(file);
  // }
 
  // function handleAcceptedTripImage1(file) {
  //   Object.assign(file, {
  //     preview: URL.createObjectURL(file),
  //     formattedSize: formatBytes(file.size),
  //   });
  //   setTripImage1(file);
  // }
  // function handleAcceptedTripImage2(file) {
  //   Object.assign(file, {
  //     preview: URL.createObjectURL(file),
  //     formattedSize: formatBytes(file.size),
  //   });
  //   setTripImage2(file);
  // }
  // function handleAcceptedTripImage3(file) {
  //   Object.assign(file, {
  //     preview: URL.createObjectURL(file),
  //     formattedSize: formatBytes(file.size),
  //   });
  //   setTripImage3(file);
  // }

  // function formatBytes(bytes, decimals = 2) {
  //   if (bytes === 0) return "0 Bytes";
  //   const k = 1024;
  //   const dm = decimals < 0 ? 0 : decimals;
  //   const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  //   const i = Math.floor(Math.log(bytes) / Math.log(k));
  //   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  // }

  // function handleFileInputChange(event) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     handleAcceptedBanner(file);
  //   }
  // }


  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Carvaan" title="Trip" breadcrumbItem={`${type} Trip`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`${type}`} Trip</CardTitle>
                  <form
                   onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                  }}
                  >
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">


{/* 
<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="tripBanner">
        Banner Picture 
      </label>{" "}
      <div className="mb-5">
        <Form>
          <Dropzone  //onChange={handleFileInputChange}
            onDrop={acceptedBanner => {
              handleAcceptedBanner(acceptedBanner[0]); // Only first file is considered
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div  className="dropzone  d-flex flex-column justify-content-center align-items-center" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="mb-3">
                  <i className="mdi mdi-cloud-upload display-6  text-muted"></i>
                </div>
                <h6>Drop files here or click to upload.</h6>
              </div>
            )}
          </Dropzone>
          <div className="dropzone-previews mt-3" id="file-previews">
            {selectedBanner && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        height="80"
                        className="avatar-sm rounded bg-light"
                        alt={selectedBanner.name}
                        src={selectedBanner.preview}
                      />
                    </Col>
                    <Col>
                      <Link to="#" className="text-muted font-weight-bold">
                        {selectedBanner.name}
                      </Link>
                      <p className="mb-0">
                        <strong>{selectedBanner.formattedSize}</strong>
                      </p>
                    </Col>
                  </Row>
                </div>
              </Card>
            )}
          </div>
        </Form>
  </div>
</div>
<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="tripImage1">
        Trip Image 1 
      </label>{" "}
      <div className="mb-5">
        <Form>
          <Dropzone  //onChange={handleFileInputChange}
            onDrop={acceptedTripImage1 => {
              handleAcceptedTripImage1(acceptedTripImage1[0]); // Only first file is considered
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div  className="dropzone  d-flex flex-column justify-content-center align-items-center" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="mb-3">
                  <i className="mdi mdi-cloud-upload display-6  text-muted"></i>
                </div>
                <h6>Drop files here or click to upload.</h6>
              </div>
            )}
          </Dropzone>
          <div className="dropzone-previews mt-3" id="file-previews">
            {tripImage1 && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        height="80"
                        className="avatar-sm rounded bg-light"
                        alt={tripImage1.name}
                        src={tripImage1.preview}
                      />
                    </Col>
                    <Col>
                      <Link to="#" className="text-muted font-weight-bold">
                        {tripImage1.name}
                      </Link>
                      <p className="mb-0">
                        <strong>{tripImage1.formattedSize}</strong>
                      </p>
                    </Col>
                  </Row>
                </div>
              </Card>
            )}
          </div>
        </Form>
  </div>
</div>
<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="tripImage2">
        Trip Image 2 
      </label>{" "}
      <div className="mb-5">
        <Form>
          <Dropzone  //onChange={handleFileInputChange}
            onDrop={acceptedTripImage2 => {
              handleAcceptedTripImage2(acceptedTripImage2[0]); // Only first file is considered
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div  className="dropzone  d-flex flex-column justify-content-center align-items-center" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="mb-3">
                  <i className="mdi mdi-cloud-upload display-6  text-muted"></i>
                </div>
                <h6>Drop files here or click to upload.</h6>
              </div>
            )}
          </Dropzone>
          <div className="dropzone-previews mt-3" id="file-previews">
            {tripImage2 && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        height="80"
                        className="avatar-sm rounded bg-light"
                        alt={tripImage2.name}
                        src={tripImage2.preview}
                      />
                    </Col>
                    <Col>
                      <Link to="#" className="text-muted font-weight-bold">
                        {tripImage2.name}
                      </Link>
                      <p className="mb-0">
                        <strong>{tripImage2.formattedSize}</strong>
                      </p>
                    </Col>
                  </Row>
                </div>
              </Card>
            )}
          </div>
        </Form>
  </div>
</div>
<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="tripImage3">
        Trip Image 1 
      </label>{" "}
      <div className="mb-5">
        <Form>
          <Dropzone  //onChange={handleFileInputChange}
            onDrop={acceptedTripImage3 => {
              handleAcceptedTripImage3(acceptedTripImage3[0]); // Only first file is considered
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div  className="dropzone  d-flex flex-column justify-content-center align-items-center" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="mb-3">
                  <i className="mdi mdi-cloud-upload display-6  text-muted"></i>
                </div>
                <h6>Drop files here or click to upload.</h6>
              </div>
            )}
          </Dropzone>
          <div className="dropzone-previews mt-3" id="file-previews">
            {tripImage3 && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        height="80"
                        className="avatar-sm rounded bg-light"
                        alt={tripImage3.name}
                        src={tripImage3.preview}
                      />
                    </Col>
                    <Col>
                      <Link to="#" className="text-muted font-weight-bold">
                        {tripImage3.name}
                      </Link>
                      <p className="mb-0">
                        <strong>{tripImage3.formattedSize}</strong>
                      </p>
                    </Col>
                  </Row>
                </div>
              </Card>
            )}
          </div>
        </Form>
  </div>
</div> */}

<div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="company_name">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company_name"
                         className="form-control"
                          required
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.company_name || ''}
                          invalid={validation.touched.company_name && validation.errors.company_name ? true : false}
                        
                        />
                        {validation.touched.company_name && validation.errors.company_name ? (
                            <FormFeedback type="invalid">{validation.errors.company_name}</FormFeedback>
                          ) : null}
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="trip_title">
                        Trip Title
                        </label>
                        <input
                          type="text"
                          id="trip_title"
                           className="form-control"
                          placeholder="Enter Trip Title  "
                          required
                          onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.trip_title || ''}
                            invalid={validation.touched.trip_title && validation.errors.trip_title ? true : false}
                        />
                        {validation.touched.trip_title && validation.errors.trip_title ? (
                            <FormFeedback type="invalid">{validation.errors.trip_title}</FormFeedback>
                          ) : null}
                      </div>

                      


                      


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="start_point">
                          Start Point
                        </label>
                        <input
                          type="text"
                          id="start_point"
                          className="form-control"
                          placeholder="Start Point"
                          required
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.start_point || ''}
                          invalid={validation.touched.start_point && validation.errors.start_point ? true : false}
                        
                        />
                         {validation.touched.start_point && validation.errors.start_point ? (
                            <FormFeedback type="invalid">{validation.errors.start_point}</FormFeedback>
                          ) : null}
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="end_point">
                          End Point
                        </label>
                        <input
                          type="text"
                          id="end_point"
                          className="form-control"
                          placeholder="End Point"
                          required
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.end_point || ''}
                          invalid={validation.touched.end_point && validation.errors.end_point ? true : false}
                       
                        />
                         {validation.touched.end_point && validation.errors.end_point ? (
                            <FormFeedback type="invalid">{validation.errors.end_point}</FormFeedback>
                          ) : null}
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="seats_left">
                          Seats Left
                        </label>
                        <input
                          type="number"
                          min={1}
                          id="seats_left"
                          className="form-control"
                          placeholder="Enter Seats Left"
                          required
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.seats_left || ''}
                          invalid={validation.touched.seats_left && validation.errors.seats_left ? true : false}
                       
                        />
                         {validation.touched.seats_left && validation.errors.seats_left ? (
                            <FormFeedback type="invalid">{validation.errors.seats_left}</FormFeedback>
                          ) : null}
                      </div>





                       <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="duration">
                        Duration
                        </label>
                        <input
                          type="text"
                          id="duration"  
                           className="form-control"
                          required
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.duration || ''}
                          invalid={validation.touched.duration && validation.errors.duration ? true : false}
                       
                        />
                        {validation.touched.duration && validation.errors.duration ? (
                            <FormFeedback type="invalid">{validation.errors.duration}</FormFeedback>
                          ) : null}
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="start_date">
                          Start Date
                        </label>
                        <input
                          type="date"
                          id="start_date"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.start_date || ''}
                          invalid={validation.touched.start_date && validation.errors.start_date ? true : false}
                          className="form-control"
                          required
                        />
                        {validation.touched.start_date && validation.errors.start_date ? (
                            <FormFeedback type="invalid">{validation.errors.start_date}</FormFeedback>
                          ) : null}
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="end_date">
                          End Date
                        </label>
                        <input
                          type="date"
                          id="end_date"
                         className="form-control"
                          required
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.end_date || ''}
                          invalid={validation.touched.end_date && validation.errors.end_date ? true : false}
                        
                        />
                        {validation.touched.start_date && validation.errors.end_date ? (
                            <FormFeedback type="invalid">{validation.errors.end_date}</FormFeedback>
                          ) : null}
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="pickup_time">
                          Pickup Time
                        </label>
                        <input
                          type="time"
                          id="pickup_time"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.pickup_time || ''}
                          invalid={validation.touched.pickup_time && validation.errors.pickup_time ? true : false}
                          className="form-control"
                          required
                        />
                        {validation.touched.pickup_time && validation.errors.pickup_time ? (
                            <FormFeedback type="invalid">{validation.errors.pickup_time}</FormFeedback>
                          ) : null}
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="drop_time">
                          Drop Time
                        </label>
                        <input
                          type="time"
                          id="drop_time"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.drop_time || ''}
                          invalid={validation.touched.drop_time && validation.errors.drop_time ? true : false}
                        
                          className="form-control"
                          required
                        />
                        {validation.touched.drop_time && validation.errors.drop_time ? (
                            <FormFeedback type="invalid">{validation.errors.drop_time}</FormFeedback>
                          ) : null}
                      </div>

<div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="price_per_person">
                        Price Per Person
                        </label>
                        <input
                          type="number"
                          id="price_per_person"  
                           className="form-control"
                          required
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.price_per_person || ''}
                          invalid={validation.touched.price_per_person && validation.errors.price_per_person ? true : false}
                       
                        />
                        {validation.touched.price_per_person && validation.errors.price_per_person ? (
                            <FormFeedback type="invalid">{validation.errors.price_per_person}</FormFeedback>
                          ) : null}
                      </div>

                     

                      

<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="total_seats">
    Total Number Of Seats
  </label>{" "}
  <input
    type="number"
    className="form-control"
    onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.total_seats || ''}
                          invalid={validation.touched.total_seats && validation.errors.total_seats ? true : false}
                        id="total_seats"
    required
    placeholder='Total Seats'
    min="1"  // Add this line to set the minimum value
  />
   {validation.touched.total_seats && validation.errors.total_seats ? (
                            <FormFeedback type="invalid">{validation.errors.total_seats}</FormFeedback>
                          ) : null}
</div>


<div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="company_overview">
                        Company Overview
                        </label>
                        <textarea
                          type="text"
                          id="company_overview"

                          className="form-control"
                          placeholder="Enter company Overview "
                          required
                          rows={4}
                          style={{ resize: 'none' }}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.company_overview || ''}
                          invalid={validation.touched.company_overview && validation.errors.company_overview ? true : false}
                       
                        />{validation.touched.company_overview && validation.errors.company_overview ? (
                          <FormFeedback type="invalid">{validation.errors.company_overview}</FormFeedback>
                        ) : null}
                      </div>


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="middle_points">
                          Middle Points
                        </label>
                        <div className='d-flex justify-content-between ' >
                        <input
                          type="text"
                          id="middle_points"
                          className="form-control"
                          placeholder="Middle Points"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.middle_points || ''}
                         
                          
                          invalid={validation.touched.middle_points && validation.errors.middle_points ? true : false}
                       
                        />
                        <button onClick={handleAddMiddlePoints} type='button' className='btn btn-success mx-1' >Add</button>
                        </div>
                         {validation.touched.middle_points && validation.errors.middle_points ? (
                            <FormFeedback type="invalid">{validation.errors.middle_points}</FormFeedback>
                          ) : null}


  <div className='d-flex flex-column ' >
  {middle_points_array.map((data, i) => (
   <div className='d-flex justify-content-between mx-3' >
     <h6 className='my-2 w-100 d-flex align-items-start justify-content-between ' key={i}>
      {data}
      <Badge className='mx-2 bg-transparent'>
        <i onClick={(e)=>{handleDeleteMiddlePoints(i)}} type="button" button="role" className="fas fa-window-close fs-5 text-danger" >
        </i>
      </Badge>
    </h6>
   </div>
  ))}
  </div>


                      </div>



                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="inclusion">
                        Inclusion
                        </label>
                        <div className='d-flex justify-content-between ' >
                        <input
                          type="text"
                          id="inclusion"
                          className="form-control"
                          placeholder="Enter Inclusion"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.inclusion || ''}
                         
                          
                          invalid={validation.touched.inclusion && validation.errors.inclusion ? true : false}
                       
                        />
                        <button onClick={handleAddInclusion} type='button' className='btn btn-success mx-1' >Add</button>
                        </div>
                         {validation.touched.inclusion && validation.errors.inclusion ? (
                            <FormFeedback type="invalid">{validation.errors.inclusion}</FormFeedback>
                          ) : null}


  <div className='d-flex flex-column ' >
  {inclusive_array.map((data, i) => (
   <div className='d-flex justify-content-between mx-3' >
     <h6 className='my-2 w-100 d-flex align-items-start justify-content-between ' key={i}>
      {data}
      <Badge className='mx-2 bg-transparent'>
        <i onClick={(e)=>{handleDeleteInclusion(i)}} type="button" button="role" className="fas fa-window-close fs-5 text-danger" >
        </i>
      </Badge>
    </h6>
   </div>
  ))}
  </div>


                      </div>



                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="exclusion">
                        Exclusion
                        </label>
                        <div className='d-flex justify-content-between ' >
                        <input
                          type="text"
                          id="exclusion"
                          className="form-control"
                          placeholder="Enter Exclusion"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.exclusion || ''}
                         
                          
                          invalid={validation.touched.exclusion && validation.errors.exclusion ? true : false}
                       
                        />
                        <button onClick={handleAddExclusion} type='button' className='btn btn-success mx-1' >Add</button>
                        </div>
                         {validation.touched.exclusion && validation.errors.exclusion ? (
                            <FormFeedback type="invalid">{validation.errors.exclusion}</FormFeedback>
                          ) : null}


  <div className='d-flex flex-column ' >
  {exclusive_array.map((data, i) => (
   <div className='d-flex justify-content-between mx-3' >
     <h6 className='my-2 w-100 d-flex align-items-start justify-content-between ' key={i}>
      {data}
      <Badge className='mx-2 bg-transparent'>
        <i onClick={(e)=>{handleDeleteExclusion(i)}} type="button" button="role" className="fas fa-window-close fs-5 text-danger" >
        </i>
      </Badge>
    </h6>
   </div>
  ))}
  </div>


                      </div>


                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="room_occupancy">
    Room Occupancy
  </label>
  <select
    id="room_occupancy"
    onChange={validation.handleChange}
    onBlur={validation.handleBlur}
    value={validation.values.room_occupancy || ''}
    invalid={validation.touched.room_occupancy && validation.errors.room_occupancy ? true : false}
    className="form-control"
    required
  >
    <option value="">Select room occupancy</option>
    <option value="singleSharing">Single</option>
    <option value="doubleSharing">Double Sharing</option>
    <option value="tripleSharing">Triple Sharing</option>
    <option value="quadrupleSharing">Quadruple Sharing </option>
  </select>
  {validation.touched.room_occupancy && validation.errors.room_occupancy ? (
    <FormFeedback type="invalid">{validation.errors.room_occupancy}</FormFeedback>
  ) : null}
</div>


                      {/* <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="accommodation">
    Accommodation
  </label>
  <select
    id="accommodation"
    value={accommodation}
    onChange={(e) => setAccommodation(e.target.value)}
    className="form-control"
    required
  >
    <option value="">Select Accommodation</option>
    <option value="3-star-hotel">3 Star Hotel</option>
    <option value="4-star-hotel">4 Star Hotel</option>
    <option value="5-star-hotel">5 Star Hotel</option>
    <option value="3-star-resort">3 Star Resort</option>
    <option value="4-star-resort">4 Star Resort</option>
    <option value="5-star-resort">5 Star Resort</option>
    <option value="3-star-hostel">3 Star Hostel</option>
    <option value="4-star-hostel">4 Star Hostel</option>
    <option value="5-star-hostel">5 Star Hostel</option>
    <option value="3-star-campus">3 Star Campus</option>
    <option value="4-star-campus">4 Star Campus</option>
    <option value="5-star-campus">5 Star Campus</option>
  </select>
</div> */}


{/* <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="transportation">
    Transportation
  </label>
  <select
    id="transportation"
    value={transportation}
    onChange={(e) => setTransportation(e.target.value)}
    className="form-control"
    required
  >
    <option value="">Select Transportation</option>
    <option value="volvo">Volvo</option>
    <option value="traveler">Traveler</option>
    <option value="train">Train</option>
    <option value="flight">Flight</option>
    <option value="car">Car</option>
  </select>
</div> */}


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="no_of_meal">
                        Total Meals
                        </label>
                        <input
                          type="number"
                          id="no_of_meal"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.no_of_meal || ''}
                          invalid={validation.touched.no_of_meal && validation.errors.no_of_meal ? true : false}
                         className="form-control"
                          placeholder="Enter Number of Meals"
                          required
                          min='0'
                        />
                        {validation.touched.no_of_meal && validation.errors.no_of_meal ? (
    <FormFeedback type="invalid">{validation.errors.no_of_meal}</FormFeedback>
  ) : null}
                      </div>

                      
                      <div className="mb-3 col-lg-6">
  <label className="form-label">Age Range</label>
  <div className='d-flex flex-wrap'>
    <div>
      <label htmlFor='age1' style={{minWidth:"50px"}}>
        Below 18
      </label>
      <input
        type="checkbox"
        name="age_range"
        id='age1'
        value="0-18"
        checked={validation.values.age_range.includes("0-18")}
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        className="form-check-input ms-3"
      />
    </div>

    <div>
      <label htmlFor='age2' className='ms-3' style={{minWidth:"50px"}}>
        18-25
      </label>
      <input
        id='age2'
        type="checkbox"
        name="age_range"
        value="18-25"
        checked={validation.values.age_range.includes("18-25")}
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        className="form-check-input"
      />
    </div>

    <div>
      <label htmlFor='age4' className='ms-3' style={{minWidth:"50px"}}>
        26-35
      </label>
      <input
        id='age4'
        type="checkbox"
        name="age_range"
        value="26-35"
        checked={validation.values.age_range.includes("26-35")}
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        className="form-check-input"
      />
    </div>

    <div>
      <label htmlFor='age5' className='ms-3' style={{minWidth:"50px"}}>
        36-50
      </label>
      <input
        id='age5'
        type="checkbox"
        name="age_range"
        value="36-50"
        checked={validation.values.age_range.includes("36-50")}
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        className="form-check-input"
      />
    </div>

    <div>
      <label htmlFor='age6' className='ms-3' style={{minWidth:"50px"}}>
        50+
      </label>
      <input
        id='age6'
        type="checkbox"
        name="age_range"
        value="50+"
        checked={validation.values.age_range.includes("50+")}
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        className="form-check-input"
      />
    </div>
  </div>
  {validation.touched.age_range && validation.errors.age_range ? (
    <FormFeedback type="invalid">{validation.errors.age_range}</FormFeedback>
  ) : null}
</div>




                     
                      {/* <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="localGuide">
                         Local Guide
                        </label>
                        <input
                          type="text"
                          id="localGuide"
                          value={localGuide}
                          onChange={(e) => setLocalGuide(e.target.value)}
                          className="form-control"
                          placeholder="Enter localGuide "
                          required
                        />
                      </div> */}




                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="thingsToCarry">
                          Things To Carry
                        </label>
                        <textarea
                          type="text"
                          id="things_to_carry"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.things_to_carry || ''}
                          invalid={validation.touched.things_to_carry && validation.errors.things_to_carry ? true : false}
                         className="form-control"
                          placeholder="Enter Things To Carry "
                          required
                          rows={4}
                          style={{ resize: 'none' }}

                        />
                        {validation.touched.things_to_carry && validation.errors.things_to_carry ? (
                            <FormFeedback type="invalid">{validation.errors.things_to_carry}</FormFeedback>
                          ) : null}
                      </div>


                      {/* <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="itinerary">
                          Detailed Itinerary
                        </label>
                        <textarea
                          type="text"
                          id="itinerary"
                          value={itinerary}
                          className="form-control"
                          placeholder="Enter Detailed Itinerary "
                          required
                          onChange={(e) => setItinerary(e.target.value)}
                          rows={4}
                          style={{ resize: 'none' }}

                        />
                      </div> */}


<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="trip_themes">
    Themes that best describe your Group Trip
  </label>
  <select
    id="trip_themes"
    onChange={validation.handleChange}
    onBlur={validation.handleBlur}
    value={validation.values.trip_themes || []} // Use an array for multiple selections
    invalid={validation.touched.trip_themes && validation.errors.trip_themes ? true : false}
    className="form-control"
    required
  >
    <option value="Couple Friendly">Couple Friendly</option>
    <option value="Women Only">Women Only</option>
    <option value="Senior Citizens Only">Senior Citizens Only</option>
    <option value="Dating Trip">Dating Trip</option>
    <option value="Disability Friendly">Disability Friendly</option>
    <option value="Religious">Religious</option>
    <option value="Party">Party</option>
    <option value="Mountain">Mountain</option>
    <option value="Beach">Beach</option>
    <option value="Forest">Forest</option>
    <option value="River">River</option>
    <option value="Desert">Desert</option>
    <option value="Bachelor/Bachelorette Friendly">Bachelor/Bachelorette Friendly</option>
    <option value="Solo Traveller Friendly">Solo Traveller Friendly</option>
    <option value="Corporate Friendly">Corporate Friendly</option>
    <option value="Adventure">Adventure</option>
    <option value="Hiking">Hiking</option>
    <option value="Honeymoon">Honeymoon</option>
    <option value="Offbeat Location">Offbeat Location</option>
    <option value="Wildlife">Wildlife</option>
    <option value="Other">Other</option>
  </select>
  {validation.touched.trip_themes && validation.errors.trip_themes ? (
    <FormFeedback type="invalid">{validation.errors.trip_themes}</FormFeedback>
  ) : null}
</div>



<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="is_trip_captain">
    Trip Captain
  </label>
  <select
    id="room_occupancy"
    onChange={validation.handleChange}
    onBlur={validation.handleBlur}
    value={validation.values.is_trip_captain || ''}
    invalid={validation.touched.is_trip_captain && validation.errors.is_trip_captain ? true : false}
    className="form-control"
    required
  >
    <option value="">Is Trip Captain Required</option>
    <option value="yes">yes</option>
    <option value="no">no</option>
  </select>
  {validation.touched.is_trip_captain && validation.errors.is_trip_captain ? (
    <FormFeedback type="invalid">{validation.errors.is_trip_captain}</FormFeedback>
  ) : null}
</div>


<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="transportation">
    Transportation
  </label>
  <select
    id="transportation"
    onChange={validation.handleChange}
    onBlur={validation.handleBlur}
    value={validation.values.transportation || ''}
    invalid={validation.touched.transportation && validation.errors.transportation ? true : false}
    className="form-control"
    required
  >
    <option value="Select Transportation">Select Transportation</option>
    <option value="volvo">Volvo</option>
    <option value="traveller">Traveller</option>
    <option value="train">Train</option>
    <option value="flight">Train </option>
    <option value="privatecar">Private Car </option>
    <option value="ferry">Ferry/Boat/Cruise </option>
  </select>
  {validation.touched.transportation && validation.errors.transportation ? (
    <FormFeedback type="invalid">{validation.errors.transportation}</FormFeedback>
  ) : null}
</div>

<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="food_options">
  Food Options
  </label>
  <select
    id="food_options"
    onChange={validation.handleChange}
    onBlur={validation.handleBlur}
    value={validation.values.food_options || ''}
    invalid={validation.touched.food_options && validation.errors.food_options ? true : false}
    className="form-control"
    required
  >
    <option value="Select Food Option">Select Transportation</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="both">Veg and Non Veg Both</option>
    <option value="jain">Jain</option>
 </select>
  {validation.touched.food_options && validation.errors.food_options ? (
    <FormFeedback type="invalid">{validation.errors.food_options}</FormFeedback>
  ) : null}
</div>



                    </div>




                  <button type='submit' className="mt-1 btn btn-success">
  {type === 'Edit' ? 'Update Trip' : 'Create Trip'}
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

export default CreateTripForm;
