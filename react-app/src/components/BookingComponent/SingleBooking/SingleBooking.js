import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getBookingsThunk } from '../../../store/booking';
import { getListingsThunk } from '../../../store/listing';
import DeleteBooking from '../DeleteBooking/DeleteBooking';
import EditBooking from '../EditBooking/EditBooking';

const SingleBooking = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { bookingId } = useParams()

    const activeUser = useSelector(state => state?.session.user)
    const booking = useSelector(state => state?.booking[bookingId])
    const listingId = booking?.listing_id
    const listing = useSelector(state => state?.listing[listingId])

    // const booking_start_date = booking.start_date
    // console.log(booking_start_date)
    // console.log("SingleBooking++++++++++++++++", booking)


    useEffect(() => {
        dispatch(getBookingsThunk(activeUser.id))
        dispatch(getListingsThunk())
    }, [dispatch, activeUser, bookingId])

    if (!booking) return ("loading")
    return (
        <div>
            <h1>Booking Detail</h1>
            <div key={booking.id}>
                <h3>{booking.start_date.slice(0, 16)}</h3>
                <h3>{booking.end_date.slice(0, 16)}</h3>
                <h3>{booking.cost}</h3>
                {activeUser ?
                    (<div>{activeUser.id === booking.user_id ?
                        (<div>
                            <DeleteBooking booking={booking}/>
                            <EditBooking booking={booking} listing={listing}/>
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
