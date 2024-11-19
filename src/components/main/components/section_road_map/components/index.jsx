import React from "react";

export const TimeLineItem = ( { number, title, subTitle } ) => {

    return (
        <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{ number }</div>
            <div className="timeline-content">
                <h3>{ title }</h3>
                <p>{ subTitle }</p>
            </div>
        </div>
    );
}