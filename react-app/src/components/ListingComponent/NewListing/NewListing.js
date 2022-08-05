import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addListingThunk } from '../../../store/listing'

const ListingForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id)

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')


    const handleSubmit = async(e) => {
        e.preventDefault()

        const payload = {
            user_id: userId,
            address,
            city,
            state,
            zip,
            description,
            category,
            price
        }

        // console.log(newListing)
        await dispatch(addListingThunk(payload))
        history.push(`/listings`)

    }

    return (
        <fieldset>
            <form onSubmit={handleSubmit}>
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
                        placeholder='Listing State'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='zip'>Zip Code</label>
                    <input id='zip'
                        type='number'
                        placeholder='Listing Zip Code'
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
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
                    <label htmlFor='description'>Description</label>
                    <input id='description'
                        type='textarea'
                        placeholder='Listing Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <input id='price'
                        type='number'
                        placeholder='Listing Price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default ListingForm
