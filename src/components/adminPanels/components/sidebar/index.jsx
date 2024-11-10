import React, { useState } from "react";
import logo from "./images/logo.png";

export const SideBar = ({ onSelectPanel }) => { // Додаємо onSelectPanel як пропс
    const [activeItem, setActiveItem] = useState("#Dashboard"); 

    const handleNavClick = (id) => {
        setActiveItem(id);
        onSelectPanel(id); // Оновлюємо вибір у AdminPanels
    };

    return (
        <aside className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="text">Адмін панель</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <a 
                            className={`nav-btn ${activeItem === "#Dashboard" ? "active" : ""}`} 
                            href="#Dashboard" 
                            onClick={() => handleNavClick("#Dashboard")}
                        >
                            <i className='bx bxs-dashboard'></i>Dashboard
                        </a>
                    </li>
                    <li>
                        <a 
                            className={`nav-btn ${activeItem === "#AddCase" ? "active" : ""}`} 
                            href="#AddCase" 
                            onClick={() => handleNavClick("#AddCase")}
                        >
                            <i className='bx bxs-add-to-queue'></i>Add Case
                        </a>
                    </li>
                    <li>
                        <a 
                            className={`nav-btn ${activeItem === "#Cabinet" ? "active" : ""}`} 
                            href="#Cabinet" 
                            onClick={() => handleNavClick("#Cabinet")}
                        >
                            <i className='bx bx-cabinet'></i>Cabinet
                        </a>
                    </li>
                    <li>
                        <a 
                            className={`nav-btn ${activeItem === "#Account" ? "active" : ""}`} 
                            href="#Account" 
                            onClick={() => handleNavClick("#Account")}
                        >
                            <i className='bx bx-user'></i>User Account
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
