import "./header.styles.css";
import { LOGO } from "../../assets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SideBar from "../sidebar/sidebar.component";
const Header = () => {
  const [windowDimension, setWindowDimension] = useState(null);
  const [ showSideBar, setSideBar ] = useState(false);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;
  const toggleSideBar = () => {
    setSideBar(!showSideBar)
  }
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={LOGO} className="logo" alt="" />
        </Link>
      </div>
      { !isMobile ? (
        <>
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
        </>
      ) : (
        <div>
          <img
            src="https://img.icons8.com/external-others-bomsymbols-/91/000000/external-hamberger-flat-general-office-others-bomsymbols-.png"
            alt=""
            height="20px"
            onClick={toggleSideBar}
          />
          <SideBar display={true} />
        </div>
      )}
    </header>
  );
};
export default Header;
