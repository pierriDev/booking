import React from "react";

import type { AlertType } from "./Alert.type";
import "./style.css"

export const Alert = ({
    title,
    message
}: AlertType) => {
    return(
        <div className="alertBox">
            <h1 className="alertTitle">{title}</h1>
            <p className="alertMessage">{message}</p>
        </div>
    )
}