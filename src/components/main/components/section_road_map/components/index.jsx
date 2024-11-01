import React from "react";

export const TimeLineItem = ( { number } ) => {

    return (
        <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{ number }</div>
            <div className="timeline-content">
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Alias obcaecati porro incidunt aliquam voluptatibus neque esse 
                    odio veniam velit odit, doloribus sapiente at aspernatur 
                    similique pariatur? Saepe repellendus temporibus reprehenderit.
                </p>
            </div>
        </div>
    );
}