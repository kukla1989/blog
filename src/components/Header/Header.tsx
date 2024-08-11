import React from "react";
import LogoSVG from "../../imgs/LogoSVG/LogoSVG";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <LogoSVG />
        <p className="header__logo-name">kukla blog</p>
      </div>

      <nav className="header__nav">
        <li className="header__nav-item">
          <a href="/main" className="header__link">main</a>
        </li>

        <li className="header__nav-item">
          <a href="/blog" className="header__link">blog</a>
        </li>

        <li className="header__nav-item">
          <a href="/newsLetter" className="header__link">newsLetter</a>
        </li>
      </nav>
    </header>
  );
};

export default Header;
