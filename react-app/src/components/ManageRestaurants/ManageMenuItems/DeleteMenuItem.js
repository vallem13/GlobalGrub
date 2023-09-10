import { useModal } from '../../../context/Modal'
import { useDispatch, useSelector  } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import { deleteMenuItemThunk } from '../../../store/menu';

const DeleteMenuItem = ({  menuItemsId }) => {
    const menuItem = useSelector((state) => state.menu.singleMenuItems)

    const { closeModal } = useModal()
    const { restaurantId } = useParams();
    const dispatch = useDispatch()
    const history = useHistory()


    const deleteMenuItem = async (e) => {
        e.preventDefault();
        await dispatch(deleteMenuItemThunk(menuItemsId));
        await history.push(`/menu_item/${restaurantId}/`)
        await closeModal();
    };

    const dontDeleteMenuItem = () => {
        closeModal()
    }

    return (
        <div>
            <div>
                <h2>Confirm Delete Restaurant</h2>
                    <button onClick={deleteMenuItem}>Delete</button>
                    <button onClick={dontDeleteMenuItem}>Cancel</button>
                </div>
            </div>
        
    )
}

export default DeleteMenuItem
