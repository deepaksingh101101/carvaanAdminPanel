// CreateCustomerForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle ,Container , Form} from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pushTrip, updateTrip } from 'store/auth/user_admin_data/actions';
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";

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

  const handleAddTripClick = () => {
    const newTrip = {
      sno: type === "Edit" ? trip.sno : (tripData.length > 0 ? tripData[tripData.length - 1].sno + 1 : 1),
      selectedBanner:selectedBanner,
      tripImage1:tripImage1,
      tripImage2:tripImage2,
      tripImage3:tripImage3,
      headline:headline,
      itinerary:itinerary,
      from:from,
      to:to,
      startDate:startDate,
      endDate:endDate,
      startTime:startTime,
      endTime:endTime,
      duration:duration,
      totalSeats:totalSeats,
      price:price,
      accommodation:accommodation,
      transportation:transportation,
      totalBreakfast:totalBreakfast,
      totalLunch:totalLunch,
      totalDinner:totalDinner,
      sightSeeing:sightSeeing,
      localGuide:localGuide,
      thingsToCarry:thingsToCarry,
      inclusion:inclusion,
      exclusion:exclusion
    };

    if (type === 'Create') {
      dispatch(pushTrip(newTrip));
    } else {
      dispatch(updateTrip(newTrip));
    }

    navigate('/tripDetails');
  };

  const [selectedBanner, setSelectedBanner] = useState(null);

  function handleAcceptedBanner(file) {
    Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    });
    setSelectedBanner(file);
  }
 
  function handleAcceptedTripImage1(file) {
    Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    });
    setTripImage1(file);
  }
  function handleAcceptedTripImage2(file) {
    Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    });
    setTripImage2(file);
  }
  function handleAcceptedTripImage3(file) {
    Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    });
    setTripImage3(file);
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

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
                  <form onSubmit={handleAddTripClick}>
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
                        <input
                          type="text"
                          id="headline"
                          value={headline}
                          onChange={(e) => setHeadline(e.target.value)}
                          className="form-control"
                          placeholder="Enter Headline  "
                          required
                        />
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
                        <label className="form-label" htmlFor="from">
                          From
                        </label>
                        <input
                          type="text"
                          id="from"
                          value={from}
                          onChange={(e) => setFrom(e.target.value)}
                          className="form-control"
                          placeholder="From"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="to">
                          To
                        </label>
                        <input
                          type="text"
                          id="to"
                          value={to}
                          onChange={(e) => setTo(e.target.value)}
                          className="form-control"
                          placeholder="To"
                          required
                        />
                      </div>




                     
                      

                    

                       <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="start_Date">
                          Start Date
                        </label>
                        <input
                          type="date"
                          id="start_Date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="end_Date">
                          End Date
                        </label>
                        <input
                          type="date"
                          id="end_Date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="start_time">
                          Start Time
                        </label>
                        <input
                          type="time"
                          id="start_time"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="end_time">
                          End Time
                        </label>
                        <input
                          type="time"
                          id="end_time"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="duration">
                          Duration
                        </label>
                        <input
                          type="text"
                          id="duration"
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          className="form-control"
                          required
                        />
                      </div>

                     

                      

<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="total_seats">
    Total Number Of Seats
  </label>{" "}
  <input
    type="number"
    className="form-control"
    value={totalSeats}
    onChange={(e) => setTotalSeats(Math.max(1, e.target.value))}
    id="total_seats"
    required
    placeholder='Total Seats'
    min="1"  // Add this line to set the minimum value
  />
</div>





                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="price">
                          Price
                        </label>
                        <input
                          type="number"
                          id="price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="form-control"
                          placeholder="Enter Price "
                          required
                          min='0'
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
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
</div>


<div className="mb-3 col-lg-3">
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
</div>


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalBreakfast">
                        Total Breakfast
                        </label>
                        <input
                          type="number"
                          id="totalBreakfast"
                          value={totalBreakfast}
                          onChange={(e) => setTotalBreakfast(Math.max(0, e.target.value))}
                          className="form-control"
                          placeholder="Enter Transportation "
                          required
                          min='0'
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalLunch">
                        Total Lunch
                        </label>
                        <input
                          type="number"
                          id="totalLunch"
                          value={totalLunch}
                          onChange={(e) => setTotalLunch(Math.max(0, e.target.value))}
                          className="form-control"
                          placeholder="Enter Total Lunch "
                          required
                          min="0"
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalDinner">
                        Total Dinner
                        </label>
                        <input
                          type="number"
                          id="totalDinner"
                          value={totalDinner}
                          onChange={(e) => setTotalDinner(Math.max(0, e.target.value))}
                          className="form-control"
                          placeholder="Enter Total Dinner "
                          required
                          min="0"
                        />
                      </div>
                     
                      <div className="mb-3 col-lg-3">
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
                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="thingsToCarry">
                          Things To Carry
                        </label>
                        <textarea
                          type="text"
                          id="thingsToCarry"
                          value={thingsToCarry}
                          onChange={(e) => setThingsToCarry(e.target.value)}
                          className="form-control"
                          placeholder="Enter Things To Carry "
                          required
                          rows={4}
                          style={{ resize: 'none' }}

                        />
                      </div>
                      <div className="mb-3 col-lg-3">
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
                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="sightSeeing">
                        Sight Seeing
                        </label>
                        <textarea
                          type="text"
                          id="sightSeeing"
                          value={sightSeeing}
                          onChange={(e) => setSightSeeing(e.target.value)}
                          className="form-control"
                          placeholder="Enter Sight Seeing "
                          required
                          rows={4}
                          style={{ resize: 'none' }}

                        />
                      </div>
                       <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="inclusion">
                          Inclusion
                        </label>
                        <textarea
                          type="text"
                          id="inclusion"
                          value={inclusion}
                          onChange={(e) => setInclusion(e.target.value)}
                          className="form-control"
                          placeholder='Inclusion'
                          required
                          rows={4}
                          style={{ resize: 'none' }}

                        />
                      </div>

                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="exclusion">
    Exclusion
  </label>
  <textarea
    id="exclusion"
    value={exclusion}
    onChange={(e) => setExclusion(e.target.value)}
    className="form-control"
    placeholder="Exclusion"
    required
    rows={4} 
    style={{ resize: 'none' }}

  />
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
