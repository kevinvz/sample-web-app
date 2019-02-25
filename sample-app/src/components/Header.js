import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <div>
      <NavLink to="/">Log in</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
}

export default Header;