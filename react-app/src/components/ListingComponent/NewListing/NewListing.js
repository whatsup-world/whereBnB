import { useEffect, useState } from 'react'
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
    const [errors, setErrors] = useState([])

    useEffect(() => {
        let errorArr = [];
        if (address.length < 4 || address.length > 15 ) {errorArr.push("Address has to between 4 and 15")}
        if (city.length < 3 || city.length > 17) {errorArr.push("City has to between 3 and 17")}
        if (!state) {errorArr.push("Please select a state")}
        if (zip.length < 5 || zip.length > 6) {errorArr.push("Zipcode length has to between 5 and 6")}
        if (!category) {errorArr.push("Please select a category")}
        if (description.length < 5 || description.length > 200) {errorArr.push("Description length has to between 5 and 200")}
        if (price < 1 || price > 6000) {errorArr.push("Price range has to between $1 and $6000")}


        setErrors(errorArr)
    },[address, city, state, zip, description, category, price])

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

        // console.log("new push")
        await dispatch(addListingThunk(payload))
        history.push(`/listings`)

    }

    return (
        <fieldset>
            <form onSubmit={handleSubmit} className="listing-form-container">
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
                {/* <div>
                    <label htmlFor='state'>State</label>
                    <input id='state'
                        type='text'
                        placeholder='Listing State'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required={true}
                    />
                </div> */}
                <div>
                    <label htmlFor='state'>State</label>
                    <select id='state'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required={true}
                    >
                        <option value="">Select a State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='zip'>Zip Code</label>
                    <input id='zip'
                        type='number'
                        placeholder='Listing Zip Code'
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='category'>Category</label>
                    <select id='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required={true}
                    >
                        <option value="" disabled>Choose a category</option>
                        <option value="Desert">Desert</option>
                        <option value="Beach">Beach</option>
                        <option value="Cabins">Cabins</option>
                        <option value="Tiny homes">Tiny homes</option>
                        <option value="Islands">Islands</option>
                        <option value="National parks">National parks</option>
                        <option value="Amazing pools">Amazing pools</option>
                        <option value="Arctic">Arctic</option>
                        <option value="Design">Design</option>
                        <option value="Amazing views">Amazing views</option>
                        <option value="Treehouses">Treehouses</option>
                        <option value="Shared homes">Shared homes</option>
                        <option value="Castles">Castles</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description'
                        type='textarea'
                        placeholder='Listing Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='price'>Price per night</label>
                    <input id='price'
                        type='number'
                        placeholder='Listing Price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required={true}
                    />
                </div>
                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default ListingForm
