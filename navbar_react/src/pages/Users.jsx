// import axios from 'axios'
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const Users = () => {

//   const [users, setUsers] = useState([]);

//   const getUsers = async() => { 
//     try {
//         const {data}= await axios(`https://jsonplaceholder.typicode.com/users`)
//         setUsers(data)
//     } catch (error) {
//       console.log(error)
//     }
//    }

//   useEffect(() => {
//     getUsers()
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul className='users-list'>
//         {users?.map((user) => {
//             return (
//               <li key={user.id}>
//                 <Link to={`/users/${user.id}`}>{user.username}</Link>
//               </li>
//             );
//           })}
//       </ul>
//     </div>
//   );
// };

// export default Users;


import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios(`https://jsonplaceholder.typicode.com/users`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>
      <ul className="space-y-4">
        {users?.map((user) => (
          <li key={user.id} className="bg-gray-100 p-4 rounded-md shadow-sm">
            <Link 
              to={`/users/${user.id}`} 
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              {user.username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
