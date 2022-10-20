import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getListingsThunk } from '../../../store/listing';
import { getLikesThunk, addLikeThunk } from '../../../store/like';
import { useSearchBar } from '../../../context/SearchBarContext';
import "./Listings.css"

const Listings = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const listings = useSelector(state => state.listing)
    const likes = useSelector(state => state?.like)
    const { searchTerm } = useSearchBar()



    useEffect(() => {
        dispatch(getListingsThunk(), getLikesThunk())
    }, [dispatch])

    // console.log("component+++++++",listings)

    if (!listings) return ("loading")


    const filteredListings = Object.values(listings).filter(listing => {
        return (listing.city.toLowerCase().includes(searchTerm.toLowerCase())
            || listing.category.toLowerCase().includes(searchTerm.toLowerCase())
            || listing.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })

    console.log(filteredListings)


    const goToSingleListing = (listing) => {
        history.push(`/listings/${listing.id}`)
    }

    const handleLike = async(listingId)=> {
        console.log(listingId)
        await dispatch(addLikeThunk(listingId))
    }



    return (
        <div className='listings'>
            <h1>All Listings</h1>
            {
                filteredListings.map(listing => (
                    <div key={listing.id}  id="listing-container">
                        <div id='image-container'><img onClick={() => goToSingleListing(listing)} src={listing.cover_img} className="cover-img"/></div>
                        <div id='address-line'>
                            <div id='address-line-left'><h4>{listing.city}, {listing.state}</h4></div>
                            <div id='address-line-right'><p>hosted by&nbsp;</p> <h4>{listing.listing_owner.username}</h4></div>
                        </div>
                        <p>{listing.category}</p>
                        {/* <p>{listing.description}</p> */}
                        <p>${listing.price} night</p>
                        <div className='like-buttons'>

                            {/* { likes?
                                <button className='listing-liked' type='button' onClick={() => handleLike(listing.id)}><i className="fa-solid fa-heart fa-lg"></i></button>
                                :
                                <button className='listing-unliked' type='button' onClick={() => handleLike(listing.id)}><i className="fa-regular fa-heart fa-lg"></i></button>

                            } */}
                        </div>
                    </div>
                    // {console.log(listing)}
                ))
            }
        </div>
    )
}

export default Listings;
