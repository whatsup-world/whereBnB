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
        <fieldset>
            <form>
                <div>
                    <label htmlFor='address'>Address</label>
                    <input id='address'
                        type='text'
                        placeholder='Listing Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
            </form>
        </fieldset>
    )
}

export default UpdateListing
