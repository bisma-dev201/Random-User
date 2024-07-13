import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const deleteUser = async () => {
      try {
        await axios.delete(`https://6694d9014bd61d8314c8e2c1.mockapi.io/api/username/${id}`);
        setLoading(false);
        navigate('/'); // Redirect to the home page after successful deletion
      } catch (error) {
        console.log('Delete error:', error);
        setLoading(false);
        setError(error);
      }
    };

    deleteUser();
  }, [id, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>User deleted successfully.</div>;
};

export default DeleteUser;
