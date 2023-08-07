import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";



function SignupFormModal() {
	const dispatch = useDispatch();
	const { closeModal } = useModal();
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zipcode, setZipcode] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const [frontendErrors, setFrontendErrors] = useState({})
	
	useEffect(() => {
		const frontendErrors = {}
		if (address.length < 2) {
			frontendErrors.address = "Address is required"
		}
		if (city.length < 2) {
			frontendErrors.city = "City is required"
		}
		if (state.length < 2) {
			frontendErrors.state = "State is required"
		}
		if (zipcode.length < 2) {
			frontendErrors.zipcode = "Zipcode is required"
		}
		if (firstName.length < 2) {
			frontendErrors.firstName = "First Name is required"
		}
		if (lastName.length < 2) {
			frontendErrors.lastName = "Last Name is required"
		}
		if (username.length < 4) {
			frontendErrors.username = "Username must be at least 4 characters"
		}
		if (email.length < 2) {
			frontendErrors.email = "Email is required"
		}
		if (phoneNumber.length < 4) {
			frontendErrors.phoneNumber = "Phone number is required"
		}
		if (password.length < 6) {
			frontendErrors.password = "Password must be at least 6 characters"
		}
		if (confirmPassword.length < 2) {
			frontendErrors.confirmPassword = "Confirm Password is required"
		}
		setFrontendErrors(frontendErrors)
	}, [email, username, firstName, lastName, confirmPassword, password, address, city, state, zipcode, phoneNumber])
	// const handleSubmit = async (e) => {
	//  e.preventDefault();
	//  if (password === confirmPassword) {
	//    const data = await dispatch(signUp(username, email, password, firstName, lastName, address, city, state, zipcode, phoneNumber));
	//    if (data) {
	//      setErrors(data);
	//    } else {
	//      closeModal();
	//    }
	//  } else {
	//    setErrors([
	//      "Confirm Password field must be the same as the Password field",
	//    ]);
	//  }
	// };
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(
				signUp(
					email,
					phoneNumber,
					firstName,
					username,
					lastName,
					address,
					city,
					state,
					zipcode,
					password
				)
			);
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};
	
	
	return (
		<>
			<h1 className='sign-up'>Sign Up</h1>
			<form className='sign-up-form-container' onSubmit={handleSubmit}>
				<label className='sign-up-label'>
					First Name:
					<input
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</label>
				{frontendErrors.firstName && firstName.length > 0 && <p className='on-submit-errors'>{frontendErrors.firstName}</p>}
				<label className='sign-up-label'>
					Last Name:
					<input
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</label >
				{frontendErrors.lastName && lastName.length > 0 && <p className='on-submit-errors'>{frontendErrors.lastName}</p>}
				<label className='sign-up-label'>
					Username:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				{frontendErrors.username && username.length > 0 && <p className='on-submit-errors'>{frontendErrors.username}</p>}
				<label className='sign-up-label'>
					Email:
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				{frontendErrors.email && email.length > 0 && <p className='on-submit-errors'>{frontendErrors.email}</p>}
				<label className='sign-up-label'>
					Address:
					<input
						type="text"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
					/>
				</label>
				{frontendErrors.address && address.length > 0 && <p className='on-submit-errors'>{frontendErrors.address}</p>}
				<label className='sign-up-label'>
					City:
					<input
						type="text"
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
					/>
				</label>
				{frontendErrors.city && city.length > 0 && <p className='on-submit-errors'>{frontendErrors.city}</p>}
				<label className='sign-up-label'>
					State:
					<input
						type="text"
						value={state}
						onChange={(e) => setState(e.target.value)}
						required
					/>
				</label>
				{frontendErrors.state && state.length > 0 && <p className='on-submit-errors'>{frontendErrors.state}</p>}
				<label className='sign-up-label'>
					Zipcode:
					<input
						type="text"
						value={zipcode}
						onChange={(e) => setZipcode(e.target.value)}
						required
					/>
				</label>
				{frontendErrors.zipcode && zipcode.length > 0 && <p className='on-submit-errors'>{frontendErrors.zipcode}</p>}
				<label className='sign-up-label'>
					Phone Number:
					<input
						type="text"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						required
					/>
				</label>
				{frontendErrors.phoneNumber && phoneNumber.length > 0 && <p className='on-submit-errors'>{frontendErrors.phoneNumber}</p>}
				<label className='sign-up-label'>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				{frontendErrors.password && password.length > 0 && <p className='on-submit-errors'>{frontendErrors.password}</p>}
				<label className='sign-up-label'>
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				{frontendErrors.confirmPassword && confirmPassword.length > 0 && <p className='on-submit-errors'>{frontendErrors.confirmPassword}</p>}
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<button type="submit" className='signup-button'>Sign Up</button>
			</form>
		</>
	);
}
export default SignupFormModal;