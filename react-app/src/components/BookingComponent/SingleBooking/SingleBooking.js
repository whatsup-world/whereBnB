import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getBookingsThunk } from '../../../store/booking';
import { getListingsThunk } from '../../../store/listing';
import DeleteBooking from '../DeleteBooking/DeleteBooking';
import EditBooking from '../EditBooking/EditBooking';
import "./SingleBooking.css"

const SingleBooking = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { bookingId } = useParams()

    const activeUser = useSelector(state => state?.session.user)
    const booking = useSelector(state => state?.booking[bookingId])
    const listingId = booking?.listing_id
    const listing = useSelector(state => state?.listing[listingId])

    // const booking_start_date = booking.start_date
    // console.log(listing)
    // console.log("SingleBooking++++++++++++++++", booking)


    useEffect(() => {
        dispatch(getBookingsThunk(activeUser.id))
        dispatch(getListingsThunk())
    }, [dispatch, activeUser, bookingId])

    if (!booking) return ("loading")
    return (
        <div className='booking'>
            <h1>Booking Detail</h1>
            <div key={booking.id} id="single-booking-container">
                <img src={listing?.cover_img} className="cover-img" width="400px" height="270px"/>
                <div id='address-line'>
                    <div id='address-line-left'><h4>{listing?.address}, {listing?.city}, {listing?.state}, {listing?.zip}</h4></div>
                    {/* <div id='address-line-right'><p>hosted by&nbsp;</p> <h4>{listing?.listing_owner.username}</h4></div> */}
                </div>
                <h5>Check in: {booking.start_date.slice(0, 16)}</h5>
                <h5>Check out: {booking.end_date.slice(0, 16)}</h5>
                <h4>You paid: ${booking.cost}</h4>
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
