const PLAY_CARD = 'PLAY_CARD'
const CLEAR_CARD = 'CLEAR_CARD'

export const playCard = card => {
  return {
    type: PLAY_CARD,
    card
  }
}

export const clearCard = () => {
  return {
    type: CLEAR_CARD
  }
}

export default function(state = {}, action) {
  switch (action.type) {
    case PLAY_CARD:
      return action.card
    case CLEAR_CARD:
      return {}
    default:
      return state
  }
}
