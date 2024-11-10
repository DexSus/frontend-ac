import React from "react";

export const DashboardCard = ( {title, count, type} ) => {

    return (

        <div className={`card ${type}`}>
            <h1>{title}</h1>
            <p>{count}</p>
        </div>
    );
}