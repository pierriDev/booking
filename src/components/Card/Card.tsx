import React from "react";

import type { CardType } from "./Card.type";
import './style.css'
import useCard from "./useCard";

import { Button } from "../Button/Button";

export const Card = (
    Booking
: CardType) => {
    const {
        handleDelete,
        handleUpdate,
        startDate,
        endDate,
    } = useCard(Booking.booking)

    return (
        <div className="card">
            <div className="cardHeader">
                <p className="cardName">{Booking.booking.name}</p>
                <a onClick={() => handleUpdate(Booking.booking.id)} className="cardLink">Update Booking &gt; </a>
            </div>
            <div className="cardBody">

                <div className="cardElement">
                    <p className="cardLabel">Check-in Date: </p>
                    <p className="cardDate">{startDate}</p>
                </div>

                <div className="cardElement">
                    <p className="cardLabel">Check-out Date: </p>
                    <p className="cardDate">{endDate}</p>
                </div>

            </div>
            <div className="cardFooter">
                <Button 
                    isFilled={false}
                    handleClick={() => handleDelete(Booking.booking.id)}
                    color={"red"}
                    text="Delete"
                />
            </div>
        </div>
    )
}