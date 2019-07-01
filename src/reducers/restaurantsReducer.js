
import cuid from 'cuid';
export const cuidFn = cuid;

const initialState =  { restaurants: [ ], text: ""}

export default (state=initialState, action) => {
  switch (action.type){
    case "ADD_RESTAURANT":
console.log("add_rest:", action)

      const restaurant = { id: cuidFn(), text: action.text }
        // console.log("reducer add rest id:", restaurant.id)
        // console.log("add rest:", restaurant)
        return { ...state, restaurants: state.restaurants.concat(restaurant) }

// remember to spread on state (...state) so don't delete existing state

    case "DELETE_RESTAURANT":
      // console.log("reducer delete:", action.id)

        const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
          return {...state, restaurants}

    case "UPDATE_TEXT":
    // console.log("up text red:", action.text)
          return {...state, text: action.text}

    case "UPDATE_RESTAURANT":
    console.log("up rest red:", action.restaurant)
      const updatedRestaurants = state.restaurants.map(restaurant => {
        if (restaurant.id === action.restaurant.id){
        return action.restaurant
      }
        return restaurant
      })
      return {...state, restaurants: updatedRestaurants}

    case "CLEAR_TEXT":
        return {...state, text: ""}
  

    default:
      return state
  }
};
