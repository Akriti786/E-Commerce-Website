import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import './Navbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout, CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className='header'>


      <div className='top_header'>
        <div className='icon'>
          <MdLocalShipping />
        </div>
        <div className='info'>
          <p>Free Shipping on Orders Over $500</p>
        </div>
      </div>

      <div className='mid_header'>
        <div className='logo'>
          <img src="comlogo.jpeg" alt="logo" />
        </div>

        <div className='mid_right'>
          <div className='search_box'>
            <input type="text" placeholder='search' />
            <button><AiOutlineSearch /></button>
          </div>

          {
            isAuthenticated ?
              //Logout button
              <button className='logout_btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                <CiLogout className='login_icon' />
                <span>Logout</span>
              </button>
              :
              //Login button
              <button className='login_btn' onClick={() => loginWithRedirect()}>
                <FiLogIn className='login_icon' />
                <span>Login</span>
              </button>
          }
        </div>
      </div>


      <div className='last_header'>
        <div className='user_profile'>
          {
            //User profile will be shown here 
            isAuthenticated ?
              <>
                <div className='icon'>
                  <CiUser />
                </div>
                <div className='info'>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </>
              :
              <>
                <div className='icon'>
                  <CiUser />
                </div>
                <div className='info'>
                  <p>Please Login</p>
                </div>
              </>
          }

        </div>
        <div className='nav'>
          <ul>
            <li><Link to='/' className='link'>Home</Link></li>
            <li><Link to='/shop' className='link'>Shop</Link></li>
            <li><Link to='/collection' className='link'>Collection</Link></li>
            <li><Link to='/about' className='link'>About</Link></li>
            <li><Link to='/contact' className='link'>Contact</Link></li>
          </ul>
        </div>
        <div className='offer'>
          <p>Flat 10% over all phone</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
