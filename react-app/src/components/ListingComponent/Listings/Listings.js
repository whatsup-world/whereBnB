import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getListingsThunk } from '../../../store/listing';
// import { getLikesThunk } from '../../../store/like';
import "./Listings.css"

const Listings = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const listings = useSelector(state => state.listing)
    // const likes = useSelector(state => state.like)

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
        <div className='listings'>
            <h1>All Listings</h1>
            {
                Object.values(listings).map(listing => (
                    <div key={listing.id} onClick={() => goToSingleListing(listing)} id="listing-container">
                        <div id='image-container'><img src={listing.cover_img} className="cover-img"/></div>
                        {/* {likes[]} */}
                        <div id='address-line'>
                            <div id='address-line-left'><h4>{listing.city}, {listing.state}</h4></div>
                            <div id='address-line-right'><p>hosted by&nbsp;</p> <h4>{listing.listing_owner.username}</h4></div>
                        </div>
                        <p>{listing.category}</p>
                        {/* <p>{listing.description}</p> */}
                        <p>${listing.price} night</p>
                    </div>
                    // {console.log(listing)}
                ))
            }
        </div>
    )
}

export default Listings;
