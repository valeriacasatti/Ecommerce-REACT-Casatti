import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  let userRol = "admin";

  return (
    <>
      <footer>
        <ul>
          <li className="ulTitle">navigate</li>
          <Link to="/">
            <li>home</li>
          </Link>
          <Link to="/catalog">
            <li>catalog</li>
          </Link>
          <Link to="/cart">
            <li>cart</li>
          </Link>
          {userRol === "admin" && (
            <Link to="dashboard" className="dashboard">
              <li>dashboard</li>
            </Link>
          )}
        </ul>
        <ul>
          <li className="ulTitle">assistance</li>
          <li>shipping & returns</li>
          <li>privacy police</li>
          <li>FAQS</li>
        </ul>
        <ul>
          <li className="ulTitle">follow us</li>
          <li>instagram</li>
          <li>pinterest</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
