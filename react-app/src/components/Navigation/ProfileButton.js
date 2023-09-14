// ProfileButton.js

import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as sessionActions from '../../store/session';
import UserProfile from "../ManageProfile";
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


            <p className="custom-paragraph">
              <button onClick={handleManageAccount} className="manage-account-button" type="submit">Manage Account</button>
            </p>

            <p className="custom-paragraph">
              <button onClick={handleOrders} className="orders-button" type="submit">Orders</button>
            </p>

            <p className="custom-paragraph">
              <button onClick={handleLogout} className="logout-button">Log Out</button>
            </p>

            <p className="custom-paragraph">
              <button onClick={handleManageBusinesses} className="Manage your Businesses">Manage your Businesses</button>
            </p>

            <p className="custom-paragraph">
              <button onClick={handleCreateRestaurant} className="Add your Restaurant">Add your Restaurant</button>
            </p>

            <p className="created-by">
              Made with love, laughs & tears: Alex Valle, Natalia Ramirez, Kawthar Mohamud, Makayla Jameson
              <i class="fa-solid fa-heart"></i>
            </p>

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
