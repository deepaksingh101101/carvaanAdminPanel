// CreateCustomerForm.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Form,Label, FormGroup } from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pushCustomer, updateCustomer } from 'store/auth/user_admin_data/actions';

const CreateCustomerForm = ({ type }) => {
  const dispatch = useDispatch();
  const { sno } = useParams();

  let { customerData } = useSelector((state) => state.CustomerReducers);
  const customer = customerData.find((customer) => customer.sno == sno);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [curentCity, setCurentCity] = useState('');
  const [interest, setInterest] = useState('');
  const [profession, setProfession] = useState('');
  const [profile, setProfile] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    // Fetch and set the customer data when type is 'Edit'
    if (customer) {
      setName(customer.name || '');
      setAge(customer.age || '');
      setGender(customer.gender || '');
      setEmail(customer.email || '');
      setMobile(customer.mobile || '');
      setCurentCity(customer.curentCity || '');
      setInterest(customer.interest || '');
      setProfession(customer.profession || '');
      setProfile(customer.profile || '');
      setPassword(customer.password || '');
    }
  }, [customer]);

  const handleAddCustomerClick = () => {
    const newCustomer = {
      sno: type === "Edit" ? customer.sno : (customerData.length > 0 ? customerData[customerData.length - 1].sno + 1 : 1),
      name:name,
      email:email,
      mobile:mobile,
      password:password,
      interest:interest,
      profession:profession,
      profile:profile,
      curentCity:curentCity,
      gender:gender,
      age:age,
    };

    if (type === 'Create') {
      dispatch(pushCustomer(newCustomer));
    } else {
      dispatch(updateCustomer(newCustomer));
    }

    navigate('/customerDetails');
  };

  
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="customerDetails" maintitle="Carvaan" title="Customers" breadcrumbItem={`${type} Customers`} />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">{`${type}`} Customer</CardTitle>
                  {/* <form onSubmit={handleAddCustomerClick}> */}
                  <div data-repeater-list="group-a">
                    <div data-repeater-item className="row w-100">
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          placeholder="Enter email"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="mobile">
                          Mobile
                        </label>
                        <input
                          type="text"
                          id="mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          className="form-control"
                          placeholder="Enter Phone Number"
                          required
                        />
                      </div>

                      
                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <div className='password_outer d-flex'>

                        
                        <input
                           type={showPassword ? 'text' : 'password'}
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          placeholder="Enter password"
                          required
                          
                        />
                         <button
      className="btn"
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      // style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
    >
      {showPassword ? 'Hide' : 'Show'}
    </button>
    </div>       
                      </div>


                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="interest">
                          Interest
                        </label>
                        <input
                          type="text"
                          id="interest"
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          className="form-control"
                          placeholder="Enter Interest"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="profession">
                          Profession
                        </label>
                        <input
                          type="text"
                          id="profession"
                          value={profession}
                          onChange={(e) => setProfession(e.target.value)}
                          className="form-control"
                          placeholder="Enter Profession"
                          required
                        />
                      </div>

                      

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="profile">
                          Profile Photo
                        </label>{" "}
                        <input
                          type="file"
                          className="form-control"
                          id="profile"
                          required
                          accept=".png, .jpg, .jpeg"
                        />
                      </div>



                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="curentCity">
                          Curent City
                        </label>
                        <input
                          type="text"
                          id="curentCity"
                          value={curentCity}
                          onChange={(e) => setCurentCity(e.target.value)}
                          className="form-control"
                          placeholder="Enter curent City"
                          required
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
                        <label className="form-label" htmlFor="age">
                          Age
                        </label>
                        <input
                          type="number"
                          id="age"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          className="form-control"
                          placeholder="Enter age"
                          required
                          min='0'
                        />
                      </div>

                      <div className="mb-3 col-lg-3">
          <label className="form-label" htmlFor="gender">
            Gender
          </label>
          <FormGroup tag="div" className="d-flex">
            <FormGroup check className="mx-3">
              <Label check htmlFor="male">
              <input type="radio" name="gender" id="male" value="male"  checked={gender === 'male'}  onChange={handleGenderChange} />{' '}
                Male
              </Label>
            </FormGroup>
            <FormGroup check className="mx-3">
              <Label check htmlFor="female">
              <input type="radio" name="gender" id="female" value="female"  checked={gender === 'female'} onChange={handleGenderChange} />{' '}
                Female
              </Label>
            </FormGroup>
            <FormGroup check className="mx-3">
              <Label check htmlFor="other">
              <input type="radio" name="gender" id="other" value="other"  checked={gender === 'other'} onChange={handleGenderChange} />{' '}
                Other
              </Label>
            </FormGroup>
          </FormGroup>
        </div>

                    </div>


                    
                  <button onClick={handleAddCustomerClick} type='submit' className="mt-1 btn btn-success">
  {type === 'Edit' ? 'Update Customer' : 'Create Customer'}
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

export default CreateCustomerForm;
