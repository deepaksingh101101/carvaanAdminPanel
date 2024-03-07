// EditAdminDetailsForm.js
import React, { useEffect, useState } from 'react';
import { Row, Form, Input, FormFeedback, Col, Card, Label, CardBody, CardTitle, FormGroup } from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pushAdmin, setAdminData, updateAdmin } from 'store/auth/user_admin_data/actions';
import { getAllAdmins, patchAdminEdit, postFakeRegister } from '../../helpers/fakebackend_helper';

// Form validation
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Alert from 'components/alert/Alert';
import { PATCH_ADMIN_EDIT } from 'helpers/url_helper';
import Loader from 'components/loader/Loader';
import { SomethingAlertFalse, SomethingAlertTrue } from 'store/components/actions';
const EditAdminDetailForm = ({ type }) => {
  const [is_super_admin, setIs_super_admin] = useState(false);
  const [adminState, setAdminState] = useState();
  const isOpen = useSelector(state => state.alertReducer.isOpen);
  const [message, setMessage] = useState("Something went's wrong")

  const toggleAdminPost = () => {
    setIs_super_admin(!is_super_admin);
  };


  const [loader, setLoader] = useState(false)
  const [adminCreate, setAdminCreate] = useState([]);
  const dispatch = useDispatch();
  const isValidAdmin=JSON.parse(localStorage.getItem("authUser")).admin.is_super_admin

    const { id } = useParams();


    useEffect(() => {
      const fetchData = async () => {

        try {
          if(type==="Edit"){
          let adminData = await getAllAdmins(); 
          dispatch(setAdminData(adminData))
          const foundAdmin = adminData.find((admin) => admin.id == id); // Find admin by id
          setAdminState(foundAdmin);
            validation.setFieldValue("name",foundAdmin.name)
            validation.setFieldValue("email",foundAdmin.email)
            validation.setFieldValue("is_super_admin",foundAdmin.is_super_admin)
          }
         
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData(); // Call the fetchData function
    }, [id]); // Add id as a dependency for useEffect
  


  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

 

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: adminCreate.name || '',
      email: adminCreate.email || '',
      password: adminCreate.password || '',
      is_super_admin: adminCreate.is_super_admin || false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please Enter Admin Name '),
      email: Yup.string().required('Please Enter Your Admin Email'),
      password: Yup.string().required('Please Enter Your Password'),
      is_super_admin: Yup.boolean(),
    }),
    onSubmit: async (values) => {
      setLoader(true)
    const created_by = JSON.parse(localStorage.getItem("authUser")).admin.id;

    const isValidAdmin=JSON.parse(localStorage.getItem("authUser")).admin.is_super_admin
    if(isValidAdmin){
      const newData = {
        ...values,
        created_by: created_by,
      };

     
      try {

        if(type==="Edit"){
          const res = await patchAdminEdit(newData,id);
          console.log(res)
          setLoader(false)
        }
        else{
          const res = await postFakeRegister(newData);
          setLoader(false)
        }

        navigate('/adminDetails')
        // const newAdmin = {
        //   sno:
        //     type === 'Edit'
        //       ? admin.sno
        //       : adminData.length > 0
        //       ? adminData[adminData.length - 1].sno + 1
        //       : 1,
        //   name: newData.name,
        //   email: newData.email,
        //   mobile: mobile,
        //   password: newData.password,
        // };
        // if (type === 'Edit') {
        //   dispatch(updateAdmin(newAdmin));
        // } else {
        //   dispatch(pushAdmin(newAdmin));
        // }
        // navigate('/adminDetails');

        console.log(res);
      } catch (error) {
        setMessage(error.response.data?error.response.data.message:"Something went's Wrong")
        dispatch(SomethingAlertTrue());
        setTimeout(() => {
          dispatch(SomethingAlertFalse());
          setMessage("Something went's wrong")
        }, 2000);
        console.log(error.response);
      }
    }
    else{

      setLoader(false)
      setMessage("Action allowed to super Admins only:)")
        dispatch(SomethingAlertTrue());
        setTimeout(() => {
          dispatch(SomethingAlertFalse());
          setMessage("Something went's wrong")
        }, 10000);
      console.log("Not Authenticated")
      return;

      

    }

        },
  });


  const generatePassword = () => {
    if(isValidAdmin){
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
      let password = '';
      for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      validation.setFieldValue('password', password); // Update this line to set password directly  
    }

   
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="/adminDetails" maintitle="Carvaan" title="Admin" breadcrumbItem={`${type} Admin`} />
          <Row>
            <Col className="col-12">
              <Card style={{height:"80vh"}} >
                {loader && <Loader/>}
                {!loader && <CardBody>
                  <CardTitle className="h4">{`${type} Admin`}</CardTitle>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                    }}
                  >
                    <div data-repeater-list="group-a">
                      <div data-repeater-item className="row w-100">
                        <div className="mb-3 col-lg-3 py-3 mt-3">
                          <label className="form-label" htmlFor="name">
                            Name
                          </label>
                          <Input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Enter your name"
                            required
                            disabled={!isValidAdmin}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.name || ''}
                            invalid={validation.touched.name && validation.errors.email ? true : false}
                          />
                          {validation.touched.name && validation.errors.name ? (
                            <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                          ) : null}
                        </div>
                        <div className="mb-3 col-lg-3 mt-3 py-3">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <Input
  type="email"
  id="email"
  className="form-control"
  placeholder="Enter email"
  required
  disabled={!isValidAdmin} // Corrected syntax
  onChange={validation.handleChange}
  onBlur={validation.handleBlur}
  value={validation.values.email || ''}
  invalid={validation.touched.email && validation.errors.email ? true : false}
/>

                          {validation.touched.email && validation.errors.email ? (
                            <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                          ) : null}
                        </div>
                        <div className="mb-3 col-lg-3 mt-3 py-3 d-flex flex-column justify-content-start">
                          <label className="form-label" htmlFor="is_super_admin">
                            Is SuperAdmin
                          </label>
                          <FormGroup switch className="d-flex align-items-center" style={{ height: '-webkit-fill-available' }}>
                          <Input
  type="switch"
  name="is_super_admin"
  role="switch"
  id="is_super_admin"
  disabled={!isValidAdmin}
  onChange={(event) => {
    validation.handleChange(event); // Pass event to handleChange
    toggleAdminPost();
  }}
  onBlur={validation.handleBlur}
  checked={validation.values.is_super_admin} // Bind switch value to form state
/>

                            <Label
                              className="mb-0 ms-3"
                              check={is_super_admin}
                              style={{
                                color: validation.values.is_super_admin ? 'green' : 'red',
                                display: 'inline-block',
                              }}
                            >
                              {validation.values.is_super_admin ? 'SuperAdmin' : 'Admin'}
                            </Label>
                          </FormGroup>
                        </div>
                        <div className="mb-3 mt-3 py-3 col-lg-3">
                          <div className="d-flex">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <label
                              className="pb-0 mb-0 ms-3 text-success"
                              style={{ cursor: 'pointer' }}
                              onClick={generatePassword}
                            >
                              Auto Generate
                            </label>
                          </div>
                          <div className="password_outer d-flex">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              id="password"
                              className="form-control"
                              placeholder="Enter password"
                              required
                              name="password"
                              disabled={!isValidAdmin}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.password || ''}
                              invalid={validation.touched.password && validation.errors.password ? true : false}
                            />
                            {validation.touched.password && validation.errors.password ? (
                              <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                            ) : null}
                            <button className="btn" type="button" onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? 'Hide' : 'Show'}
                            </button>
                          </div>
                        </div>
                      </div>
                      <button type="submit" disabled={!isValidAdmin} className="mt-1 btn btn-success">
                        {type === 'Edit' ? 'Update Admin' : 'Create Admin'}
                      </button>
                    </div>
                  </Form>
                </CardBody>}
                
              </Card>
            </Col>
          
          </Row>
     

        </div>

      </div>
      <div className=" position-absolute  " style={{top:"0",right:"0"}}>

</div>
<div className=" position-absolute  " style={{top:"0",right:"0"}}>
     {isOpen &&  <Alert  message={message} type="error" />}
      </div>
    </React.Fragment>
  );
};

export default EditAdminDetailForm;
