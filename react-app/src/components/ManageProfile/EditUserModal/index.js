import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom"
import { editUser } from "../../../store/session"
import '../ManageProfile.css'



const EditUserAccount = ({ userId }) => {

    const dispatch = useDispatch()
    const { closeModal } = useModal();
    const history = useHistory()
    const user = useSelector(state => state.session.user);
    const [address, setAddress] = useState(user.address);
    const [city, setCity] = useState(user.city);
    const [state, setState] = useState(user.state);
    const [zipcode, setZipcode] = useState(user.zipcode);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [frontendErrors, setFrontendErrors] = useState({})

    useEffect(() => {
        const frontendErrors = {}

            if(address.length < 2) {
          frontendErrors.address = "Address is required"
        }
            if(city.length < 2) {
          frontendErrors.city = "City is required"
        }
            if(state.length < 2) {
          frontendErrors.state = "State is required"
        }
            if(zipcode.length < 2) {
          frontendErrors.zipcode = "Zipcode is required"
        }
            if(firstName.length < 2) {
          frontendErrors.firstName = "First Name is required"
        }
            if(lastName.length < 2) {
          frontendErrors.lastName= "Last Name is required"
        }
            if(username.length < 4) {
          frontendErrors.username = "Username must be at least 4 characters"
        }
        if(email.length < 2) {
          frontendErrors.email = "Email is required"
        }
            if(phoneNumber.length < 4) {
          frontendErrors.phoneNumber = "Phone number is required"
        }


        setFrontendErrors(frontendErrors)
      }, [email, username, firstName, lastName, address, city, state, zipcode, phoneNumber])



    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        const updatedUser = {
          email,
          phoneNumber,
          firstName,
          username,
          lastName,
          address,
          city,
          state,
          zipcode,
        };

        try {
          const editedUser = await dispatch(editUser(userId, updatedUser));
        //   console.log('------->', editedUser);

          // Check if there are errors in the response and handle them
          if (editedUser && editedUser.errors) {
            setErrors(editedUser.errors);
          }
        } catch (error) {
          // Handle any other errors that might occur during the API request
          console.error("An error occurred:", error.message);
        }

        await closeModal();
      };



    const submitCancel = () => {
        closeModal()
    };

    return (
        < >
            <h1 className='sign-up'>Edit Account Info</h1>
            <form className='sign-up-form-container' onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.firstName && firstName.length > 0 &&<p className='on-submit-errors'>{frontendErrors.firstName}</p>}
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.lastName && lastName.length > 0 &&<p className='on-submit-errors'>{frontendErrors.lastName}</p>}
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
                {frontendErrors.email && email.length > 0 &&<p className='on-submit-errors'>{frontendErrors.email}</p>}
                <label>
                    Address:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.address && address.length > 0 &&<p className='on-submit-errors'>{frontendErrors.address}</p>}
                <label>
                    City:
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.city && city.length > 0 &&<p className='on-submit-errors'>{frontendErrors.city}</p>}
                <label>
                    State:
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.state && state.length > 0 &&<p className='on-submit-errors'>{frontendErrors.state}</p>}
                <label>
                    Zipcode:
                    <input
                        type="text"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.zipcode && zipcode.length > 0 &&<p className='on-submit-errors'>{frontendErrors.zipcode}</p>}
                <label>
                    Phone Number:
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </label>
                {frontendErrors.phoneNumber && phoneNumber.length > 0 &&<p className='on-submit-errors'>{frontendErrors.phoneNumber}</p>}
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <button type="submit" className='update-account-button'>Update Account</button>
                <button type="submit" onClick={submitCancel}>Cancel</button>
            </form>
        </>
    )

}

export default EditUserAccount
