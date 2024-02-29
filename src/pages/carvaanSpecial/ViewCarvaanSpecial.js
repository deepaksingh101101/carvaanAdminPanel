// CreateCustomerForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Form,Label, FormGroup } from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import {  useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
const ViewCarvaanSpecial = ({ type }) => {
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





  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="carvaanDetails" maintitle="Carvaan" title="Carvaan special" breadcrumbItem={`View Carvaan Special`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`View`} Carvaan Special</CardTitle>
                 
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
                        style={{height:"200px", width:"250px"}}
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


            

<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="carvaanImag1">
        Carvaan Image 1 
      </label>{" "}
      <div className="mb-5">
        <Form>
        
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
                        style={{height:"200px", width:"250px"}}
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



<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="carvaanImag2">
        Carvaan Image 2
      </label>{" "}
      <div className="mb-5">
        <Form>
        
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
                        style={{height:"200px", width:"250px"}}
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



<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="carvaanImag3">
        Carvaan Image 3
      </label>{" "}
      <div className="mb-5">
        <Form>
          
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
                        style={{height:"200px", width:"250px"}}
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

                     
<div className="mb-3 col-lg-3">
      <label className="form-label" htmlFor="carvaanImag4">
        Carvaan Image 4
      </label>{" "}
      <div className="mb-5">
        <Form>
        
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
                        style={{height:"200px", width:"250px"}}
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
                        style={{height:"200px", width:"250px"}}
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
                        <Card body className="border">
    <CardTitle className="h4">{headline}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="itinerary">
                          Detailed Itinerary
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{itinerary}</CardTitle>
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
                        <label className="form-label" htmlFor="from">
                          From
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{from}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="to">
                          To
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{to}</CardTitle>
  </Card>
                      </div>




                     
                      

                    

                       <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="start_Date">
                          Start Date
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{startDate}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="end_Date">
                          End Date
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{endDate}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="start_time">
                          Start Time
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{startTime}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="end_time">
                          End Time
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{endTime}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="duration">
                          Duration
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{duration}</CardTitle>
  </Card>
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
  <label className="form-label" htmlFor="total_Travelers">
    Total Number Of Travelers
  </label>{" "}
  <Card body className="border">
    <CardTitle className="h4">{totalTravelers}</CardTitle>
  </Card>
</div>





                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="price">
                          Price
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{price}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="accommodation">
    Accommodation
  </label>
  <Card body className="border">
    <CardTitle className="h4">{accommodation}</CardTitle>
  </Card>
</div>


<div className="mb-3 col-lg-3">
  <label className="form-label" htmlFor="transportation">
    Transportation
  </label>
  <Card body className="border">
    <CardTitle className="h4">{transportation}</CardTitle>
  </Card>
</div>


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalBreakfast">
                        Total Breakfast
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{totalBreakfast}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalLunch">
                        Total Lunch
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{totalLunch}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="totalDinner">
                        Total Dinner
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{totalDinner}</CardTitle>
  </Card>
                      </div>
                     
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="localGuide">
                         Local Guide
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{localGuide}</CardTitle>
  </Card>
                      </div>
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="thingsToCarry">
                          Things To Carry
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{thingsToCarry}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="sightSeeing">
                        Sight Seeing
                        </label>
                        <Card body className="border">
    <CardTitle className="h4">{sightSeeing}</CardTitle>
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

export default ViewCarvaanSpecial;
