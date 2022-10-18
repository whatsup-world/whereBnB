import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getListingsThunk } from "../../../store/listing"
import { getImagesThunk } from '../../../store/image';
import DeleteListing from '../DeleteListing/DeleteListing';
import EditListing from '../EditListing/EditListing';
import BookingForm from '../../BookingComponent/NewBooking/NewBooking';
import Images from '../../ImageComponent/Images/Images/Images';
import "./SingleListing.css"
import { getBookingsThunk } from '../../../store/booking';
import { getLikesThunk } from '../../../store/like';
import NewImagePage from '../../ImageComponent/NewImages/NewImages';

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
    const like = useSelector(state => state?.like)
    const images = useSelector(state => state?.image)
    const imagesArr = Object.values(images)
    console.log(like)
    console.log(imagesArr)


    useEffect(() => {
        dispatch(getListingsThunk())
            .then(() => dispatch(getImagesThunk(parseInt(listingId))))

    }, [dispatch])

    if (!listing) return ("loading")
    if (!images) return ("loading")



    return (
        <div className="listings">
            <h1>Single Listing</h1>
            <div key={listing.id} className="listing-info">
                <img src={listing.cover_img} className="cover-img"/>
                {/* {imagesArr && imagesArr.map(image) => {
                    return (
                        <src=`${image.image_url}` img/>
                    )
                }} */}
                <Images listing={listing}/>
                <NewImagePage listingId={listing.id}/>
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
