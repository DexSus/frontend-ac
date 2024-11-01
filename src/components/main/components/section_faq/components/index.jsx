import React from "react";

export const QuestionBox = ( { title, text } ) => {

    return (
        <div className="question-box">
            <div className="question-info">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
}