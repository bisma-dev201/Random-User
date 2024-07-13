import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const User = () => {

  // const apiurl = 'https://jsonplaceholder.typicode.com/users'; // randomUser free Api
  const apiurl = 'https://6694d9014bd61d8314c8e2c1.mockapi.io/api/username';
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiurl);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.log('Fetch error:', error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const viewUser = (userId) => {
    navigate(`/user/view/${userId}`);
  };

  const editUser = (userId) => {
    navigate(`/user/edit/${userId}`);
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${apiurl}/${userId}`);
      fetchData();
    } catch (error) {
      console.log('Delete error:', error);
    }
  };

  const handleAction = (userId, action) => {
    if (action === 'view') {
      viewUser(userId);
    } else if (action === 'edit') {
      editUser(userId);
    } else if (action === 'delete') {
      deleteUser(userId);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User List</h1>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Sr No.</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Profession</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-t border-gray-200">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.profession}</td>
                <td className="px-4 py-2">
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) => handleAction(user.id, e.target.value)}
                    >
                      <option value="">Actions</option>
                      <option value="view">View</option>
                      <option value="edit">Edit</option>
                      <option value="delete">Delete</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};