import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = { reviews: [] }

export default (state=initialState, action)=> {
  switch (action.type){

    case "ADD_REVIEW":
    // console.log("rev add text:", action.review.text)
    // console.log("rev add restId:", action.review.restaurantId)
    const review = { id: cuidFn(), text: action.review.text, restaurantId: action.review.restaurantId }
      return { ...state, reviews: state.reviews.concat(review)}

    case "DELETE_REVIEW":
    const reviews = state.reviews.filter(review => review.id !== action.id)
      return {...state, reviews}

    default:
      return state
  }
};
