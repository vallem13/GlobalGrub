import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Splash.css";
import logo from './Logo/globalgrub.png'

function SplashPage() {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/home" />;

  return (
    <div className="splash-wrapper">
        <div className="splash-text-wrapper">
        <img src={logo} className="home-page-logo" />
            <h1 className="splash-greeting-text">Order food to your door</h1>
        </div>
    </div>
  );
}

export default SplashPage;
