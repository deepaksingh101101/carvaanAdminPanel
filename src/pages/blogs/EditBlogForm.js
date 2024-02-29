import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Form } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from 'react-redux';
import { addBlogPost } from 'store/auth/user_admin_data/actions';
import { useNavigate,useParams } from 'react-router-dom';

const EditBlogForm = ({type}) => {
    const [editorState, setEditorState] = useState(null);
    const dispatch = useDispatch();
    const { sno } = useParams();

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };
    const navigate=useNavigate();
    let { blogPosts } = useSelector((state) => state.BlogReducers);
    const blog = blogPosts.find((item) => item.sno == sno);

        
    const handleAddBlog = (editorState) => {
        console.log(editorState)
        const newBlog={
            sno: type === "Edit" ? blog.sno : (blogPosts.length > 0 ? blogPosts[blogPosts.length - 1].sno + 1 : 1),
            heading:"Heading 1",
            editorState:editorState
        }

      dispatch(addBlogPost(newBlog));
      navigate('/blogDetails')
  };



    return (
        <React.Fragment>
            <div className="page-content">
                <div className="container-fluid">
                    <Breadcrumbs link="/blogDetails" maintitle="Carvaan" title="Blogs" breadcrumbItem={`${type} Blog`} />

                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4">{`${type}`} Blog</CardTitle>
                                    <Form method="post" >
                                        <Editor
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName"
                                            editorClassName="editorClassName"
                                            onEditorStateChange={onEditorStateChange}
                                        />
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type='submit' onClick={()=>handleAddBlog(editorState)} className="mt-1 btn btn-success ">
                        Add Blog
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EditBlogForm;
