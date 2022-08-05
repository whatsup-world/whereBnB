const GET_LISTINGS = 'listings/GET_LISTINGS';
const ADD_LISTING = 'listings/ADD_LISTING';
// const GET_LISTINGS = 'listings/GET_LISTINGS';
// const GET_LISTINGS = 'listings/GET_LISTINGS';

const getListings = (data) => ({
    type: GET_LISTINGS,
    data
})

const addListing = (data) => ({
    type: ADD_LISTING,
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


let initialState = {}

const listingsReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {

        case GET_LISTINGS:
            action.data.Listings.forEach(listing => {
                newState[listing.id] = listing
            })
            return newState


        case ADD_LISTING:
            newState = { ...state, [action.data.id]: action.data}
            // console.log("newState from reducer++++++++++++",newState)
            return newState


        default:
            return state;
    }
}

export default listingsReducer
