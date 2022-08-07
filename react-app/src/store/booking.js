const GET_BOOKINGS = 'bookings/GET_BOOKINGS';
// const GET_BOOKINGS = 'bookings/GET_BOOKINGS';
// const GET_BOOKINGS = 'bookings/GET_BOOKINGS';
// const GET_BOOKINGS = 'bookings/GET_BOOKINGS';

const getBookings= (data) => ({
    type: GET_BOOKINGS,
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
// const getBookings= (data) => ({
//     type: GET_BOOKINGS,
//     data
// })

export const getBookingsThunk = () => async (dispatch) => {

    const response = await fetch('/api/bookings')

    if (response.ok) {
        const data = await response.json();
        dispatch(getBookings(data))

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



        default:
            return state;
    }
}
export default bookingsReducer
