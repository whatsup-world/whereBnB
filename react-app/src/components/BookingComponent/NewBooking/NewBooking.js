import { useState } from 'react'


import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addBookingThunk } from '../../../store/booking'


const BookingForm = ({ listing }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state?.session.user.id)
    console.log("new Booking component+++++++++++++++",userId)
    // console.log(listing)

    const [start_date, setStart_date] = useState(new Date())
    const [end_date, setEnd_date] = useState(new Date())
    const [cost, setCost] = useState('')



    const handleSubmit = async(e) => {
        e.preventDefault()

        const payload = {
            user_id: userId,
            listing_id: listing.id,
            start_date,
            end_date,
            cost,
        }
        console.log(listing)
        console.log(payload)
        await dispatch(addBookingThunk(payload))
        history.push(`/bookings`)
    }

    return (
        <fieldset>
        <form onSubmit={handleSubmit}>
            {/* <div>
                <label htmlFor='listing_id'>Listing Id</label>
                <input id='listing_id'
                    type='number'
                    placeholder='Listing Id'
                    value={listing_id}
                    onChange={(e) => setListing_id(e.target.value)}
                />
            </div> */}
            <div>
                <label htmlFor='start_date'>Start Date</label>
                <input id='start_date'
                    type='date'
                    placeholder='Start Date'
                    value={start_date}
                    onChange={(e) => setStart_date(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='end_date'>End Date</label>
                <input id='end_date'
                    type='date'
                    placeholder='End Date'
                    value={end_date}
                    onChange={(e) => setEnd_date(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='cost'>Cost</label>
                <input id='cost'
                    type='number'
                    placeholder='Cost'
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
            </div>
            <button>Submit</button>
        </form>
        </fieldset>
    )
}
export default BookingForm
