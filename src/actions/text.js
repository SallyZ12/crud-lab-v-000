export const updateText = text => {
  console.log("update text:", text)
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
