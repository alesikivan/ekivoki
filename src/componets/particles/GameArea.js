import { useSelector } from 'react-redux'
import '../../assets/styles/css/particles/game-area.css'

function GameArea() {
  const {
    positions,
    members
  } = useSelector(state => state.game)

  return (
    <section className='game-area'>
      {
        positions.map((position, index) => {
          return <div 
            key={index}
            style={{ backgroundImage: position.special ? position.preview : 'none' }}
            className={position.special ? (
              `game-block ${position.mode}`
            ) : 'game-block'}>

              {/* Картинка на заднем фона */}
              {
                position.special ? (
                  <img src={position.preview} alt='preview' className='preview' />
                ) : ''
              }
              
              {
                index === 0 ? (
                  <span className='block-number'>Start</span>
                ) : index === positions.length - 1 ? (
                  <span className='block-number'>Finish</span>
                ) : (
                  <span className='block-number'>{ index }</span>
                )
              }
              
              {
                members.map((member, i) => {
                  if (index === member.steps) {
                    return <div key={i} className='player'>
                      { i + 1 }
                    </div>
                  } else return ''
                })
              }
          </div>
        })
      }
    </section>
  )
}

export default GameArea