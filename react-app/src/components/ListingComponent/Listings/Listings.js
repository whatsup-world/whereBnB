import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteListingThunk, getListingsThunk } from '../../../store/listing';
import "./Listings.css"

const Listings = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const listings = useSelector(state => state.listing)

    // const listings = useSelector(state => state.listing)

    useEffect(() => {
        dispatch(getListingsThunk())
    }, [dispatch])

    // console.log("component+++++++",listings)

    if (!listings) return ("loading")

    const goToSingleListing = (listing) => {
        history.push(`/listings/${listing.id}`)
    }

    return (
        <div>
            <h1>All Listings</h1>
            {
                Object.values(listings).map(listing => (
                    <div key={listing.id} onClick={() => goToSingleListing(listing)}>
                        <h3>{listing.address}, {listing.city}, {listing.state} {listing.zip}</h3>
                        <p>{listing.category}</p>
                        <p>{listing.description}</p>
                        <p>{listing.price}</p>
                    </div>
                    // {console.log(listing)}
                ))
            }
        </div>
    )
}

export default Listings;
