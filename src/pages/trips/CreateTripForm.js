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
import work1 from '../../assets/images/gallery/work-1.jpg';
import work2 from '../../assets/images/gallery/work-2.jpg';
import FsLightbox from "fslightbox-react";

// Form validation
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { FieldArray } from 'formik';

import { SomethingAlertFalse, SomethingAlertTrue } from 'store/components/actions';
import Alert from 'components/alert/Alert';
import { getAllAgeRange, getAllMeals, getAllTransportationTypes, get_All_Travel_Agents, uploadTripImage, uploadTripImages } from 'helpers/fakebackend_helper';

const FileUploader = ({handleFile}) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
return (
    <>
      <button className="button-upload" onClick={handleClick}>
        Upload a file
      </button>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{display: 'none'}} // Make the file input element invisible
      />
    </>
  );
}
const CreateTripForm = ({ type }) => {
  const dispatch = useDispatch();
  const { sno } = useParams();

  // let { tripData } = useSelector((state) => state.TripReducers);
  // const trip = tripData.find((trip) => trip.sno == sno);

  const navigate = useNavigate();

  const [tripCreate, setTripCreate] = useState([]);
const [middle_points_array, setMiddle_points_array] = useState([])
const [inclusive_array, setInclusive_array] = useState([])
const [exclusive_array, setExclusive_array] = useState([])
const [themes_array, setThemes_array] = useState([])
const [food_options_array, setFood_options_array] = useState([])
const [itinerary_array, setItinerary_array] = useState([])
const [packing_guide_array, setPacking_guide_array] = useState([])


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


// const [companyOptions, setcompanyOptions] = useState(initialState)
// const [endPoints, setEndPoints] = useState(initialState)
// const [startPoints, setStartPoints] = useState(initialState)
// const [dummyMiddlePoints, setDummyMiddlePoints] = useState(initialState)
const [mealsOptions, setMealsOptions] = useState([])
const [ageRanges, setAgeRanges] = useState([])
const [transportationTypesState, setTransportationTypesState] = useState([])
const [travelAgents, setTravelAgents] = useState([])
const [ image, setImage] =  useState([])

const fetchOptions=async()=>{
  try {
   const meals= await getAllMeals();
   const ages= await getAllAgeRange();
   const agents=await get_All_Travel_Agents()

    const transportationTypes=await getAllTransportationTypes()
    setMealsOptions(meals)
    setAgeRanges(ages)
    setTransportationTypesState(transportationTypes)
    setTravelAgents(agents)

  } catch (error) {
    console.log(error.response)
  }
}

useEffect(() => {
fetchOptions()
}, [])


const photos = [
  { src: work1, width: 800, height: 600 },
  { src: work2, width: 1600, height: 900 },
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
      // end_date:tripCreate.end_date || "",
      price_per_person:tripCreate.price_per_person || "",
      description: tripCreate.description || "",
      exclusion: tripCreate.exclusion || "",
      inclusion: tripCreate.inclusion || "", 
      room_occupancy: tripCreate.room_occupancy || "",
      pickup_location: tripCreate.pickup_location || "",
      drop_location: tripCreate.pickup_location || "",
      age_range: tripCreate.age_range || [],
      // things_to_carry:tripCreate.things_to_carry || "",
      trip_themes: tripCreate.trip_themes|| [],
      is_trip_captain: tripCreate.is_trip_captain || "",
      type_of_transportation: tripCreate.type_of_transportation || "",
      food_options: tripCreate.food_options|| "",
      itinerary:tripCreate.itinerary||"",
      packing_guide:tripCreate.packing_guide||"",

    },
    validationSchema: Yup.object({
      company_name: Yup.string().required("Please Enter The Company Name"),
      trip_title: Yup.string().required("Please Enter Trip Title"),
      start_point: Yup.string().required("Please Enter Start Point"),
      end_point: Yup.string().required("Please Enter End Point"),
      seats_left: Yup.number().required("Please Enter Remaining Seats"),
      duration: Yup.string().required("Please Enter No of Days"),
      pickup_location: Yup.string(),
      drop_location: Yup.string(),
      start_date: Yup.date().required("Please Enter Start Date"),
    
      // end_date: Yup.date().required("Please Enter End Date"),
      price_per_person: Yup.number().required("Please Enter Price Per Person"),
      description: Yup.string().required("Please Enter Description "),
      exclusion: Yup.string(),
      inclusion: Yup.string(),
      room_occupancy: Yup.string().required("Please Enter Room Occupancy"),
      // age_range: Yup.string().required("Please Enter Age Range"),
      // things_to_carry: Yup.string().required("Please Enter Things to Carry"),
      is_trip_captain: Yup.string().required("Please Select This Field"),
      type_of_transportation: Yup.string().required("Please Select This Field"),
      food_options: Yup.string(),
      itinerary: Yup.string(),
      packing_guide: Yup.string(),


    }),
    onSubmit: async (values) => {
      
      const tripData={
        ...values,
        title:values.trip_title,
        trip_themes:themes_array,
        food_options:food_options_array,
        middle_points:middle_points_array,
        inclusion:inclusive_array,
        exclusion:exclusive_array,
        

      }
      console.log(tripData)
    }

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
     validation.setFieldValue('inclusion', ); 
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
     validation.setFieldValue('food_options',validation.values.food_options ); 
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

const handleAddItinerary=()=>{
if(validation.values.itinerary.length<=0){

}
else{
  itinerary_array.push(validation.values.itinerary)
validation.setFieldValue("itinerary","")
}
}
const handleAddPackingGuide=()=>{
packing_guide_array.push(validation.values.packing_guide)
validation.setFieldValue("packing_guide","")
}

const handleDeleteItinerary=(i)=>{
  const newArray = [...itinerary_array]; // Create a copy of the array
  newArray.splice(i, 1); // Remove one element at index i
  setItinerary_array(newArray); // Update the state with the new array
}

const handleDeletePackingGuide = (i) => {
  const newArray = [...packing_guide_array]; // Create a copy of the array
  newArray.splice(i, 1); // Remove one element at index i
  setPacking_guide_array(newArray); // Update the state with the new array
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

// Removed use effect and copied t notepad
  const [selectedBanners, setSelectedBanners] = useState([]);

  const handleBannerDelete = (index) => {
    const updatedBanners = [...selectedBanners];
    updatedBanners.splice(index, 1);
    setSelectedBanners(updatedBanners);
  }
  

  //  async function  handleAcceptedBanners (acceptedBanners) {
  //   const updatedBanners = acceptedBanners.map(file => ({
  //     ...file,
  //     file: URL.createObjectURL(file),
  //   }));
  // setSelectedBanners(prevSelectedBanners => [...prevSelectedBanners, ...updatedBanners])
  // console.log(updatedBanners)
  // }



  async function handleAcceptedBanners(acceptedBanners) {
    // console.log(acceptedBanners)
    const formData = new FormData();
    formData.append(`files`,acceptedBanners );
    const res =await uploadTripImage(formData)


    // const updatedBanners = acceptedBanners.map(file => ({
    //     ...file,
    //     file: URL.createObjectURL(file), 
    //     originalFile: file, 
    // }));

    // await setSelectedBanners(prevSelectedBanners => {
    //     const newSelectedBanners = [...prevSelectedBanners, ...updatedBanners];
    //     const formData = new FormData();
    //     newSelectedBanners.forEach((banner, index) => {
    //         if (banner.originalFile) {
    //             formData.append(`files`, banner.originalFile);
    //         }
    //     });
      
    //     for (let [key, value] of formData.entries()) {
    //         console.log(value);
    //     }console.log(formData)

    //     let res=  uploadTripImage(formData)
    //     return newSelectedBanners;
    // });
}



const [toggler, setToggler] = useState(false);



  
//  const formData=new FormData();
  //  formData.append('file',updatedBanners)
    // let res =await uploadTripImage(updatedBanners)
    // const handleChange = event => {
    //   const fileUploaded = event.target.files[0];
    //   handleFile(fileUploaded);
    // };

const [file, setFile] = useState()
const handleFileChange=async(e)=>{
  console.log(e.target)
  setFile(e.target.files[0])

  const formData = new FormData();
  const image=e.target.files[0];
  console.log({image})

  // for single image upload
  // formData.append('file',image, image.name );
  // const data  = formData.get('file');
  // console.log({data});
  // const res =await uploadTripImage(formData)


  // for multiple images upload
  const images=[e.target.files[0],e.target.files[0]];
  for(let im of images){
    formData.append("files",im)
  }
  const res =await uploadTripImages(formData)
}


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




                    {/* <button onClick={() => setToggler(!toggler)}>
				Toggle Lightbox
			</button> */}
			 <FsLightbox
				toggler={toggler}
				sources={[
					'https://i.imgur.com/fsyrScY.jpg',
					'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
					'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
				]}
			/>




{/* Images */}
 <div className="mb-3 col-lg-12">
      <label className="form-label" htmlFor="tripBanner">
        Banner Picture*
      </label>{" "}
      <div className="mb-5">
        <Form>
           {/* <Dropzone
            onDrop={acceptedBanners => {
              handleAcceptedBanners(acceptedBanners);
              
            }}
            name="files"
          >
            {({ getRootProps, getInputProps }) => (
              <div className="dropzone  d-flex flex-column justify-content-center align-items-center" {...getRootProps()}>
                <input  {...getInputProps()} />
                <div className="mb-3">
                  <i className="mdi mdi-cloud-upload display-6  text-muted"></i>
                </div>
                <h6>Drop files here or click to upload.</h6>
              </div>
            )}
          </Dropzone>  */}

          <input
          type="file"
          onChange={handleFileChange}
          // value={(e)=>{}}
          />

  {/* <Input
  type="file"
  name="banner"
  value={validation.values.image || ''}
  onChange={handleChange}
  /> */}

          <div className="dropzone-previews mt-3" id="file-previews">
          <Row className="align-items-center ">

            {selectedBanners.map((selectedBanner, index) => (
              <Card key={index} className="mt-1 col-1  mx-3  mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="py-2 d-flex  align-items-center">
                    <Col className="col-3">
                      <img
                        data-dz-thumbnail=""
                        height="80"
                        className="avatar-sm rounded bg-light"
                        alt={selectedBanner.name}
                        src={selectedBanner.file}
                        onClick={() => setToggler(!toggler)}
                      />
                    </Col>
                    <Col className=' ms-5 pe-2 col-3' >
                     <i onClick={()=>handleBannerDelete(index)} className='  fas fa-trash-alt text-danger' role="button" ></i>
                    </Col>
                </div>
              </Card>
              
            ))}
            </Row>
          </div>
        </Form>
      </div>
    </div>

<div className="mb-3 col-lg-4">
      <Label className="form-label" htmlFor="company_name">
        Company Name*
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
        {travelAgents.map((option, index) => (
          <option key={index} value={option.id}>
            {option.name}
          </option>
        ))}
      </Input>
      {validation.touched.company_name && validation.errors.company_name ? (
        <FormFeedback type="invalid">{validation.errors.company_name}</FormFeedback>
      ) : null}
    </div>

 <div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="trip_title">
                        Trip Title*
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
                        <Label className="form-label" htmlFor="pickup_location">
                        Pickup Location (optional)
                        
                        </Label>
                        <Input
                          type="text"
                          id="pickup_location"
                          name='pickup_location'
                           className="form-control"
                          placeholder="Enter Pickup Location  "
                          required
                          onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.pickup_location || ''}
                            // invalid={validation.touched.pickup_location && validation.errors.pickup_location ? true : false}
                        />
                        {/* {validation.touched.pickup_location && validation.errors.pickup_location ? (
                            <FormFeedback type="invalid">{validation.errors.pickup_location}</FormFeedback>
                          ) : null} */}
     </div>

     <div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="pickup_location">
                        Drop Location (optional)
                        
                        </Label>
                        <Input
                          type="text"
                          id="drop_location"
                          name='drop_location'
                           className="form-control"
                          placeholder="Enter Drop Location  "
                          required
                          onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.drop_location || ''}
                            // invalid={validation.touched.drop_location && validation.errors.drop_location ? true : false}
                        />
                        {/* {validation.touched.drop_location && validation.errors.drop_location ? (
                            <FormFeedback type="invalid">{validation.errors.drop_location}</FormFeedback>
                          ) : null} */}
     </div>


   <div className="mb-3 col-lg-4">
      <Label className="form-label" htmlFor="start_point">
        Start Point*
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
        End Point*
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
                          Seats Left*
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
                        Duration*
                        </Label>
                      <div className="d-flex align-items-center justify-content-between " >
                      <Input
                          type="text"
                          id="duration"  
                          name="duration"  
                           className="form-control w-100"
                          required
                          placeholder="Enter Duration In Days eg(1) "
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.duration || ''}
                          invalid={validation.touched.duration && validation.errors.duration ? true : false}
                       
                        />
<div className={`d-flex ${validation.values.duration ? 'w-100 ms-4' : ''}`}>
                        <b>
  {validation.values.duration ? `${validation.values.duration} Day${validation.values.duration > 1 ? 's ' : ' '}` : ""}
  {validation.values.duration ? `${validation.values.duration - 1}  Night${(validation.values.duration - 1) > 1 ? 's' : ''}` : ""}
</b>

                        </div>
                      </div>
                        {validation.touched.duration && validation.errors.duration ? (
                            <FormFeedback type="invalid">{validation.errors.duration}</FormFeedback>
                          ) : null}
     </div>

 <div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="start_date">
                          Start Date*
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

 {/* <div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="end_date">
                          End Date*
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
   </div> */}

<div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="price_per_person">
                        Price Per Person*
                        </Label>
                        <Input
                          type="number"
                          id="price_per_person"  
                           className="form-control"
                          required
                          name='price_per_person'
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
  <Label className="form-label" htmlFor="room_occupancy">
    Room Occupancy
  </Label>
  <select
    id="room_occupancy"
    name='room_occupancy'
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

<div className="mb-3 col-lg-4">
  <Label className="form-label" htmlFor="is_trip_captain">
    Trip Captain*
  </Label>
  <Input
  type="select"
    id="is_trip_captain"
    onChange={validation.handleChange}
    onBlur={validation.handleBlur}
    value={validation.values.is_trip_captain || ''}
    invalid={validation.touched.is_trip_captain && validation.errors.is_trip_captain ? true : false}
    className="form-control"
    name='is_trip_captain'
    required
  >
    <option value="">Is Trip Captain Required</option>
    <option value="yes">yes</option>
    <option value="no">no</option>
  </Input>
  {validation.touched.is_trip_captain && validation.errors.is_trip_captain ? (
    <FormFeedback type="invalid">{validation.errors.is_trip_captain}</FormFeedback>
  ) : null}
</div>

<div className="mb-3 col-lg-4">
  <Label className="form-label" htmlFor="type_of_transportation">
    Transportation*
  </Label>
  <Input 
  type='select'
    id="type_of_transportation"
    name='type_of_transportation'
    onChange={validation.handleChange}
    onBlur={validation.handleBlur}
    value={validation.values.type_of_transportation || ''}
    invalid={validation.touched.type_of_transportation && validation.errors.type_of_transportation ? true : false}
    className="form-control"
    required
  >
    <option value="Select Transportation">Select Transportation</option>

{transportationTypesState.map((trans,index)=>(
<>
<option value={`${trans.type_name}`}>{trans.type_name}</option>
</>
))}

    
  </Input>
  {validation.touched.type_of_transportation && validation.errors.type_of_transportation ? (
    <FormFeedback type="invalid">{validation.errors.type_of_transportation}</FormFeedback>
  ) : null}
</div>

<div className="mb-3 col-lg-12">
                        <Label className="form-label" htmlFor="description">
                        Description*
                        </Label>
                        <Input
                          type="textarea"
                          id="description"
                          name='description'
                          className="form-control"
                          placeholder="Enter Description "
                          required
                          rows={4}
                          style={{ resize: 'none' }}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.description || ''}
                          invalid={validation.touched.description && validation.errors.description ? true : false}
                       
                        />{validation.touched.description && validation.errors.description ? (
                          <FormFeedback type="invalid">{validation.errors.description}</FormFeedback>
                        ) : null}
 </div>

 {/* <div className="mb-3 col-lg-6">
                        <label className="form-label" htmlFor="thingsToCarry">
                          Things To Carry*
                        </label>
                        <Input
                          type="textarea"
                          id="things_to_carry"
                          name='things_to_carry'
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
  </div> */}


  <div className="mb-3 col-lg-12">
  <Label>Age Range</Label>
  <div className="d-flex " >
  {ageRanges.map(option => (
    <div className=" mx-2 d-flex align-items-center" key={option.id}>
      <input
        type="checkbox"
        id={`age-range-${option.id}`} // Ensure the ID is unique and descriptive
        name="age_range"
        value={option.id}
        checked={validation.values.age_range.includes(option.id.toString())} // Make sure the comparison is correct
        onChange={e => {
          if (e.target.checked) {
            validation.setFieldValue("age_range", [...validation.values.age_range, option.id.toString()]); // Ensure the value is correctly typed
          } else {
            validation.setFieldValue("age_range", validation.values.age_range.filter(id => id !== option.id.toString())); // Ensure the comparison is correct
          }
        }}
      />
      <label className="mb-0" htmlFor={`age-range-${option.id}`}>{option.display_name}</label> {/* Match the htmlFor with input's id */}
    </div>
  ))}
  </div>
</div>


<div className="mb-3 col-lg-4">
  <Label className="form-label" htmlFor="trip_themes">
    Themes that best describe your Group Trip(optional)
  </Label>
  <div className='d-flex align-items-center justify-content-between' >
  <Input
  type='select'
    id="trip_themes"
    onChange={validation.handleChange}
    onBlur={validation.handleBlur}
    value={validation.values.trip_themes || []} 
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
  </Input>
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
  <Label className="form-label" htmlFor="food_options">
  Food Options*
  </Label>
  <div className='d-flex align-items-center' >
  <Input
     type='select'
    id="food_options"
    name="food_options"
    onChange={validation.handleChange}
    onBlur={validation.handleBlur}
    value={validation.values.food_options || ''}
    className="form-control"
    required
  >
    <option value="">Select Food Options</option>
    {
  mealsOptions.map(option => (
    <option key={option.type_name} value={option.type_name}>{option.type_name}</option>
  ))
}

 </Input>
 <button onClick={handleAddFoodOptions} type='button' className='btn btn-success mx-1' >Add</button>

  </div>
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
  <Label className="form-label" htmlFor="packing_guide">
  Packing Guide
  </Label>
  <div className='d-flex align-items-center' >
  <Input
     type='text'
    id="packing_guide"
    name="packing_guide"
    onChange={validation.handleChange}
    onBlur={validation.handleBlur}
    value={validation.values.packing_guide || ''}
    className="form-control"
    required={packing_guide_array.length>0?false:true}
  />
 <button onClick={handleAddPackingGuide} type='button' className='btn btn-success mx-1' >Add</button>

  </div>
  <div className='d-flex flex-column '>
    {packing_guide_array.map((data, i) => (
      <div className='d-flex justify-content-between mx-3' key={i}>
        <h6 className='my-2 w-100 d-flex align-items-start justify-content-between'>
          {data}
          <Badge className='mx-2 bg-transparent'>
            <i onClick={(e)=>{handleDeletePackingGuide(i)}} type="button" button="role" className="fas fa-window-close fs-5 text-danger" />
          </Badge>
        </h6>
      </div>
    ))}
  </div>
</div>





<div className="mb-3 col-lg-4">
  <Label className="form-label" htmlFor="middle_points">
    Middle Points
  </Label>
  <div className='d-flex justify-content-between '>
    <Input
    type='select'
      id="middle_points"
      className="form-control"
      onChange={validation.handleChange}
      onBlur={validation.handleBlur}
      value={validation.values.middle_points || ''}
    >
      <option value="">Select Middle Points</option>
      {dummyMiddlePoints.map((data, i) => (
        <option key={i} value={data}>{data}</option>
      ))}
    </Input>
    <button onClick={handleAddMiddlePoints} type='button' className='btn btn-success mx-1' >Add</button>
  </div>
 

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
                          name="inclusion"
                          className="form-control"
                          placeholder="Enter Inclusion"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.inclusion || ''}
                          required={inclusive_array.length>0?false:true}
                          rows={4}
                          style={{ resize: 'none' }}
                        
                       
                        />
                        
                        <button onClick={handleAddInclusion} type='button' className='btn btn-success mx-1' >Add</button>
                        </div>
                      

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
                          name="exclusion"
                          className="form-control"
                          placeholder="Enter Exclusion"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.exclusion || ''}
                        
                          required={exclusive_array.length>0?false:true}
                          rows={4}
                          style={{ resize: 'none' }}
                          
                       
                        />
                        <button onClick={handleAddExclusion} type='button' className='btn btn-success mx-1' >Add</button>
                        </div>
                        


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


<div className="mb-3 col-lg-12">
                        <Label className="form-label" htmlFor="itinerary">
                        Itinerary
                        </Label>
                        <div className="mb-2" ><b>Day Wise </b></div>
                        <div className='d-flex justify-content-between ' >
                        <Input
                          type="textarea"
                          id="itinerary"
                          name="itinerary"
                          className="form-control w-100"
                          placeholder="Enter itinerary"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.itinerary || ''}
                        
                          required={itinerary_array.length>0?false:true}
                          rows={4}
                          style={{ resize: 'none' }}
                          
                       
                        />
                        
                  



</div>
<div className="d-flex justify-content-center" >
<button onClick={handleAddItinerary} style={{width:"200px"}} type='button' className='btn my-2 btn-success py-2  mx-1' >Add More </button>
                        </div>

                        <div className='d-flex flex-column ' >
  {itinerary_array.map((data, i) => (
   <div className='d-flex justify-content-between mx-3' >
    <div className="fw-bold" style={{minWidth:"200px"}} ><b   >Day {i+1}</b></div>
     <h6 className='my-2 w-100 d-flex align-items-start justify-content-between ' key={i}>
      {data}
      <Badge className='mx-2 bg-transparent'>
        <i onClick={(e)=>{handleDeleteItinerary(i)}} type="button" button="role" className="fas fa-window-close fs-5 text-danger" >
        </i>
      </Badge>
    </h6>
   </div>
  ))}
  </div>

</div>


                      <button  type='submit' className="mt-1 btn btn-success">
  {type === 'Edit' ? 'Update Trip' : 'Create Trip'}
</button>
                    </div>




                  
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
