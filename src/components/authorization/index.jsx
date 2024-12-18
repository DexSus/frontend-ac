import React, { useState } from 'react';
import DiaPng from './images/dia.png';
import BankIDPng from './images/bankID.png';
import QRCodeBankID from './images/qrcode_bankid.png';
import QRCodeDiia from './images/qrcode_dia.png';

export const AuthorizationForm = ( { QRCodeDia } ) => {
    const [selectedQRCode, setSelectedQRCode] = useState(null);

    const handleLogoClick = (qrCode) => {
        setSelectedQRCode(qrCode);
    };

    return (
        <div className="auth-container">
            <div className="content">
                <h1>Оберіть спосіб авторизації</h1>
                <div className={`qr-code ${selectedQRCode ? 'show' : ''}`}>
                    {selectedQRCode && <img src={selectedQRCode} alt="QR Code" />}
                </div>
                <div className="img-container">
                    <img 
                        className='logo' 
                        src={DiaPng} 
                        alt="Дія" 
                        onClick={() => handleLogoClick(QRCodeDiia)} 
                    />
                    <img 
                        className='logo' 
                        src={BankIDPng} 
                        alt="BankID" 
                        onClick={() => handleLogoClick(QRCodeBankID)} 
                    />
                </div>
            </div>
        </div>
    );
};
