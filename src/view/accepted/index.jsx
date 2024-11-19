import React from "react";

export const AcceptedPage = () => {

    return (
        <div className="accepted-container">
            <div className="content">
                <h1>Підтвердження обробки персональних даних</h1>
                <p>Шановний користувачу, для подальшого використання нашого сайту ви повинні погодитись з обробкою ваших персональних даних.</p>
                <p>Вся надана вами інформація буде використовуватися відповідно до нашої
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer"> Політики конфіденційності</a>.
                </p>
                <div className="buttons-container">
                    <button className="accept-button">Погоджуюсь</button>
                    <button className="decline-button">Відмовляюсь</button>
                </div>
            </div>
        </div>
    );
};
