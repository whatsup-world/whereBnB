import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../auth/LoginFormModal';
import "./NavBar.css"
import SearchBar from './SearchBar';

const NavBar = () => {
  const user = useSelector(state => state?.session.user)
  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  }

  useEffect(() => {
    if (!showMenu) return

    const closeMenu = () => {
      setShowMenu(false)
    }

    document?.addEventListener('click', closeMenu)

    return () => document?.removeEventListener("click", closeMenu)
  }, [showMenu])


  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>


        <div>
          <li onClick={openMenu}>Hi, {user.username}</li>
          {showMenu && (
            <div className='dropdown-menu'>
              <ul>
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
                <li>
                  <LogoutButton />
                </li>

              </ul>
            </div>
          )}
        </div>

      </>
    )
  } else {
    sessionLinks = (
    <>
      <li>
        {/* <NavLink to='/login' exact={true} activeClassName='active'>
          Login

        </NavLink> */}
        <LoginFormModal />
      </li>
      <li>
        <NavLink to='/sign-up' exact={true} activeClassName='active'>
          Sign Up
        </NavLink>
      </li>
    </>
  )}


  return (
    <nav id='navbar-container'>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <SearchBar />
        </li>
        <li>
          <NavLink to='/listings' exact={true} activeClassName='active'>
            All Listings
          </NavLink>
        </li>
        {sessionLinks}
      </ul>
    </nav>
  );
}

export default NavBar;
