// Action
const GET_ALL_MENU_ITEMS = "menu/GET_ALL_MENU_ITEMS";
const GET_SINGLE_MENU_ITEM ="menu/GET_SINGLE_MENU_ITEM";
const EDIT_MENU_ITEM = "menu/EDIT_MENU_ITEM";
const CREATE_MENU_ITEM = "menu/CREATE_MENU_ITEM";
const DELETE_MENU_ITEM = "menu/DELETE_MENU_ITEM";

// Action Creator
const getAllMenuItems = (items) => ({
    type: GET_ALL_MENU_ITEMS,
    items
});

const getSingleMenuItem = (item) => ({
    type: GET_SINGLE_MENU_ITEM,
    item
})

const createMenuItem = (item) => ({
    type: CREATE_MENU_ITEM,
    item,

    
})
const editMenuItem = (item) => ({
    type: CREATE_MENU_ITEM,
    item,
})


const deleteMenuItem = (id) => ({
    type: DELETE_MENU_ITEM,
    id,
});

// Thunk
export const getAllMenuItemsThunk = () => async (dispatch) => {
    const response = await fetch('/api/menu_item/');
    if (response.ok) {
        const items = await response.json();
        dispatch(getAllMenuItems(items));
        console.log("items ----->", items)
        return response;
    } else {
        const errors = await response.json();
        return errors
      }
}

export const getSingleMenuItemThunk = (menuItemsId) => async (dispatch) => {
    const response = await fetch(`/api/menu_item/menu/${menuItemsId}`);
    console.log("Response ----->", response)
    if (response.ok) {
        const item = await response.json()
        dispatch(getSingleMenuItem(item))
        console.log("items ----->", item)

        return item;
      } else {
        const errors = await response.json();
        return errors
      }
}

export const createMenuItemThunk = ( restaurantId, formData) => async (dispatch) => {
    const response = await fetch(`/api/menu_item/new/${restaurantId}`, {
        method: 'POST',
        body: formData
    })
    console.log('Response:', response)

    console.log('restaurantId:', restaurantId);

    if(response.ok) {
        const item = await response.json()
        dispatch(createMenuItem(restaurantId, item))
        return response
    } else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
}


export const editMenuItemThunk = ( id, formData) => async (dispatch) => {
    const response = await fetch(`/api/menu_item/edit/${id}`, {
        method: 'PUT',
        body: formData
    });
    console.log("Menu Item Id: ---->", response);
    console.log("THUNK Menu Item Id: ---->", id);
    if(response.ok) {
        const item = await response.json()
        dispatch(editMenuItem(id, item))
        return response
    } else if (response.status < 500) {
        const data = await response.json();
		if (data.errors) {
            return data.errors;
		}
	} else {
        return ["An error occurred. Please try again."];
	}
}

export const deleteMenuItemThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/menu_item/delete/${id}`, {
        method: 'DELETE',
    });
    console.log("Menu Item Id: ---->", response);
    console.log("THUNK Menu Item Id: ---->", id);

    if(response.ok) {
        const data = await response.json()
        dispatch(deleteMenuItem(id))
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};



// Initial State
const initialState = {
    allMenuItems: {},
    singleMenuItems: {},
  };

// Reducer
const menuItemReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
    case GET_ALL_MENU_ITEMS:
        newState = { ...state, allMenuItems: {}, singleMenuItems: {} };
        console.log("action.items", action.items)
        console.log("newState", newState)
        action.items.forEach((item) => {newState.allMenuItems[item.id] = item;});
        return newState

    case GET_SINGLE_MENU_ITEM:
        newState = { ...state, allMenuItems: {}, singleMenuItems: {} };
        newState.singleMenuItems = action.item;
        return newState

    case CREATE_MENU_ITEM:
        newState = { ...state, allMenuItems: { ...state.allMenuItems}, singleMenuItems: { ...action.item} }
        return newState

    case EDIT_MENU_ITEM:
        newState = {...state}
        newState.allMenuItems[action.item.id] = action.item;
        return newState;

    case DELETE_MENU_ITEM:
        newState = { ...state };
        delete newState.allMenuItems[action.menuItemId];
        return newState;

    default:
        return state;
    }
}

export default menuItemReducer;
