import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom"
import { editUser, signUp } from "../../../store/session"



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

    useEffect(() => {
        const errors = []
        if (!address) {
            errors.address = "Address is required";
        }
        if (!city) {
            errors.city = "City is required";
        }
        if (!state) {
            errors.state = "State is required";
        }
        if (!zipcode) {
            errors.zipcode = "Zip Code is required";
        }
        if (!firstName) {
            errors.firstName = "First name is required";
        }
        if (!lastName) {
            errors.lastName = "Last name is required";
        }
        if (!username) {
            errors.username = "Username is required";
        }
        if (!email) {
            errors.email = "Email is required";
        }
        if (!phoneNumber) {
            errors.phoneNumber = "Phone number is required";
        }
        setErrors(errors)


    }, [address, city, state, zipcode, firstName, lastName, username, email, phoneNumber])



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
        <div>
            <h1>Edit Account Info</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
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
                <button type="submit">Update Account</button>
                <button type="submit" onClick={submitCancel}>Cancel</button>
            </form>
        </div>
    )

}

export default EditUserAccount
