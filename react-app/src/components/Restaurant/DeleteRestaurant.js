import { useModal } from '../../context/Modal'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { deleteRestaurantThunk } from '../../store/restaurant';
import './Restaurant.css'

const DeleteRestaurant = ({ restaurantId }) => {

    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const history = useHistory()


    const deleteRestaurant = async (e) => {
        e.preventDefault();
        await dispatch(deleteRestaurantThunk(restaurantId));
        await history.push('/my_restaurants')
        await closeModal();
    };

    const dontDeleteRestaurant = () => {
        closeModal()
    }

    return (
        <div>
            <div>
                <h2>Confirm Delete Restaurant</h2>
                <div className='delete-pin-buttons'>
                    <button onClick={deleteRestaurant}>Delete</button>
                    <button onClick={dontDeleteRestaurant}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteRestaurant
