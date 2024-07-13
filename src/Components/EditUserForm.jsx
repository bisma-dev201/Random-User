import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserForm from './UserForm';

const EditUserForm = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://6694d9014bd61d8314c8e2c1.mockapi.io/api/username/${id}`);
        setUser(response.data); // Assuming response.data has the user object
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user:', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.put(`https://6694d9014bd61d8314c8e2c1.mockapi.io/api/username/${id}`, values);
      alert('User updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <UserForm initialValues={user} onSubmit={handleSubmit} />;

};

export default EditUserForm;
