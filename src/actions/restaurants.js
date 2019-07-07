export const addRestaurant = text => {

  return {
    type: "ADD_RESTAURANT",
    text
  }
}

export const deleteRestaurant = id => {
  return {
    type: "DELETE_RESTAURANT",
    id
  }
}

export const updateRestaurant = restaurant => {
  // console.log("act update Restaurant", restaurant)
  return {
    type: "UPDATE_RESTAURANT",
   restaurant
  }
}
