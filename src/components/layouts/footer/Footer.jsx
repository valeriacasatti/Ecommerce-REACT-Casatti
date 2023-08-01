import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  let userRol = "admin";

  return (
    <>
      <footer>
        <ul>
          <li className="ulTitle">navigate</li>
          <li>home</li>
          <li>catalog</li>
          <li>cart</li>
          {userRol === "admin" && (
            <Link to="dashboard" className="dashboard">
              <li>admin</li>
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
