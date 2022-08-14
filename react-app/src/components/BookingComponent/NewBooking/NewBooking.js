import { useEffect, useState } from 'react'
import { Calendar, DateRange } from 'react-date-range'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addBookingThunk } from '../../../store/booking'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import moment from 'moment';
// import {extendMoment} from "moment-range"
// import { addYears, differenceInDays } from 'date-fns'
// import { add } from 'date-fns/esm'
import "./NewBooking.css"

const BookingForm = ({ listing }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state?.session.user.id)
    // console.log("new Booking component+++++++++++++++",userId)

    const [start_date, setStart_date] = useState(new Date())
    const [end_date, setEnd_date] = useState(new Date())
    const [cost, setCost] = useState(0)
    const [errors, setErrors] = useState([]);
    const [submitEnabled, setSubmitEnabled] = useState(false)

    const selectionRange = {
        startDate: start_date,
        endDate: end_date,
        key: "selection"
    }

    const handleSelection = (ranges) =>{
        setStart_date(ranges.selection.startDate);
        setEnd_date(ranges.selection.endDate)
    }

    useEffect(() => {
        let errorArr = []
        listing.bookings.map(booking => {
            if (moment(start_date).isBetween(moment(booking.start_date),moment(booking.end_date))
                ||
                moment(end_date).isBetween(moment(booking.start_date),moment(booking.end_date))
                ||
                moment(booking.start_date).isBetween(moment(start_date),moment(end_date))
                ||
                moment(booking.end_date).isBetween(moment(start_date),moment(end_date))

                )
                {
                    errorArr.push("Please select another date period");

                }
            })
            if (moment(start_date).isSame(moment(end_date))) {
                errorArr.push("Check-in & check-out date cannot be same")
            }

        let totalCost = 0;
        // console.log(moment(end_date).diff(moment(start_date), 'days'))
        totalCost = moment(end_date).diff(moment(start_date), 'days') * listing.price

        if (errorArr.length) {
            setSubmitEnabled(false)
        } else {
            setSubmitEnabled(true)
        }

        setCost(totalCost)
        setErrors(errorArr)
    },[start_date, end_date])

    // let bookedDates = [];
    // console.log(listing.bookings)
    // listing.bookings.forEach(booking => {
    //     // console.log(moment(booking.start_date).isSame(moment(booking.end_date), "days"))
    //     // console.log(moment(start_date))
    //     console.log(moment(booking.start_date))
    //     console.log(moment(booking.end_date))

    //     // console.log(moment(booking.start_date).add(1, 'd'))
    //     // console.log(moment(start_date).isBetween(moment(booking.start_date),moment(booking.end_date)))
    //     // console.log(moment(end_date).isBetween(moment(booking.start_date),moment(booking.end_date)))

    //     // const range = moment.range(moment(booking.start_date), moment(booking.end_date))
    //     // const dates = Array.from(range.by('day'))
    //     // bookedDates.concat(dates)
    // })

    // console.log(bookedDates)
    // const excludedDates = [];
    // bookedDates.forEach((date) => {
    //     excludedDates.push(new Date(date));
    // });

    const handleSubmit = async(e) => {
        e.preventDefault()

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
        <form onSubmit={handleSubmit}>
            <div className="error-messages">
                {errors.length > 0 && (
                    <ul>
                        {errors.map((error, idx) =>
                            <li key={idx}>{error}</li>
                        )}
                    </ul>
                )}
            </div>
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
            <div className='calendar'>
                <DateRange
                    ranges={[selectionRange]}
                    onChange={handleSelection}
                    dateDisplayFormat={"yyyy/MM/dd"}
                    minDate={new Date()}

                    // excludeDates={excludedDates}
                    // disabledDates={listing.bookings.map(booking =>
                    //     booking.start_date
                    // )}
                />
            </div>
            {/* <div>
                <label htmlFor='cost'>Cost</label>
                <input id='cost'
                    type='number'
                    placeholder='Cost'
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    required={true}
                />
            </div> */}
            <div>
                Total cost: ${cost}
            </div>
            <button disabled={!!errors.length} id='confirm-button'>Submit</button>
        </form>
        </fieldset>
    )
}
export default BookingForm
