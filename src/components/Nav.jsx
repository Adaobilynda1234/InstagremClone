import React from "react";
import instragramLogo from "../assets/instagram.png";

const Nav = () => {
  return (
    <nav>
      <button className="logo">
        <img src={instragramLogo} alt="logo" />
      </button>
      <input type="text" className="search" placeholder="search" />
      <span className="nav-links">
        <button>
          <i className="fas fa-home" />
        </button>
        <button>
          <i className="far fa-comment-alt" />
        </button>
        <button>
          <i className="far fa-compass" />
        </button>
        <button>
          <i className="far fa-heart" />
        </button>
      </span>
    </nav>
  );
};

export default Nav;
