import React from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export const AcceptedPage = () => {
    const handleAccept = () => {
        socket.emit('userAccepted'); 
    };

  return (
    <div className="accepted-container">
      <div className="content">
        <h1>Підтвердження обробки персональних даних</h1>
        <p>
          Шановний користувачу, для подальшого використання нашого сайту ви
          повинні погодитись з обробкою ваших персональних даних.
        </p>
        <p>
          Вся надана вами інформація буде використовуватися відповідно до нашої
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            {" "}
            Політики конфіденційності
          </a>
          .
        </p>
        <p>У разі не згоди - ІДИ НАХУЙ</p>
        <div className="buttons-container">
          <button
            className="accept-button"
            onClick={handleAccept}
          >
            Погоджуюсь
          </button>
          <button className="decline-button">Відмовляюсь</button>
        </div>
      </div>
    </div>
  );
};
