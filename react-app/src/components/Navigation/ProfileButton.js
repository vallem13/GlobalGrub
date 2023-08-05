import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as sessionActions from '../../store/session';
import UserProfile from "../ManageProfile";


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef(null);
  const history = useHistory()

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
    closeMenu();
    history.push('/')

  };

  const handleManageAccount = async (e) => {
    e.preventDefault();
    closeMenu();
    history.push('/profile')
  }

  const handleOrders = async (e) => {
    e.preventDefault();
    closeMenu();
    history.push('/user_orders')
  }

  const closeMenu = () => setShowMenu(false);
  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <div className="profile-button">
      <button onClick={openMenu}>
        {/* <i className="fas fa-user-circle" /> */}
        <i className="fas fa-bars" style={{ color: "#000000" }} />

      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <p>Hi, {user.firstName}</p>
            <p>{user.email}</p>
            <p>
              <button onClick={handleLogout}>Log Out</button>
            </p>
            <p>
              <button onClick={handleManageAccount} type="submit">Manage Account</button>
            </p>
            <button onClick={handleOrders} type="submit">Orders</button>
            <p>
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
