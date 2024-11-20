import React, { useEffect, useState } from "react";
import { AuthorizationForm } from "../../components/authorization/index";
import { fetchImage } from "../../api/api.js";


export const SingInPage = () => {
    const [imageSrc, setImageSrc] = useState(null);

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

        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                window.location.href = "/adminPanels"; 
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div>
            {/* {imageSrc ? <AuthorizationForm QRCodeDia={imageSrc} /> : "Завантаження..."} */}
            <AuthorizationForm QRCodeDia={imageSrc} /> 
        </div>
    );
};
