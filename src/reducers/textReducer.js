const initialState = ""

export default (state=initialState, action) => {
  switch (action.type){

    case "UPDATE_TEXT":
console.log("up text reducer:", state)
  const text = action.text
      return state.concat(text)

    case "CLEAR_TEXT":
        return {...state, text: ""}

      default:
        return state
}}
