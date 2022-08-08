const GET_BOOKINGS = 'bookings/GET_BOOKINGS';
const ADD_BOOKING = 'bookings/ADD_BOOKING';
// const GET_BOOKINGS = 'bookings/GET_BOOKINGS';
// const GET_BOOKINGS = 'bookings/GET_BOOKINGS';

const getBookings= (data) => ({
    type: GET_BOOKINGS,
    data
})
const addBooking= (data) => ({
    type: ADD_BOOKING,
    data
})
// const getBookings= (data) => ({
//     type: GET_BOOKINGS,
//     data
// })
// const getBookings= (data) => ({
//     type: GET_BOOKINGS,
//     data
// })

export const getBookingsThunk = (userId) => async (dispatch) => {

    const response = await fetch(`/api/bookings/users/${userId}`)

    if (response.ok) {
        const data = await response.json();
        dispatch(getBookings(data))

        return data
    }
}

export const addBookingThunk = (payload) => async (dispatch) => {
    // console.log("+++++++++++++++addBookingThunk++++++++++++++", payload)
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


        default:
            return state;
    }
}
export default bookingsReducer
