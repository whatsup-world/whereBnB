import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { addImageThunk } from '../../../store/image';
// import { add}


const NewImagePage = ({ listingId }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const activeUser = useSelector(state => state?.session.user)

    console.log(listingId)

    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault()

        const payload = {
            image_url: image,
            listing_id: listingId
        }

        console.log(payload)
        await dispatch(addImageThunk(payload))

        history.push(`/listings/${listingId}`)

    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <fieldset>
            <form onSubmit={handleSubmit}>
                <input
                type="file"
                accept="image/*"
                onChange={updateImage}
                />
                <button type="submit">Submit</button>
                {/* {(imageLoading)&& <p>Loading...</p>} */}
            </form>
        </fieldset>
    )
}

export default NewImagePage
