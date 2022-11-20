import { testMembers, cards, positions, defaultState } from "../../data/game"

export const testMode = false

const initialState = {
  status: 'intro',
  members: testMode ? testMembers : [],
  cube: 1,
  queuePosition: 1,
  positions: positions,
  cards: cards,
  displayCard: true,
  card: null
}

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GAME_STATUS:
      return {
        ...state,
        status: action.payload
      }

    case CREATE_MEMBER:
      return {
        ...state,
        members: [...state.members, action.payload]
      }

    case REMOVE_MEMBER:
      return {
        ...state,
        members: state.members.filter(member => member.id !== action.payload)
      }

    case CHANGE_CUBE:
      return {
        ...state,
        cube: action.payload
      }

    case TOGGLE_CARD:
      return {
        ...state,
        card: action.payload
      }

    case UPDATE_MEMBERS:
      return {
        ...state,
        members: action.payload
      }
      
    case GAME_OVER:
      const clone = Object.assign(defaultState)
      return clone

    case CHANGE_QUEUE:
      const { queuePosition, members } = state

      // Меняем очередь участников
      const queue = (queuePosition + action.payload) > members.length ? 
        1 : queuePosition + action.payload

      return {
        ...state,
        queuePosition: queue,
        card: null
      }
    
      default:
        return state
  }
}

export const SET_GAME_STATUS = 'SET_GAME_STATUS'
export const CREATE_MEMBER = 'CREATE_MEMBER'
export const REMOVE_MEMBER = 'REMOVE_MEMBER'
export const UPDATE_MEMBERS = 'UPDATE_MEMBERS'
export const CHANGE_CUBE = 'CHANGE_CUBE'
export const TOGGLE_CARD = 'TOGGLE_CARD'
export const CHANGE_QUEUE = 'CHANGE_QUEUE'
export const GAME_OVER = 'GAME_OVER'