const GET_LIKES = 'session/GET_LIKES';
const ADD_LIKE = 'session/ADD_LIKE';
const DELETE_LIKE = 'session/DELETE_LIKE';


const getLikes = (data) => ({
    type: GET_LIKES,
    data
})

const addLike = (data) => ({
    type: ADD_LIKE,
    data
})

const deleteLike = (data) => ({
    type: DELETE_LIKE,
    data
})


export const getLikesThunk = () => async (dispatch) => {

    const response = await fetch('/api/likes')

    if (response.ok) {
        const data = await response.json();
        dispatch(getLikes(data))

        return data
    }
}

export const addLikeThunk = (listingId) => async (dispatch) => {

    const response = await fetch('/api/likes', {
        moethod: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(listingId)
    })

    const data = await response.json();
    if (response.ok) {

        if (data.liked) dispatch(addLike(data.liked))
        if (data.unlike) dispatch(deleteLike(data.unliked))

        return data
    } else return data.errors
}


let initialState = {}

const likesReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_LIKES:
            let newState = {}
            action.data.Likes.forEach(like => {
                newState[like.id] = like
            })
            return newState

        case ADD_LIKE:
            let addState = {}
            addState = { ...state, [action.data.id]: action.data}
            return addState

        case DELETE_LIKE:
            let deleteState = {}
            delete deleteState[action.data.id]
            return deleteState

        default:
            return state;
    }
}


export default likesReducer
