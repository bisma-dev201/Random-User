import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { UserDetails } from '../Components/UserDetails';
import Contact from './Contact'
import FormPage from '../Components/FormPage';
import DeleteUser from '../Components/DeleteUser'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/user/view/:id" element={<UserDetails />} />
      <Route path="/user/edit/:id" element={<FormPage />} />
      <Route path="/user/delete/:id" element={<DeleteUser />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
