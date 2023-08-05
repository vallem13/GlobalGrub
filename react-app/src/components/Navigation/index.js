import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OrderCartModal from '../Orders/OrderCartModal'
import OpenModalButton from '../OpenModalButton';
import CuisineList from '../AllCuisines';
import './Navigation.css';
import logo from './Logo/globalgrub.png'

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory();
	const carts = useSelector(state => state.cart.cart);

	const [itemCount, setItemCount] = useState(0);

	useEffect(() => {
		let cartItems = 0;
		for (const cart of Object.values(carts)) {
			cartItems += Object.values(cart).length;
		}
		setItemCount(cartItems);
	}, [carts]);

	const handleLogoClick = () => {
		history.push('/');
	};

	return (
		<ul>
			{isLoaded && (
				<div >
					<ProfileButton user={sessionUser} />

					{sessionUser ? (
						<div className='logo-cart-nav'>
							<NavLink exact to="/" activeClassName="active-link" onClick={handleLogoClick}>
								<img src={logo} className="logo" />
							</NavLink>

							<div className='cart-icon-wrapper'>
								{itemCount > 0 && <p className='cart-icon-count'>{String(itemCount)}</p>}
								<div className='shopping-cart-button'>
									<OpenModalButton
										buttonText={<><i className="fas fa-shopping-cart" style={{ color: "black" }} /> Cart</>}
										modalComponent={<OrderCartModal user={sessionUser} />}
										buttonClass={"black-button-round"}
									/>
								</div>
							</div>

							<CuisineList />
						</div>
					) : ("")}
				</div>
			)}
		</ul>
	);
}

export default Navigation;
