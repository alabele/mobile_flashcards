import { CREATE_DECK, RECEIVE_ENTRIES } from '../actions'

function entries (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES :
      return {
        ...state,
        ...action.entries,
      }
    case CREATE_DECK :
      return {
        ...state,
        ...action.entry
      }
    default :
      return state
  }
}

export default entries