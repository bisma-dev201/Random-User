import React from 'react';
import './App.css';
import AppRoutes from './Pages/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
