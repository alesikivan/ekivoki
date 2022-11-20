import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../../assets/styles/css/particles/gameplay.css'
import { failedAnswer, successAnswer } from '../../redux/actions/gameActions'

function Gameplay() {
  const [gameover, setGameover] = useState(false)
  const { members, positions, queuePosition } = useSelector(state => state.game)
  
  useEffect(() => {
    const over = members.some(member => (member.steps + 1) === positions.length)
    setGameover(over)
  }, [members, positions, queuePosition])
  
  return <article className='gameplay'>
    <button 
      onClick={gameover ? undefined : successAnswer}
      className='btn btn-success'>Выполненно</button>

    <button 
      onClick={gameover ? undefined : failedAnswer}
      className='btn btn-light error'>Провалено</button>
  </article>
}

export default Gameplay
