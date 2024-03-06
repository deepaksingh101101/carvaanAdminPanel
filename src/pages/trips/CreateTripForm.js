// CreateCustomerForm.js
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {FormFeedback,Badge, Row, Col, Card, CardBody, CardTitle ,Container , Form,Label, Input} from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pushTrip, updateTrip } from 'store/auth/user_admin_data/actions';
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";

// Form validation
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { SomethingAlertFalse, SomethingAlertTrue } from 'store/components/actions';
import Alert from 'components/alert/Alert';


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
const [themes_array, setThemes_array] = useState([])
const [food_options_array, setFood_options_array] = useState([])

const [message, setMessage] = useState("Something went's wrong")
const isOpen = useSelector(state => state.alertReducer.isOpen);
const companyOptions = [
  "Company A",
  "Company B",
  "Company C",
  "Company D",
];
const startPoints = [
  "Point A",
  "Point B",
  "Point C",
  "Point D",
];
const endPoints = [
  "Point A",
  "Point B",
  "Point C",
  "Point D",
];
const dummyMiddlePoints = [
  "Point M1",
  "Point M2",
  "Point M3",
  "Point M4",
  "Point M5",
  // Add more dummy middle points as needed
];
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      company_name: tripCreate.company_name || "",
      trip_title:tripCreate.trip_title || "",
      start_point: tripCreate.start_point || "",
      end_point: tripCreate.end_point || "",
      middle_points: tripCreate.middle_points || []  ,
      seats_left: tripCreate.seats_left || "",
      duration: tripCreate.duration || "",
      start_date:tripCreate.start_date || "",
      end_date:tripCreate.end_date || "",
      price_per_person:tripCreate.price_per_person || "",
      company_overview: tripCreate.company_overview || "",
      exclusion: tripCreate.exclusion || [],
      inclusion: tripCreate.inclusion || [], 
      room_occupancy: tripCreate.room_occupancy || "",
      age_range: tripCreate.age_range || [],
      things_to_carry:tripCreate.things_to_carry || [],
      themes: tripCreate.themes|| [],
      is_trip_captain: tripCreate.is_trip_captain || "",
      type_of_transportation: tripCreate.type_of_transportation || "",
      food_options: tripCreate.food_options|| [],
      itinerary:tripCreate.itinerary||[{}],


//     total_seats: tripCreate.total_seats || "",
//       no_of_meal: tripCreate.no_of_meal || "",
//       accommodation: tripCreate.accommodation || "",//stay options
//  offer_price:tripCreate.offer_price || "",
//       overview:tripCreate.overview || "",
//       full_address:tripCreate.full_address || "",
//       top_facilities: tripCreate.top_facilities || [], // Array with default size or length of tripCreate.middle_points filled with empty strings
//        packing_guide: tripCreate.packing_guide || [] ,
//       pickup_location:tripCreate.pickup_location || "",
//       drop_location:tripCreate.drop_location || "",
//       pickup_time:tripCreate.pickup_time || "",
//       drop_time:tripCreate.drop_time || "",
    },
    validationSchema: Yup.object({
      company_name: Yup.string().required("Please Enter The Company Name"),
      trip_title: Yup.string().required("Please Enter Trip Title"),
      start_point: Yup.string().required("Please Enter Start Point"),
      end_point: Yup.string().required("Please Enter End Point"),
      middle_points: Yup.string(),
      seats_left: Yup.number().required("Please Enter Remaining Seats"),
      duration: Yup.string().required("Please Enter No of Days"),
      start_date: Yup.date().required("Please Enter Start Date"),
      end_date: Yup.date().required("Please Enter End Date"),
      price_per_person: Yup.number().required("Please Enter Price Per Person"),
      company_overview: Yup.string().required("Please Enter Company Overview"),
      exclusion: Yup.string().required("Please Enter Exclusion"),
      inclusion: Yup.string().required("Please Enter Inclusion"),
      room_occupancy: Yup.string().required("Please Enter Room Occupancy"),
      age_range: Yup.string().required("Please Enter Age Range"),
      things_to_carry: Yup.string().required("Please Enter Things to Carry"),
      themes: Yup.string(),
      is_trip_captain: Yup.string().required("Please Select This Field"),
      type_of_transportation: Yup.string().required("Please Select This Field"),
      food_options: Yup.string().required("Please Select This Field"),
      itinerary: Yup.string().required("Please Select This Field"),


    }),

  })
  
// add middle points
  const handleAddMiddlePoints=(e)=>{
   e.preventDefault(validation.values.middle_points.length);
   console.log()
if(validation.values.middle_points.length==0){

}
else {
  const middlePoint = validation.values.middle_points;
  
  if (!middle_points_array.includes(middlePoint)) {
    middle_points_array.push(middlePoint);
    validation.setFieldValue('middle_points', ""); 
  } else {
    setMessage("This middle points already included")
    dispatch(SomethingAlertTrue());
        setTimeout(() => {
          dispatch(SomethingAlertFalse());
          setMessage("Something went's wrong")
        }, 2000);
  }
}

   
  }


const handleAddExclusion=(e)=>{
  e.preventDefault(validation.values.exclusion.length);
  console.log()
if(validation.values.exclusion.length==0){
// show a error message  for not filling the field
}
else{

  if(exclusive_array.length<8){
    if(!exclusive_array.includes(validation.values.exclusion)){
      exclusive_array.push(
        validation.values.exclusion
       )
       validation.setFieldValue('exclusion', ""); 
    }
    else{
      setMessage("This Exclusion already included")
      dispatch(SomethingAlertTrue());
      setTimeout(() => {
        dispatch(SomethingAlertFalse());
        setMessage("Something went's wrong")
      }, 2000);
    }
  }
  else{
setMessage("Cannot Exceed more then 8")
dispatch(SomethingAlertTrue());
        setTimeout(() => {
          dispatch(SomethingAlertFalse());
          setMessage("Something went's wrong")
        }, 2000);
  }



}  
 }


 const handleAddInclusion=(e)=>{
  e.preventDefault(validation.values.inclusion.length);
  console.log()
if(validation.values.inclusion.length==0){
// show a error message  for not filling the field
}
else{

if(inclusive_array.length<8){
  if(!inclusive_array.includes(validation.values.inclusion)){
    inclusive_array.push(
      validation.values.inclusion
     )
     validation.setFieldValue('inclusion', ""); 
  }
  else{
    setMessage("This Inclusion already included")
    dispatch(SomethingAlertTrue());
    setTimeout(() => {
      dispatch(SomethingAlertFalse());
      setMessage("Something went's wrong")
    }, 2000);
  }
}
else{
  setMessage("Cannot Exceed more than 8")
  dispatch(SomethingAlertTrue());
  setTimeout(() => {
    dispatch(SomethingAlertFalse());
    setMessage("Something went's wrong")
  }, 2000);
}

 
 
}
 }

 const handleAddTheme=(e)=>{
  e.preventDefault(validation.values.trip_themes.length);
  console.log()
if(validation.values.trip_themes.length==0){
// show a error message  for not filling the field
}
else{

if(themes_array.length<=50){
  if(!themes_array.includes(validation.values.trip_themes)){
    themes_array.push(
      validation.values.trip_themes
     )
     validation.setFieldValue('trip_themes', ""); 
  }
  else{
    setMessage("This Theme already included")
    dispatch(SomethingAlertTrue());
    setTimeout(() => {
      dispatch(SomethingAlertFalse());
      setMessage("Something went's wrong")
    }, 2000);
  }
}
else{
  setMessage("Cannot Exceed more than 50")
  dispatch(SomethingAlertTrue());
  setTimeout(() => {
    dispatch(SomethingAlertFalse());
    setMessage("Something went's wrong")
  }, 2000);
}

 
 
}
 }


 const handleAddFoodOptions=(e)=>{
  e.preventDefault(validation.values.food_options.length);
  console.log()
if(validation.values.food_options.length==0){
// show a error message  for not filling the field
}
else{

if(food_options_array.length<=10){
  if(!food_options_array.includes(validation.values.food_options)){
    food_options_array.push(
      validation.values.food_options
     )
     validation.setFieldValue('food_options', ""); 
  }
  else{
    setMessage("This Food already included")
    dispatch(SomethingAlertTrue());
    setTimeout(() => {
      dispatch(SomethingAlertFalse());
      setMessage("Something went's wrong")
    }, 2000);
  }
}
else{
  setMessage("Cannot Exceed more than 50")
  dispatch(SomethingAlertTrue());
  setTimeout(() => {
    dispatch(SomethingAlertFalse());
    setMessage("Something went's wrong")
  }, 2000);
}

 
 
}
 }

 
 const handleDeleteTheme = (i) => {
  const newArray = [...themes_array]; // Create a copy of the array
  newArray.splice(i, 1); // Remove one element at index i
  setThemes_array(newArray); // Update the state with the new array
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
  const handleDeleteFoodOptions = (i) => {
    const newArray = [...food_options_array]; // Create a copy of the array
    newArray.splice(i, 1); // Remove one element at index i
    setFood_options_array(newArray); // Update the state with the new array
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
                  <Form
                   onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                  action="#">
                  
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">


{/* 
<div className="mb-3 col-lg-4">
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
<div className="mb-3 col-lg-4">
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
<div className="mb-3 col-lg-4">
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
<div className="mb-3 col-lg-4">
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

<div className="mb-3 col-lg-4">
      <Label className="form-label" htmlFor="company_name">
        Company Name
      </Label>
      <Input
        type="select"
        id="company_name"
        className="form-control"
        name="company_name"
        required
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        value={validation.values.company_name || ''}
        invalid={validation.touched.company_name && validation.errors.company_name ? true : false}
      >
        <option value="">Select a company</option>
        {companyOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Input>
      {validation.touched.company_name && validation.errors.company_name ? (
        <FormFeedback type="invalid">{validation.errors.company_name}</FormFeedback>
      ) : null}
    </div>

                      <div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="trip_title">
                        Trip Title
                        </Label>
                        <Input
                          type="text"
                          id="trip_title"
                          name='trip_title'
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

                      


                      


                      <div className="mb-3 col-lg-4">
      <Label className="form-label" htmlFor="start_point">
        Start Point
      </Label>
      <Input
        type="select"
        id="start_point"
        className="form-control"
        placeholder="Start Point"
        required
        name="start_point"
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        value={validation.values.start_point || ''}
        invalid={validation.touched.start_point && validation.errors.start_point ? true : false}
      >
        <option value="">Select a start point</option>
        {startPoints.map((startPoint, index) => (
          <option key={index} value={startPoint}>
            {startPoint}
          </option>
        ))}
      </Input>
      {validation.touched.start_point && validation.errors.start_point ? (
        <FormFeedback type="invalid">{validation.errors.start_point}</FormFeedback>
      ) : null}
    </div>



    <div className="mb-3 col-lg-4">
      <Label className="form-label" htmlFor="end_point">
        End Point
      </Label>
      <Input
        type="select"
        id="end_point"
        className="form-control"
        placeholder="End Point"
        name="end_point"
        required
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        value={validation.values.end_point || ''}
        invalid={validation.touched.end_point && validation.errors.end_point ? true : false}
      >
        <option value="">Select an end point</option>
        {endPoints.map((endPoint, index) => (
          <option key={index} value={endPoint}>
            {endPoint}
          </option>
        ))}
      </Input>
      {validation.touched.end_point && validation.errors.end_point ? (
        <FormFeedback type="invalid">{validation.errors.end_point}</FormFeedback>
      ) : null}
    </div>

                      <div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="seats_left">
                          Seats Left
                        </Label>
                        <Input
                          type="number"
                          min={1}
                          id="seats_left"
                          className="form-control"
                          placeholder="Enter Seats Left"
                          required
                          name='seats_left'
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.seats_left || ''}
                          invalid={validation.touched.seats_left && validation.errors.seats_left ? true : false}
                       
                        />
                         {validation.touched.seats_left && validation.errors.seats_left ? (
                            <FormFeedback type="invalid">{validation.errors.seats_left}</FormFeedback>
                          ) : null}
                      </div>





                       <div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="duration">
                        Duration
                        </Label>
                        <Input
                          type="text"
                          id="duration"  
                          name="duration"  
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

                      <div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="start_date">
                          Start Date
                        </Label>
                        <Input
                          type="date"
                          id="start_date"
                          name='start_date'
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

                      <div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="end_date">
                          End Date
                        </Label>
                        <Input
                          type="date"
                          id="end_date"
                          name="end_date"
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

                      {/* <div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="pickup_time">
                          Pickup Time
                        </Label>
                        <Input
                          type="time"
                          id="pickup_time"
                          name="pickup_time"
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

                      <div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="drop_time">
                          Drop Time
                        </Label>
                        <Input
                          type="time"
                          id="drop_time"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.drop_time || ''}
                          invalid={validation.touched.drop_time && validation.errors.drop_time ? true : false}
                        name='drop_time'
                          className="form-control"
                          required
                        />
                        {validation.touched.drop_time && validation.errors.drop_time ? (
                            <FormFeedback type="invalid">{validation.errors.drop_time}</FormFeedback>
                          ) : null}
                      </div> */}

<div className="mb-3 col-lg-4">
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

                     

                      

<div className="mb-3 col-lg-4">
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







{/* middle points as select box */}
{/* <div className="mb-3 col-lg-4">
      <Label className="form-label" htmlFor="middle_points">
        Middle Points
      </Label>
      <div className='d-flex justify-content-between'>
        <Input
          type="select"
          id="middle_points"
          className="form-control"
          placeholder="Middle Points"
          onChange={validation.handleChange}
          onBlur={validation.handleBlur}
          value={validation.values.middle_points || ''}
          multiple
          invalid={validation.touched.middle_points && validation.errors.middle_points ? true : false}
        >
          {dummyMiddlePoints.map((middlePoint, index) => (
            <option key={index} value={middlePoint}>
              {middlePoint}
            </option>
          ))}
        </Input>
        <button onClick={handleAddMiddlePoints} type='button' className='btn btn-success mx-1'>Add</button>
      </div>
      {validation.touched.middle_points && validation.errors.middle_points ? (
        <FormFeedback type="invalid">{validation.errors.middle_points}</FormFeedback>
      ) : null}
      <div className='d-flex flex-column'>
        {middle_points_array.map((data, i) => (
          <div className='d-flex justify-content-between mx-3' key={i}>
            <h6 className='my-2 w-100 d-flex align-items-start justify-content-between'>
              {data}
              <Badge className='mx-2 bg-transparent'>
                <i onClick={(e)=>{handleDeleteMiddlePoints(i)}} type="button" button="role" className="fas fa-window-close fs-5 text-danger"></i>
              </Badge>
            </h6>
          </div>
        ))}
      </div>
    </div> */}

                     


                      <div className="mb-3 col-lg-4">
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


                      {/* <div className="mb-3 col-lg-4">
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


{/* <div className="mb-3 col-lg-4">
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


{/* Meals */}
                      {/* <div className="mb-3 col-lg-4">
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
                      </div> */}

         




                     
                      {/* <div className="mb-3 col-lg-4">
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



<div className="mb-3 col-lg-6">
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

                      <div className="mb-3 col-lg-6">
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


                      {/* <div className="mb-3 col-lg-4">
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


<div className="mb-3 col-lg-4">
  <label className="form-label" htmlFor="trip_themes">
    Themes that best describe your Group Trip
  </label>
  <div className='d-flex align-items-center justify-content-between' >
  <select
    id="trip_themes"
    onChange={validation.handleChange}
    onBlur={validation.handleBlur}
    value={validation.values.trip_themes || []} // Use an array for multiple selections
    className="form-control"
    name='trip_themes'
    
  >
    <option value="">Select Theme</option>
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
  <button onClick={handleAddTheme} type='button' className='btn btn-success mx-1' >Add</button>

  </div>
  <div className='d-flex flex-column '>
    {themes_array.map((data, i) => (
      <div className='d-flex justify-content-between mx-3' key={i}>
        <h6 className='my-2 w-100 d-flex align-items-start justify-content-between'>
          {data}
          <Badge className='mx-2 bg-transparent'>
            <i onClick={(e)=>{handleDeleteTheme(i)}} type="button" button="role" className="fas fa-window-close fs-5 text-danger" />
          </Badge>
        </h6>
      </div>
    ))}
  </div>
</div>



<div className="mb-3 col-lg-4">
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


<div className="mb-3 col-lg-4">
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

<div className="mb-3 col-lg-4">
  <label className="form-label" htmlFor="food_options">
  Food Options
  </label>
  <div className='d-flex align-items-center' >
  <select
    id="food_options"
    name="food_options"
    onChange={validation.handleChange}
    onBlur={validation.handleBlur}
    value={validation.values.food_options || ''}
    // invalid={validation.touched.food_options && validation.errors.food_options ? true : false}
    className="form-control"
    required
  >
    <option value="Select Food Option">Select Food Options</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="Veg and Non Veg Both">Veg and Non Veg Both</option>
    <option value="jain">Jain</option>
 </select>
 <button onClick={handleAddFoodOptions} type='button' className='btn btn-success mx-1' >Add</button>

  </div>
  {/* {validation.touched.food_options && validation.errors.food_options ? (
    <FormFeedback type="invalid">{validation.errors.food_options}</FormFeedback>
  ) : null} */}
  <div className='d-flex flex-column '>
    {food_options_array.map((data, i) => (
      <div className='d-flex justify-content-between mx-3' key={i}>
        <h6 className='my-2 w-100 d-flex align-items-start justify-content-between'>
          {data}
          <Badge className='mx-2 bg-transparent'>
            <i onClick={(e)=>{handleDeleteFoodOptions(i)}} type="button" button="role" className="fas fa-window-close fs-5 text-danger" />
          </Badge>
        </h6>
      </div>
    ))}
  </div>
</div>



<div className="mb-3 col-lg-4">
  <label className="form-label" htmlFor="middle_points">
    Middle Points
  </label>
  <div className='d-flex justify-content-between '>
    <select
      id="middle_points"
      className="form-control"
      onChange={validation.handleChange}
      onBlur={validation.handleBlur}
      value={validation.values.middle_points || ''}
      invalid={validation.touched.middle_points && validation.errors.middle_points ? true : false}
    >
      <option value="">Select Middle Points</option>
      {dummyMiddlePoints.map((data, i) => (
        <option key={i} value={data}>{data}</option>
      ))}
    </select>
    <button onClick={handleAddMiddlePoints} type='button' className='btn btn-success mx-1' >Add</button>
  </div>
  {validation.touched.middle_points && validation.errors.middle_points ? (
    <FormFeedback type="invalid">{validation.errors.middle_points}</FormFeedback>
  ) : null}

  <div className='d-flex flex-column '>
    {middle_points_array.map((data, i) => (
      <div className='d-flex justify-content-between mx-3' key={i}>
        <h6 className='my-2 w-100 d-flex align-items-start justify-content-between'>
          {data}
          <Badge className='mx-2 bg-transparent'>
            <i onClick={(e)=>{handleDeleteMiddlePoints(i)}} type="button" button="role" className="fas fa-window-close fs-5 text-danger" />
          </Badge>
        </h6>
      </div>
    ))}
  </div>
</div>


<div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="inclusion">
                        Inclusion
                        </Label>
                        <div className='d-flex justify-content-between ' >
                        <Input
                          type="text"
                          id="inclusion"
                          className="form-control"
                          placeholder="Enter Inclusion"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.inclusion || ''}
                          required
                          rows={4}
                          style={{ resize: 'none' }}
                          
                          // invalid={validation.touched.inclusion && validation.errors.inclusion ? true : false}
                       
                        />
                        <button onClick={handleAddInclusion} type='button' className='btn btn-success mx-1' >Add</button>
                        </div>
                         {/* {validation.touched.inclusion && validation.errors.inclusion ? (
                            <FormFeedback type="invalid">{validation.errors.inclusion}</FormFeedback>
                          ) : null} */}


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

                      <div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="exclusion">
                        Exclusion
                        </Label>
                        <div className='d-flex justify-content-between ' >
                        <Input
                          type="text"
                          id="exclusion"
                          className="form-control"
                          placeholder="Enter Exclusion"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.exclusion || ''}
                          required
                          rows={4}
                          style={{ resize: 'none' }}
                          
                          // invalid={validation.touched.exclusion && validation.errors.exclusion ? true : false}
                       
                        />
                        <button onClick={handleAddExclusion} type='button' className='btn btn-success mx-1' >Add</button>
                        </div>
                         {/* {validation.touched.exclusion && validation.errors.exclusion ? (
                            <FormFeedback type="invalid">{validation.errors.exclusion}</FormFeedback>
                          ) : null} */}


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

                    </div>




                  <button type='submit' className="mt-1 btn btn-success">
  {type === 'Edit' ? 'Update Trip' : 'Create Trip'}
</button>
                  </div>

</Form>
                 
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className=" position-fixed  " style={{top:"0",right:"0",zIndex:"9999"}}>
     {isOpen &&  <Alert  message={message} type="error" />}
      </div>
    </React.Fragment>
  );
};

export default CreateTripForm;
