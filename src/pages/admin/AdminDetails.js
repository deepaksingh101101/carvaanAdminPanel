import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popAdmin, setAdminData } from 'store/auth/user_admin_data/actions';
import { getAllAdmins } from 'helpers/fakebackend_helper';

const AdminDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const fetchData = async () => {
    try {
      let adminData = await getAllAdmins();
      dispatch(setAdminData(adminData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemoveAdmin = (sno) => {
    dispatch(popAdmin(sno));
  };

  const handleEdit = (sno) => {
    navigate(`/editAdmin/${sno}`);
  };

  const generateActionButtons = (row) => (
    <div>
      <Link to={`/adminProfile/${row.id}`}>
        <button className="btn btn-primary mx-2">
          <i className="ti-eye"></i>
        </button>
      </Link>
      <button className="btn btn-danger mx-2" onClick={() => handleRemoveAdmin(row.sno)}>
        <i className="ti-trash"></i>
      </button>
      <button className="btn btn-info mx-2" onClick={() => handleEdit(row.sno)}>
        <i className="ti-pencil-alt"></i>
      </button>
    </div>
  );

  const { adminData } = useSelector((state) => state.AdminReducers);

  const data = {
    columns: [
      {
        label: 'SNo',
        field: 'sno',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Is SuperAdmin',
        field: 'is_super_admin',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Created By',
        field: 'created_by',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 200,
      },
    ],
    rows: adminData.map((row, index) => ({
      ...row,
      is_super_admin: row.is_super_admin ? 'Yes' : 'No', // Convert boolean to string representation
      created_by: row.created_by ? row.created_by.name : 'Unknown', // Check if created_by exists
      sno: index + 1, // Assigning serial numbers
      id:row.id,
      action: generateActionButtons(row),
      
    }
    
    )),
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="/adminDetails" maintitle="Carvaan" title="Admin" breadcrumbItem="Admin Details" />
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <div className='d-flex justify-content-between'>
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
                  <MDBDataTable responsive bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminDetails;
