import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createData, selectBookings } from "@/redux/slices/booking/bookingSlice"
import { useNavigate } from 'react-router-dom';

const useCreateBooking = () => {
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
                    createData({
                        id: bookings.length + 1,
                        title: formData.title,
                        name: formData.name,
                        startDate: formData.startDate,
                        endDate: formData.endDate
                    })
                )
                
                setFormData({
                    title: 'Vinnicius Room',
                    name: '',
                    startDate: new Date(),
                    endDate: new Date(),
                });
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

export default useCreateBooking