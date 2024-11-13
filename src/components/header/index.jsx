import React, { useState, useEffect } from "react";

export const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
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
        Your<span>logo</span>
      </a>

      <i className="bx bx-menu" id="menu-icon" onClick={toggleNavbar}></i>

      <nav className={`navbar ${isNavbarOpen ? "open" : ""}`}>
        <a href="#home" className="active">Веб сайт</a>
        <a href="#roadmap">Road map</a>
        <a href="#faq">FAQ</a>
        <a href="#analytics">Цифри</a>
        <a href="#form">Повідомити про корупцію</a>
      </nav>
    </header>
  );
};
