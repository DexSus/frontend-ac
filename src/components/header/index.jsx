import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">
        Your<span>logo</span>
      </a>

      <i class='bx bx-menu' id="menu-icon"></i>

      <nav className="navbar">
        <a href="#home" className="active">Веб сайт</a>
        <a href="#roadmap">Road map</a>
        <a href="#faq">FAQ</a>
        <a href="#data">Аналітика</a>
        <a href="#form">Подати заявку</a>
      </nav>
    </header>
  );
};
