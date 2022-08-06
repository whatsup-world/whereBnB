import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteListingThunk } from "../../../store/listing"

const DeleteListing = ({ listing }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state?.session.user)

    // console.log("LISTING from DELETE Component",listing)

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deleteListingThunk(listing.id))
        history.push('/listings')
    }

    return (
        <div>
            {
                user.id === listing.user_id
                &&
                <button onClick={handleDelete}>Delete Listing</button>
            }
        </div>
    )
}
export default DeleteListing
