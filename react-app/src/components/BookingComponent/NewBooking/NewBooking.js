import { useState } from 'react'
import { Calendar, DateRange } from 'react-date-range'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addBookingThunk } from '../../../store/booking'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const BookingForm = ({ listing }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state?.session.user.id)
    // console.log("new Booking component+++++++++++++++",userId)

    const [start_date, setStart_date] = useState(new Date())
    const [end_date, setEnd_date] = useState(new Date())
    const [cost, setCost] = useState('')
    const [errors, setErrors] = useState([]);


    const selectionRange = {
        startDate: start_date,
        endDate: end_date,
        key: "selection"
    }

    const handleSelection = (ranges) =>{
        setStart_date(ranges.selection.startDate);
        setEnd_date(ranges.selection.endDate)
    }

    const convertDateStrToInt = (date) => {

    }

    const checkValidDates = () => {

    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        // console.log(listing.bookings[0].start_date)
        // console.log(start_date)
        // console.log(listing.bookings[0].start_date < start_date)
        // console.log(inRange(start_date, listing.bookings[0].start_date, listing.bookings[0].end_date))

        // listing.bookings.map(existBooking =>
        //     existBooking.start_date <= start_date <= existBooking.end_date



        // )
        // console.log(ranges)

        const payload = {
            user_id: userId,
            listing_id: listing.id,
            start_date: start_date.toISOString().slice(0, 10),
            end_date: end_date.toISOString().slice(0, 10),
            cost,
        }
        // console.log(listing)
        // console.log(payload)

        await dispatch(addBookingThunk(payload))
        history.push(`/bookings`)
    }

    return (
        <fieldset>
        <div>
            {errors.length > 0 && (
                <ul>
                    {errors.map((error, idx) =>
                        <li key={idx}>{error}</li>
                    )}
                </ul>
            )}
        </div>
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
            {/* <div>
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
            </div> */}
            <div>
                <DateRange
                    ranges={[selectionRange]}
                    onChange={handleSelection}
                    dateDisplayFormat={"yyyy/MM/dd"}
                    minDate={new Date()}

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
