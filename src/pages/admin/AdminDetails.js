import React, { useEffect, useState } from 'react';
import { Row, Col,Input, Card, CardBody, CardTitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
  const [loader, setLoader] = useState(true);
  const [message, setMessage] = useState("Something went wrong");
  const [tempAdmin, setTempAdmin] = useState([]); // Temporary state to store admin data
const [allAdminsAction, setAllAdminsAction] = useState("All Admins")
  const isOpen = useSelector(state => state.alertReducer.isOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
const [searchTerm, setSearchTerm] = useState("")

  const fetchData = async () => {
    try {
      let adminData = await getAllAdmins();
      dispatch(setAdminData(adminData));
      setTempAdmin(adminData); // Set admin data to tempAdmin
      setLoader(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    setLoader(true);
    fetchData();
  }, []);

  const handleRemoveAdmin = async (id) => {
    try {
      let res = await deleteAdmin(id);
      dispatch(popAdmin(id));
       setTempAdmin((tempAdmin) => tempAdmin.filter(admin => admin.id !== id));
      console.log(res);
    } catch (error) {
      setMessage(error.response.data.message ? error.response.data.message : "Something went wrong");
      dispatch(SomethingAlertTrue());
      setTimeout(() => {
        dispatch(SomethingAlertFalse());
        setMessage("Something went wrong");
      }, 2000);
    }
  };

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
      <Link to={`/editAdmin/${row.id}`}>
        <button className="btn btn-info mx-2">
          <i className="fas fa-edit"></i>
        </button>
      </Link>
    </div>
  );

  const { adminData } = useSelector((state) => state.AdminReducers);

  const allAdmins = () => {
    // No filter needed, show all admins
    setTempAdmin(adminData)
    setAllAdminsAction("All Admins")
  };
  
  const superAdmins = () => {
    // Filter admins to show only super admins
     setTempAdmin(adminData.filter(admin => admin.is_super_admin));
     setAllAdminsAction("Super Admins")
  };
  
  const onlyAdmins = () => {
    // Filter admins to show only non-super admins
    setTempAdmin(adminData.filter(admin => !admin.is_super_admin));
    setAllAdminsAction("Admins")
  };

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
      width: "auto"
    },
  ];
  
  // const data = tempAdmin.map((row, index) => ({
  //   ...row,
  //   is_super_admin: row.is_super_admin ? 'Yes' : 'No',
  //   created_by: row.created_by ? row.created_by.name : 'Unknown',
  //   sno: index + 1,
  //   actions: generateActionButtons(row),
  // }));

  const filteredData = tempAdmin
  .filter((admin) => {
    if (searchTerm === '') return true;
    const term = searchTerm.toLowerCase();
    return (
      admin.name.toLowerCase().includes(term) ||
      admin.email.toLowerCase().includes(term)
    );
  })
  .map((row, index) => ({
    ...row,
    is_super_admin: row.is_super_admin ? 'Yes' : 'No',
    created_by: row.created_by ? row.created_by.name : 'Unknown',
    sno: index + 1,
    actions: generateActionButtons(row),
  }));


  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="/adminDetails" maintitle="Carvaan" title="Admin" breadcrumbItem="Admin Details" />
          <Row>
            <Col className="col-12">
              <Card style={{minHeight:"80vh"}} >
                <CardBody style={{minHeight:"80vh"}}>
                  <div className='d-flex justify-content-between'>
                    <CardTitle className="h4">Admin Details</CardTitle>
                  <div className='d-flex align-items-center' >
                  <div className="search-container">
  <Input
    type="text"
    placeholder="Search "
    className="search-input me-5"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>

                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className=' ms-4'>
                      <DropdownToggle className='' style={{ paddingLeft: "45px", paddingRight: "45px" }} caret>
                      {allAdminsAction}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Actions</DropdownItem>
                        <DropdownItem onClick={() => allAdmins()}>All Admins</DropdownItem>
                        <DropdownItem onClick={() => superAdmins()}>Super Admins</DropdownItem>
                        <DropdownItem onClick={() => onlyAdmins()}>Admins</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>

                  </div>
                  {loader && <Loader/>}
                  {!loader && 
                    <div style={{minHeight:"80vh"}}  >
                     <DataTable
  columns={columns}
  data={filteredData}
  pagination
  responsive
/>

                    </div>
                  }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className=" position-fixed  " style={{top:"0px",right:"0",zIndex:"9999"}}>
        <Alert message={message} type="error" />
      </div>
    </React.Fragment>
  );
};

export default AdminDetails;
