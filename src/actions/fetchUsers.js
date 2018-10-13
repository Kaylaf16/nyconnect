
import { FETCH_USERS } from './types';


export const fetchUsers = () => async dispatch => {


const data = await fetch("")

dispatch({ type: FETCH_USERS, payload: "TEST" });
}
