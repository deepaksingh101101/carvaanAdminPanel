import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useParams} from 'react-router-dom'
import { getAllAdmins } from "helpers/fakebackend_helper"; // Assuming you have a function to fetch admins
import CustomerProfileCard from "pages/customers/CustomerProfileCard";

const AdminProfile = () => {
  const [admin, setAdmin] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
     
      try {
        let adminData = await getAllAdmins(); // Fetch admin data
        const foundAdmin = adminData.find((admin) => admin.id == id); // Find admin by id
        setAdmin(foundAdmin);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [id]); // Add id as a dependency for useEffect

  if (!admin) {
    return <div>Admin not found</div>;
  }

  console.log(admin)
  return (
    <React.Fragment>
      
      <CustomerProfileCard admin={admin} role="Admin" />
    </React.Fragment>
  );
};

export default AdminProfile;
