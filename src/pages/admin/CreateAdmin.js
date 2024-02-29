import React from 'react'
//Import Breadcrumb

import EditAdminDetailForm from './EditAdminDetailsForm';

const CreateAdmin = () => {

  // const rowsData = [
  //   {
  //     sno: '1',
  //     name: 'deepak',
  //     email: 'deepak@gmail.com',
  //     mobile: '+91 9955110044',
  //     password: '+password',
  //     profileImg:""
  //   },
  //   {
  //     sno: '2',
  //     name: 'shivam',
  //     email: 'shivam@gmail.com',
  //     mobile: '+91 9955110044',
  //     password: '+password',
  //     profileImg:""
  //   },
  //   {
  //     sno: '3',
  //     name: 'roshan',
  //     email: 'roshan@gmail.com',
  //     mobile: '+91 9955110044',
  //     password: '+password',
  //     profileImg:""
  //   },
  //   // Add more rows as needed
  // ];


  
    return (
        <React.Fragment>
      <EditAdminDetailForm type="Create"/>
    </React.Fragment>
    )
}

export default CreateAdmin