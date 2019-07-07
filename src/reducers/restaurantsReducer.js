
import cuid from 'cuid';
export const cuidFn = cuid;

const initialState =  []


export default (state=initialState, action) => {
  switch (action.type){

    case "ADD_RESTAURANT":
        const restaurant = {id: cuidFn(), text: action.text.text }
          return state.concat(restaurant)

// remember to spread on state (...state) so don't delete existing state

    case "DELETE_RESTAURANT":
        const restaurants = state.filter(restaurant => (restaurant.id !== action.id))
          return restaurants

// not using this yet, will have to refactor for combinedReducer
    case "UPDATE_RESTAURANT":
    // console.log("up rest red:", action.restaurant)
      const updatedRestaurants = state.restaurants.map(restaurant => {
        if (restaurant.id === action.restaurant.id){
        return action.restaurant
      }
        return restaurant
      })
      return {...state, restaurants: updatedRestaurants}

    default:
      return state
  }
};
