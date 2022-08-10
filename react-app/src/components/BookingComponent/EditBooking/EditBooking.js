import { useState, useEffect } from "react";
import { Calendar, DateRange } from 'react-date-range'
import { getListingsThunk } from "../../../store/listing"
import { editBookingThunk } from "../../../store/booking";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const EditBooking = ({ booking }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const bookingId = useParams()

    const userId = useSelector(state => state?.session.user.id)
    const listingId = booking.listing_id
    const listing = useSelector(state => state?.listing[listingId])


    const [start_date, setStart_date] = useState(new Date())
    const [end_date, setEnd_date] = useState(new Date())
    const [cost, setCost] = useState('')

    useEffect(() => {
        dispatch(getListingsThunk())
    }, [dispatch])

    if (!listing) return ("loading")
    // console.log(listing)

    const selectionRange = {
        startDate: start_date,
        endDate: end_date,
        key: "selection"
    }
    const handleSelection = (ranges) =>{
        setStart_date(ranges.selection.startDate);
        setEnd_date(ranges.selection.endDate)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        // console.log(ranges)

        const updatedBookingInfo = {
            id: booking.id,
            user_id: userId,
            listing_id: listing.id,
            start_date: start_date.toISOString().slice(0, 10),
            end_date: end_date.toISOString().slice(0, 10),
            cost: cost,
        }
        // console.log(listing)
        // console.log(updatedBookingInfo)

        await dispatch(editBookingThunk(updatedBookingInfo))
        history.push(`/bookings`)
    }


    return (
        <div>
        <fieldset>
            <form onSubmit={handleSubmit}>
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
        </div>
    )
}
export default EditBooking
