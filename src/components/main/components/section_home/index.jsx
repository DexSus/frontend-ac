import React from "react";

export const HomeSection = () => {

    return(
        <section className="home" id="home">
            <div className="home-content">
                <h1>CATS</h1>
                <h3 className="text-animation">Corruption Assessment and Transparency System</h3>
                <p>Департамент з питань запобігання та виявлення корупції Міністерства оборони України є ключовим органом, спрямованим на забезпечення прозорості та підзвітності в оборонному секторі. Наша місія – створити ефективні механізми боротьби з корупцією, забезпечити моніторинг і контроль за дотриманням антикорупційних стандартів, а також надати можливість громадянам повідомляти про випадки корупційної діяльності.
                </p>

                <div className="social-icons">
                    <a href="https://t.me/Aisher36" target="blank"><i className='bx bxl-telegram' ></i></a>
                    <a href="https://wa.me/380685676800" target="blank"><i className='bx bxl-whatsapp' ></i></a>
                    <a href="#Signal"><i className='bx bx-message-rounded' ></i></a>
                    <a href="#Viber"><i className='bx bx-phone-call'></i></a>
                </div>

                <div className="btn-group">
                    <a href="#form" className="btn">Повідомити про корупцію</a>
                </div>
            </div>
            
        </section>
    );
}