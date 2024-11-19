import React, { useState, useEffect } from "react";
import logo from './images/logo.png';

export const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsNavbarOpen(false); // закриває навігацію на мобільних при виборі пункту
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 895) {
        setIsNavbarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <a href="#home" className="logo">
        <img className="logo-img" src={logo} alt="logo" srcSet="" />
        <span>Cats</span>
      </a>

      <i className="bx bx-menu" id="menu-icon" onClick={toggleNavbar}></i>

      <nav className={`navbar ${isNavbarOpen ? "open" : ""}`}>
        <a href="#home" className={activeLink === "#home" ? "active" : ""} onClick={() => handleLinkClick("#home")}>Веб сайт</a>
        <a href="#roadmap" className={activeLink === "#roadmap" ? "active" : ""} onClick={() => handleLinkClick("#roadmap")}> Алгоритм </a>
        <a href="#faq" className={activeLink === "#faq" ? "active" : ""} onClick={() => handleLinkClick("#faq")}> FAQ </a>
        <a href="#analytics" className={activeLink === "#analytics" ? "active" : ""} onClick={() => handleLinkClick("#analytics")} >Цифри</a>
        <a href="#form" className={activeLink === "#form" ? "active" : ""} onClick={() => handleLinkClick("#form")}> Повідомити про корупцію</a>
        <a href="/login" className={activeLink === "/login" ? "active" : ""} onClick={() => handleLinkClick("/login")}> Увійти </a>
      </nav>
    </header>
  );
};
