import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import UserProfile from "./components/ManageProfile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import HomePage from "./components/HomePage";
import SingleRestaurantDetail from "./components/SingleRestaurantDetail"
import SplashPage from "./components/SplashPage";

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
            {/* <Route path="/login" >
              <LoginFormPage />
            </Route> */}
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/profile">
              <ProtectedRoute>
                <UserProfile />
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
