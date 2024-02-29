// EditAdminDetailsForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle , FormGroup} from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import {  useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';

const ViewFaq = () => {
  const { sno } = useParams();

  let { faqData } = useSelector((state) => state.FaqReducers);

  const faq = faqData.find((faq) => faq.sno == sno);

  const [question, setQuestion] = useState('');

  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (faq) {
      setQuestion(faq.question || '');
      setAnswer(faq.answer || '');
    }
  }, [faq]);




  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="/faqDetails" maintitle="Carvaan" title="FAQ" breadcrumbItem={`View FAQ`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`View FAQ`}</CardTitle>
                  {/* <form onSubmit={handleAddAdminClick}> */}
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="questions">
                          Question
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{faq.question}</CardTitle>
  </Card>
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="answer">
                          Answer
                        </label>
                        <Card body className="border">
                        <CardTitle className="h4">{faq.answer}</CardTitle>
  </Card>

                      </div>


                    </div>


                   
                  </div>
                  {/* </form> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewFaq;
