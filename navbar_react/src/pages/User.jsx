import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    return () => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setUser(data);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
    };
  }, [id]);

  return (
    <div>
      <h1>User</h1>
      <Link to={'features'}>features</Link>
      <Link to={'info'}>Info</Link>
      <p>{user && user.title}</p>
      <Outlet />
    </div>
  );
};

export default User;
