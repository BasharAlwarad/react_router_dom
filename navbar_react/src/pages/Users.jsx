import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Users = ({ names, id }) => {
  console.log(names + id);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    return () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setUsers(data);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
    };
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul className='users-list'>
        {users &&
          users.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Users;
