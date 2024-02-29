// EditAdminDetailsForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle , FormGroup} from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pushFaq, updateFaq } from 'store/auth/user_admin_data/actions';

const FaqEditFrom = ({ type }) => {
  const dispatch = useDispatch();
  const { sno } = useParams();

  let { faqData } = useSelector((state) => state.FaqReducers);

  const faq = faqData.find((faq) => faq.sno == sno);

  const [question, setQuestion] = useState('');

  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (faq) {
      setQuestion(faq.question || '');
      setAnswer(faq.answer || '');
    }
  }, [faq]);

  const handleAddFaqClick = () => {
    const newFaq = {
      sno: type === "Edit" ? faq.sno : (faqData.length > 0 ? faqData[faqData.length - 1].sno + 1 : 1),
      question:question,
      answer:answer,
    };
    if (type === 'Edit') {
      dispatch(updateFaq(newFaq));
    } else {
      dispatch(pushFaq(newFaq));
    }
    navigate('/faqDetails');
  };


  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="/faqDetails" maintitle="Carvaan" title="FAQ" breadcrumbItem={`${type} FAQ`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`${type} FAQ`}</CardTitle>
                  {/* <form onSubmit={handleAddAdminClick}> */}
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">
                      <div className="mb-3 col-lg-12">
                        <label className="form-label" htmlFor="questions">
                          Question
                        </label>
                        <textarea
                          type="text"
                          id="question"
                          value={question}
                          onChange={(e) => setQuestion(e.target.value)}
                          className="form-control"
                          placeholder="Enter Question"
                          required
                          rows={5}
                          style={{ resize: 'none' }}
                        />
                      </div>

                      <div className="mb-3 col-lg-12">
                        <label className="form-label" htmlFor="answer">
                          Answer
                        </label>
                        <textarea
                          type="text"
                          id="answer"
                          value={answer}
                          onChange={(e) => setAnswer(e.target.value)}
                          className="form-control"
                          placeholder="Enter Answer"
                          required
                          rows={5}
                          style={{ resize: 'none' }}
                        />
                      </div>


                    </div>


                    <button onClick={handleAddFaqClick} type='submit' className="mt-1 btn btn-success">
                      {type === 'Edit' ? 'Update FAQ' : 'Create FAQ'}
                    </button>
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

export default FaqEditFrom;
