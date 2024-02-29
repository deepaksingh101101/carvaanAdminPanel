// CreateCustomerForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle ,Container , Form, 
CardImg} from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import {  useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const ViewTrip = () => {
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

 
  useEffect(() => {
    // Fetch and set the trip data when type is 'Edit'
    if (trip) {
      setTripBanner(trip.tripBanner || '');
      setTripImage1(trip.tripImage1 || '');
      setTripImage2(trip.tripImage2 || '');
      setTripImage3(trip.tripImage3 || '');
      setHeadline(trip.headline || '');
      setItinerary(trip.itinerary || '');
      setFrom(trip.from || '');
      setTo(trip.to || '');
      setStartDate(trip.startDate || '');
      setEndDate(trip.endDate || '');
      setStartTime(trip.startTime || '');
      setEndTime(trip.endTime || '');
      setDuration(trip.duration || '');
      setTotalSeats(trip.totalSeats || '');
      setPrice(trip.price || '');
      setAccommodation(trip.accommodation || '');
      setTransportation(trip.transportation || '');
      setTotalBreakfast(trip.totalBreakfast || '');
      setTotalLunch(trip.totalLunch || '');
      setTotalDinner(trip.totalDinner || '');
      setSightSeeing(trip.sightSeeing || '');
      setLocalGuide(trip.localGuide || '');
      setThingsToCarry(trip.thingsToCarry || '');
    //   setDetailedPdf(trip.detailedPdf || '');
      setInclusion(trip.inclusion || '');
      setExclusion(trip.exclusion || '');
      setSelectedBanner(trip.selectedBanner || '');
      
    }
  }, [trip]);

//   const handleAddTripClick = () => {
//     const newTrip = {
//       sno: type === "Edit" ? trip.sno : (tripData.length > 0 ? tripData[tripData.length - 1].sno + 1 : 1),
//       selectedBanner:selectedBanner,
//       tripImage1:tripImage1,
//       tripImage2:tripImage2,
//       tripImage3:tripImage3,
//       headline:headline,
//       itinerary:itinerary,
//       from:from,
//       to:to,
//       startDate:startDate,
//       endDate:endDate,
//       startTime:startTime,
//       endTime:endTime,
//       duration:duration,
//       totalSeats:totalSeats,
//       price:price,
//       accommodation:accommodation,
//       transportation:transportation,
//       totalBreakfast:totalBreakfast,
//       totalLunch:totalLunch,
//       totalDinner:totalDinner,
//       sightSeeing:sightSeeing,
//       localGuide:localGuide,
//       thingsToCarry:thingsToCarry,
//       inclusion:inclusion,
//       exclusion:exclusion
//     };

//     if (type === 'Create') {
//       dispatch(pushTrip(newTrip));
//     } else {
//       dispatch(updateTrip(newTrip));
//     }

//     navigate('/tripDetails');
//   };

  const [selectedBanner, setSelectedBanner] = useState(null);

//   function handleAcceptedBanner(file) {
//     Object.assign(file, {
//       preview: URL.createObjectURL(file),
//       formattedSize: formatBytes(file.size),
//     });
//     setSelectedBanner(file);
//   }
 
//   function handleAcceptedTripImage1(file) {
//     Object.assign(file, {
//       preview: URL.createObjectURL(file),
//       formattedSize: formatBytes(file.size),
//     });
//     setTripImage1(file);
//   }
//   function handleAcceptedTripImage2(file) {
//     Object.assign(file, {
//       preview: URL.createObjectURL(file),
//       formattedSize: formatBytes(file.size),
//     });
//     setTripImage2(file);
//   }
//   function handleAcceptedTripImage3(file) {
//     Object.assign(file, {
//       preview: URL.createObjectURL(file),
//       formattedSize: formatBytes(file.size),
//     });
//     setTripImage3(file);
//   }

//   function formatBytes(bytes, decimals = 2) {
//     if (bytes === 0) return "0 Bytes";
//     const k = 1024;
//     const dm = decimals < 0 ? 0 : decimals;
//     const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
//   }

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
          <Breadcrumbs link="/tripDetails" maintitle="Carvaan" title="Trip" breadcrumbItem={`View Trip`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`View`} Trip</CardTitle>
                  
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">

                    

                    




{/* <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="tripBanner">
                        Banner Picture 
                        </label>{" "}
                        <input
                          type="file"
                          className="form-control"
                          id="tripBanner"
                        //   value={tripBanner}
                          required
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => setTripBanner(e.target.value)}
                        />
                      </div> */}


<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="tripBanner">
        Banner Picture 
      </label>{" "}
      <div className="mb-5">
        <Form>
         
          <div className="dropzone-previews mt-3" id="file-previews">
            {selectedBanner && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                       style={{height:"200px",width:"250px"}}
                        data-dz-thumbnail=""
                       
                        className="avatar-sm rounded bg-light"
                        alt={selectedBanner.name}
                        src={selectedBanner.preview}
                      />
                    </Col>
                    <Col className="pt-2">
                      <Link  to="#" className="text-muted font-weight-bold">
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
          
          <div className="dropzone-previews mt-3" id="file-previews">
            {tripImage1 && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        style={{height:"200px",width:"250px"}}
                        className="avatar-sm rounded bg-light"
                        alt={tripImage1.name}
                        src={tripImage1.preview}
                      />
                    </Col>
                    <Col className='pt-2'>
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
         
          <div className="dropzone-previews mt-3" id="file-previews">
            {tripImage2 && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        style={{height:"200px",width:"250px"}}
                        className="avatar-sm rounded bg-light"
                        alt={tripImage2.name}
                        src={tripImage2.preview}
                      />
                    </Col>
                    <Col className='pt-2'>
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
        Trip Image 3 
      </label>{" "}
      <div className="mb-5">
        <Form>
          
          <div className="dropzone-previews mt-3" id="file-previews">
            {tripImage3 && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        style={{height:"200px",width:"250px"}}
                        className="avatar-sm rounded bg-light"
                        alt={tripImage3.name}
                        src={tripImage3.preview}
                      />
                    </Col>
                    <Col className='pt-2'>
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
</div>

                      {/* <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="tripImage1">
                        Trip Image 1
                        </label>{" "}
                        <input
                          type="file"
                          className="form-control"
                          id="tripImage1"
                          required
                          accept=".png, .jpg, .jpeg"
                        //   value={tripImage1}
                          onChange={(e) => setTripImage1(e.target.value)}
                        />
                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="tripImage2">
                        Trip Image 2
                        </label>{" "}
                        <input
                          type="file"
                          className="form-control"
                          id="tripImage2"
                          required
                          accept=".png, .jpg, .jpeg"
                        //   value={tripImage2}
                          onChange={(e) => setTripImage2(e.target.value)}

                        />
                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="tripImage3">
                        Trip Image 3
                        </label>{" "}
                        <input
                          type="file"
                          className="form-control"
                          id="tripImage3"
                          required
                          accept=".png, .jpg, .jpeg"
                        //   value={tripImage3}
                          onChange={(e) => setTripImage3(e.target.value)}

                        />
                      </div> */}

<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="headline">
    Headline
  </label>
  <Card body className="border">
    <CardTitle className="h4">{trip.headline}</CardTitle>
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
                          From
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.from}</CardTitle>
  </Card>

                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className=" form-label" htmlFor="to">
                          To
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.to}</CardTitle>
  </Card>

                      </div>




                     
                      

                    

                       <div className="mb-3 col-lg-3">
                        <label className=" form-label" htmlFor="start_Date">
                          Start Date
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.startDate}</CardTitle>
  </Card>

                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="  form-label" htmlFor="end_Date">
                          End Date
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.endDate}</CardTitle>
  </Card>

                      </div>

                      <div className="mb-3 col-lg-3">
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

                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className=" form-label" htmlFor="duration">
                          Duration
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.duration}</CardTitle>
  </Card>

                      </div>

                     

                      

<div className="mb-3 col-lg-3">
  <label className=" form-label" htmlFor="total_seats">
    Total Number Of Seats
  </label>{" "}
  <Card body className="border">
  <CardTitle className="h4">{trip.totalSeats}</CardTitle>
  </Card>

</div>





                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="price">
                          Price
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.price}</CardTitle>
  </Card>

                      </div>

                      <div className="mb-3 col-lg-3">
  <label className=" form-label" htmlFor="accommodation">
    Accommodation
  </label>
  <Card body className="border">
  <CardTitle className="h4">{trip.accommodation}</CardTitle>
  </Card>

</div>


<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="transportation">
    Transportation
  </label>
  <Card body className="border">
  <CardTitle className="h4">{trip.transportation}</CardTitle>
  </Card>

</div>


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalBreakfast">
                        Total Breakfast
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.totalBreakfast}</CardTitle>
  </Card>

                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalLunch">
                        Total Lunch
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.totalLunch}</CardTitle>
  </Card>

                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalDinner">
                        Total Dinner
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.totalDinner}</CardTitle>
  </Card>

                      </div>
                     
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="localGuide">
                         Local Guide
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.localGuide}</CardTitle>
  </Card>

                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="thingsToCarry">
                          Things To Carry
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.thingsToCarry}</CardTitle>
  </Card>

                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="itinerary">
                          Detailed Itinerary
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.itinerary}</CardTitle>
  </Card>

                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="sightSeeing">
                        Sight Seeing
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.sightSeeing}</CardTitle>
  </Card>

                      </div>
                       <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="inclusion">
                          Inclusion
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{trip.inclusion}</CardTitle>
  </Card>

                      </div>

                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="exclusion">
    Exclusion
  </label>
  <Card body className="border">
  <CardTitle className="h4">{trip.exclusion}</CardTitle>
  </Card>

</div>


                    </div>


                    
                 
                  </div>

                 
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewTrip;
