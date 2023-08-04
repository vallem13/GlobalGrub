import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OrderCartModal from '../Orders/OrderCartModal'
import OpenModalButton from '../OpenModalButton';
import CuisineList from '../AllCuisines';
import './Navigation.css';
import SearchBar from '../Search/searchBar';
import logo from './Logo/globalgrub.png'

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory();

	const handleLogoClick = () => {
		history.push('/');
	};

	return (
		<ul>
			{isLoaded && (
				<div>
					<ProfileButton user={sessionUser} />

					{sessionUser ? (
						<div>

							<NavLink exact to="/" activeClassName="active-link" onClick={handleLogoClick}>
								<img src={logo} className="logo" />
							</NavLink>

							<OpenModalButton

								buttonText={"Cart"}
								modalComponent={<OrderCartModal user={sessionUser} />}
							/>

							<CuisineList />
						</div>) : ("")}
				</div>
			)}
		</ul>
	);
}

export default Navigation;
