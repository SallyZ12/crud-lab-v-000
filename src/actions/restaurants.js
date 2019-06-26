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
  console.log("update", restaurant)
  return {
    type: "UPDATE_RESTAURANT",
    restaurant
  }
}

export const updateText = text => {

  return {
    type: "UPDATE_TEXT",
    text
  }
}
