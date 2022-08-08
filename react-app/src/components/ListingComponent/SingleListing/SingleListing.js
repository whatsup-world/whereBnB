import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getListingsThunk } from "../../../store/listing"
import DeleteListing from '../DeleteListing/DeleteListing';
import EditListing from '../EditListing/EditListing';
import BookingForm from '../../BookingComponent/NewBooking/NewBooking';

const SingleListing = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const activeUser = useSelector(state => state?.session.user)
    // console.log(activeUser)
    const { listingId } = useParams()
    // console.log(listingId)

    // const listing = listings.listingId
    const listing = useSelector(state => state?.listing[listingId])
    // console.log(listing)

    useEffect(() => {
        dispatch(getListingsThunk())
    }, [dispatch])

    if (!listing) return ("loading")


    return (
        <div>
            <h1>Single Listing</h1>
            <div key={listing.id}>
                <h3>{listing.address}, {listing.city}, {listing.state} {listing.zip}</h3>
                <p>{listing.category}</p>
                <p>{listing.description}</p>
                <p>{listing.price}</p>
                {/* {console.log(listing)} */}

                {!activeUser &&
                    (<div>login to discover more features!</div>)
                }

                {activeUser && activeUser.id === listing.user_id ?

                    (<div>
                        <DeleteListing listing={listing}/>
                        <EditListing listing={listing}/>
                    </div>)
                    :
                    (<div>
                        <BookingForm listing={listing}/>
                    </div>)

                }

            {/* {return ("login to discover more features!")} */}
            </div>
        </div>
    )
}
export default SingleListing
