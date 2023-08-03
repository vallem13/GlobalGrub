import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import UserProfile from "./components/ManageProfile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomePage from "./components/HomePage";
import SingleRestaurantDetail from "./components/SingleRestaurantDetail"
// import GetOrder from "./components/Orders/getOrder";
import StartShoppingButton from "./components/Orders/CreateCart";
import GetOrder from "./components/Orders/getOrder";
import OrderForm from "./components/Orders/AddToCart";
import CuisineList from "./components/CuisineList";
import SingleCuisine from "./components/CuisineType";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/home">
          <ProtectedRoute>
            <HomePage />
            </ProtectedRoute>
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/profile">
            <ProtectedRoute>
            <UserProfile />
            </ProtectedRoute>
          </Route>
          <Route path="/user_orders">
            <ProtectedRoute>
            <GetOrder />
            </ProtectedRoute>
          </Route>
          <Route path="/OrderForm">
            <ProtectedRoute>
            <OrderForm />
            </ProtectedRoute>
          </Route>
          
          <Route path="/cuisineList">
            
            <CuisineList />
            
          </Route>

          <Route path="/cuisine/:id">
              <ProtectedRoute>
                <SingleCuisine />
              </ProtectedRoute>
          </Route>

          

          

         
          
          <Route path="/cart/:userId">
            <ProtectedRoute>
            <StartShoppingButton />
            </ProtectedRoute>
          </Route>
        
          <Route path="/restaurant/:restaurantId">
            <ProtectedRoute>
              <SingleRestaurantDetail />
            </ProtectedRoute>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
