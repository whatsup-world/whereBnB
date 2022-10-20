import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getImagesThunk } from '../../../../store/image';

const Images = (listing) => {
    const dispatch = useDispatch()
    const images = useSelector(state => state?.image)
    const imagesArr = Object.values(images)
    console.log(imagesArr)
    console.log(listing.listing.id)

    useEffect(() => {
        dispatch(getImagesThunk(listing.listing.id))
    }, [dispatch])

    if (!images) return ("loading")


    return (
        <>
            <div className='images'>
                <h1>Images</h1>
                <div>
                    {/* {imagesArr && imagesArr[0].image_url} */}

                    {imagesArr && imagesArr.map((image) => {
                        return (
                            <div key={image.id}>
                                <img src={image.image_url} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>


    )

}

export default Images;
