import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserForm from './UserForm';

const EditUserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://6694d9014bd61d8314c8e2c1.mockapi.io/api/username/${id}`);
        setUser(response.data);
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
      toast.success('User updated successfully!');
      navigate('/'); // Redirect to the User page
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Error updating user. Please try again.');
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
