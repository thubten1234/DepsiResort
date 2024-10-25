import "./App.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              Home
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
              Services
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              About Us
            </Link>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <br />
        <div className="social">
          <a href="#">
            <i className="icon bi-instagram"></i>
          </a>
          <a href="#">
            <i className="icon bi-whatsapp"></i>
          </a>
          <a href="#">
            <i className="icon bi-twitter"></i>
          </a>
          <a href="#">
            <i className=" icon bi-facebook"></i>
          </a>
        </div>

        <p className="copyright">Depsi Resort © 2024</p>
      </footer>
    </div>
  );
}

export default Footer;
