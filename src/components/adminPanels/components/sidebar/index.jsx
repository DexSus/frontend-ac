import React, { useState } from "react";
import logo from "./images/logo-black.png";

export const SideBar = ({ onSelectPanel }) => { 
    const [activeItem, setActiveItem] = useState("#Dashboard"); 

    const handleNavClick = (id) => {
        setActiveItem(id);
        onSelectPanel(id); 
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
                            <i className='bx bxs-dashboard'></i>Аналітика
                        </a>
                    </li>
                    <li>
                        <a 
                            className={`nav-btn ${activeItem === "#AddCase" ? "active" : ""}`} 
                            href="#AddCase" 
                            onClick={() => handleNavClick("#AddCase")}
                        >
                            <i className='bx bxs-add-to-queue'></i>Переглянути
                        </a>
                    </li>
                    
                    <li>
                        <a 
                            className={`nav-btn ${activeItem === "#Account" ? "active" : ""}`} 
                            href="#Account" 
                            onClick={() => handleNavClick("#Account")}
                        >
                            <i className='bx bx-user'></i>Акаунт
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
