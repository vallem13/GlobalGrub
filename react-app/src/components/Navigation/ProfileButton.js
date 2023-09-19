// ProfileButton.js

import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import {  useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as sessionActions from '../../store/session';
import './Navigation.css'; // Import the CSS file;
import { cleanupCart } from "../../store/cart";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef(null);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(sessionActions.logout());
    await dispatch(cleanupCart())
    closeMenu();
    history.push('/');
  };

  const handleManageAccount = async (e) => {
    e.preventDefault();
    closeMenu();
    history.push('/profile');
  };

  const handleOrders = async (e) => {
    e.preventDefault();
    closeMenu();
    history.push('/user_orders');
  };

  const handleManageBusinesses = async (e) => {
    e.preventDefault();
    closeMenu();
    history.push('/my_restaurants');
  };

  const handleCreateRestaurant = async (e) => {
    e.preventDefault();
    closeMenu();
    history.push('/restaurant/new-restaurant');
  };

  const closeMenu = () => setShowMenu(false);
  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <div className="profile-button">
      <button onClick={openMenu}>
        <i className="fas fa-bars" style={{ color: "#000000" }} />
      </button>

      {/* Conditionally render the overlay */}
      {showMenu && <div className="overlay" />}

      {/* Render the profile dropdown */}
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <div className="user-icon">
              <i class="fa-solid fa-user"></i>
              <p className="user-name">Hi, {user.firstName}</p>
            </div>
            <p className="user-email">{user.email}</p>
            <div className='user-options'>

              <p className="custom-paragraph">
                <button onClick={handleManageAccount} className="manage-account-button user-icon-button" type="submit"><i class="fa-solid fa-address-card" style={{ color: "#000205", }}></i> Manage Account</button>
              </p>

              <p className="custom-paragraph">
                <button onClick={handleOrders} className="orders-button" type="submit"><i class="fa-solid fa-receipt" style={{ color: "#000205", }}></i> Orders</button>
              </p>

              <p className="custom-paragraph">
                <button onClick={handleManageBusinesses} className="Manage your Businesses"><i class="fa-solid fa-briefcase" style={{ color: "#000205", }}></i> Manage your Businesses</button>
              </p>

              <p className="custom-paragraph">
                <button onClick={handleCreateRestaurant} className="Add your Restaurant"><i class="fa-solid fa-building" style={{ color: "#000205", }}></i> Add your Restaurant</button>
              </p>



                <p className="custom-paragraph">
                  <button onClick={handleLogout} className="logout-button">Sign Out</button>
                </p>


              <div className="created-by">
                <span>Creators:</span>

                <div className="socials">
                  <span>Alexandra Valle</span>
                  <div className='socials-icons'>
                    <a href="https://www.linkedin.com/in/alexandra-valle-m" target="_blank" ><i class="fa-brands fa-linkedin" style={{ color: "#f00b51", }}></i></a>
                    <a href="https://github.com/vallem13" target="_blank"><i class="fab fa-github" style={{ color: "#f00b51", }}></i></a>
                    <a href="https://vallem13.github.io/" target="_blank"><i class="fa-solid fa-book" FontAwesomeIcon style={{ color: "#f00b51", }}></i></a>
                  </div>
                </div>
                <div className="socials">
                  <span>Makayla Jameson</span>
                  <div className='socials-icons'>
                    <a href="https://www.linkedin.com/in/makayla-jameson" target="_blank" ><i class="fa-brands fa-linkedin" style={{ color: "#f00b51", }}></i></a>
                    <a href="https://github.com/makaylajameson" target="_blank"><i class="fab fa-github" style={{ color: "#f00b51", }}></i></a>
                    <a href="https://makaylajameson.github.io/" target="_blank"><i class="fa-solid fa-book" FontAwesomeIcon style={{ color: "#f00b51", }}></i></a>
                  </div>
                </div>
                <div className="socials">
                  <span>Natalia Ramirez</span>
                  <div className='socials-icons'>
                    <a href="https://www.linkedin.com/in/natalia-ramirez-750817151" target="_blank" ><i class="fa-brands fa-linkedin" style={{ color: "#f00b51", }}></i></a>
                    <a href="https://github.com/Natalia3ramirez" target="_blank"><i class="fab fa-github" style={{ color: "#f00b51", }}></i></a>
                    <a href="https://Natalia3ramirez.github.io/" target="_blank"><i class="fa-solid fa-book" FontAwesomeIcon style={{ color: "#f00b51", }}></i></a>
                  </div>
                </div>
                <div className="socials">
                  <span>Kawthar Mohamud</span>
                  <div className='socials-icons'>
                    <a href="https://www.linkedin.com/in/kawthar-mohamud" target="_blank" ><i class="fa-brands fa-linkedin" style={{ color: "#f00b51", }}></i></a>
                    <a href="https://github.com/7kthr7" target="_blank"><i class="fab fa-github" style={{ color: "#f00b51", }}></i></a>
                    <a href="https://7kthr7.github.io/" target="_blank"><i class="fa-solid fa-book" FontAwesomeIcon style={{ color: "#f00b51", }}></i></a>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </div>
  );
}

export default ProfileButton;
