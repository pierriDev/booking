import React from "react";

import "./style.css"
import notFound from "@/assets/icons/notFound.svg"

export const NotFound = () => {
    return(
        <div className="notFound">
            <div className="notFoundIconBox">
                <img className="notFoundIcon" src={notFound}/>
            </div>
            <p className="notFoundMainText">
                Results not Found!
            </p>
            <p className="notFoundText">
                There is no bookings registered yet
            </p>
            <p className="notFoundSecondaryText">
                You can try add new ones
            </p>
        </div>
    )
}