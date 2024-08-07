import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import EditUserForm from '../Components/EditUserForm';
import UserDetails from '../Components/UserDetails';
import CreateUser from './CreateUser';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/user/view/:id" element={<UserDetails />} />
      <Route path="/user/edit/:id" element={<EditUserForm />} />
      <Route path="/user/create" element={<CreateUser />} />
    </Routes>
  );
};

export default AppRoutes;
