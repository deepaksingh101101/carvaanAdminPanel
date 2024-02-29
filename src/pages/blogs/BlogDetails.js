import React from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const BlogDetails = () => {
 

  const dispatch=useDispatch()
  const handleRemoveBlog = (sno) => {
    // dispatch(popAdmin(sno));
  };
  const navigate=useNavigate();


const handleEdit=(sno)=>{
navigate(`/editBlog/${sno}`)
  }
  const generateActionButtons = (row) => (
    <div>
      <Link to={`/viewBlog/${row.sno}`}>
        <button className="btn btn-primary mx-2">
          <i className="ti-eye"></i>
        </button>
      </Link>
      <button className="btn btn-danger mx-2" onClick={() => handleRemoveBlog(row.sno)}>
        <i className="ti-trash"></i>
      </button>
      <button className="btn btn-info mx-2" onClick={() => handleEdit(row.sno)}>
        <i className="ti-pencil-alt"></i>
      </button>
    </div>
  );


    const {blogPosts} = useSelector((state) => state.BlogReducers);
    
    // console.log(blogPosts)


  const data = {
    columns: [
      {
        label: 'SNo',
        field: 'sno',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Heading',
        field: 'heading',
        sort: 'asc',
        width: 150,
      },
      // {
      //   label: 'Description',
      //   field: 'description',
      //   sort: 'asc',
      //   width: 270,
      // },
      // {
      //   label: 'Password',
      //   field: 'password',
      //   sort: 'asc',
      //   width: 200,
      // },
      // {
      //   label: 'Mobile',
      //   field: 'mobile',
      //   sort: 'asc',
      //   width: 200,
      // },
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 200,
      },
    ],
    rows: blogPosts.map((row) => ({
      ...row,
      action: generateActionButtons(row),
    })),
  };


  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs link="/blogDetails" maintitle="Carvaan" title="Blog" breadcrumbItem="Blog Details" />
 
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Blog Details</CardTitle>
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

export default BlogDetails;
