import React, { useState } from "react";
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

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	if (password === confirmPassword) {
	// 		const data = await dispatch(signUp(username, email, password, firstName, lastName, address, city, state, zipcode, phoneNumber));
	// 		if (data) {
	// 			setErrors(data);
	// 		} else {
	// 			closeModal();
	// 		}
	// 	} else {
	// 		setErrors([
	// 			"Confirm Password field must be the same as the Password field",
	// 		]);
	// 	}
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
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label>
					First Name:
					<input
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</label>
				<label>
					Last Name:
					<input
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</label>
				<label>
					Username:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				<label>
					Email:
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label>
					Address:
					<input
						type="text"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
					/>
				</label>
				<label>
					City:
					<input
						type="text"
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
					/>
				</label>
				<label>
					State:
					<input
						type="text"
						value={state}
						onChange={(e) => setState(e.target.value)}
						required
					/>
				</label>
				<label>
					Zipcode:
					<input
						type="text"
						value={zipcode}
						onChange={(e) => setZipcode(e.target.value)}
						required
					/>
				</label>
				<label>
					Phone Number:
					<input
						type="text"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						required
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<label>
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default SignupFormModal;
