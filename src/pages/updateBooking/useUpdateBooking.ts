import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateData, selectBookings, getData } from "@/redux/slices/booking/bookingSlice"
import { useNavigate } from 'react-router-dom';
import type { UpdateBookingType } from "./UpdateBooking.type";

const useUpdateBooking = (bookingId: number) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const bookings = useSelector(selectBookings)

    const [formData, setFormData] = useState({
        title: 'Vinnicius Room',
        name: '',
        startDate: new Date(),
        endDate: new Date(),
    })
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [highlightField, setHighlightField] = useState(false)


    useEffect(() => {
        dispatch(getData(bookingId));
    }, [dispatch, bookingId]);
    

    useEffect(() => {
        const foundBooking = bookings.find((booking) => booking.id == bookingId);
        if (foundBooking) {
            setFormData({
                title: 'Vinnicius Room',
                name: foundBooking.name,
                startDate: foundBooking.startDate,
                endDate: foundBooking.endDate,
            });
        } else {
            navigate('/');
        }
    }, [bookings, bookingId, navigate]);

      
    const handleDateSelect = (date: Date, name: string) => {
        setFormData({
            ...formData,
            [name]: date
        })
    }
    
    const handleInputChange = (e: any) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if(formData.name === '') {
            setIsError(true)
            setHighlightField(true)
            setErrorMessage("The name is a mandatory field")
        }else {
            try{
                    
                dispatch(
                    updateData({
                        id: bookingId,
                        title: formData.title,
                        name: formData.name,
                        startDate: formData.startDate,
                        endDate: formData.endDate
                    })
                )
                
               
                setIsError(false)
                navigate('/');
            } catch (error: any | undefined) {
                setIsError(true)
                setErrorMessage(error.message)
            }
        }

    }

    return{
        formData,
        isError,
        errorMessage,
        highlightField,
        handleDateSelect,
        handleSubmit,
        handleInputChange,
    }
}

export default useUpdateBooking