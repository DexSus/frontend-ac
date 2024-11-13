import React, { useEffect, useState } from "react";
import { AuthorizationForm } from "../../components/authorization/index";
import { fetchImage } from "../../api/api.js";
import { useNavigate } from "react-router-dom"; 
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export const SingInPage = () => {
    const [imageSrc, setImageSrc] = useState(null);
    
    const navigate = useNavigate(); 

    useEffect(() => {
        const loadImage = async () => {
            try {
                const base64Image = await fetchImage();
                setImageSrc(`data:image/jpeg;base64,${base64Image}`);
            } catch (error) {
                console.error("Failed to load image:", error);
            }
        };

        loadImage();

        socket.on('redirect', () => {
            window.location.href = "/adminPanels"; 
        });
        
    }, [navigate]);

    return (
        <div>
            {imageSrc ? <AuthorizationForm QRCodeDia={imageSrc}/> : "Завантаження..."}
        </div>
    );
};
