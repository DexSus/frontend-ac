import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">
        Your<span>logo</span>
      </a>

      <i class='bx bx-menu' id="menu-icon"></i>

      <nav className="navbar">
        <a href="#Home" className="active">Веб сайт</a>
        <a href="#FAQ">FAQ</a>
        <a href="#RoadMap">Road map</a>
        <a href="#Data">Аналітика</a>
        <a href="#Form">Подати заявку</a>
      </nav>
    </header>
  );
};
