import { useModal } from '../../../context/Modal'
import { useDispatch, useSelector  } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import { deleteMenuItemThunk } from '../../../store/menu';
import { getSingleRestaurantThunk } from '../../../store/restaurant';

const DeleteMenuItem = ({ item }) => {
console.log("ITEM ID -->",item)
const singleRestaurant = useSelector((state) => state.restaurant.singleRestaurant)

    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const history = useHistory()


    const deleteMenuItem = async (e) => {
        e.preventDefault();
        await dispatch(deleteMenuItemThunk(item));
        closeModal()
        await dispatch(getSingleRestaurantThunk(singleRestaurant.id))


    };

    const dontDeleteMenuItem = () => {
        closeModal()
    }

    return (
        <div className='delete-restaurant-container'>
                <h2>Confirm Delete Menu Item</h2>
                <div className='delete-restaurant-buttons'>
                    <button className="delete-restaurant-button" onClick={deleteMenuItem}>Delete</button>
                    <button className="cancel-restaurant-button" onClick={dontDeleteMenuItem}>Cancel</button>
                </div>
            </div>

    )
}

export default DeleteMenuItem
