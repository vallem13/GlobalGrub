import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'

import { setUser, editUser } from "../../../store/session";



const EditUserAccount = ({ userId }) => {

    const dispatch = useDispatch()

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

        if (!country) {
            errors.country = "Country is required";
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
        e.preventDefault()
        setHasSubmitted(true)


        const updatedUser = {
            address,
            city,
            state,
            zipcode,
            firstName,
            lastName,
            username,
            email,
            phoneNumber
        }

        if (!Object.values(errors).length) {
            const editUser = await dispatch(editUser(updatedUser, user.id))

            if(updatedUser.errors) {
                setErrors(updatedUser.errors)
            } else {
                await history.push(`/users/${userId}/profile`)
            }
        }
        await dispatch(setUser)

    }

    return (
        <form onSubmit={handleSubmit}>

        </form>
    )

}

export default EditUserAccount