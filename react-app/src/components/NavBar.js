
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
        <li>
          <NavLink to='/listings' exact={true} activeClassName='active'>
            All Listings
          </NavLink>
        </li>
        <li>
          <NavLink to='/newListing' exact={true} activeClassName='active'>
            New Listing
          </NavLink>
        </li>
        <li>
          <NavLink to='/bookings' exact={true} activeClassName='active'>
            My Bookings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
