import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const getSingleUser = async () => { 
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  
  useEffect(() => {
    getSingleUser();
  }, [id]);

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">User</h1>
      <button 
        onClick={handleGoBack} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        Go Back
      </button>
      {user ? (
        <p className="text-lg font-medium mb-4">{user.name}</p>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
      <div className="flex space-x-4 mb-4">
        <Link 
          to={'address'} 
          className="text-blue-500 hover:underline"
        >
          Address
        </Link>
        <Link 
          to={'info'} 
          className="text-blue-500 hover:underline"
        >
          Info
        </Link>
      </div>
      <div className="border-t mt-4 pt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default User;

