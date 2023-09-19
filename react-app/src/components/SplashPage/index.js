import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Splash.css";
import logo from './Logo/globalgrub.png'

function SplashPage() {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/home" />;

  return (
    <div className="wrapper">
      <div className="content">
        <div className="splash-text-wrapper">
          <img src={logo} className="home-page-logo" alt="Logo" />
          <h1 className="splash-greeting-text">Order food to your door</h1>
        </div>
      </div>

      <div className="created-by-splash">

        <div className="single-socials">
          <span>Alexandra Valle</span>
          <div className='socials-icons'>
            <a href="https://www.linkedin.com/in/alexandra-valle-m" target="_blank" ><i class="fa-brands fa-linkedin" style={{ color: "#f00b51", }}></i></a>
            <a href="https://github.com/vallem13" target="_blank"><i class="fab fa-github" style={{ color: "#f00b51", }}></i></a>
            <a href="https://vallem13.github.io/" target="_blank"><i class="fa-solid fa-book" FontAwesomeIcon style={{ color: "#f00b51", }}></i></a>
          </div>
        </div>
        <div className="single-socials">
          <span>Makayla Jameson</span>
          <div className='socials-icons'>
            <a href="https://www.linkedin.com/in/makayla-jameson" target="_blank" ><i class="fa-brands fa-linkedin" style={{ color: "#f00b51", }}></i></a>
            <a href="https://github.com/makaylajameson" target="_blank"><i class="fab fa-github" style={{ color: "#f00b51", }}></i></a>
            <a href="https://makaylajameson.github.io/" target="_blank"><i class="fa-solid fa-book" FontAwesomeIcon style={{ color: "#f00b51", }}></i></a>
          </div>
        </div>
        <div className="single-socials">
          <span>Natalia Ramirez</span>
          <div className='socials-icons'>
            <a href="https://www.linkedin.com/in/natalia-ramirez-750817151" target="_blank" ><i class="fa-brands fa-linkedin" style={{ color: "#f00b51", }}></i></a>
            <a href="https://github.com/Natalia3ramirez" target="_blank"><i class="fab fa-github" style={{ color: "#f00b51", }}></i></a>
            <a href="https://Natalia3ramirez.github.io/" target="_blank"><i class="fa-solid fa-book" FontAwesomeIcon style={{ color: "#f00b51", }}></i></a>
          </div>
        </div>
        <div className="single-socials">
          <span>Kawthar Mohamud</span>
          <div className='socials-icons'>
            <a href="https://www.linkedin.com/in/kawthar-mohamud" target="_blank" ><i class="fa-brands fa-linkedin" style={{ color: "#f00b51", }}></i></a>
            <a href="https://github.com/7kthr7" target="_blank"><i class="fab fa-github" style={{ color: "#f00b51", }}></i></a>
            <a href="https://7kthr7.github.io/" target="_blank"><i class="fa-solid fa-book" FontAwesomeIcon style={{ color: "#f00b51", }}></i></a>
          </div>
        </div>
        </div>

    </div>
  );
}

export default SplashPage;
