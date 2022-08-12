import { useState, useEffect } from "react";
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
    const [errors, setErrors] = useState([])

    useEffect(() => {
        let errorArr = [];
        if (address.length < 4 || address.length > 15 ) {errorArr.push("Address characters has to between 4 and 15")}
        if (city.length < 3 || city.length > 17) {errorArr.push("City characters has to between 3 and 17")}
        if (state.length < 3 || state.length > 14) {errorArr.push("State characters has to between 3 and 14")}
        if (zip.length < 5 || zip.length > 6) {errorArr.push("Zipcode length has to between 5 and 6")}
        if (category.length < 2 || category.length > 20) {errorArr.push("Category length has to between 2 and 20")}
        if (description.length < 5 || description.length > 200) {errorArr.push("Description length has to between 5 and 200")}
        if (price < 1 || price > 100000) {errorArr.push("Price range has to between $1 and $100000")}


        setErrors(errorArr)
    },[address, city, state, zip, description, category, price])


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
            <form onSubmit={handleEdit} className="listing-form-container">
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind} className="error-messages">{error}</div>
                    ))}
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <input id='address'
                        type='text'
                        placeholder='Listing Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='city'>City</label>
                    <input id='city'
                        type='text'
                        placeholder='Listing City'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='state'>State</label>
                    <input id='state'
                        type='text'
                        placeholder='Listing state'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='zip'>Zip</label>
                    <input id='zip'
                        type='text'
                        placeholder='Listing Zip'
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input id='description'
                        type='text'
                        placeholder='Listing Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='category'>Category</label>
                    <input id='category'
                        type='text'
                        placeholder='Listing Category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <input id='price'
                        type='text'
                        placeholder='Listing Price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required={true}
                    />
                </div>
                <button>Confirm Edit</button>

            </form>
        </fieldset>
        }
        </div>
    )
}
export default EditListing
