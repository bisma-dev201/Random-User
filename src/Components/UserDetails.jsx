import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://6694d9014bd61d8314c8e2c1.mockapi.io/api/username/${id}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.log('Fetch error:', error);
        setLoading(false);
        setError(error);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="p-4">
    <h1 className="text-xl font-bold mb-4">User Details</h1>
    {user && (
      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Profession:</strong> {user.profession}</p>
      </div>
    )}
  </div>
  );
};
