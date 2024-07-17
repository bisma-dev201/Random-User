import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserForm from '../Components/UserForm';

const CreateUser = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    // console.log("🚀 ~ handleSubmit ~ values:", values)
    try {
      await axios.post('https://6694d9014bd61d8314c8e2c1.mockapi.io/api/username', values);
      toast.success('User created successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error('Error creating user. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return <UserForm initialValues={{ name: '', email: '', age: '', profession: '', employed: false }} onSubmit={handleSubmit} />;
};

export default CreateUser;
