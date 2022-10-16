import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
// import { add}


const NewImagePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id)

    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault()

        const payload = {
            image
        }


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
