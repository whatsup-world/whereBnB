// const GET_LIKES = 'likes/GET_LIKES';
// const ADD_LIKE = 'likes/ADD_LIKE';


// const getLikes = (data) => ({
//     type: GET_LIKES,
//     data
// })

// const addLike = (data) => ({
//     type: ADD_LIKE,
//     data
// })


// export const getLikesThunk = () => async (dispatch) => {

//     const response = await fetch('/api/likes')

//     if (response.ok) {
//         const data = await response.json();
//         dispatch(getLikes(data))

//         return data
//     }
// }

// export const addLikeThunk = (payload) => async (dispatch) => {

//     const response = await fetch('/api/likes', {
//         moethod: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//     })

//     if (response.ok) {
//         const data = await response.json();
//         dispatch(addLike(data))
//         return data
//     }
// }


// let initialState = {}

// const likesReducer = (state = initialState, action) => {
//     switch (action.type) {

//         case GET_LIKES:
//             let newState = {}
//             action.data.Likes.forEach(like => {
//                 newState[like.id] = like
//             })
//             return newState

//         case ADD_LIKE:
//             let addState = {}
//             addState = { ...state, [action.data.id]: action.data}
//             return addState


//         default:
//             return state;
//     }
// }


// export default likesReducer
