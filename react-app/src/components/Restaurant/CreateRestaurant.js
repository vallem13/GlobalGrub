import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { createRestaurantThunk, getAllRestaurantsThunk } from "../../store/restaurant";
import "./Restaurant.css";

const CreateRestaurant = () => {

    return (
        <div className="create-pin-container">
            <h1>Register Your Restaurant</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">

            </form>
        </div>
    );
};

export default CreateRestaurant;
