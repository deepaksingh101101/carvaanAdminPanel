import React from 'react';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import EditBlogForm from './EditBlogForm';

const AddBlog = () => {


    return (
        <React.Fragment>
       <EditBlogForm type="Create"/>
        </React.Fragment>
    )
}

export default AddBlog;
