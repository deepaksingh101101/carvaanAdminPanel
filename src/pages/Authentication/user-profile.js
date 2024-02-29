import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react";
import {Container,Row,Col,Card,Alert,CardBody,Button,Form,FormFeedback,Label,Input,CardSubtitle, CardImg, CardTitle,} from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// Redux
import { connect, useDispatch, useSelector } from "react-redux";
import withRouter from 'components/Common/withRouter';

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/user-4.jpg";
// actions
import { editProfile, resetProfileFlag } from "../../store/actions";
import CustomerProfileCard from 'pages/customers/CustomerProfileCard';

const UserProfile = props => {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [idx, setidx] = useState(1);

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        setname(obj.displayName);
        setemail(obj.email);
        setidx(obj.uid || 1);
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        setname(obj.username);
        setemail(obj.email);
        setidx(obj.uid || 1);
      }
      setTimeout(() => {
        props.resetProfileFlag();
      }, 3000);
    }
  }, [props.success]);


  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: name || '',
      idx: idx || '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your User Name"),
    }),
    onSubmit: (values) => {
      dispatch(editProfile(values));
    }
  });

  document.title = "Profile | Veltrix - React Admin & Dashboard Template";
  const admin={
        name:"Admin",
        email:"admin@themesbrand.com",
        password:"123456",
        age:"45",
        mobile:"32427329582",

  }

  // Pass this in place af admin when user logged in
  const { user } = useSelector(state => ({
    user: state.Account.user,
  }));

  // console.log(user)
  return (
    <React.Fragment>
{/* 
      <div className="page-content">
      <Breadcrumb title="Carvaan" breadcrumbItem="Profile" />
        <Container fluid className='d-flex'>
          <Row>
            <Col lg="12">
              {props.error && props.error ? (
                <Alert color="danger">{props.error}</Alert>
              ) : null}
              {props.success ? (
                <Alert color="success">{props.success}</Alert>
              ) : null}

              

              <Card className="w-30 mx-2 d-flex align-items-center p-3">
                                <CardImg
                                    style={{ width: '70%', borderRadius: '50%' }}
                                    src={avatar}
                                    alt="Admin image"
                                />
                                <CardBody className="d-flex flex-column align-items-center">
                                    <CardTitle tag="h5">{name}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                                    {email}
                                    </CardSubtitle>
                                    <p className="mb-0">Id no: #{idx}</p>
                                </CardBody>
                            </Card>

            </Col>
          </Row>
          <Card className="mb-4 w-100 mx-2">
            <CardBody>
              <Form
                className="form-horizontal"
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
              <div className="d-flex w-100">
                <div className="form-group w-100">
                  <Label className="form-label">User Name</Label>
                  <Input
                    name="username"
                    className="form-control"
                    placeholder="Enter User Name"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.username || ""}
                    invalid={
                      validation.touched.username && validation.errors.username ? true : false
                    }
                  />
                  {validation.touched.username && validation.errors.username ? (
                    <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                  ) : null}
                  <Input name="idx" value={idx} type="hidden" />
                </div>
                <div className="text-center mt-4 w-100">
                  <Button type="submit" color="danger">
                    Edit User Name
                  </Button>
                </div>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </div> */}

      

      <CustomerProfileCard admin={admin} role="Admin"/>

      
    </React.Fragment>
  );
};

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any
};

const mapStatetoProps = state => {
  const { error, success } = state.Profile;
  return { error, success };
};

export default withRouter(
  connect(mapStatetoProps, { editProfile, resetProfileFlag })(UserProfile)
);



