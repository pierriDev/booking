import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteData, selectBookings } from "@/redux/slices/booking/bookingSlice"
import type { BookingType } from "@/redux/slices/booking/bookingSlice.type";
import { useNavigate } from 'react-router-dom';
export const useCard = (Booking: BookingType) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const startYear = Booking.startDate.getFullYear()
    const startMonth = Booking.startDate.getMonth() + 1
    const startDay = Booking.startDate.getDate()

    const startDate = [startYear, startMonth, startDay].join('/')

    const endYear = Booking.endDate.getFullYear()
    const endMonth = Booking.endDate.getMonth() + 1
    const endDay = Booking.endDate.getDate()

    const endDate = [endYear, endMonth, endDay].join('/')


    const handleDelete = (bookingId: number) => {
        dispatch(
            deleteData(bookingId)
        )
    }

    const handleUpdate = (bookingId: number) => {
        navigate(`update-details/${bookingId}`)
    }

    return {
        handleDelete,
        handleUpdate,
        startDate,
        endDate,
    }
}

export default useCard