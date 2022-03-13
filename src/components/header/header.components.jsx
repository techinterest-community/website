import "./header.styles.css";
import { LOGO } from "../../assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
            <img src={LOGO} className="logo" alt="" />
        </Link>
      </div>
      <div className="navs">
        <ul>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="member">
        <Link to="/join">
            <p>Join &#8594;</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
