export const addRestaurant = text => {
  // console.log("addRest:", text)
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
  // console.log("update Restaurant", restaurant)
  return {
    type: "UPDATE_RESTAURANT",
    restaurant
  }
}

export const updateText = text => {
  // console.log("update text:", text)
  return {
    type: "UPDATE_TEXT",
    text
  }
}

export const clearText = text => {
  console.log("clear:", text)
  return {
    type: "CLEAR_TEXT",
    text
  }
}
