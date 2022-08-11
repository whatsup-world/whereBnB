import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { editListingThunk } from "../../../store/listing";

const EditListing = ({ listing }) => {
    const dispatch = useDispatch();
    // const history = useHistory();
    const user = useSelector(state => state?.session.user)
    const { listingId } = useParams()

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')


    const handleEdit = async(e) => {
        e.preventDefault()

        const updatedListingInfo = {
            id: listingId,
            user_id: user.id,
            address,
            city,
            state,
            zip,
            description,
            category,
            price,
        }

        // console.log("updatedListingInfo",updatedListingInfo)
        dispatch(editListingThunk(updatedListingInfo))
    }

    return (
        <div>
        {
        user.id === listing.user_id
        &&
        <fieldset>
            <form className="listing-form-container">
                <div>
                    <label htmlFor='address'>Address</label>
                    <input id='address'
                        type='text'
                        placeholder='Listing Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='city'>City</label>
                    <input id='city'
                        type='text'
                        placeholder='Listing City'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='state'>State</label>
                    <input id='state'
                        type='text'
                        placeholder='Listing state'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='zip'>Zip</label>
                    <input id='zip'
                        type='text'
                        placeholder='Listing Zip'
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input id='description'
                        type='text'
                        placeholder='Listing Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='category'>Category</label>
                    <input id='category'
                        type='text'
                        placeholder='Listing Category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <input id='price'
                        type='text'
                        placeholder='Listing Price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button onClick={handleEdit}>Edit Listing</button>

            </form>
        </fieldset>
        }
        </div>
    )
}
export default EditListing
