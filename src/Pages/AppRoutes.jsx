import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import Contact from './Contact'
import DeleteUser from '../Components/DeleteUser'
import EditUserForm from '../Components/EditUserForm';
import UserDetails from '../Components/UserDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/user/view/:id" element={<UserDetails />} />
      <Route path="/user/edit/:id" element={<EditUserForm />} />
      <Route path="/user/delete/:id" element={<DeleteUser />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
