
import { FETCH_USERS } from './types';


export const fetchUsers = (search,radius) => async dispatch => {

  navigator.geolocation.getCurrentPosition(function(position) {
    // Get the coordinates of the current position.
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    var fetchURL = (search?`/map/filterUsersBySkill?lat=${lat}&long=${long}&skill=${search}`:`/map/filterUsers?lat=${lat}&long=${long}`)
    if(radius){
      fetchURL=fetchURL+`&radius=${radius}`
    }

    const data = fetch(fetchURL).then(res => res.json())
    .then(users => {     console.log(users)
      dispatch({ type: FETCH_USERS, payload: users })});

  })



}
