import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


const UpdateListing = ({ restaurant }) => {
    const dispatch = useDispatch()

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')



    return (
        <div>
            {
                user.id === listing.user_id
                &&
                <button onClick={handleEdit}>Edit Listing</button>
            }
        </div>
    )
}

export default UpdateListing
