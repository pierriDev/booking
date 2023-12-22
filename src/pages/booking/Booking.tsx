import React from "react"

import { Button } from "@/components/Button/Button"
import { Header } from "@/components/Header/Header"
import { NotFound } from "@/components/NotFound/NotFound"
import { Card } from "@/components/Card/Card"

import useBooking from "./useBooking"
import "./style.css"

const Booking = () => {
    const {
        bookings,
        handleCreateNavigation
    } = useBooking()

    return (
        <div className="homePage">
            <Header />
            <div className="section">

                    {
                        bookings.length > 0 ? (
                            <div className="bookingSection">
                                <div className="bookingHeader">
                                    <h1 className="bookingTitle">List of bookings</h1>
                                    <Button 
                                        isFilled={true}
                                        text={"New"}
                                        color={"#4BB543"}
                                        handleClick={() => handleCreateNavigation()}
                                    />
                                </div>
                                {bookings.map((singleBooking: any) => (
                                    <Card
                                        booking={singleBooking}
                                    />
                                ))}
                            </div> 
                        ) : (
                            <div className="notFoundSection">
                                <NotFound />
                                <div className="buttonBox">
                                    <Button 
                                        isFilled={true}
                                        text={"Create new"}
                                        color={"#4BB543"}
                                        handleClick={() => handleCreateNavigation()}
                                    />
                                </div>
                            </div>
                        )
                    }
            </div>
        </div>
    )
}

export default Booking