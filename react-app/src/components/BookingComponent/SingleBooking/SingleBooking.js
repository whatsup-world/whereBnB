import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"

const SingleBooking = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { bookingId } = useParams()

    const activeUser = useSelector(state => state?.session.user)
    const booking = useSelector(state => state?.booking[bookingId])

    if (!booking) return ("loading")
    console.log(booking)
    return (
        <div>
            <h1>Booking Detail</h1>
            <div key={booking.id}>
                <h3>{booking.start_date}</h3>
                <h3>{booking.end_date}</h3>
                <h3>{booking.cost}</h3>
            </div>
        </div>
    )
}
export default SingleBooking
