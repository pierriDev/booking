import { BookingType } from './bookingSlice.type'
import type { RootState } from '@/redux/store'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: BookingType[] = [];


export const bookingSlice = createSlice ({
    name: 'booking',
    initialState,
    reducers: {
        getData: (state, action: PayloadAction<number>) => {
            const bookingId = action.payload;
            const foundBooking = state.find((booking) => booking.id === bookingId);

            return foundBooking ? [foundBooking] : state;

        },
        createData: (state, action: PayloadAction<BookingType>) => {
            const { startDate, endDate } = action.payload;

            const newStartDate = new Date(startDate);
            let newEndDate = new Date(endDate);

            newEndDate.setHours(23, 59, 59, 999);

            const startDay = newStartDate.getDate();
            const startMonth = newStartDate.getMonth();
            const startYear = newStartDate.getFullYear();

            const endDay = newEndDate.getDate();
            const endMonth = newEndDate.getMonth();
            const endYear = newEndDate.getFullYear();

            const hasOverlap = state.some(
                (booking: BookingType) => {
                    const existingStartDay = booking.startDate.getDate();
                    const existingStartMonth = booking.startDate.getMonth();
                    const existingStartYear = booking.startDate.getFullYear();

                    const existingEndDay = booking.endDate.getDate();
                    const existingEndMonth = booking.endDate.getMonth();
                    const existingEndYear = booking.endDate.getFullYear();

                    return (
                        startYear === existingEndYear &&
                        startMonth === existingEndMonth &&
                        startDay <= existingEndDay &&
                        endYear === existingStartYear &&
                        endMonth === existingStartMonth &&
                        endDay >= existingStartDay
                    );
                }
            );

            if (newStartDate > newEndDate) {
                throw new Error('The Start date must be a day before the End Date');
            }

            if (hasOverlap) {
                throw new Error('The date you choose is already booked.');
            }

            state.push(action.payload);
            return state;
        },

        updateData: (state, action: PayloadAction<BookingType>) => {
            const { startDate, endDate, id } = action.payload;

            const newStartDate = new Date(startDate);
            let newEndDate = new Date(endDate);

            newEndDate.setHours(23, 59, 59, 999);

            const startDay = newStartDate.getDate();
            const startMonth = newStartDate.getMonth();
            const startYear = newStartDate.getFullYear();

            const endDay = newEndDate.getDate();
            const endMonth = newEndDate.getMonth();
            const endYear = newEndDate.getFullYear();

            const hasOverlap = state.some(
                (booking: BookingType) => {
                    const existingStartDay = booking.startDate.getDate();
                    const existingStartMonth = booking.startDate.getMonth();
                    const existingStartYear = booking.startDate.getFullYear();

                    const existingEndDay = booking.endDate.getDate();
                    const existingEndMonth = booking.endDate.getMonth();
                    const existingEndYear = booking.endDate.getFullYear();

                    return (
                        startYear === existingEndYear &&
                        startMonth === existingEndMonth &&
                        startDay <= existingEndDay &&
                        endYear === existingStartYear &&
                        endMonth === existingStartMonth &&
                        endDay >= existingStartDay
                    );
                }
            );

            if (newStartDate > newEndDate) {
                throw new Error('The Start date must be a day before the End Date');
            }

            if (hasOverlap) {
                throw new Error('The date you choose is already booked.');
            }

            
            state[id - 1] = action.payload
            return state
        },

        deleteData: (state, action: PayloadAction<number>) => {
            const bookingIdToDelete = action.payload;

            return state.filter((booking) => booking.id !== bookingIdToDelete)
        }
    }
})

export const { getData, createData, updateData, deleteData } = bookingSlice.actions;

export const selectBookings = (state: RootState) => state.booking;

