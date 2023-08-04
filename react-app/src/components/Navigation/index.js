import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OrderCartModal from '../Orders/OrderCartModal'
import OpenModalButton from '../OpenModalButton';
import CuisineList from '../AllCuisines';
import './Navigation.css';
import SearchBar from '../Search/searchBar';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (

		<ul >

			{isLoaded && (
				<div className='nav-bar'>
					<ProfileButton user={sessionUser} />

					{sessionUser ? (
						<div>
							<div className='nav-bar'>
							<NavLink exact to="/">Home</NavLink>

							<OpenModalButton
								buttonText={"Order Cart"}
								modalComponent={<OrderCartModal user={sessionUser} />}
							/>
							</div>
							<SearchBar></SearchBar>

							<CuisineList />
						</div>) : ("")}
				</div>
			)}
		</ul>
	);
}

export default Navigation;
