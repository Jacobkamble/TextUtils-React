import PropTypes from "prop-types";
import { Link } from "react-router-dom"

function Navbar(props) {
  return (
    <>
      <nav className={`navbar   navbar-expand-lg  ${props.mode}`}>
        <div className=" container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === "navbar-light bg-light" ? "dark" : "light"}`}>
              <input className="mx-1 form-check-input" onClick={props.handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  nav1: PropTypes.string,
  nav2: PropTypes.string,
  home: PropTypes.string,
};

Navbar.defaultProps = {
  title: "deafault title",
  nav1: "navbar-dark",
  nav2: "bg-dark",
  home: "default home",
};
