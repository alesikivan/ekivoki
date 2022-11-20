
import { v4 as uuid } from 'uuid'
import { positions } from '../../data/game'
import { random } from '../../utils/math'
import { CHANGE_CUBE, CHANGE_QUEUE, CREATE_MEMBER, GAME_OVER, REMOVE_MEMBER, SET_GAME_STATUS, TOGGLE_CARD, UPDATE_MEMBERS } from '../reducers/gameReducer'
import store from '../store'

export const startGame = () => {
  const status = 'started'
  
  const notification = {
    type: SET_GAME_STATUS,
    payload: status
  }

  store.dispatch(notification)
}

export const fillMembers = () => {
  const status = 'filling'

  store.dispatch({
    type: SET_GAME_STATUS,
    payload: status
  })
}

export const finishGame = () => {
  const status = 'intro'
  
  store.dispatch({
    type: GAME_OVER,
    payload: status
  })
}

export const showWinnder = () => {
  const status = 'finished'
  
  store.dispatch({
    type: SET_GAME_STATUS,
    payload: status
  })
}

export const createMember = (name) => {
  const id = uuid()
  
  const member = {
    type: CREATE_MEMBER,
    payload: { id, name, steps: 0 }
  }

  store.dispatch(member)
}

export const removeMember = (id) => {
  store.dispatch({
    type: REMOVE_MEMBER,
    payload: id
  })
}

export const changeCube = num => {
  store.dispatch({
    type: CHANGE_CUBE,
    payload: num
  })
}

export const showCard = image => {
  store.dispatch({
    type: TOGGLE_CARD,
    payload: image
  })
}

export const hideCard = () => {
  store.dispatch({
    type: TOGGLE_CARD,
    payload: null
  })
}

export const showUsuallCard = () => {
  const { game: { cards } } = store.getState()

  // Получаем обычную случайную карточку
  const num = random(1, 8)
  const image = cards.usuall.find(card => card.number === num)

  showCard(image.img)
}

export const showEkivokiCard = () => {
  const { game: { cards } } = store.getState()

  // Получаем случайную карточку "Экивоки"
  const num = random(1, 6)
  const image = cards.ekivoki.find(card => card.number === num)

  showCard(image.img)
}

export const nextQueue = () => {
  store.dispatch({
    type: CHANGE_QUEUE,
    payload: 1
  })
}

export const changeMemberSteps = (i, steps) => {
  const { game: {
    members,
    positions
  } } = store.getState()

  const clone = Object.assign(members)

  let step = clone[i].steps + steps
  
  step = step < 0 ? 0 : step

  step = step >= positions.length ? positions.length - 1 : step

  clone[i].steps = step

  store.dispatch({
    type: UPDATE_MEMBERS,
    payload: clone
  })
}

export const updateMembers = members => {
  store.dispatch({
    type: UPDATE_MEMBERS,
    payload: members
  })
}

export const successAnswer = () => {
  const { game: {
    queuePosition,
    cube,
    members
  } } = store.getState()

  const cloneMembers = Object.assign(members)

  // Участник, который сейчас ходит
  const team = members[queuePosition - 1]
  
  // Текущая игровая клетка
  const position = positions[team.steps]

  // Обычная позиция
  if (position && (position.special === false) && (cube < 6)) {
    // Добавляем шаги
    const steps = cloneMembers[queuePosition - 1].steps
    
    let skip = steps + cube
    skip = skip >= positions.length ? positions.length - 1 : skip

    cloneMembers[queuePosition - 1].steps = skip

    updateMembers(cloneMembers)
  }

  const validateSum = (steps) => {
    let skip = steps
            
    skip = skip < 0 ? 0 : skip
    skip = skip >= positions.length ? positions.length - 1 : skip

    return skip
  }

  // Уникальная позиция
  if (position && position.special && cube < 6) {
    const type = position.mode

    switch (type) {
      // Функционал вредины
      case 'harmful':
        const newMembers = cloneMembers.map(member => {
          if (member.id === team.id) {
            // Добавляем текущему значения кубика
            member.steps = validateSum(member.steps + cube)
          } else {
            // Отнимаем у всех единицу
            member.steps = validateSum(member.steps - 1)
          }

          return member
        })

        updateMembers(newMembers)
        break
            
      // Карма
      case 'karma':
        const _newMembers = cloneMembers.map(member => {
          if (member.id === team.id) {
            // Добавляем текущему значения кубика
            member.steps = validateSum(member.steps + cube)
          }

          return member
        })

        updateMembers(_newMembers)
        break
      
      // Энтропия
      default:
        const _members = cloneMembers.map(member => {
          if (member.id === team.id) {
            // Добавляем текущему значения кубика
            member.steps = validateSum(member.steps + cube)
          }

          return member
        })

        updateMembers(_members)
        break
    }
  }

  nextQueue()
}

export const failedAnswer = () => {
  const { game } = store.getState()

  const { game: {
    queuePosition,
    cube,
    members
  } } = store.getState()

  const cloneMembers = Object.assign(members)

  // Участник, который сейчас ходит
  const team = members[queuePosition - 1]

  // Текущая игровая клетка
  const position = positions[team.steps]

  const validateSum = (steps) => {
    let skip = steps
            
    skip = skip < 0 ? 0 : skip
    skip = skip >= positions.length ? positions.length - 1 : skip

    return skip
  }

    // Обычная позиция
  if (position && (position.special === false) && (cube < 6)) {
    nextQueue()
  }

  // Уникальная позиция
  if (position && position.special && cube < 6) {
    const type = position.mode

    switch (type) {
      // Функционал вредины
      
      case 'auction':
        nextQueue()
        break

      case 'harmful':
        nextQueue()
        break
            
      // Карма
      case 'karma':
        const _newMembers = cloneMembers.map(member => {
          if (member.id === team.id) {
            // Добавляем текущему значения кубика
            member.steps = validateSum(member.steps - cube)
          }

          return member
        })

        updateMembers(_newMembers)
        nextQueue()
        break
      
      // Энтропия
      default:
        break
    }
  }
  

  console.log(game)
}
