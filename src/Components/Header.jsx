import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header-site">
      <div className="content-wrapper">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/boxshadow">Box Shadow</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
