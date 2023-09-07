import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getAllRestaurantsThunk } from "../../store/restaurant"
import OpenModalButton from '../OpenModalButton'
import RestaurantCard from '../HomePage/RestaurantCard'
import DeleteRestaurant from "../Restaurant/DeleteRestaurant"
import EditRestaurant from "../Restaurant/EditRestaurant"
import "./ManageRestaurant.css"

const ManageRestaurants = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const userRestaurants = user.restaurants || [];

    const createNewRestaurantButton = () => {
        history.push('/restaurant/new-restaurant')
    }

    const editRestaurant = (restaurantId) => {
        history.push(`/restaurant/edit${restaurantId}/`)
    }

    return (
        <div className="">
            <div className="">
                <h1>{userRestaurants.length <= 0 ? 'Add your first Restaurant!' : 'Manage your Restaurants'}</h1>
                <button className="" onClick={createNewRestaurantButton} >Create a New Restaurant</button>
            </div>
            <div className="">
                {userRestaurants.map(restaurant =>(
                        <div className="">
                            <RestaurantCard key={restaurant.id} manage={true} restaurant={restaurant} />

                            <div className="">
                            <button className="" onClick={() => editRestaurant(restaurant.id)}>Update Restaurant</button>

                            <OpenModalButton buttonText="Delete Restaurant" modalComponent={<DeleteRestaurant restaurantId={restaurant.id}/>}/>

                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}


export default ManageRestaurants
