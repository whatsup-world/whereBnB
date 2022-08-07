import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBookingsThunk } from '../../../store/booking';

const Bookings = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const bookings = useSelector(state => state.booking)

    useEffect(() => {
        dispatch(getBookingsThunk())
    }, [dispatch])

    console.log(bookings)
    if (!bookings) return ("loading")
    return (
        <div>
            <h1>All Bookings</h1>

            {
                // console.log(bookings)
                Object.values(bookings).map(booking => (
                    <div key={booking.id}>
                        {/* <p>{booking.user_id}</p>
                        <p>{booking.listing_id}</p> */}
                        <p>{booking.start_date}</p>
                        <p>{booking.end_date}</p>
                        <p>{booking.cost}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Bookings;
