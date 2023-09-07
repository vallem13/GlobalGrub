import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import UserProfile from "./components/ManageProfile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomePage from "./components/HomePage";
import SingleRestaurantDetail from "./components/SingleRestaurantDetail"
import SplashPage from "./components/SplashPage";
import GetOrder from "./components/Orders/getOrder";
import StartShoppingButton from "./components/Orders/CreateCart";
import SingleCuisine from "./components/SingleCuisineDetail";
import FilterPrice from "./components/Search/filterPrice";
import SearchBar from './components/Search/searchBar'
import CreateRestaurant from './components/Restaurant/CreateRestaurant'
import ManageRestaurants from "./components/ManageRestaurants/ManageRestaurant";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className={location.pathname === "/" ? "site-wrapper splash-page" : "site-wrapper"}>
      <div className={location.pathname === "/" ? "nav-wrapper splash-page" : "nav-wrapper"}>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <SplashPage />
            </Route>
            <Route path="/home">
              <ProtectedRoute>
                <SearchBar />
                {/* <FilterPrice /> */}
                <HomePage />
              </ProtectedRoute>
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/profile">
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            </Route>
            <Route path="/filter">
              <ProtectedRoute>
                <FilterPrice />
              </ProtectedRoute>
            </Route>
            <Route path="/user_orders">
              <ProtectedRoute>
                <GetOrder />
              </ProtectedRoute>
            </Route>
            <Route path="/my_restaurants">
              <ProtectedRoute>
                <ManageRestaurants />
              </ProtectedRoute>
            </Route>
            <Route path="/restaurant/new-restaurant">
            <ProtectedRoute>
              <CreateRestaurant />
            </ProtectedRoute>
          </Route>
            <Route path="/cuisine/:cuisineId">
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
      </div>
    </div>
  );
}

export default App;
