import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Splash.css";

function SplashPage() {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/home" />;

  return (
    <div className="splash-wrapper">
        <div className="splash-text-wrapper">
            <h1 className="splash-greeting-text">Order food to your door</h1>
        </div>
    </div>
  );
}

export default SplashPage;
