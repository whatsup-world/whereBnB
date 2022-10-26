const GET_IMAGES = 'images/GET_IMAGES';
const ADD_IMAGE = 'images/ADD_IMAGE';


const getImages = (data) => ({
    type: GET_IMAGES,
    data
})


const addImage = (data) => ({
    type: ADD_IMAGE,
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


export const addImageThunk = (payload) => async(dispatch) => {
    const { listing_id, image_url } = payload;
    console.log("++++++++++addImageThunk++++++++++++",listing_id)
    console.log("++++++++++addImageThunk++++++++++++",image_url)
    const formData = new FormData();
    formData.append("listing_id", listing_id);
    formData.append("image_url", image_url);

    console.log(formData)

    const response = await fetch(`/api/listing_images`, {
        method: "POST",
        // headers: {
        //     'Content-Type': 'multipart/form-data'
        // },
        body: formData
    });

    console.log(response)

    if (response.ok) {
        const data = await response.json();
        dispatch(addImage(data));
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

        case ADD_IMAGE:
            let addState = {}
            addState = { ...state, [action.data.id]: action.data}
            return addState

        default:
            return state;
    }
}
export default imagesReducer
