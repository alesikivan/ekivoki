import { useSelector } from 'react-redux'

import Introducation from '../particles/Introduction'
import Game from '../particles/Game'
import Winner from '../particles/Winner'
import Members from '../particles/Members'

function Home() {
  const { status } = useSelector(state => state.game) 

  switch (status) {
    case 'started':
      return <Game />

    case 'finished':
      return <Winner />
      
    case 'filling':
      return <Members />
  
    default:
      return <Introducation />
  }
}

export default Home