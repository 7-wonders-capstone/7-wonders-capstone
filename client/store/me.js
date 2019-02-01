// action types

const GOT_ME = 'GOT_ME'
const CLEAR_ME = 'CLEAR_ME'

// action creators

export const gotMe = me => {
  return {
    type: GOT_ME,
    me
  }
}

export const clearMe = () => {
  return {
    type: CLEAR_ME
  }
}

// reducer

export default function(state = {}, action) {
  switch (action.type) {
    case GOT_ME:
      return action.me
    case CLEAR_ME:
      return {}
    default:
      return state
  }
}
