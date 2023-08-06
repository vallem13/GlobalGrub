import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { deleteUser } from "../../../store/session";
import { logout } from "../../../store/session";
import * as sessionActions from '../../../store/session';
import '../ManageProfile.css'

const DeleteUserAccount = ({userId}) => {
    const dispatch = useDispatch()
    const history = useHistory();
    const { closeModal } = useModal();


    const submitDelete = async (e) => {
        e.preventDefault()

        await dispatch(deleteUser(userId))
        await dispatch(sessionActions.logout());
        history.push('/')
        await closeModal();
    };

    const sumbitCancel = () => {
        closeModal()
    };

    return (
        <div className='confirm-delete-container'>
            <h1>Confirm Delete</h1>
            <p>So many good places you haven't tried, you sure you want to delete your account</p>
            <div>

            <button type="sumbit" className='delete-account' onClick={submitDelete}>
                Delete my account
            </button>
            <button type="submit" className='cancel-delete-account' onClick={sumbitCancel}>Keep my account</button>
            </div>
        </div>
    )

}

export default DeleteUserAccount
