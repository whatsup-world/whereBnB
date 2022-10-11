const GET_IMAGES = 'images/GET_IMAGES';
// const ADD_IMAGE = 'images/ADD_IMAGE';


const getImages = (data) => ({
    type: GET_IMAGES,
    data
})


export const getImagesThunk = (listingId) => async (dispatch) => {

    const response = await fetch(`/api/listing_images/listings/${listingId}`)

    if (response.ok) {
        const data = await response.json();
        dispatch(getImages(data))
        return data
    }
}


let initialState = {}
const imagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_IMAGES:
            let getState = {}
            action.data.Listing_Images.forEach(image => {
                getState[image.id] = image
            })
            return getState

        default:
            return state;
    }
}
export default imagesReducer
