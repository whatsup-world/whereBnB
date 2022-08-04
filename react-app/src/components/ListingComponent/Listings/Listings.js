import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListingsThunk } from '../../../store/listing';

function Listings() {
    const dispatch = useDispatch()
    const listings = useSelector(state => state.listing)

    // const listings = useSelector(state => state.listing)

    useEffect(() => {
        dispatch(getListingsThunk())
    }, [dispatch])

    // console.log("component+++++++",listings)

    return (
        <div>
            <h1>All Listings</h1>
            {
                Object.values(listings).map(listing => (
                    <div key={listing.id}>
                        <p>{listing.address}, {listing.city}, {listing.state}{listing.zip}</p>
                    </div>
                    // {console.log(listing)}
                ))
            }
        </div>
    )
}

export default Listings;
