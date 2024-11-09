import React from "react";

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="social">
                <a href="#Telegram"><i class='bx bxl-telegram' ></i></a>
                <a href="#WhatsApp"><i class='bx bxl-whatsapp' ></i></a>
                <a href="#Signal"><i class='bx bx-message-rounded' ></i></a>
                <a href="#Viber"><i class='bx bx-phone-call'></i></a>
            </div>

            <ul className="list">
                <li><a href="#home">Веб сайт</a></li>
                <li><a href="#roadmap">Road map</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#analytics">Аналітика</a></li>
                <li><a href="#form">Подати заявку</a></li>
            </ul>

            <p className="copyright">
                © JAM TEAM | All Rights Reserved
            </p>
        </footer>
    );
}