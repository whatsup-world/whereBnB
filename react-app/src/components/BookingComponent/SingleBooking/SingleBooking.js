import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getBookingsThunk } from '../../../store/booking';
import DeleteBooking from '../DeleteBooking/DeleteBooking';

const SingleBooking = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { bookingId } = useParams()

    const activeUser = useSelector(state => state?.session.user)
    const booking = useSelector(state => state.booking[bookingId])
    console.log("SingleBooking++++++++++++++++", booking)


    useEffect(() => {
        dispatch(getBookingsThunk(activeUser.id))
    }, [dispatch, activeUser])

    if (!booking) return ("loading")
    return (
        <div>
            <h1>Booking Detail</h1>
            <div key={booking.id}>
                <h3>{booking.start_date}</h3>
                <h3>{booking.end_date}</h3>
                <h3>{booking.cost}</h3>
                {activeUser ?
                    (<div>{activeUser.id === booking.user_id ?
                        (<div>
                            <DeleteBooking booking={booking}/>
                        </div>)
                        :
                        (<div>You don't have access!</div>)
                    }</div>)
                    :
                    (<div>
                        Login to discover more features!
                    </div>)
                }
            </div>
        </div>
    )
}
export default SingleBooking
