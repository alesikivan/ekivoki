import { useSelector } from 'react-redux'
import '../../assets/styles/css/particles/winner.css'

import { finishGame } from '../../redux/actions/gameActions'

function Winner() {
  const { members, positions } = useSelector(state => state.game)

  // Получить победителя 
  const winner = members.find(member => (member.steps + 1) === positions.length)

  return <article className='finished'>
    <span>
      Поздравляем <b>"{ winner.name }"</b> c победой!
    </span>

    <button 
      onClick={finishGame}
      className='btn btn-primary'>Начать заново</button>
  </article>
}

export default Winner
