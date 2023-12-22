import React from "react";

import './style.css'

import homeIcon from "@/assets/icons/homeIcon.svg"
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <div className="homeIcon" onClick={() => navigate("/")}>
                <img className="headerIcon" src={homeIcon} />
            </div>
            <h1 className="pageTitle">Vinnicius' Booking</h1>
        </div>
    )
}