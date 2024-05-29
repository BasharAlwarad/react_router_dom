// import {NavLink} from 'react-router-dom'

// const Nav = () => {
//     const navLinkStyles = ({ isActive }) => {
//       return {
//         fontWeight: isActive ? 'bold' : 'normal',
//         color: isActive ? 'red' : 'black',
//       };
//     };
//     return (
//       <nav>
//         <ul>
//           <li>
//             <NavLink style={navLinkStyles} to={'/'}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink style={navLinkStyles} to={'about'}>
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink style={navLinkStyles} to={'/contact'}>
//               Contact
//             </NavLink>
//           </li>
//           <li>
//             <NavLink style={navLinkStyles} to={'/users'}>
//               Users
//             </NavLink>
//           </li>
//           <li>
//             <NavLink style={navLinkStyles} to={'/search'}>
//               Search
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     );
//   };

//   export default Nav

import { NavLink } from 'react-router-dom';

const Nav = () => {
  const navLinkStyles = ({ isActive }) => {
    return isActive ? 'font-bold text-red-500' : 'text-white';
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink className={navLinkStyles} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyles} to="about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyles} to="contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyles} to="users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyles} to="search">
            search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
