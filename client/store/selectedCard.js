// action types

const SELECT_CARD = 'SELECT_CARD'

// action creators

export const selectCard = card => {
  return {
    type: SELECT_CARD,
    card
  }
}

// reducer

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_CARD:
      return action.card
    default:
      return state
  }
}
