import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { deleteUser } from "../../../store/session";

const DeleteUserAccount = ({userId}) => {
    const dispatch = useDispatch()
    const history = useHistory();
    const { closeModal } = useModal();


    const submitDelete = async (e) => {
        e.preventDefault()

        await dispatch(deleteUser(userId))
        await closeModal();
        history.push('/')
    };

    const sumbitCancel = () => {
        closeModal()
    };

    return (
        <div>
            <h1>Confirm Delete</h1>
            <p>So many good places you haven't tried, you sure you want to delete your account</p>
            <button type="sumbit" onClick={submitDelete}>
                Delete my account
            </button>
            <button type="submit" onClick={sumbitCancel}>Keep my account</button>
        </div>
    )

}

export default DeleteUserAccount