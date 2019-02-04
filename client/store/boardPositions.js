// action types

const SET_POSITIONS = 'SET_POSITIONS'

// action creators

export const setPositions = map => {
  return {
    type: SET_POSITIONS,
    map
  }
}

// reducer

export default function(state = [], action) {
  switch (action.type) {
    case SET_POSITIONS:
      return action.map
    default:
      return state
  }
}
