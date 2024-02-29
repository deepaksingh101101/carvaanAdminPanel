// CreateCustomerForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Form,Label, FormGroup } from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pushCarvaan, updateCarvaan } from 'store/auth/user_admin_data/actions';
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
const CarvaanSpecialCreateForm = ({ type }) => {
  const dispatch = useDispatch();
  const { sno } = useParams();

  let { carvaanData } = useSelector((state) => state.CarvaanReducers);
  const carvaan = carvaanData.find((carvaan) => carvaan.sno == sno);

  const [carvaanBanner, setCarvaanBanner] = useState(null);
  const [carvaanImage1, setCarvaanImage1] = useState(null);
  const [carvaanImage2, setCarvaanImage2] = useState(null);
  const [carvaanImage3, setCarvaanImage3] = useState(null);
  const [carvaanImage4, setCarvaanImage4] = useState(null);
  const [carvaanImage5, setCarvaanImage5] = useState(null);
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
//   const [inclusion, setInclusion] = useState('');
//   const [exclusion, setExclusion] = useState('');
  const [totalTravelers, setTotalTravelers] = useState('');
  const [price, setPrice] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [transportation, setTransportation] = useState('');
  const [totalBreakfast, setTotalBreakfast] = useState('');
  const [totalLunch, setTotalLunch] = useState('');
  const [totalDinner, setTotalDinner] = useState('');
  const [sightSeeing, setSightSeeing] = useState('');
  const [localGuide, setLocalGuide] = useState('');
  const [thingsToCarry, setThingsToCarry] = useState('');


  const navigate = useNavigate();

  useEffect(() => {
    // Fetch and set the trip data when type is 'Edit'
    if (carvaan) {
      setCarvaanBanner(carvaan.carvaanBanner || '');
      setCarvaanImage1(carvaan.carvaanImage1 || '');
      setCarvaanImage2(carvaan.carvaanImage2 || '');
      setCarvaanImage3(carvaan.carvaanImage3 || '');
      setCarvaanImage4(carvaan.carvaanImage4 || '');
      setCarvaanImage5(carvaan.carvaanImage5 || '');
      setHeadline(carvaan.headline || '');
      setItinerary(carvaan.itinerary || '');
      setFrom(carvaan.from || '');
      setTo(carvaan.to || '');
      setStartDate(carvaan.startDate || '');
      setEndDate(carvaan.endDate || '');
      setStartTime(carvaan.startTime || '');
      setEndTime(carvaan.endTime || '');
      setDuration(carvaan.duration || '');
      setTotalTravelers(carvaan.totalTravelers || '');
      setPrice(carvaan.price || '');
      setAccommodation(carvaan.accommodation || '');
      setTransportation(carvaan.transportation || '');
      setTotalBreakfast(carvaan.totalBreakfast || '');
      setTotalLunch(carvaan.totalLunch || '');
      setTotalDinner(carvaan.totalDinner || '');
      setSightSeeing(carvaan.sightSeeing || '');
      setLocalGuide(carvaan.localGuide || '');
      setThingsToCarry(carvaan.thingsToCarry || '');
    //   setDetailedPdf(carvaan.detailedPdf || '');
    //   setInclusion(carvaan.inclusion || '');
    //   setExclusion(carvaan.exclusion || '');
    }
  }, [carvaan]);

  const handleAddCarvaanSpecialClick = () => {
    const newCarvaan = {
      sno: type === "Edit" ? carvaan.sno : (carvaanData.length > 0 ? carvaanData[carvaanData.length - 1].sno + 1 : 1),
      carvaanBanner:carvaanBanner,
      carvaanImage1:carvaanImage1,
      carvaanImage2:carvaanImage2,
      carvaanImage3:carvaanImage3,
      carvaanImage4:carvaanImage4,
      carvaanImage5:carvaanImage5,
      headline:headline,
      itinerary:itinerary,
      from:from,
      to:to,
      startDate:startDate,
      endDate:endDate,
      startTime:startTime,
      endTime:endTime,
      duration:duration,
      totalTravelers:totalTravelers,
      price:price,
      accommodation:accommodation,
      transportation:transportation,
      totalBreakfast:totalBreakfast,
      totalLunch:totalLunch,
      totalDinner:totalDinner,
      sightSeeing:sightSeeing,
      localGuide:localGuide,
      thingsToCarry:thingsToCarry,
    };

    if (type === 'Create') {
      dispatch(pushCarvaan(newCarvaan));
    } else {
        dispatch(updateCarvaan(newCarvaan))
    }

    navigate('/carvaanDetails');
  };

  function handleAcceptedCarvaanBanner(file) {
    Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    });
    setCarvaanBanner(file);
  }
  function handleAcceptedCarvaanImage1(file) {
    Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    });
    setCarvaanImage1(file);
  }
  function handleAcceptedCarvaanImage2(file) {
    Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    });
    setCarvaanImage2(file);
  }
  function handleAcceptedCarvaanImage3(file) {
    Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    });
    setCarvaanImage3(file);
  }
  function handleAcceptedCarvaanImage4(file) {
    Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    });
    setCarvaanImage4(file);
  }
  function handleAcceptedCarvaanImage5(file) {
    Object.assign(file, {
      preview: URL.createObjectURL(file),
      formattedSize: formatBytes(file.size),
    });
    setCarvaanImage5(file);
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
          <Breadcrumbs link="carvaanDetails" maintitle="Carvaan" title="Carvaan" breadcrumbItem={`${type} Carvaan`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`${type}`} Carvaan</CardTitle>
                  <form onSubmit={handleAddCarvaanSpecialClick}>
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">

                    {/* <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="carvaanBanner">
                        Banner Picture 
                        </label>{" "}
                        <input
                          type="file"
                          className="form-control"
                          id="carvaanBanner"
                          required
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => setCarvaanBanner(e.target.value)}
                        />
                      </div> */}

<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="carvaanBanner">
        Banner Picture 
      </label>{" "}
      <div className="mb-5">
        <Form>
          <Dropzone  //onChange={handleFileInputChange}
            onDrop={acceptedBanner => {
              handleAcceptedCarvaanBanner(acceptedBanner[0]); // Only first file is considered
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
            {carvaanBanner && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        height="80"
                        className="avatar-sm rounded bg-light"
                        alt={carvaanBanner.name}
                        src={carvaanBanner.preview}
                      />
                    </Col>
                    <Col>
                      <Link to="#" className="text-muted font-weight-bold">
                        {carvaanBanner.name}
                      </Link>
                      <p className="mb-0">
                        <strong>{carvaanBanner.formattedSize}</strong>
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
                        <label className="form-label" htmlFor="carvaanImage1">
                        Carvaan Image 1
                        </label>{" "}
                        <input
                          type="file"
                          className="form-control"
                          id="carvaanImage1"
                          required
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => setCarvaanImage1(e.target.value)}
                        />
                      </div> */}

<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="carvaanImag1">
        Carvaan Image 1 
      </label>{" "}
      <div className="mb-5">
        <Form>
          <Dropzone  //onChange={handleFileInputChange}
            onDrop={acceptedCarvaanImage1 => {
              handleAcceptedCarvaanImage1(acceptedCarvaanImage1[0]); // Only first file is considered
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
            {carvaanImage1 && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        height="80"
                        className="avatar-sm rounded bg-light"
                        alt={carvaanImage1.name}
                        src={carvaanImage1.preview}
                      />
                    </Col>
                    <Col>
                      <Link to="#" className="text-muted font-weight-bold">
                        {carvaanImage1.name}
                      </Link>
                      <p className="mb-0">
                        <strong>{carvaanImage1.formattedSize}</strong>
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
                        <label className="form-label" htmlFor="carvaanImage2">
                        Carvaan Image 2
                        </label>{" "}
                        <input
                          type="file"
                          className="form-control"
                          id="carvaanImage2"
                          required
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => setCarvaanImage2(e.target.value)}

                        />
                      </div> */}

<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="carvaanImag2">
        Carvaan Image 2
      </label>{" "}
      <div className="mb-5">
        <Form>
          <Dropzone  //onChange={handleFileInputChange}
            onDrop={acceptedCarvaanImage2 => {
              handleAcceptedCarvaanImage2(acceptedCarvaanImage2[0]); // Only first file is considered
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
            {carvaanImage2 && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        height="80"
                        className="avatar-sm rounded bg-light"
                        alt={carvaanImage2.name}
                        src={carvaanImage2.preview}
                      />
                    </Col>
                    <Col>
                      <Link to="#" className="text-muted font-weight-bold">
                        {carvaanImage2.name}
                      </Link>
                      <p className="mb-0">
                        <strong>{carvaanImage2.formattedSize}</strong>
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
                        <label className="form-label" htmlFor="carvaanImage3">
                        Carvaan Image 3
                        </label>{" "}
                        <input
                          type="file"
                          className="form-control"
                          id="carvaanImage3"
                          required
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => setCarvaanImage3(e.target.value)}
                        />
                      </div> */}

<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="carvaanImag3">
        Carvaan Image 3
      </label>{" "}
      <div className="mb-5">
        <Form>
          <Dropzone  //onChange={handleFileInputChange}
            onDrop={acceptedCarvaanImage3 => {
              handleAcceptedCarvaanImage3(acceptedCarvaanImage3[0]); // Only first file is considered
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
            {carvaanImage3 && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        height="80"
                        className="avatar-sm rounded bg-light"
                        alt={carvaanImage3.name}
                        src={carvaanImage3.preview}
                      />
                    </Col>
                    <Col>
                      <Link to="#" className="text-muted font-weight-bold">
                        {carvaanImage3.name}
                      </Link>
                      <p className="mb-0">
                        <strong>{carvaanImage3.formattedSize}</strong>
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
                        <label className="form-label" htmlFor="carvaanImage4">
                        Carvaan Image 4
                        </label>{" "}
                        <input
                          type="file"
                          className="form-control"
                          id="carvaanImage4"
                          required
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => setCarvaanImage4(e.target.value)}

                        />
                      </div> */}
<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="carvaanImag4">
        Carvaan Image 4
      </label>{" "}
      <div className="mb-5">
        <Form>
          <Dropzone  //onChange={handleFileInputChange}
            onDrop={acceptedCarvaanImage4 => {
              handleAcceptedCarvaanImage4(acceptedCarvaanImage4[0]); // Only first file is considered
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
            {carvaanImage4 && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        height="80"
                        className="avatar-sm rounded bg-light"
                        alt={carvaanImage4.name}
                        src={carvaanImage4.preview}
                      />
                    </Col>
                    <Col>
                      <Link to="#" className="text-muted font-weight-bold">
                        {carvaanImage4.name}
                      </Link>
                      <p className="mb-0">
                        <strong>{carvaanImage4.formattedSize}</strong>
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
      <label className="form-label" htmlFor="carvaanImag5">
        Carvaan Image 5
      </label>{" "}
      <div className="mb-5">
        <Form>
          <Dropzone  //onChange={handleFileInputChange}
            onDrop={acceptedCarvaanImage5 => {
              handleAcceptedCarvaanImage5(acceptedCarvaanImage5[0]); // Only first file is considered
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
            {carvaanImage5 && (
              <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        height="80"
                        className="avatar-sm rounded bg-light"
                        alt={carvaanImage5.name}
                        src={carvaanImage5.preview}
                      />
                    </Col>
                    <Col>
                      <Link to="#" className="text-muted font-weight-bold">
                        {carvaanImage5.name}
                      </Link>
                      <p className="mb-0">
                        <strong>{carvaanImage5.formattedSize}</strong>
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
                        <label className="form-label" htmlFor="carvaanImage5">
                        Carvaan Image 5
                        </label>{" "}
                        <input
                          type="file"
                          className="form-control"
                          id="carvaanImage5"
                          required
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => setCarvaanImage5(e.target.value)}

                        />
                      </div> */}

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="headline">
                          Detailed Itinerary
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

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="itinerary">
                          Detailed Itinerary
                        </label>
                        <input
                          type="text"
                          id="itinerary"
                          value={itinerary}
                          className="form-control"
                          placeholder="Enter Detailed Itinerary "
                          required
                          onChange={(e) => setItinerary(e.target.value)}

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

                      {/* <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="inclusion">
                          Inclusion
                        </label>
                        <input
                          type="text"
                          id="inclusion"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          className="form-control"
                          placeholder='Inclusion'
                          required
                        />
                      </div> */}

                      {/* <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="exclusion">
                          Exclusion
                        </label>
                        <input
                          type="text"
                          id="exclusion"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          className="form-control"
                          placeholder='Exclusion'
                          required
                        />
                      </div> */}

                      

<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="total_seats">
    Total Number Of Seats
  </label>{" "}
  <input
    type="number"
    className="form-control"
    value={totalTravelers}
    onChange={(e) => setTotalTravelers(Math.max(1, e.target.value))}
    id="total_travelers"
    required
    placeholder='Total Travelers'
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
    {/* <option value="">Select Accommodation</option> */}
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
    {/* <option value="">Select Transportation</option> */}
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
                          onChange={(e) => setTotalDinner(Math.max(1, e.target.value))}
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
                        <input
                          type="text"
                          id="thingsToCarry"
                          value={thingsToCarry}
                          onChange={(e) => setThingsToCarry(e.target.value)}
                          className="form-control"
                          placeholder="Enter Things To Carry "
                          required
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

                    </div>


                    
                  <button type='submit' className="mt-1 btn btn-success">
  {type === 'Edit' ? 'Update Carvaan' : 'Create Carvaan'}
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

export default CarvaanSpecialCreateForm;
