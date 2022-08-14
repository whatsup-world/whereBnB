import { useState, useEffect } from "react";
import { Calendar, DateRange } from 'react-date-range'
// import { getListingsThunk } from "../../../store/listing"
import { editBookingThunk } from "../../../store/booking";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import moment from 'moment';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const EditBooking = ({ booking, listing }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const bookingId = useParams()

    const userId = useSelector(state => state?.session.user.id)
    const listingId = booking?.listing_id
    // const listing = useSelector(state => state?.listing[listingId])


    const [start_date, setStart_date] = useState(new Date())
    const [end_date, setEnd_date] = useState(new Date())
    const [cost, setCost] = useState(0)
    const [errors, setErrors] = useState([]);
    const [submitEnabled, setSubmitEnabled] = useState(false)


    useEffect(() => {
        // dispatch(getListingsThunk())
        let errorArr = []
        listing?.bookings.map(booking => {
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
        totalCost = moment(end_date).diff(moment(start_date), 'days') * listing?.price

        if (errorArr.length) {
            setSubmitEnabled(false)
        } else {
            setSubmitEnabled(true)
        }

        setCost(totalCost)
        setErrors(errorArr)
    }, [start_date, end_date])

    useEffect(() => {
    }, [start_date, end_date])

    if (!listing) return ("loading")
    console.log(listing)

    const selectionRange = {
        startDate: start_date,
        endDate: end_date,
        key: "selection"
    }
    const handleSelection = (ranges) =>{
        setStart_date(ranges.selection.startDate);
        setEnd_date(ranges.selection.endDate)
    }

    console.log(listing.bookings)
    // useEffect(() => {
    //     // dispatch(getListingsThunk())
    //     let errorArr = []
    //     listing.bookings.map(booking => {
    //         if (moment(start_date).isBetween(moment(booking.start_date),moment(booking.end_date))
    //             ||
    //             moment(end_date).isBetween(moment(booking.start_date),moment(booking.end_date))
    //             ||
    //             moment(booking.start_date).isBetween(moment(start_date),moment(end_date))
    //             ||
    //             moment(booking.end_date).isBetween(moment(start_date),moment(end_date))

    //             )
    //             {
    //                 errorArr.push("Please select another date period");

    //             }
    //         })
    //         if (moment(start_date).isSame(moment(end_date))) {
    //             errorArr.push("Check-in & check-out date cannot be same")
    //         }

    //     let totalCost = 0;
    //     // console.log(moment(end_date).diff(moment(start_date), 'days'))
    //     totalCost = moment(end_date).diff(moment(start_date), 'days') * listing.price

    //     if (errorArr.length) {
    //         setSubmitEnabled(false)
    //     } else {
    //         setSubmitEnabled(true)
    //     }

    //     setCost(totalCost)
    //     setErrors(errorArr)
    // },[start_date, end_date])

    const handleSubmit = async(e) => {
        e.preventDefault()

        // console.log(ranges)

        const updatedBookingInfo = {
            id: booking.id,
            user_id: userId,
            listing_id: listing.id,
            start_date: start_date.toISOString().slice(0, 10),
            end_date: end_date.toISOString().slice(0, 10),
            cost,
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
            <div className="error-messages">
                {errors.length > 0 && (
                    <ul>
                        {errors.map((error, idx) =>
                            <li key={idx}>{error}</li>
                        )}
                    </ul>
                )}
            </div>
            <div className="calendar">
                <DateRange
                    ranges={[selectionRange]}
                    onChange={handleSelection}
                    dateDisplayFormat={"yyyy/MM/dd"}
                    minDate={new Date()}

                />
            </div>
            {/* <div>
                <label htmlFor='cost'>Cost</label>
                <input id='cost'
                    type='number'
                    placeholder='Cost'
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
            </div> */}
            <div>
                Total cost: ${cost}
            </div>
            <button disabled={!!errors.length} id='confirm-button'>Submit</button>
            </form>
        </fieldset>
        </div>
    )
}
export default EditBooking
