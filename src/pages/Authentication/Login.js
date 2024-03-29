import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react";
import * as url from "../../helpers/url_helper"
import {postFakeLogin} from '../../helpers/fakebackend_helper'
import { Link, useNavigate } from 'react-router-dom';

import { Row, Col, CardBody, Card, Container, Label, Form, FormFeedback, Input } from "reactstrap";

// Redux
import { connect, useSelector, useDispatch } from "react-redux";
import withRouter from 'components/Common/withRouter';
// import useNavigate from 'react-router-dom'
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import { loginUser, apiError } from "../../store/actions";

// import images
import logoSm from "../../assets/images/logo-sm.png";
import Alert from 'components/alert/Alert';
import { SomethingAlertFalse, SomethingAlertTrue } from 'store/components/actions';

const Login = props => {
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState([]);
  const [message, setMessage] = useState("Something went's wrong")
const [showWrongCredentials, setShowWrongCredentials] = useState(false)
  const { user } = useSelector(state => ({
    user: state.Account.user,
  }));
  const navigate=useNavigate();

const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (user && user) {
      setUserLogin({
        email: user.email,
        password: user.password
      });
    }

  }, [user]);


 

  const isOpen = useSelector(state => state.alertReducer.isOpen);
  // console.log(isOpen)
 

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: userLogin.email || "" || '',
      password: userLogin.password || "" || '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your User Name"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: async (values) => {
      // dispatch(loginUser(values));
      console.log(values)
      try {
        
        const res=await postFakeLogin(values)
        if(res.accessToken && res.refreshToken){
          console.log(res)
          localStorage.setItem('authUser', JSON.stringify(res));
          // store user data to state 
      dispatch(loginUser(JSON.parse(localStorage.getItem("authUser"))));
      navigate(`/`)

        }
        else{
          
          setMessage("Incorrect Email or Password")
        dispatch(SomethingAlertTrue());
        setTimeout(() => {
          dispatch(SomethingAlertFalse());
          setMessage("Something went's wrong")
        }, 2000);

        }
  
      } catch (error) {
        // console.log(error.response)
        
        setMessage(error.response.data?error.response.data.message:"Something went's Wrong")
        dispatch(SomethingAlertTrue());
        setTimeout(() => {
          dispatch(SomethingAlertFalse());
          setMessage("Something went's wrong")
        }, 2000);

      }
      
    }
  });

  document.title = "Login | Carvaan - ";
  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">
                      Welcome Back !
                    </h5>
                    <p className="text-white-50">
                      Sign in to continue to Carvaan.
                    </p>
                    <Link to="/" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <Form className="mt-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                      action="#">

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="email">Email</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter Email"
                          type="email"
                          id="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="userpassword">Password</Label>
                        <Input
                          name="password"
                          value={validation.values.password || ""}
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password && validation.errors.password ? true : false
                          }
                        />
                        {validation.touched.password && validation.errors.password ? (
                          <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3 row d-flex justify-content-center">
                        {/* <div className="col-sm-6">
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="customControlInline" />
                            <label className="form-check-label" htmlFor="customControlInline">Remember me</label>
                          </div>
                        </div> */}
{showWrongCredentials &&  <span className='text-danger' >Error</span>}

                        <div className="col-sm-6  text-end">
                          <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                        </div>
                       
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <Link to="/forgot-password"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
                        </div>
                      </div>

                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link
                    to="/register"
                    className="fw-medium text-primary"
                  >
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Carvaan. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Techavtar
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className=" position-absolute  " style={{top:"0",right:"0"}}>
     {isOpen &&  <Alert  message={message} type="error" />}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { error } = state.Login;
  return { error };
};

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError })(Login)
);

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
};