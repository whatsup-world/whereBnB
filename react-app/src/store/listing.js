const GET_LISTINGS = 'listings/GET_LISTINGS';
const ADD_LISTING = 'listings/ADD_LISTING';
// const GET_LISTINGS = 'listings/GET_LISTINGS';
const DELETE_LISTING = 'listings/DELETE_LISTING';

const getListings = (data) => ({
    type: GET_LISTINGS,
    data
})

const addListing = (data) => ({
    type: ADD_LISTING,
    data
})

const deleteListing = (data) => ({
    type: DELETE_LISTING,
    data
})

export const getListingsThunk = () => async (dispatch) => {

    const response = await fetch('/api/listings')

    if (response.ok) {
        const data = await response.json();
        dispatch(getListings(data))

        return data
    }
}

export const addListingThunk = (payload) => async (dispatch) => {
    // console.log("+++++++++++++++addListingThunk++++++++++++++", payload)

    const response = await fetch('/api/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(addListing(data));
        return data
    }
}

export const deleteListingThunk = (listingId) => async (dispatch) => {
    const response = await fetch(`/api/listings/${listingId}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        dispatch(deleteListing(listingId));
    }
    return
}

let initialState = {}

const listingsReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_LISTINGS:
            let newState = {}
            action.data.Listings.forEach(listing => {
                newState[listing.id] = listing
            })
            return newState

        case ADD_LISTING:
            let addState = {}
            addState = { ...state, [action.data.id]: action.data}
            // console.log("newState from reducer++++++++++++",newState)
            return addState

        case DELETE_LISTING:
            let deleteState = {...state}
            delete deleteState[action.data.id]
            return deleteState


        default:
            return state;
    }
}

export default listingsReducer
