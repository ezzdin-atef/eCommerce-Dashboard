import { DELETE_NOTIFICATION } from '../actions/actionTypes';


const initialState = {
  notifications: [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5"
  ]
};


function reducer(state = initialState, action) {
  switch(action.type) {
    case DELETE_NOTIFICATION:
      return {
        notifications: state.notifications.filter((el) => el != action.element)
      };
    default:
      return state;
    }
  }

  export default reducer;