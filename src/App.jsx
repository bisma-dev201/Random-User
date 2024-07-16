import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}

export default App;
