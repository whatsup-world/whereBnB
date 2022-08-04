const GET_LISTINGS = 'listings/GET_LISTINGS';
// const GET_LISTINGS = 'listings/GET_LISTINGS';
// const GET_LISTINGS = 'listings/GET_LISTINGS';
// const GET_LISTINGS = 'listings/GET_LISTINGS';

const getListings = (data) => ({
    type: GET_LISTINGS,
    data
})


export const getListingsThunk = () => async (dispatch) => {
    // console.log("++++++++++++")
    const response = await fetch('/api/listings/')

    if (response.ok) {
        const data = await response.json();
        dispatch(getListings(data))

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
            // console.log("newState from reducer++++++++++++",newState)
            return newState

        default:
            return state;
    }
}

export default listingsReducer
