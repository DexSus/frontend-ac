import React from "react";

export const Message = ({ data, onClick }) => {
    const maxTextLength = 100;
    const truncatedDetails = data.violationDetails.length > maxTextLength 
        ? data.violationDetails.slice(0, maxTextLength) + "..."
        : data.violationDetails;

    return (
        <div className="message" onClick={onClick}>
            <p className="message-organization"><strong>Організація:</strong> {data.organization}</p>
            <p className="message-person"><strong>ФІО особи:</strong> {data.personName}</p>
            <p className="message-source"><strong>Звідки стало відомо:</strong> {data.source}</p>
            <p className="message-location"><strong>Місце правопорушення:</strong> {data.location}</p>
            <p className="message-details"><strong>Деталі правопорушення:</strong> {truncatedDetails}</p>
            <span className="message-date">
                <strong>Дата:</strong> {new Date(data.date).toLocaleDateString("uk-UA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                })}
            </span>
        </div>
    );
};
