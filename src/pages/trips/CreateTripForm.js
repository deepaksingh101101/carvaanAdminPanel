// CreateCustomerForm.js
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {FormFeedback,FormGroup,Badge, Row, Col, Card, CardBody, CardTitle ,Container , Form,Label, Input} from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pushTrip, setTripData, storeAccomodation, storeAge, storeAgents, storeMeals, storePoints, storeTheme, storeTransportation, updateTrip } from 'store/auth/user_admin_data/actions';
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
import { createPackage, getAllAgeRange, getAllMeals, getAllPoints, getAllThemes, getAllTransportationTypes, getPackage, get_All_Travel_Agents, patchPackageEdit, uploadTripImage, uploadTripImages } from 'helpers/fakebackend_helper';
import { duration } from 'moment';
import Loader from 'components/loader/Loader';

const FileUploader = ({handleFile}) => {


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
  const [loader, setLoader] = useState(false);
  const todayDate = new Date().toISOString().split('T')[0];

  // let { tripData } = useSelector((state) => state.TripReducers);
  // const trip = tripData.find((trip) => trip.sno == sno);

  const navigate = useNavigate();

  const [tripCreate, setTripCreate] = useState([]);
const [middle_points_array, setMiddle_points_array] = useState([])
const [inclusive_array, setInclusive_array] = useState([])
const [exclusive_array, setExclusive_array] = useState([])
const [themes_array, setThemes_array] = useState([])
const [itinerary_array, setItinerary_array] = useState([])
const [packing_guide_array, setPacking_guide_array] = useState([])
const [facilities_array, setFacilities_array] = useState([])


const [message, setMessage] = useState("Something went's wrong")
const isOpen = useSelector(state => state.alertReducer.isOpen);

const [mealsOptions, setMealsOptions] = useState([])
const [ageRanges, setAgeRanges] = useState([])
const [transportationTypesState, setTransportationTypesState] = useState([])
const [travelAgents, setTravelAgents] = useState([])
const [points, setPoints]=useState([])
const [themes, setThemes]=useState([])

const accomodations=[
  {
    id:1,
    name:"Camp",
  },
  {
    id:2,
    name:"Hotel",
  },
  {
    id:3,
    name:"Dorm",
  }
]
const [tripState, setTripState] = useState(null)

const { id } = useParams();


useEffect(() => {
  const fetchData = async () => {

    try {
      if(type==="Edit"){
      let tripData = await getPackage(); 
      dispatch(setTripData(tripData))
      const foundTrip = tripData.find((trip) => trip.id == id); 
      setTripState(foundTrip);
      console.log(foundTrip)
      validation.setFieldValue("company_name", foundTrip.travel_agent_id.id.toString());
      validation.setFieldValue("trip_title", foundTrip.title);
      validation.setFieldValue("pickup_location", foundTrip.pick_up_location);
      validation.setFieldValue("drop_location", foundTrip.drop_location);
      validation.setFieldValue("start_point", foundTrip.starting_point_id.id);
      validation.setFieldValue("end_point", foundTrip.ending_point_id.id);
      validation.setFieldValue("seats_left", foundTrip.seats_left);
      validation.setFieldValue("duration", foundTrip.duration_days);
      // validation.setFieldValue("start_date", new Date("2024-03-11T10:29:59.000Z").toISOString().split('T')[0]);
      validation.setFieldValue("start_date", new Date(foundTrip.start_date).toISOString().split('T')[0]);
      setSelectedBanners(foundTrip.images)
      validation.setFieldValue("price_per_person", foundTrip.price)
      // validation.setFieldValue("_point", foundTrip.drop_location);
      validation.setFieldValue("is_trip_captain", foundTrip.trip_captain_required===true?"true":"false");
      validation.setFieldValue("accomodation_type_id", foundTrip.accomodation_type_id.id);
      validation.setFieldValue("description", foundTrip.description);
      validation.setFieldValue("is_active", foundTrip.is_active);
      validation.setFieldValue("type_of_transportation", foundTrip.transportation_type_id.id);
      validation.setFieldValue("age_range", foundTrip.age_ranges.map(ageRange => ageRange.id.toString()));
      setThemes_array(foundTrip.themes.map(theme => theme.id.toString()));
      validation.setFieldValue("food_options", foundTrip.meal_type_id.id);
      setPacking_guide_array(foundTrip.packing_guide.map(guide => guide.toString()));
      setMiddle_points_array(foundTrip.middle_points.map(point => point.id.toString()));
        setInclusive_array(foundTrip.inclusives)
        setExclusive_array(foundTrip.exclusives)
        console.log(foundTrip.day_wise_itenary)
        setItinerary_array(foundTrip.day_wise_itenary)
        setFacilities_array(foundTrip.facilities)
    }
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData(); // Call the fetchData function
}, [id]);


const fetchOptions=async()=>{
  try {
   const meals= await getAllMeals();
   const ages= await getAllAgeRange();
   const agents=await get_All_Travel_Agents()
   const points=await getAllPoints();
   const theme=await getAllThemes();
    const transportationTypes=await getAllTransportationTypes()
  
  setPoints(points)
    setMealsOptions(meals)
    setAgeRanges(ages)
    setTransportationTypesState(transportationTypes)
    setTravelAgents(agents)
    setThemes(theme)


    dispatch(storeMeals(meals))
    dispatch(storeAge(ages))
    dispatch(storeAgents(agents))
    dispatch(storePoints(points))
    dispatch(storeTransportation(transportationTypes))
    dispatch(storeTheme(theme))
    dispatch(storeAccomodation(accomodations))
  

  } catch (error) {
    console.log(error.response)
  }
}

useEffect(() => {
fetchOptions()
}, [])
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
      facilities: tripCreate.facilities || "", 
      // room_occupancy: tripCreate.room_occupancy || "",
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
      flight_inclusive:tripCreate.flight_inclusive||false,
      accomodation_type_id:tripCreate.accomodation_type_id||"",
      is_active:tripCreate.is_active || true,
    },
    validationSchema: Yup.object({
      company_name: Yup.number().required("Please Enter The Company Name"),
      trip_title: Yup.string().required("Please Enter Trip Title"),
      start_point: Yup.string().required("Please Enter Start Point"),
      end_point: Yup.string().required("Please Enter End Point"),
      seats_left: Yup.number().required("Please Enter Remaining Seats"),
      duration: Yup.string().required("Please Enter No of Days"),
      pickup_location: Yup.string(),
      drop_location: Yup.string(),
      start_date: Yup.date().required("Please Enter Start Date"),
      flight_inclusive: Yup.boolean().required("Please Enter this fields"),
    
      // end_date: Yup.date().required("Please Enter End Date"),
      price_per_person: Yup.number().required("Please Enter Price Per Person"),
      description: Yup.string().required("Please Enter Description "),
      exclusion: Yup.string(),
      inclusion: Yup.string(),
      // room_occupancy: Yup.string().required("Please Enter Room Occupancy"),
      // age_range: Yup.string().required("Please Enter Age Range"),
      // things_to_carry: Yup.string().required("Please Enter Things to Carry"),
      is_trip_captain: Yup.boolean().required("Please Select This Field"),
      type_of_transportation: Yup.string().required("Please Select This Field"),
      food_options: Yup.string(),
      itinerary: Yup.string(),
      packing_guide: Yup.string(),
      accomodation_type_id:Yup.number().required("Please Select This Field"),
      

    }),
    onSubmit: async (values) => {
      
      // const tripData={
      //   title:values.trip_title,
      //   starting_point_id:parseInt(values.start_point),
      //   middle_point_ids:middle_points_array.length > 0 ? middle_points_array.map(Number) : null,
      //   ending_point_id:parseInt(values.end_point),
      //   theme_ids:themes_array.length > 0 ? themes_array.map(Number):null,
      //   trip_captain_required: Boolean(values.is_trip_captain),
      //   day_wise_itenary:itinerary_array,
      //   description:values.description,
      //   is_active:true,
      //   start_date:values.start_date,
      //   duration_days:parseInt(values.duration),
      //   price:parseInt(values.price_per_person),
      //   travel_agent_id:parseInt(values.company_name),
      //   pick_up_location:values.pickup_location,
      //   drop_location:values.drop_location,
      //   inclusives:inclusive_array,
      //   exclusives:exclusive_array,
      //   accomodation_type_id:parseInt(values.accomodation_type_id),
      //   seats_left:parseInt(values.seats_left),
      //   flights_inclusive: values.flight_inclusive === 'true'        ,
      //   age_range_ids:values.age_range.map(Number),
      //   transportation_type_id:parseInt(values.type_of_transportation),
      //   meal_type_id:parseInt(values.food_options),
      //   packing_guide:packing_guide_array,
      //   images:selectedBanners,
      //   facilities:facilities_array,
      //   created_by:JSON.parse(localStorage.getItem("authUser")).admin.id,
      //   updated_by:JSON.parse(localStorage.getItem("authUser")).admin.id,
      // }

//       const userId = JSON.parse(localStorage.getItem("authUser")).admin.id;
// const tripData = {
//   title: values.trip_title,
//   starting_point_id: parseInt(values.start_point),
//   middle_point_ids: middle_points_array.length > 0 ? middle_points_array.map(Number) : null,
//   ending_point_id: parseInt(values.end_point),
//   theme_ids: themes_array.length > 0 ? themes_array.map(Number) : null,
//   trip_captain_required: (values.is_trip_captain==="true"?true:false),
//   day_wise_itenary: itinerary_array,
//   description: values.description,
//   is_active: values.is_active,
//   start_date: values.start_date,
//   duration_days: parseInt(values.duration),
//   price: parseInt(values.price_per_person),
//   travel_agent_id: parseInt(values.company_name),
//   pick_up_location: values.pickup_location,
//   drop_location: values.drop_location,
//   inclusives: inclusive_array,
//   exclusives: exclusive_array,
//   accomodation_type_id: parseInt(values.accomodation_type_id),
//   seats_left: parseInt(values.seats_left),
//   flights_inclusive: values.flight_inclusive === 'true',
//   age_range_ids: values.age_range.map(Number),
//   transportation_type_id: parseInt(values.type_of_transportation),
//   meal_type_id: parseInt(values.food_options),
//   packing_guide: packing_guide_array,
//   images: selectedBanners,
//   facilities: facilities_array,
//   created_by: userId,
//   updated_by: type === "Edit" ? userId : null,
// };

      const userId = JSON.parse(localStorage.getItem("authUser")).admin.id;

const tripData = {
  title: values.trip_title,
  starting_point_id: parseInt(values.start_point),
  middle_point_ids: middle_points_array.length > 0 ? middle_points_array.map(Number) : null,
  ending_point_id: parseInt(values.end_point),
  theme_ids: themes_array.length > 0 ? themes_array.map(Number) : null,
  trip_captain_required: values.is_trip_captain === "true",
  day_wise_itenary: itinerary_array,
  description: values.description,
  is_active: values.is_active,
  start_date: values.start_date,
  duration_days: parseInt(values.duration),
  price: parseInt(values.price_per_person),
  travel_agent_id: parseInt(values.company_name),
  pick_up_location: values.pickup_location,
  drop_location: values.drop_location,
  inclusives: inclusive_array,
  exclusives: exclusive_array,
  accomodation_type_id: parseInt(values.accomodation_type_id),
  seats_left: parseInt(values.seats_left),
  flights_inclusive: values.flight_inclusive === 'true',
  age_range_ids: values.age_range.map(Number),
  transportation_type_id: parseInt(values.type_of_transportation),
  meal_type_id: parseInt(values.food_options),
  packing_guide: packing_guide_array,
  images: selectedBanners,
  facilities: facilities_array,
};

// Add created_by field if type is not Edit
if (type !== "Edit") {
  tripData.created_by = userId;
}

// Add updated_by field if type is Edit
if (type === "Edit") {
  tripData.updated_by = userId;
}

    try {
      if(type==="Edit"){
        let res =await patchPackageEdit(tripData,id)
              if(res.id){
                   navigate('/tripDetails')          
                  }              
        }
          else{
        let res =await createPackage(tripData)
        if(res.id){
          navigate('/tripDetails')
              }
        }

      } catch (error) {
      // handle error
    }

    }

  })
  
const handleAddMiddlePoints = (e) => {
  if (validation.values.middle_points.length === 0) {
    // Handle case where there are no middle points
  } else {
    const middlePointId = validation.values.middle_points; // Assuming this is the ID
   
    console.log(middlePointId)
    // Find the point that matches the ID

    // Proceed if a matching point is found
    if (middlePointId) {
      // const middlePointName = matchingPoint.name;

      if (!middle_points_array.includes(middlePointId)) {
        middle_points_array.push(middlePointId);
        console.log(middle_points_array)
        validation.setFieldValue('middle_points', ""); 
      } else {
        setMessage("This middle point is already included");
        dispatch(SomethingAlertTrue());
        setTimeout(() => {
          dispatch(SomethingAlertFalse());
          setMessage("Something went wrong");
        }, 2000);
      }
    } else {
      // Handle case where no matching point is found
      // This could be an invalid ID or the point is not active/available
    }
  }
};

const handleAgeRangeChange = (optionId, isChecked) => {
  console.log(optionId,isChecked)
  // Convert optionId to string to ensure consistency in data types
  const optionIdStr = optionId.toString();

  if (isChecked) {
    // Add the optionId to the array if it's not already present
    const newAgeRange = validation.values.age_range.includes(optionIdStr) 
      ? [...validation.values.age_range] 
      : [...validation.values.age_range, optionIdStr];
    validation.setFieldValue('age_range', newAgeRange);
  } else {
    // Remove the optionId from the array
    const newAgeRange = validation.values.age_range.filter(id => id !== optionIdStr);
    validation.setFieldValue('age_range', newAgeRange);
  }
};

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

 const handleAddFacilities=(e)=>{
  e.preventDefault(validation.values.facilities.length);
  console.log()
if(validation.values.facilities.length==0){
// show a error message  for not filling the field
}
else{

if(facilities_array.length<20){
  if(!facilities_array.includes(validation.values.facilities)){
    facilities_array.push(
      validation.values.facilities
     )
     validation.setFieldValue('facilities', ); 
  }
  else{
    setMessage("This facilities already included")
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
//  const handleAddFoodOptions=(e)=>{
//   e.preventDefault(validation.values.food_options.length);
//   console.log()
// if(validation.values.food_options.length==0){
// }
// else{

// if(food_options_array.length<=10){
//   if(!food_options_array.includes(validation.values.food_options)){
//     food_options_array.push(
//       validation.values.food_options
//      )
//      validation.setFieldValue('food_options',validation.values.food_options ); 
//   }
//   else{
//     setMessage("This Food already included")
//     dispatch(SomethingAlertTrue());
//     setTimeout(() => {
//       dispatch(SomethingAlertFalse());
//       setMessage("Something went's wrong")
//     }, 2000);
//   }
// }
// else{
//   setMessage("Cannot Exceed more than 50")
//   dispatch(SomethingAlertTrue());
//   setTimeout(() => {
//     dispatch(SomethingAlertFalse());
//     setMessage("Something went's wrong")
//   }, 2000);
// }

 
 
// }
//  }

const handleAddItinerary=()=>{
if(validation.values.itinerary.length<=0){

}
else{
  // itinerary_array.push(`Day ${itinerary_array.length+1}: ${validation.values.itinerary}`)
  itinerary_array.push(`${validation.values.itinerary}`)
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

const handleDeleteFacilites = (i) => {
  const newArray = [...facilities]; // Create a copy of the array
  newArray.splice(i, 1); // Remove one element at index i
  setFacilities_array(newArray); // Update the state with the new array
}

const handleDeleteMiddlePoints = (i) => {
    const newArray = [...middle_points_array]; // Create a copy of the array
    newArray.splice(i, 1); // Remove one element at index i
    setMiddle_points_array(newArray); // Update the state with the new array
}


// Removed use effect and copied t notepad
  const [selectedBanners, setSelectedBanners] = useState([]);

  let matchingPoint;

const [toggler, setToggler] = useState(false);

const [file, setFile] = useState()


const handleFileChange = async (e) => {
  setLoader(true);
  const files = e.target.files;
  const formData = new FormData();

  // Append each file to the FormData object
  Array.from(files).forEach((file) => {
    formData.append("files", file);
  });

  try {
    // Assuming uploadTripImages function returns the uploaded image URLs
    const res = await uploadTripImages(formData);

    // Extracting image URLs from the response and storing them in an array of strings
    const uploadedImageUrls = res.map((item) => item.image_url);

    // Merging uploaded image URLs with existing image URLs
    const updatedBanners = [...selectedBanners, ...uploadedImageUrls];

    // Updating selectedBanners state with the array of image URLs
    setSelectedBanners(updatedBanners);
    setLoader(false);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

const [isActive, setIsActive] = useState(true)

const toggleStatus = () => {
  validation.setFieldValue("is_active",!validation.values.is_active )
};

const handleBannerDelete = (index) => {
  const updatedBanners = [...selectedBanners];
  updatedBanners.splice(index, 1);
  setSelectedBanners(updatedBanners);
};


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
let { tripData } = useSelector((state) => state.TripReducers);
const trip = tripData.find((trip) => trip.id == id);


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

{/* Images */}
{loader && <Loader/>}




 {
  !loader && <div className="mb-3 col-lg-12">
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

<Input
type="file"
onChange={handleFileChange}
multiple // Add the multiple attribute to enable selecting multiple files
/>


{/* <Input
type="file"
name="banner"
value={validation.values.image || ''}
onChange={handleChange}
/> */}

      <div className="dropzone-previews mt-3" id="file-previews">
      <Row className="align-items-center ">

        {/* {selectedBanners.map((selectedBanner, index) => (
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
          
        ))} */}

{selectedBanners.map((selectedBanner, index) => (
  <Card key={index} className="mt-1 col-1 mx-3 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
    <div className="py-2 d-flex align-items-center">
      <Col className="col-3">
        <img
          data-dz-thumbnail=""
          height="80"
          className="avatar-sm rounded bg-light"
          src={selectedBanner} // Access selectedBanner directly instead of selectedBanner[index]
          onClick={() => openLightboxOnSlide(index + 1)} // Open lightbox with the clicked image's index
        />
      </Col>
      <Col className='ms-5 pe-2 col-3'>
        <i onClick={() => handleBannerDelete(index)} className='fas fa-trash-alt text-danger' role="button"></i>
      </Col>
    </div>
  </Card>
))}


<FsLightbox
  toggler={lightboxController.toggler}
  sources={selectedBanners.map(banner => banner)}
  types={selectedBanners.map(banner => 'image')}
  slide={lightboxController.slide}
/>


        </Row>
      </div>
    </Form>
  </div>
</div>
 }

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
          <option key={index} value={parseInt(option.id)}>
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
        {points.map((startPoint, index) => (
          <option key={index} value={startPoint.id}>
            {startPoint.name}, {startPoint.country_name}
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
        {points.map((endPoint, index) => (
          <option key={index} value={endPoint.id}>
            {endPoint.name}, {endPoint.country_name}
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

 {/* <div className="mb-3 col-lg-4">
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
   </div> */}
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
    min={todayDate} // Ensure users cannot select a date before today
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

{/* <div className="mb-3 col-lg-4">
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
</div> */}

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
    <option value={true}>yes</option>
    <option value={false}>no</option>
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
<option value={trans.id}>{trans.type_name}</option>
</>
))}

    
  </Input>
  {validation.touched.type_of_transportation && validation.errors.type_of_transportation ? (
    <FormFeedback type="invalid">{validation.errors.type_of_transportation}</FormFeedback>
  ) : null}
</div>



<div className="mb-3 col-lg-4">
      <Label className="form-label" htmlFor="accomodation">
        Accomodation*
      </Label>
      <Input
        type="select"
        id="accomodation"
        className="form-control"
        placeholder="Select Accomodation"
        required
        name="accomodation_type_id"
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        value={validation.values.accomodation_type_id || ''}
        invalid={validation.touched.accomodation_type_id && validation.errors.accomodation_type_id ? true : false}
      >
        <option value="">Select Accomodation Type</option>
        {accomodations.map((accomodation, index) => (
          <option key={index} value={accomodation.id}>
            {accomodation.name}
          </option>
        ))}
      </Input>
      {validation.touched.start_point && validation.errors.start_point ? (
        <FormFeedback type="invalid">{validation.errors.start_point}</FormFeedback>
      ) : null}
    </div>


   {
    type==="Edit" &&
    <div className="mb-3 col-lg-3 mt-3 py-3 d-flex flex-column justify-content-start">
    <label className="form-label" htmlFor="is_active">
      Is Active
    </label>
    <FormGroup switch className="d-flex align-items-center" style={{ height: '-webkit-fill-available' }}>
    <Input
type="switch"
name="is_active"
role="switch"
id="is_active"
onChange={(event) => {
validation.handleChange(event); // Pass event to handleChange
toggleStatus();
}}
value={validation.values.is_active}
onBlur={validation.handleBlur}
checked={validation.values.is_active} // Bind switch value to form state
/>

      <Label
        className="mb-0 ms-3"
        check={isActive}
        style={{
          color: validation.values.is_active ? 'green' : 'red',
          display: 'inline-block',
        }}
      >
        {validation.values.is_active ? 'Active' : 'In Active'}
      </Label>
    </FormGroup>
  </div>
   }





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


{
  <div className="mb-3 col-lg-8">
  <Label>Age Range</Label>
  <div className="d-flex " >
  {ageRanges.map(option => (
    <div className=" mx-2 d-flex align-items-center" key={option.id}>
      <input
        type="checkbox"
        id={`age-range-${option.id}`} // Ensure the ID is unique and descriptive
        name="age_range"
        value={option.id}
        checked={validation.values.age_range.includes(option.id.toString())} 
        onChange={e => handleAgeRangeChange(option.id, e.target.checked)}
      />
      <label className="mb-0" htmlFor={`age-range-${option.id}`}>{option.display_name}</label> {/* Match the htmlFor with input's id */}
    </div>
  ))}
  </div>
</div>
}


{validation.values.type_of_transportation=="5" &&
<div className="mb-3 col-lg-4">
  <Label className="form-label">Flight Ticket Required*</Label>
  <FormGroup className='d-flex ' >
    <div>
      <Input
        type="radio"
        id="flight_inclusive_true"
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        className="form-check-input"
        name='flight_inclusive'
        value={true} // true boolean value
        required={validation.values.type_of_transportation=="5"}
      />
      <Label htmlFor="flight_inclusive_true" className=" ms-1 form-check-label">Yes</Label>
    </div>
    <div>
      <Input
        type="radio"
        id="flight_inclusive_false"
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        className="form-check-input ms-3"
        name='flight_inclusive'
        value={false} // false boolean value
        required={validation.values.type_of_transportation=="5"}
      />
      <Label htmlFor="flight_inclusive_false" className="ms-1 form-check-label">No</Label>
    </div>
  </FormGroup>
  {validation.touched.flight_inclusive && validation.errors.flight_inclusive ? (
    <FormFeedback type="invalid">{validation.errors.flight_inclusive}</FormFeedback>
  ) : null}
</div>
}







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
  {themes.map((theme, index) => (
    <option key={index} value={theme.id}>{theme.name}</option>
  ))}
</Input>

  <button onClick={handleAddTheme} type='button' className='btn btn-success mx-1' >Add</button>

  </div>


  {/* <div className='d-flex flex-column '>
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
  </div> */}


  <div className='d-flex flex-column '>
  {themes_array.map((data, i) => {
    // Assuming points is accessible and each point has a unique id
    const matchingTheme = themes.find(theme => theme.id.toString() === data);
    
    return (
      <div className='d-flex justify-content-between mx-3' key={matchingTheme ? matchingTheme.id : i}>
        <h6 className='my-2 w-100 d-flex align-items-start justify-content-between'>
          {matchingTheme ? matchingTheme.name : 'Unknown'}
          <Badge className='mx-2 bg-transparent'>
            <i onClick={() => handleDeleteTheme(i)} role="button" className="fas fa-window-close fs-5 text-danger" />
          </Badge>
        </h6>
      </div>
    );
  })}
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
    <option key={option.type_name} value={option.id}>{option.type_name}</option>
  ))
}

 </Input>
 {/* <button onClick={handleAddFoodOptions} type='button' className='btn btn-success mx-1' >Add</button> */}

  </div>
  {/* <div className='d-flex flex-column '>
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
  </div> */}

  {/* <div className='d-flex flex-column '>
  {food_options_array.map((data, i) => {
    const matchingPoint = mealsOptions.find(point => point.id.toString() === data);
    
    return (
      <div className='d-flex justify-content-between mx-3' key={matchingPoint ? matchingPoint.id : i}>
        <h6 className='my-2 w-100 d-flex align-items-start justify-content-between'>
          {matchingPoint ? matchingPoint.type_name : 'Unknown'}
          <Badge className='mx-2 bg-transparent'>
            <i onClick={() => handleDeleteFoodOptions(i)} role="button" className="fas fa-window-close fs-5 text-danger" />
          </Badge>
        </h6>
      </div>
    );
  })}
</div> */}


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
      {points.map((data, i) => (
        <option key={i} value={data.id}>{data.name}, {data.country_name}</option>
      ))}
    </Input>
    <button onClick={handleAddMiddlePoints} type='button' className='btn btn-success mx-1' >Add</button>
  </div>
 

 <div className='d-flex flex-column '>
  {middle_points_array.map((data, i) => {
    // Assuming points is accessible and each point has a unique id
    const matchingPoint = points.find(point => point.id.toString() === data);
    
    return (
      <div className='d-flex justify-content-between mx-3' key={matchingPoint ? matchingPoint.id : i}>
        <h6 className='my-2 w-100 d-flex align-items-start justify-content-between'>
        {matchingPoint ? `${matchingPoint.name}, ${matchingPoint.country_name}` : 'Unknown'}
          <Badge className='mx-2 bg-transparent'>
            <i onClick={() => handleDeleteMiddlePoints(i)} role="button" className="fas fa-window-close fs-5 text-danger" />
          </Badge>
        </h6>
      </div>
    );
  })}
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

<div className="mb-3 col-lg-4">
                        <Label className="form-label" htmlFor="facilities">
                        Facilities
                        </Label>
                        <div className='d-flex justify-content-between ' >
                        <Input
                          type="text"
                          id="facilities"
                          name="facilities"
                          className="form-control"
                          placeholder="Enter Facilities"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.facilities || ''}
                        
                          required={facilities_array.length>0?false:true}
                          rows={4}
                          style={{ resize: 'none' }}
                          
                       
                        />
                        <button onClick={handleAddFacilities} type='button' className='btn btn-success mx-1' >Add</button>
                        </div>
                        


  <div className='d-flex flex-column ' >
  {facilities_array.map((data, i) => (
   <div className='d-flex justify-content-between mx-3' >
     <h6 className='my-2 w-100 d-flex align-items-start justify-content-between ' key={i}>
      {data}
      <Badge className='mx-2 bg-transparent'>
        <i onClick={(e)=>{handleDeleteFacilities(i)}} type="button" button="role" className="fas fa-window-close fs-5 text-danger" >
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

                        <div className='d-flex flex-column'>
                        {itinerary_array.map((data, i) => {
  // Check if the string contains a colon
  const hasColon = data.includes(":");
  let displayText;

  if (hasColon) {
    // If there's a colon, extract the text after it and trim whitespace
    displayText = data.split(":")[1].trim();
  } else {
    // If there's no colon, use the entire string
    displayText = data;
  }

  return (
    <div className='d-flex justify-content-between mx-3' key={i}>
      <div className="fw-bold d-flex align-items-center" style={{ minWidth: "200px" }}>
        <b>Day {i + 1}</b>
      </div>
      <h6 className='my-2 w-100 d-flex align-items-start justify-content-between'>
        {displayText}
        <Badge className='mx-2 bg-transparent'>
          <i onClick={() => handleDeleteItinerary(i)} role="button" className="fas fa-window-close fs-5 text-danger"></i>
        </Badge>
      </h6>
    </div>
  );
})}

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
