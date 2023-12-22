import React from "react";

import type { ButtonType } from "./Button.type";
import './style.css'

export const Button = ({
    isFilled,
    text,
    color,
    handleClick
}: ButtonType) => {
    return (
        <div 
            onClick={handleClick} 
            style={{
                color: isFilled ? 'white' : color, 
                backgroundColor: isFilled ? color : "", 
                borderColor: color,  
            }}
            className="button"
        > 
            <span>
                {text}
            </span>
        </div>
    )
}