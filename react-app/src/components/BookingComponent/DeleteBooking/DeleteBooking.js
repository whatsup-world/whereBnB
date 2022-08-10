import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteBookingThunk } from "../../../store/booking"

const DeleteBooking = ({ booking }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)

    const handleDelete = async(e) => {
        e.preventDefault()
        await dispatch(deleteBookingThunk(booking.id))
        history.push(`/bookings`)
    }

    return (
        <div>
            {
                user.id === booking.user_id
                &&
                <button onClick={handleDelete}>Delete Booking</button>
            }
        </div>
    )
}
export default DeleteBooking
