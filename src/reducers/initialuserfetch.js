export default function(state = null, action) {
  var users =[]
  switch (action.type) {
    case "FETCH_USERS":
      users=action.payload
      //users.forEach(x=>{
        //users.push(new window.google.maps.LatLng(x.latitude, x.longitude))
      //})
      //return users
      return {userLocations:action.payload,userData:action.payload}
  }

  return state;
}
