import React from 'react';
import UserForm from './UserForm';
import axios from 'axios';

const Posting = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // POST request to create a new user
      await axios.post('https://6694d9014bd61d8314c8e2c1.mockapi.io/api/username', values);
      alert('User created successfully!');
      // Optionally redirect or perform other actions after successful creation
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error states as needed
    } finally {
      setSubmitting(false); // Reset submit button state
    }
  };

  return <UserForm initialValues={{ name: '', email: '', age: '', profession: '', gender: false }} onSubmit={handleSubmit} />;
};

export default Posting;
