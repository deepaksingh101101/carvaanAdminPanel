import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { MDBDataTable, Car } from 'mdbreact';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popAdmin, setAdminData } from 'store/auth/user_admin_data/actions';
import { deleteAdmin, getAllAdmins } from 'helpers/fakebackend_helper';
import Loader from 'components/loader/Loader';
import { SomethingAlertFalse, SomethingAlertTrue } from 'store/components/actions';
import Alert from 'components/alert/Alert';
import DataTable from 'react-data-table-component';


const AdminDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true)

  const [message, setMessage] = useState("Something went's wrong")


  const isOpen = useSelector(state => state.alertReducer.isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const fetchData = async () => {
    try {
      let adminData = await getAllAdmins();
      dispatch(setAdminData(adminData));
      setLoader(false)
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoader(false)
    }
  };

  useEffect(() => {
    setLoader(true)
    fetchData();
  }, []);

  const handleRemoveAdmin = async (id) => {

   try {
    let res= await deleteAdmin(id)
   dispatch(popAdmin(id));
   console.log(res)
   } catch (error) {
    setMessage(error.response.data.message?error.response.data.message:"Something's went's wrong")
  
    dispatch(SomethingAlertTrue())
    setTimeout(() => {
      dispatch(SomethingAlertFalse());
      setMessage("Something went's wrong")
    }, 2000);
   }
    
  };

  // const handleEdit = (id) => {

  //   navigate(`/editAdmin/${id}`);
  // };

  const generateActionButtons = (row) => (
    <div>
      <Link to={`/adminProfile/${row.id}`}>
        <button className="btn btn-primary mx-2">
          <i className="ti-eye"></i>
        </button>
      </Link>
      <button className="btn btn-danger mx-2" onClick={() => handleRemoveAdmin(row.id)}>
        <i className="ti-trash"></i>
      </button>
        <Link to={`/editAdmin/${row.id}`} >
      <button   className="btn btn-info  mx-2" >
        <i className="fas fa-edit"></i>
      </button>
      </Link>
    </div>
  );

  const { adminData } = useSelector((state) => state.AdminReducers);

  // const data = {
  //   columns: [
  //     {
  //       label: 'SNo',
  //       field: 'sno',
  //       sort: 'asc',
  //       width: 150,
  //     },
  //     {
  //       label: 'Name',
  //       field: 'name',
  //       sort: 'asc',
  //       width: 150,
  //     },
  //     {
  //       label: 'Email',
  //       field: 'email',
  //       sort: 'asc',
  //       width: 270,
  //     },
  //     {
  //       label: 'Is SuperAdmin',
  //       field: 'is_super_admin',
  //       sort: 'asc',
  //       width: 200,
  //     },
  //     {
  //       label: 'Created By',
  //       field: 'created_by',
  //       sort: 'asc',
  //       width: 200,
  //     },
  //     {
  //       label: 'Action',
  //       field: 'action',
  //       sort: 'asc',
  //       width: 200,
  //     },
  //   ],
  //   rows: adminData.map((row, index) => ({
  //     ...row,
  //     is_super_admin: row.is_super_admin ? 'Yes' : 'No', // Convert boolean to string representation
  //     created_by: row.created_by ? row.created_by.name : 'Unknown', // Check if created_by exists
  //     sno: index + 1, // Assigning serial numbers
  //     id:row.id,
  //     action: generateActionButtons(row),
      
  //   }
    
  //   )),
  // };

  const columns = [
    {
      name: 'sno',
      selector: row => row.sno,
      sortable: true,
    },
    {
      name: 'name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Is SuperAdmin',
      selector: row => row.is_super_admin,
      sortable: true,
    },
    {
      name: 'Created By',
      selector: row => row.created_by,
      sortable: true,
    },
    {
      name: 'Actions',
      selector: row => row.actions,
      sortable: true,
    },
  ];
  
  const data = adminData.map((row, index) => ({
        ...row,
        is_super_admin: row.is_super_admin ? 'Yes' : 'No', // Convert boolean to string representation
        created_by: row.created_by ? row.created_by.name : 'Unknown', // Check if created_by exists
        sno: index + 1, // Assigning serial numbers
        id:row.id,
        actions: generateActionButtons(row),
  }))

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="/adminDetails" maintitle="Carvaan" title="Admin" breadcrumbItem="Admin Details" />
          <Row>
            <Col className="col-12">
              <Card style={{minHeight:"80vh"}} >
                <CardBody style={{minHeight:"80vh"}}>
                  <div  className='d-flex justify-content-between'>
                    <CardTitle className="h4">Admin Details</CardTitle>
                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className=' '>
                      <DropdownToggle className='' style={{ paddingLeft: "45px", paddingRight: "45px" }} caret>
                        All Admins
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Actions</DropdownItem>
                        <DropdownItem onClick={() => allAdmins}>All Admins</DropdownItem>
                        <DropdownItem onClick={() => superAdmins}>Super Admins</DropdownItem>
                        <DropdownItem onClick={() => onlyAdmins}>Admins</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  {loader && <Loader/>}

                  {!loader && 
                  
                  <div style={{minHeight:"80vh"}}  >
                  {/* <MDBDataTable responsive bordered data={data} />  */}
                  <DataTable
			            columns={columns}
			           data={data}
                 pagination
		              />
                  </div>
                  
                  }
                  

                </CardBody>
              </Card>
            </Col>
          </Row>
         
        </div>
      </div>
      <div  className=" position-fixed  " style={{top:"0px",right:"0",zIndex:"9999"}}>
     {  <Alert message={message} type="error" />}
      </div>
    </React.Fragment>
  );
};

export default AdminDetails;
