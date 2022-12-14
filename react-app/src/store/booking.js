const GET_BOOKINGS = 'bookings/GET_BOOKINGS';
const ADD_BOOKING = 'bookings/ADD_BOOKING';
const DELETE_BOOKING = 'bookings/DELETE_BOOKING';
const EDIT_BOOKING = 'bookings/EDIT_BOOKING';

const getBookings= (data) => ({
    type: GET_BOOKINGS,
    data
})
const addBooking= (data) => ({
    type: ADD_BOOKING,
    data
})
const deleteBooking= (data) => ({
    type: DELETE_BOOKING,
    data
})
const editBooking= (data) => ({
    type: EDIT_BOOKING,
    data
})

export const getBookingsThunk = (userId) => async (dispatch) => {

    const response = await fetch(`/api/bookings/users/${userId}`)

    if (response.ok) {
        const data = await response.json();
        dispatch(getBookings(data))

        return data
    }
}

export const addBookingThunk = (payload) => async (dispatch) => {
    console.log("+++++++++++++++addBookingThunk++++++++++++++", payload)
    const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(addBooking(data));
        return data
    }
}

export const editBookingThunk = (updatedBookingInfo) => async (dispatch) => {
    console.log("editBookingThunk++++++++++++",updatedBookingInfo)
    const response = await fetch(`/api/bookings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBookingInfo)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(editBooking(data));
    }

}

export const deleteBookingThunk = (bookingId) => async (dispatch) => {
    const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        dispatch(deleteBooking(bookingId));
    }
    return
}


let initialState = {}
const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_BOOKINGS:
            let getState = {}
            action.data.Bookings.forEach(booking => {
                getState[booking.id] = booking
            })
            return getState

        case ADD_BOOKING:
            let addState = {}
            addState = { ...state, [action.data.id]: action.data}
            return addState

        case DELETE_BOOKING:
            let deleteState = {...state}
            delete deleteState[action.data.id]
            return deleteState

        case EDIT_BOOKING:
            let editState = {...state}
            editState[action.data.id] = action.data

        default:
            return state;
    }
}
export default bookingsReducer
