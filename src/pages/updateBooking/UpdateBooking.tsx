import React from 'react'
import DatePicker from "react-datepicker";
import { useParams } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

import { Header } from '@/components/Header/Header'
import { Button } from '@/components/Button/Button';
import { Alert } from '@/components/Alert/Alert';

import useUpdateBooking   from './useUpdateBooking'
import './style.css'
import type { UpdateBookingType } from './UpdateBooking.type';

const UpdateBooking = () => {
    const { bookingId } = useParams();

    const {
        formData,
        isError,
        errorMessage,
        highlightField,
        handleDateSelect,
        handleSubmit,
        handleInputChange
    } = useUpdateBooking(bookingId);
    return (
        <div>
            <Header />
            <div className='section'>
                <div className='formSection'>
                    {isError && (
                        <Alert 
                            title={"Error!"}
                            message={errorMessage}
                        />
                    )}
                    <form onSubmit={handleSubmit}>
                        <h1 className='formTitle'>Update a Booking</h1>
                        <div className='formField'>
                            <p className='formLabel'>
                                Name:
                            </p>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder='Name' 
                                style={{
                                    borderColor: highlightField ? 'red' : "black", 
                                }}
                            />
                        </div>
                        <div className='formWrap'>
                            <div className='formElement'>
                                <p className='formLabel'>
                                    Date Start:
                                </p>
                                <DatePicker selected={formData.startDate} onChange={(date: Date) => handleDateSelect(date, "startDate")} />
                            </div>
                            <div className='formElement'>
                                <p className='formLabel'>
                                    Date End:
                                </p>
                                <DatePicker selected={formData.endDate} onChange={(date: Date) => handleDateSelect(date, "endDate")} />
                            </div>
                        </div>
                        <div className='formFooter'>
                            <Button 
                                isFilled={true}
                                text={"Save"}
                                color={"#4BB543"}
                                handleClick={() => handleSubmit()}
                            />
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default UpdateBooking