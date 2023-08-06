// User Profile Page

import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DeleteUserAccount from "./DeleteUserModal";
import EditUserAccount from "./EditUserModal";
import OpenModalButton from "../OpenModalButton";

const UserProfile = () => {
    const user = useSelector(state => state.session.user);
    const history = useHistory();


    if (!user) return (<h1>LOADING...</h1>)

    return (
        <div className='manage-profile-container'>
            <h1> {user.username} Account Info</h1>
            <h3>Name: </h3>
            <p> {user.firstName}  {user.lastName}</p>
            <h3>Phone Number:</h3>
            <p> {user.phoneNumber} </p>
            <h3>Email:</h3>
            <p> {user.email} </p>
            <h3>Address:</h3>
            <p> {user.address} </p>
            <h3>City:</h3>
            <p> {user.city} </p>
            <h3>State:</h3>
            <p> {user.state} </p>
            <h3>Zipcode:</h3>
            <p> {user.zipcode} </p>

            <div className='delete-edit-button'>

            <OpenModalButton
                buttonText={"Delete Account"}
                modalComponent={<DeleteUserAccount userId={user.id}/>}
            />
            <OpenModalButton
                buttonText={"Edit Account"}
                modalComponent={<EditUserAccount userId={user.id}/>}
            />

            </div>

        </div>
    )

}





export default UserProfile
