import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBookingsThunk } from '../../../store/booking';
// import { format } from 'date-fns';
import "./Bookings.css"

const Bookings = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const bookings = useSelector(state => state.booking)

    console.log(bookings)

    useEffect(() => {
        dispatch(getBookingsThunk(user.id))
    }, [dispatch])

    if (!bookings) return ("loading")
    // console.log(bookings)

    const goToSingleBooking = (booking) => {
        // console.log(booking)
        history.push(`/bookings/${booking.id}`)
    }

    return (
        <div className='listings'>
            <h1>All Bookings</h1>

            {
                // console.log(bookings)
                Object.values(bookings).map(booking => (

                    <div key={booking.id} onClick={() => goToSingleBooking(booking)} id="booking-container">
                        <p>Check in: {booking.start_date.slice(0, 16)}</p>
                        <p>Check out: {booking.end_date.slice(0, 16)}</p>
                        <p>You paid: ${booking.cost}</p>

                    </div>
                ))
            }
        </div>
    )
}
export default Bookings;
