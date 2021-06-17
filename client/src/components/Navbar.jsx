import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHeandler = (e) => {
    e.preventDefault();
    auth.logout();
    history.push("/");
  };
  return (
    <nav>
      <div className="nav-wrapper" style={{ padding: "0 20px" }}>
        <span className="brand-logo left">Скорочення посилань</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Створити</NavLink>
          </li>
          <li>
            <NavLink to="/links">Посилання</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHeandler}>
              Вийти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
