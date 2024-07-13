import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4">User Details</h1>
        {user && (
          <div>
            <p className="mb-2"><strong>Name:</strong> {user.name}</p>
            <p className="mb-2"><strong>Email:</strong> {user.email}</p>
            <p className="mb-2"><strong>Profession:</strong> {user.profession}</p>
            <p className="mb-2"><strong>Age:</strong> {user.age}</p>
            <p className="mb-2"><strong>Gender:</strong> {user.gender}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
