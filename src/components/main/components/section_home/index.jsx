import React from "react";

import HomePageImg  from './images/home-page.png';

export const HomeSection = () => {

    return(
        <section className="home" id="home">
            <div className="home-content">
                <h1>Lorem ipsum</h1>
                <h3 className="text-animation">Lorem ipsum</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Error deserunt, adipisci, expedita cumque ad dicta soluta quos 
                    praesentium eaque illum quo odio incidunt obcaecati sapiente dolorem. 
                    Debitis et tempore qui?
                </p>

                <div className="social-icons">
                    <a href="#Telegram"><i class='bx bxl-telegram' ></i></a>
                    <a href="#WhatsApp"><i class='bx bxl-whatsapp' ></i></a>
                    <a href="#Signal"><i class='bx bx-message-rounded' ></i></a>
                    <a href="#Viber"><i class='bx bx-phone-call'></i></a>
                </div>

                <div className="btn-group">
                    <a href="#form" className="btn">Повідомити про корупцію</a>
                </div>
            </div>
            
        </section>
    );
}