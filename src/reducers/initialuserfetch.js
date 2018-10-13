export default function(state = null, action) {
  var usersList =[]
  var currentobject = {}
  switch (action.type) {
    case "FETCH_USERS":
      usersList =action.payload
      console.log(usersList)
      return action.payload
  }

  return state;
}
