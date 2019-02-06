// action types

const SELECT_ACTION = 'SELECT_ACTION'

// action creators

export const selectAction = action => {
  return {
    type: SELECT_ACTION,
    action
  }
}

// reducer

export default function(state = '', action) {
  switch (action.type) {
    case SELECT_ACTION:
      return action.action
    default:
      return state
  }
}
