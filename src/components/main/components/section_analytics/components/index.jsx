import React from "react";

export const Frame = ( { sourth } ) => {

    return (
        <div className="frame-container">
            <iframe 
                src={sourth} 
                height="500" 
                width="500" 
                frameborder="0"
                title="Dash board">
            </iframe>
        </div>
    );
}