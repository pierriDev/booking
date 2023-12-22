import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { getData, selectBookings } from '@/redux/slices/booking/bookingSlice'
import { BookingType } from '@/redux/slices/booking/bookingSlice.type';

const useBooking = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookings = useSelector(selectBookings);
    

   

    const handleCreateNavigation = () => {
        navigate("/create")
    }

    return {
        handleCreateNavigation,
        bookings
    }
}

export default useBooking