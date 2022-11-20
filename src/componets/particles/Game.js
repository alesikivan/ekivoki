import Cube from '../particles/Cube'

import '../../assets/styles/css/particles/game.css'
import Timer from './Timer'
import MembersNav from './MembersNav'
import GameArea from './GameArea'
import CardsArea from './CardsArea'
import Gameplay from './Gameplay'

function Game() {
  return <article className='game'>
    <section className='main'>
      <nav>
        <Cube />
        <Timer />
      </nav>

      <GameArea />
    </section>
    
    <section className='additional'>
      <MembersNav />
      <Gameplay />
      <CardsArea />
    </section>
  </article>
}

export default Game
