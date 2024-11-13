import React, { useEffect, useState } from "react";

export const Frame = ({text = "Кількість повідомлень за сьогодні:",  count = 54 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 300); 
    }, []);

    return (
        <div className={`frame-container ${isVisible ? "visible" : ""}`}>
            <div className="data-box">
                <h2>{text}</h2>
                <span className="count">{count}</span>
            </div>
        </div>
    );
};
