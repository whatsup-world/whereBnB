import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getListingsThunk } from "../../../store/listing"
import DeleteListing from '../DeleteListing/DeleteListing';
import EditListing from '../EditListing/EditListing';
import BookingForm from '../../BookingComponent/NewBooking/NewBooking';
import "./SingleListing.css"

const SingleListing = () => {
    const dispatch = useDispatch()
    // const history = useHistory()

    const activeUser = useSelector(state => state?.session.user)
    // console.log(activeUser)
    const { listingId } = useParams()
    // console.log(listingId)
    // console.log(listingId)
    // const listing = listings.listingId
    const listing = useSelector(state => state?.listing[listingId])
    // console.log(listing)

    useEffect(() => {
        dispatch(getListingsThunk())
    }, [dispatch])

    if (!listing) return ("loading")


    return (
        <div className="listings">
            <h1>Single Listing</h1>
            <div key={listing.id} className="listing-info">
                <img src={listing.cover_img} className="cover-img"/>
                <h4>{listing.address}, {listing.city}, {listing.state} {listing.zip}</h4>
                <p>{listing.category}</p>
                <p>{listing.description}</p>
                <p>${listing.price} night</p>

                {activeUser ?
                    (<div>{activeUser.id === listing.user_id ?

                        (<div>
                            <DeleteListing listing={listing}/>
                            <EditListing listing={listing}/>
                        </div>)
                        :
                        (<div>
                            <BookingForm listing={listing}/>
                        </div>)

                    }</div>)
                    :
                    (<div>Login to discover more features!</div>)
                }

            </div>
        </div>
    )
}
export default SingleListing
