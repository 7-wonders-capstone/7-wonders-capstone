// action types

const GOT_ME = 'GOT_ME'

// action creators

export const gotMe = me => {
  return {
    type: GOT_ME,
    me
  }
}

// reducer

export default function(state = {}, action) {
  switch (action.type) {
    case GOT_ME:
      return action.me
    default:
      return state
  }
}
