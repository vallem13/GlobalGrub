import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useHistory,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OrderCartModal from '../Orders/OrderCartModal'
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import CuisineList from '../AllCuisines';
import './Navigation.css';
import logo from './Logo/globalgrub.png'


function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory();
	const [showMenu, setShowMenu] = useState(false);
	const ulRef = useRef(null);
	const carts = useSelector(state => state.cart.cart);
	const [itemCount, setItemCount] = useState(0);
	const closeMenu = () => setShowMenu(false);

	useEffect(() => {
		let cartItems = 0;
		for (const cart of Object.values(carts)) {
			cartItems += Object.values(cart).length;
		}
		setItemCount(cartItems);
	}, [carts]);

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

	const handleLogoClick = () => {
		history.push('/');
	};

	return (
		<>
			{isLoaded && (
				<div className='whole-nav-bar' style={{ borderBottom: ".5px solid #80808028" }}>
					{sessionUser ? (
						<div>
							<div className='profile-logo-cart-nav'>
								<ProfileButton user={sessionUser} />

								<NavLink exact to="/" activeClassName="active-link" onClick={handleLogoClick}>
									<img src={logo} className="logo" />
								</NavLink>
								<div className='cart-icon-wrapper'>
									{itemCount > 0 && <p className='cart-icon-count'>{String(itemCount)}</p>}
									<div className='shopping-cart-button'>
										<OpenModalButton
											buttonText={<div className='style-cart'><i className="fas fa-shopping-cart" style={{ color: "white" }} /> Cart</div>}
											modalComponent={<OrderCartModal user={sessionUser} />}
											buttonClass={"black-button-round"}
										/>
									</div>
								</div>
							</div>
							<CuisineList />
						</div>
					) : (
						<div className='login-signup-modal'>

							<div className='log-in-modal'>

								<OpenModalButton
									buttonText="Log In"
									onItemClick={closeMenu}
									modalComponent={<LoginFormModal />}
								/>
							</div>


							<div className='sign-up-modal'>

								<OpenModalButton
									buttonText="Sign Up"
									onItemClick={closeMenu}
									modalComponent={<SignupFormModal />}
								/>
							</div>

						</div>
					)}
				</div>
			)}
		</>
	);
}

export default Navigation;
